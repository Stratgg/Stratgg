import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm'
import 'reflect-metadata'

@Entity()
export class PlayerEntity extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	declare id: string

	@Column('text')
	declare first_name: string

	@Column('text')
	declare last_name: string

	@Column('text')
	declare rating: string

	@Column('text')
	declare location: string

	@Column('text')
	declare game: string
}
