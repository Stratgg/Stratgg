import fastify from 'fastify'
import cors from '@fastify/cors'
import limit from '@fastify/rate-limit'
import dotenv from 'dotenv'

dotenv.config()

const server = fastify({
	logger: false, // set to true for production
})

const start = async () => {
	await server.register(cors, {
		// TODO add origin for production
		// origin: 'http://localhost:5173', //for development
	})
	// Rate limiter
	await server.register(limit, {
		max: 1000, //limits each IP to 50 requests per windowMs
		timeWindow: '1 minute',
	})
	1
	// await server.register(countriesRoute, {
	// 	prefix: '',
	// })

	try {
		const address = await server.listen({ port: 4042, host: '' }, (err, address) => {
			console.log(`Server listening on ${address}`)
		})
	} catch (e) {
		server.log.error(e)
	}
}

start()
