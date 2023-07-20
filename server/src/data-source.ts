import { DataSource } from 'typeorm'
import { PlayerInfo } from './entity/PlayerInfo'

export const AppDataSource = new DataSource({
	type: 'sqlite',
	database: 'playerGeneralInfo.sqlite',
	synchronize: true,
	logging: true,
	entities: [PlayerInfo],
})
