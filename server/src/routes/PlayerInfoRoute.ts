import { PlayerInfo } from '../entity/PlayerInfo'
import type { FastifyInstance } from 'fastify'

export async function playerInfoRoute(instance: FastifyInstance) {
	instance.get('/', async (_, reply) => {
		const result = await PlayerInfo.find({})
		return result
	})
}
