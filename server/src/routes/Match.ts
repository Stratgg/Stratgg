import { MatchEntity } from '../entity/MatchEntity'
import type { FastifyInstance } from 'fastify'

export async function matchInfo(instance: FastifyInstance) {
	instance.get('/', async (_, reply) => {
		const result = await MatchEntity.find({})
		return result
	})
}
