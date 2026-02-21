const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const admin = await prisma.user.update({
        where: { email: 'admin@salao.com' },
        data: {
            password: '123456',
        },
    });

    console.log('Senha do usuário admin atualizada com sucesso para 123456:', admin.email);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
