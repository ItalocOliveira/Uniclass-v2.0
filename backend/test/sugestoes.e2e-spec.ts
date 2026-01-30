import request from 'supertest';
import * as bcrypt from 'bcrypt'
import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { AppModule } from "src/app.module";
import { PrismaService } from "src/infra/database/prisma/prisma.service";
import { randomUUID } from 'crypto';

describe('SugestoesController-e2e', () => {
    let app: INestApplication;
    let prisma: PrismaService;
    let accessToken: string;
    let instituicaoId: string;
    let senhaHashPadrao: string;
    
    const sugestaoData = {    
            titulo: 'Consertar PC',
            tipo: 'CONSERTO',
            status: 'PENDENTE',
            descricao: 'Consertar o pc da sala A1',
            mapaXY: {"x": 125.4, "y": -45.2}
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

    describe('POST / sugestoes (SUCESSO)', () => {
        it('(POST) /auth/login | Sucesso: Deve logar e guardar o token (201)', async () => {
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

        it('(POST) /sugestoes | Sucesso: Deve criar uma sugestao usando token (201)', async () => {
            return request(app.getHttpServer())
            .post('/sugestoes')
            .set('Authorization', `Bearer ${accessToken}`)
            .send({...sugestaoData})
            .expect(201)
            .expect((res) => {
                expect(res.body).toHaveProperty('sugestaoId');
                expect(res.body.titulo).toBe('Consertar PC');
            });
        });

        it('(POST) /sugestoes | Sucesso: Deve permitir criar sugestao com nome duplicado (201)', async () => {
            // Primeira criação
            await request(app.getHttpServer())
            .post('/sugestoes')
            .set('Authorization', `Bearer ${accessToken}`)
            .send({...sugestaoData});

            // Segunda criação (duplicada)
            return request(app.getHttpServer())
            .post('/sugestoes')
            .set('Authorization', `Bearer ${accessToken}`)
            .send(sugestaoData)
            .expect(201);
        });

        it('(GET) /sugestoes | Sucesso: Deve permitir ADMIN listar todas as sugestoes da instituicao (200)', async () => {
            const response = await  request(app.getHttpServer())
            .get('/sugestoes')
            .set('Authorization', `Bearer ${accessToken}`)
            .expect(200);

            expect(Array.isArray(response.body)).toBe(true)
            expect(response.body.length).toBeGreaterThan(0)
        });

        it('(POST) /sugestoes | Sucesso: Deve salvar coordenadas JSON corretamente', async () => {
            const coords = { x: 123.45, y: 678.90 };
            const res = await request(app.getHttpServer())
            .post('/sugestoes')
            .set('Authorization', `Bearer ${accessToken}`)
            .send({
                ...sugestaoData,
                mapaXY: coords
            })
            .expect(201);

            expect(res.body.mapaXY).toEqual(coords);
        });
            
    });

    describe('POST / sugestoes (ERRO)', () => {
        it('(POST) /sugestoes | Erro: Falta de campos obrigatórios (400)', async () => {
            return request(app.getHttpServer())
            .post('/sugestoes')
            .set('Authorization', `Bearer ${accessToken}`)
            .send({
                descricao: 'Sem título e sem tipo'
            })
            .expect(400);
        });

        it('(POST) /sugestoes | Erro: Tipo de sugestão inválido (400)', async () => {
            return request(app.getHttpServer())
            .post('/sugestoes')
            .set('Authorization', `Bearer ${accessToken}`)
            .send({
                ...sugestaoData,
                tipo: 'TIPO_INEXISTENTE'
            })
            .expect(400);
        });

        it('(POST) /sugestoes | Erro: Acesso sem Token (401)', async () => {
            return request(app.getHttpServer())
                .post('/sugestoes')
                .send(sugestaoData)
                .expect(401);
        });

        it('(GET) /sugestoes | Erro: Aluno não deve ter permisão de listar todas as sugestões da instituição (403)', async () => {
            const emailAluno = `aluno-${instituicaoId}@teste.com`;
            const senhaHashAluno = await bcrypt.hash('123456', 10);
            await prisma.usuario.create({
                data: {
                    nome: 'Aluno Teste',
                    email: emailAluno,
                    senha_hash: senhaHashAluno,
                    tipo_acesso: 'ALUNO',
                    instituicao_id: instituicaoId
                }
            });  
            
            // Logar como aluno para obter o token
            const loginRes = await request(app.getHttpServer())
            .post('/auth/login')
            .send({
                email: emailAluno,
                senha: '123456',
                instituicaoId: instituicaoId
            });    

            const alunoAcessToken = loginRes.body.access_token;
            
            return request(app.getHttpServer())
            .get('/sugestoes')
            .set('Authorization', `Bearer ${alunoAcessToken}`)
            .expect(403);
        });
    });

    describe('Integridade de Dados', () => {
        it('Deve vincular a sugestão ao usuário logado corretamente', async () => {
            const response = await request(app.getHttpServer())
                .post('/sugestoes')
                .set('Authorization', `Bearer ${accessToken}`)
                .send({
                    ...sugestaoData,
                    titulo: 'Teste de Vínculo'
                })
                .expect(201);

            const responseBody = response.body;

            const sugestaoCriada = await prisma.sugestao.findUnique({
                where: { 
                    sugestao_id_instituicao_id: {
                        sugestao_id: responseBody.sugestaoId,
                        instituicao_id: instituicaoId
                    }
                }
            });

            expect(sugestaoCriada).toBeDefined();
            expect(sugestaoCriada?.usuario_id).toBeDefined(); 
        });
    });

    afterAll(async () => {
        await app.close();
    });
});