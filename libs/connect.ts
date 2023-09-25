import { PrismaClient } from '@prisma/client'

let prisma: any
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}
export default prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma