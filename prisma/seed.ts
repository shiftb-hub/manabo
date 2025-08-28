import { PrismaClient } from '@prisma/client'

import { seedLearningStyles } from './seeds/learning_styles'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding LearningStyles...')
  await seedLearningStyles()
  console.log('LearningStyles seeded successfully.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
