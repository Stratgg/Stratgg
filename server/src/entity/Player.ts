import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class PlayerGeneralInfo extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	declare id: string

	@Column()
	declare first_name: string

	@Column()
	declare last_name: string

	@Column()
	declare rating: string

	@Column()
	declare location: string

	@Column()
	declare game: string
}
