<svelte:head>
  <title>StratGG / {player.first_name} {player.last_name}'s Profile </title>  
  <link rel="icon" href={favicon} />
</svelte:head>

<script>
  import Footer from "$lib/components/Footer.svelte";
	import Nav from "$lib/components/Nav.svelte";
  import favicon from "$lib/assets/images/favicons/apple-touch-icon.png";
  import team1logo from "$lib/assets/images/team1logo.png";

  import team2logo from "$lib/assets/images/team2logo.png"; 
  export let data
  // destructuring data object
  const player = data.player[0] 
</script>

<Nav/>
<div id="playerDiv1" class="text-center">
  <h1 class="text-7xl mb-10">{player.first_name} {player.last_name}</h1>
</div>
<div id="playerDiv2" class="flex flex-col text-center"   >
  <!-- TODO add scoreboard thats displays teams and match scores -->
  
  <!-- SCOREBOARD -->
  <div id="recentResultsScoreboardContainer"  >
    <h1 class="text-2xl mb-3">Recent Match Results</h1>
  <div id="scoreboardTeamsAndScore" class=" flex flex-row text justify-center text-center space-x-6">
    <!-- TEAM 1 RESULTS -->
    <div id="team1">
      <!-- TODO add image that dynamically generates depending on players team -->
      <h2>Axemen</h2>
      <img class="object-contain h-24 w-48" src={team1logo}/>
      <textarea class="text-black text-center resize-none w-6/12 rounded" placeholder="score" readonly></textarea>
    </div>    
      <div class="m-auto">
        <h1 class="text-5xl">VS</h1>
      </div>
      
    <!-- TEAM 2 RESULTS -->
    <div id="team2" >
      <!-- TODO add image that dynamically generates depending on players team -->
      <h2>Dragons</h2>
      <img class="object-contain h-24 w-48" src={team2logo}/>
      <textarea class="text-black text-center resize-none w-6/12 rounded" placeholder="score" readonly></textarea>
    </div>
  </div>
</div>
</div>
<div id="playerDiv3" class="flex flex-row justify-between">
  <div class="mt-24 w-6/12">
    <h1 class="text-5xl mb-4">Bio:</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo reiciendis ducimus quidem facere fuga. Facere excepturi rerum dolores! Delectus explicabo qui asperiores deleniti vel, nesciunt dolorem fuga laudantium aliquam?</p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi quo harum facere consequuntur quos sunt, repudiandae at accusamus beatae quaerat amet, temporibus laboriosam, corrupti quasi! Eos sed libero quo quam?
    </p>
  </div>
  <div id="photoAndStatsContainer" class="text-center ">
    <div id="playerProfilePhoto" >
    <!-- TODO add image that dynamically loads a players selected photo -->
      <img class="rounded-full w-6/12 m-auto" src={player.photo}/> 
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
</div>
<Footer/>
