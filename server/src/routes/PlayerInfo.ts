import { PlayerEntity } from '../entity/PlayerEntity'
import type { FastifyInstance } from 'fastify'

export async function playerInfo(instance: FastifyInstance) {
	instance.get('/', async (_, reply) => {
		const result = await PlayerEntity.find({})
		return result
	})
}
