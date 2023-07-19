import { DataSource } from 'typeorm'
import { Player } from './entity/Player'

export const AppDataSource = new DataSource({
	type: 'sqlite',
	database: 'playerGeneralInfo.sqlite',
	synchronize: true,
	logging: true,
	entities: [Player],
})
