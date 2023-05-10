import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const allContacts = await prisma.contact.findMany();
  console.log(allContacts);
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
