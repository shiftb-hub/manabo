import { PrismaClient } from '@prisma/client'

import { seedLearningStyles } from './seeds/learning_styles'

const prisma = new PrismaClient()

async function main() {
  await seedLearningStyles()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
