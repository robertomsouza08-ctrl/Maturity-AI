
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main(){ console.log('Sem seed necessário para MVP'); }
main().finally(async()=> prisma.$disconnect());
