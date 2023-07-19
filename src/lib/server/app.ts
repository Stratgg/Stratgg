import fastify from 'fastify';
import cors from '@fastify/cors';

const app = fastify({
	logger: true
});

const start = async () => {
	try {
		await app.register(cors);
		await app.listen(3000, '');
	} catch (e) {
		app.log.error(e);
		process.exit(1);
	}
};

start();
