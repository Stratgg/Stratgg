import { DataSource } from 'typeorm'
import { PlayerInfo } from './entity/PlayerInfo'
import type { FastifyInstance } from 'fastify'
import fastify from 'fastify'

export async function databasePlugin(instance: FastifyInstance) {
	const source = new DataSource({
		type: 'sqlite',
		database: './db/PlayerInfo.sqlite',
		entities: [PlayerInfo],
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
