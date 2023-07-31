<script>
  export let data
  // destructuring data object
  const player = data.player[0]
</script>


<div id="photoAndStatsContainer" class="text-center ">
    <div id="playerProfilePhoto" >
      <!-- <img class="rounded-full w-6/12 m-auto" src={profilePhoto}/>  -->
    </div>
    <div id="playerStatsContainer" >
      <div class="text-center">
        <div id="playerInfo">
          <h2>{player.first_name} {player.last_name}'s Information</h2>
          <p>Team</p>
          <p>{player.rating}</p>
          <p>Role</p>
          <p>{player.location}</p>
        </div>
        
        <div id="playerGameStats">
          <p>Eliminations</p>
          <p>Death</p>
          <p>Assists</p>
          <p>Damage</p>
        </div>
      </div>
    </div>
  </div>