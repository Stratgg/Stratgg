import { MatchEntity } from '../entity/MatchEntity'
import type { FastifyInstance } from 'fastify'

export async function match(instance: FastifyInstance) {
	instance.get('/', async (_, reply) => {
		const result = await MatchEntity.find({})
		return result
	})
}
