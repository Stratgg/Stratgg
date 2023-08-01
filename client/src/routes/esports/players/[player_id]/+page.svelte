<svelte:head>
  <title>StratGG / {player.first_name} {player.last_name}'s Profile </title>  
  <link rel="icon" href={favicon} />
</svelte:head>

<script>
  import Footer from "$lib/components/Footer.svelte";
	import Nav from "$lib/components/Nav.svelte";
  import favicon from "$lib/assets/images/favicons/apple-touch-icon.png";
  import team1logo from "$lib/assets/images/player-profile/team1logo.png";
  import team2logo from "$lib/assets/images/player-profile/team2logo.png";
  import avatar from "$lib/assets/images/player-profile/player.jpeg"; 
  export let data
  // destructuring data object
  const player = data.player[0]
  console.log(player.photo) 
</script>

<Nav/>
<div id="playerAvatarContainer" class="flex justify-center">
  <div class="avatar " >
    <div class="w-60 rounded-full">
      <img src={avatar} />
    </div>
  </div>
</div>


<div id="bioAndStatsContainer" class="flex flex-row justify-between">
  <!-- BIO -->
  <div id="bio" >
    <div class="m-auto ">
      <h1 class="text-5xl mb-4">About {player.gamer_tag}:</h1>
      <p>{player.bio}</p>
    </div>
  </div>
  <!-- STATS -->
  <div class="card bg-base-100 shadow-xl">
    
    <div class="card card-compact w-96 bg-base-100 ">
  
  <div class="card-body">
    <h2 class="card-title justify-center text-3xl">{player.first_name} {player.last_name}</h2>
    <h3 class="card-title justify-center">"{player.gamer_tag}"</h3>
    <h2 class="card-title justify-center">{player.location}</h2>
    
    <h2 class="card-title justify-center">{player.game}</h2>
    <h2 class="card-title justify-center">Role</h2>
    <h2 class="card-title justify-center">Operator/Hero/Champion/Agent</h2>
  </div>
</div>
    <figure><img class="w-32" src={team1logo} alt="TEAM" /></figure>
    
    <div class="stat place-items-center">
      <div class="stat-value">Axemen</div>
    </div>  
   <div class="stats stats-vertical lg:stats-horizontal shadow">
  <div class="stat place-items-center">
    <div class="stat-title">Eliminations</div>
    <div class="stat-value">322</div>
    </div>
  
  <div class="stat place-items-center">
    <div class="stat-title">Deaths</div>
    <div class="stat-value">231</div>
  </div>
  
  <div class="stat place-items-center">
    <div class="stat-title">Assists</div>
    <div class="stat-value">99</div>
  </div>
  
</div>
 <div class="stats stats-vertical lg:stats-horizontal shadow">
  <div class="stat place-items-center">
    <div class="stat-title">Wins</div>
    <div class="stat-value">22</div>
    </div>
  
  <div class="stat place-items-center">
    <div class="stat-title">Losses</div>
    <div class="stat-value">19</div>
  </div>
  
  <div class="stat place-items-center">
    <div class="stat-title">Draws</div>
    <div class="stat-value">2</div>
  </div>
  
</div>

  </div>
</div>
<!-- SCOREBOARD -->
<div id="playerDiv2" class="flex flex-col text-center"   >
  <!-- TODO add scoreboard thats displays teams and match scores -->
  
  <!-- SCOREBOARD -->
  <div id="recentResultsScoreboardContainer" class=" w-6/12 m-auto rounded-3xl bg-secondary"  >
    <h1 class="text-2xl mb-3">Recent Match</h1>
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

<Footer/>
