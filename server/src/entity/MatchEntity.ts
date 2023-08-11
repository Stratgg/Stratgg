import { Entity, BaseEntity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm'
import 'reflect-metadata'

@Entity()
export class MatchEntity extends BaseEntity {
	// each match will have a unique id
	// this could be beneficial for future features
	// like a match history page
	@PrimaryColumn('uuid')
	declare match_id: number

	// START OF TEAM ONE PLAYERS
	// TEAM ONE PLAYER ONE
	@Column('text')
	declare team1_player1_Name: string

	@Column('integer')
	declare team1_player1_kills: number

	@Column('integer')
	declare team1_player1_deaths: number

	@Column('integer')
	declare team1_player1_assists: number

	@Column('integer')
	declare team1_player1_first_bloods: number
	//only for league of legends

	// TEAM ONE PLAYER TWO
	@Column('text')
	declare team1_player2_Name: string

	@Column('integer')
	declare team1_player2_kills: number

	@Column('integer')
	declare team1_player2_deaths: number

	@Column('integer')
	declare team1_player2_assists: number

	@Column('integer')
	declare team1_player2_first_bloods: number

	// TEAM ONE PLAYER THREE
	@Column('text')
	declare team1_player3_Name: string

	@Column('integer')
	declare team1_player3_kills: number

	@Column('integer')
	declare team1_player3_deaths: number

	@Column('integer')
	declare team1_player3_assists: number

	@Column('integer')
	declare team1_player3_first_bloods: number

	// TEAM ONE PLAYER FOUR
	@Column('text')
	declare team1_player4_Name: string

	@Column('integer')
	declare team1_player4_kills: number

	@Column('integer')
	declare team1_player4_deaths: number

	@Column('integer')
	declare team1_player4_assists: number

	@Column('integer')
	declare team1_player4_first_bloods: number

	// TEAM ONE PLAYER FIVE
	@Column('text')
	declare team1_player5_Name: string

	@Column('integer')
	declare team1_player5_kills: number

	@Column('integer')
	declare team1_player5_deaths: number

	@Column('integer')
	declare team1_player5_assists: number

	@Column('integer')
	declare team1_player5_first_bloods: number

	// TEAM ONE PLAYER SIX
	@Column('text')
	declare team1_player6_Name: string

	@Column('integer')
	declare team1_player6_kills: number

	@Column('integer')
	declare team1_player6_deaths: number

	@Column('integer')
	declare team1_player6_assists: number

	@Column('integer')
	declare team1_player6_first_bloods: number

	// END OF TEAM ONE PLAYERS

	// START OF TEAM TWO PLAYERS
	// TEAM TWO PLAYER ONE
	@Column('text')
	declare team2_player1_Name: string

	@Column('integer')
	declare team2_player1_kills: number

	@Column('integer')
	declare team2_player1_deaths: number

	@Column('integer')
	declare team2_player1_assists: number

	@Column('integer')
	declare team2_player1_first_bloods: number

	// TEAM TWO PLAYER TWO
	@Column('text')
	declare team2_player2_Name: string

	@Column('integer')
	declare team2_player2_kills: number

	@Column('integer')
	declare team2_player2_deaths: number

	@Column('integer')
	declare team2_player2_assists: number

	@Column('integer')
	declare team2_player2_first_bloods: number

	// TEAM TWO PLAYER THREE
	@Column('text')
	declare team2_player3_Name: string

	@Column('integer')
	declare team2_player3_kills: number

	@Column('integer')
	declare team2_player3_deaths: number

	@Column('integer')
	declare team2_player3_assists: number

	@Column('integer')
	declare team2_player3_first_bloods: number

	// TEAM TWO PLAYER FOUR
	@Column('text')
	declare team2_player4_Name: string

	@Column('integer')
	declare team2_player4_kills: number

	@Column('integer')
	declare team2_player4_deaths: number

	@Column('integer')
	declare team2_player4_assists: number

	@Column('integer')
	declare team2_player4_first_bloods: number

	// TEAM TWO PLAYER FIVE
	@Column('text')
	declare team2_player5_Name: string

	@Column('integer')
	declare team2_player5_kills: number

	@Column('integer')
	declare team2_player5_deaths: number

	@Column('integer')
	declare team2_player5_assists: number

	@Column('integer')
	declare team2_player5_first_bloods: number

	// TEAM TWO PLAYER SIX
	@Column('text')
	declare team2_player6_Name: string

	@Column('integer')
	declare team2_player6_kills: number

	@Column('integer')
	declare team2_player6_deaths: number

	@Column('integer')
	declare team2_player6_assists: number

	@Column('integer')
	declare team2_player6_first_bloods: number

	// END OF TEAM TWO PLAYERS

	// for the winning team, set winning_team to true and losing_team to false
	// on frontend, if winning_team is true, then display "WINNER" near the team name in scoreboard
	@Column('boolean')
	declare winning_team: boolean

	@Column('boolean')
	declare losing_team: boolean

	@Column('integer')
	declare team1_score: number

	@Column('integer')
	declare team2_score: number

	@CreateDateColumn({ type: Date })
	declare date: Date
}
