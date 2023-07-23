<svelte:head>
  <title>StratGG / [Player]'s Profile </title>  
  <link rel="icon" href={favicon} />
</svelte:head>

<script>
  import Footer from "$lib/components/Footer.svelte";
	import Nav from "$lib/components/Nav.svelte";
  import favicon from "$lib/assets/favicons/favicon-32x32.ico";
</script>

<Nav/>
<div>
  <h1>Player Name</h1>
</div>

<div id="recentResultsAndGames"  >
  <!-- TODO add scoreboard thats displays teams and match scores -->
  
  <!-- SCOREBOARD -->
  <div id="recentResultsScoreboardContainer" >

  <div id="scoreboardTeamsAndScore" class=" flex flex-row text justify-center text-center space-x-6">
    <!-- TEAM 1 RESULTS -->
    <div id="team1">
      <!-- TODO add image that dynamically generates depending on players team -->
      <h2>Team 1 Name or Logo</h2>
      <p class="bg-white text-black">Score 4</p>
    </div>    

      <div>
        <h1>VS</h1>
      </div>
      
    <!-- TEAM 2 RESULTS -->
    <div id="team2">
      <!-- TODO add image that dynamically generates depending on players team -->
      <h2>Team 2 Name or Logo</h2>
      <p class="bg-white text-black">Score 3</p>
    </div>
  </div>

  </div>
    

<!-- RECENT PLAYER STATS -->
  <div class="overflow-x-auto">
  <table class="table table-zebra">
    <!-- head -->
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      <!-- row 2 -->
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      <!-- row 3 -->
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
</div>

<div id="playerBioContainer">
  <div>
    <h2>Player Bio</h2>
    <p>Player Bio</p>
  </div>
</div>

<div id="playerProfilePhoto">
<!-- TODO add image that dynamically loads a players selected photo -->
</div>


<div id="playerStatsContainer">
  <div>
    <h2>Player Stats</h2>
    <p>Player Stats</p>
  </div>
</div>

<Footer/>