<svelte:head>
  <title>StratGG / {player.gamer_tag}'s Profile </title>  
  <link rel="icon" href={favicon} />
</svelte:head>

<script>
  import Footer from "$lib/components/Footer.svelte";
	import Nav from "$lib/components/Nav.svelte";
  import favicon from "$lib/assets/images/favicons/apple-touch-icon.png";
  import team1logo from "$lib/assets/images/player-profile/team1logo.png";
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
    <h3 class="card-title justify-center">"{player.gamer_tag}"</h3>
    <h2 class="card-title justify-center text-3xl">{player.first_name} {player.last_name}</h2>
    <h2 class="card-title justify-center">{player.team}</h2>
    
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
<Footer/>
