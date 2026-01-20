import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, TipoAcesso } from "@prisma/client";
import * as bcrypt from 'bcrypt';

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});
const prisma = new PrismaClient({ adapter });

async function main() {
    const ID_INSTITUICAO = 'd290f1ee-6c54-4b01-90e6-d701748f0851';

    const instituicao = await prisma.instituicao.upsert({
        where: {instituicao_id: ID_INSTITUICAO},
        update: {},
        create: {
            instituicao_id: ID_INSTITUICAO,
            nome: 'Universidade Uniclass (DEV)',
            logo_url: 'https://via.placeholder.com/150',
            mapa_url: 'https://via.placeholder.com/500',
        }
    });
    console.log(`🏫 Instituição garantida: ${instituicao.nome}`);

    const emailAdmin = 'admin@uniclass.com';
    const senhaPlana = '123456';
    const senhaHash = await bcrypt.hash(senhaPlana, 10);

    const admin = await prisma.usuario.upsert({
        where: { email_instituicao_id: {email: emailAdmin, instituicao_id: ID_INSTITUICAO}},
        update: {},
        create: {
            instituicao_id: ID_INSTITUICAO,
            nome: 'Admin Supremo',
            email: emailAdmin,
            senha_hash: senhaHash,
            tipo_acesso: TipoAcesso.ADMIN,
            curso: 'ADS',
        },
    });
    console.log(`👤 Admin garantido: ${admin.email} | Senha: ${senhaPlana}`);


}

main()
.then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})