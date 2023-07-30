export const load = async ({ fetch }) => { 

  const playerListRes = await fetch('http://localhost:4042/player_list')
  const playerListData = playerListRes.json()
  const playerList = playerListData

  return {
    playerList: playerList
  }
}


