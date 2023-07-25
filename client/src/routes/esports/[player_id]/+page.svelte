<svelte:head>
  <title>StratGG / [Player]'s Profile </title>  
  <link rel="icon" href={favicon} />
</svelte:head>

<script>
  import Footer from "$lib/components/Footer.svelte";
	import Nav from "$lib/components/Nav.svelte";
  import favicon from "$lib/assets/favicons/favicon-32x32.ico";
  import profile from "$lib/assets/images/profilephoto.jpg";
</script>

<Nav/>
<div id="playerDiv1" class="text-center">
  <h1 class="text-6xl mb-10">Jonh Doe</h1>
</div>

<div id="playerDiv2" class="flex flex-col text-center"   >
  <!-- TODO add scoreboard thats displays teams and match scores -->
  
  <!-- SCOREBOARD -->
  <div id="recentResultsScoreboardContainer"  >
    <h1>Recent Match Results</h1>
  <div id="scoreboardTeamsAndScore" class=" flex flex-row text justify-center text-center space-x-6">
    <!-- TEAM 1 RESULTS -->
    <div id="team1">
      <!-- TODO add image that dynamically generates depending on players team -->
      <h2>Team 1 Name or Logo</h2>
      <textarea class="bg-white text-black text-center resize-none w-6/12" placeholder="score" readonly></textarea>
    </div>    

      <div class="m-auto">
        <h1>VS</h1>
      </div>
      
    <!-- TEAM 2 RESULTS -->
    <div id="team2">
      <!-- TODO add image that dynamically generates depending on players team -->
      <h2>Team 2 Name or Logo</h2>
      <textarea class="bg-white text-black text-center resize-none w-6/12" placeholder="score" readonly></textarea>
    </div>
  </div>
</div>
</div>

<div id="playerDiv3" class="flex flex-row justify-between">
  <div class="bg-red-100 w-6/12">
    <h1 class="text-center">[Player]'s Bio</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo reiciendis ducimus quidem facere fuga. Facere excepturi rerum dolores! Delectus explicabo qui asperiores deleniti vel, nesciunt dolorem fuga laudantium aliquam?</p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi quo harum facere consequuntur quos sunt, repudiandae at accusamus beatae quaerat amet, temporibus laboriosam, corrupti quasi! Eos sed libero quo quam?
    </p>
  </div>

  <div id="photoAndStatsContainer" class="text-center">
    <div id="playerProfilePhoto" >
    <!-- TODO add image that dynamically loads a players selected photo -->
      <img class="rounded-full w-6/12 m-auto" src={profile}/> 
    </div>
    <div id="playerStatsContainer" >
      <div class="text-center">
        <h2>[Player]'s Stats</h2>
        <p>Rating</p>
        <p>Eliminations</p>
        <p>Death</p>
        <p>Assists</p>
        <p>Damage</p>
      </div>
    </div>
  </div>
  

</div>

<Footer/>