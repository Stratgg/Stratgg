export const load = async ({ fetch, params }) => {
  const fetchPlayer = async (id) => {
    const res = await fetch(`http://localhost:4042/players/${id}`)
    const data = await res.json()
    console.log(data)
    return data
  }

  return {
    player: await fetchPlayer(params.player_id)
  }
}