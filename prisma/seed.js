const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const admin = await prisma.user.upsert({
        where: { email: 'admin@salao.com' },
        update: {},
        create: {
            email: 'admin@salao.com',
            name: 'Admin',
            role: 'ADMIN',
        },
    });

    console.log('Usuário admin criado com sucesso:', admin);
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
