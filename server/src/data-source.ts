import { DataSource } from 'typeorm'
import { PlayerGeneralInfo } from './entity/GeneralPlayerInfoEntity'

export const AppDataSource = new DataSource({
	type: 'sqlite',
	database: 'playerGeneralInfo.sqlite',
	synchronize: true,
	logging: true,
	entities: [PlayerGeneralInfo],
})
