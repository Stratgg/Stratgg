import { PlayerEntity } from '../entity/PlayerEntity'
import type { FastifyInstance } from 'fastify'

export async function players(instance: FastifyInstance) {
	instance.get('/:id', async (_, reply) => {
		const result = await PlayerEntity.find({ where: [{ id: _.params.id }] })
		// console.log(_.params)

		return result
	})
}
