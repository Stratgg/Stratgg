import { DataSource } from 'typeorm'
import { PlayerEntity } from './entity/PlayerEntity'
import { MatchEntity } from './entity/MatchEntity'
import type { FastifyInstance } from 'fastify'
import fastify from 'fastify'

export async function databasePlugin(instance: FastifyInstance) {
	const source = new DataSource({
		type: 'sqlite',
		database: './bin/db/PlayerInfo.sqlite',
		entities: [PlayerEntity, MatchEntity],
	})

	try {
		instance.log.info('Initializing database')
		await source.initialize()
		instance.log.info('Database initialized')
	} catch (error) {
		instance.log.error(error, 'Failed to initialize database')
		throw error
	}
}
