import request from 'supertest';
import * as bcrypt from 'bcrypt';
import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { AppModule } from "src/app.module";
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { randomUUID } from 'crypto';

describe('LocaisController-e2e', () => {
    let app: INestApplication;
    let prisma: PrismaService;
    let accessToken: string;
    let instituicaoId: string;
    let senhaHashPadrao: string;

    const localData = {
        nome: 'A18',
        tipo: 'BLOCO',
        bloco: 'A',
        acessivel: true,
        mapaXY: { x: 1, y: 1 }
    }

    beforeAll(async () => {

        instituicaoId = randomUUID();
        senhaHashPadrao = await bcrypt.hash('123456', 10);

        const moduleRef = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleRef.createNestApplication();
        app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
        await app.init();

        // Limpar o banco
        prisma = app.get<PrismaService>(PrismaService);
        
        await prisma.sugestao.deleteMany({ where: { instituicao_id: instituicaoId } });
        await prisma.evento.deleteMany({ where: { instituicao_id: instituicaoId } });
        await prisma.aviso.deleteMany({ where: { instituicao_id: instituicaoId } });
        await prisma.local.deleteMany({ where: { instituicao_id: instituicaoId } });
        await prisma.usuario.deleteMany({ where: { instituicao_id: instituicaoId } });
        await prisma.instituicao.deleteMany({ where: { instituicao_id: instituicaoId } });

        await prisma.instituicao.create({
            data: {
                instituicao_id: instituicaoId,
                nome: 'Instituição de Teste' + instituicaoId,
                logo_url: 'http://image.com',
            }
        });

        await prisma.usuario.create({
            data: {
                nome: 'Admin Supremo',
                email: `admin-${instituicaoId}@uniclass.com`,
                senha_hash: senhaHashPadrao,
                tipo_acesso: 'ADMIN',
                instituicao_id: instituicaoId
            }
        });
    });

    describe('POST / locais (SUCESSO)', () => {
        it(`(POST) /auth/login | Sucesso: Deve logar e guardar o token (201)`, async () => {
            const response = await request(app.getHttpServer())
                .post('/auth/login')
                .send({
                    email: `admin-${instituicaoId}@uniclass.com`,
                    senha: '123456',
                    instituicaoId: instituicaoId,
                })
                .expect(201);

            accessToken = response.body.access_token;
            expect(accessToken).toBeDefined();
        });

        it('(POST) /locais | Sucesso: Deve criar um local usando token (201)', async () => {
            return request(app.getHttpServer())
            .post('/locais')
            .set('Authorization', `Bearer ${accessToken}`)
            .send({...localData})
            .expect(201)
            .expect((res) => {
                expect(res.body).toHaveProperty('localId');
                expect(res.body.nome).toBe('A18');
            });
        });

        it('(PATCH) /locais/:id | Sucesso: Deve atualizar o nome de um local (200)', async () => {
            const createResponse = await request(app.getHttpServer())
                .post('/locais')
                .set('Authorization', `Bearer ${accessToken}`)
                .send(localData);
            
            const localId = createResponse.body.localId;

            const novoNome = 'Auditório Renovado';
            const response = await request(app.getHttpServer())
                .patch(`/locais/${localId}`)
                .set('Authorization', `Bearer ${accessToken}`)
                .send({ nome: novoNome })
                .expect(200);

            expect(response.body.nome).toBe(novoNome);
            
            const noBanco = await prisma.local.findUnique({
                where: { local_id_instituicao_id: { local_id: localId, instituicao_id: instituicaoId } }
            });
            expect(noBanco?.nome).toBe(novoNome);
        });    
    })

    describe('POST / locais (ERRO)',() => {
        it('(POST) /locais | Erro: Não deve permitir criar local com nome duplicado (409)', async () => {

            // Primeira criação
            await request(app.getHttpServer())
            .post('/locais')
            .set('Authorization', `Bearer ${accessToken}`)
            .send({...localData});

            // Segunda criação (duplicada)
            return request(app.getHttpServer())
            .post('/locais')
            .set('Authorization', `Bearer ${accessToken}`)
            .send(localData)
            .expect(409);
        })

        it('(POST) /locais | Erro: Usuário ALUNO não deve ter permissão de criar Locais (403)', async () => {
            const senhaHashAluno = await bcrypt.hash('123456', 10);
            await prisma.usuario.create({
                data: {
                    nome: 'Aluno Teste',
                    email: `aluno-${instituicaoId}@teste.com`,
                    senha_hash: senhaHashAluno,
                    tipo_acesso: 'ALUNO',
                    instituicao_id: instituicaoId
                }
            });

            const loginRes = await request(app.getHttpServer())
                .post('/auth/login')
                .send({ email: `aluno-${instituicaoId}@teste.com`, senha: '123456', instituicaoId });
            
            const alunoToken = loginRes.body.access_token;

            return request(app.getHttpServer())
                .post('/locais')
                .set('Authorization', `Bearer ${alunoToken}`)
                .send({
                    nome: 'Local Proibido',
                    tipo: 'BLOCO',
                    acessivel: true
                })
                .expect(403); 
        });

        it('(POST) /locais | Erro: Body inválido (400)', () => {
            return request(app.getHttpServer())
            .post('/locais')
            .set('Authorization', `Bearer ${accessToken}`)
            .send({
                // nome faltando
                tipo: 'SALA',
                // tipo errado
                mapaXY: "não é um objeto" 
            })
            .expect(400); 
        });

        it('(PATCH) /locais/:id | Erro: Não deve atualizar local de outra instituição (404)', async () => {
            const idAleatorio = randomUUID();
            
            return request(app.getHttpServer())
                .patch(`/locais/${idAleatorio}`)
                .set('Authorization', `Bearer ${accessToken}`)
                .send({ nome: 'Tentativa Invasiva' })
                .expect(404);
        });
    });
    
    afterAll(async () => {
        await app.close();
    });
});