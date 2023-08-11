import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm'
import 'reflect-metadata'

@Entity()
export class PlayerEntity extends BaseEntity {
	@PrimaryGeneratedColumn()
	declare id: number

	@Column('text')
	declare gamer_tag: string

	@Column('text')
	declare first_name: string

	@Column('text')
	declare last_name: string

	@Column('text')
	declare rating: string

	@Column('text')
	declare game: string

	@Column('text')
	declare bio: string

	@Column('text')
	declare team: string
}
