import { PrismaClient } from "@prisma/client";

export class PrismaService extends PrismaClient {
	constructor() {
		super({
			log: [{ emit: 'event', level: 'query' }],
		})
		
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		this.$on('query', async e => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			console.log(`${e.query} ${e.params}`)
		})
	}
}

const prismaClientSingleton = () => {
	return new PrismaService()
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
	prisma: PrismaClientSingleton | undefined
}

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.APP_PROFILE !== 'production') {
	globalForPrisma.prisma = prisma
}
