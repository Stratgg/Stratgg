import fastify from 'fastify'
import cors from '@fastify/cors'
import limit from '@fastify/rate-limit'
import dotenv from 'dotenv'
import { playerList } from './routes/PlayerList'
import { databasePlugin } from './data-source'
import { players } from './routes/Players'

dotenv.config()

const server = fastify({
	ignoreDuplicateSlashes: true,
	logger: {
		timestamp: false,
		transport: {
			target: 'pino-pretty',
		},
	},
	ignoreTrailingSlash: true,
})

const start = async () => {
	await databasePlugin(server)
	await server.register(cors, {
		// TODO add origin for production
		origin: 'http://localhost:5173', //for development
	})
	// Rate limiter
	await server.register(limit, {
		max: 1000, //limits each IP to 1000 requests per windowMs
		timeWindow: '1 minute',
	})

	await server.register(playerList, {
		prefix: '/player_list',
	})

	await server.register(players, {
		prefix: '/players',
	})

	try {
		const address = await server.listen({ port: 4042, host: '' }, (err, address) => {
			// console.log(`Server listening on ${address}`)
		})
	} catch (e) {
		server.log.error(e)
	}
}

start()
