import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class PlayerEntity extends BaseEntity {
	@PrimaryGeneratedColumn()
	declare id: number

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

	@Column('text')
	declare bio: string
}
