import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const buildPrisma = async () => {
  await prisma.$connect()
  return prisma
}