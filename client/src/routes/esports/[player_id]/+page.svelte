<svelte:head>
  <title>StratGG / [Player]'s Profile </title>  
  <link rel="icon" href={favicon} />
</svelte:head>

<script>
  import Footer from "$lib/components/Footer.svelte";
	import Nav from "$lib/components/Nav.svelte";
  import favicon from "$lib/assets/favicons/favicon-32x32.ico";
</script>

<div>
  <h1>Player Name</h1>
</div>

<div id="recentResultsAndGames">
  <!-- TODO add scoreboard thats displays teams and match scores -->

  <div id="recentResultsScoreboardContainer">
    <div id="team1">
      <!-- TODO add image that dynamically generates depending on players team -->
      <h2>Team 1</h2>
      <p>Team 1</p>
      <p>Score</p>
    </div>    

    <div id="team2">
      <!-- TODO add image that dynamically generates depending on players team -->
      <h2>Team 2</h2>
      <p>Team 2</p>
      <p>Score</p>
    </div>

    <div id="playerRecentGameStats">
      <h2>Recent Stats</h2>
      <table>
        <thead>[Player]'s results from [date that game was played]</thead>
        <tbody>
          <tr>
            <td>Eliminations</td>
            <td>Deaths</td>
            <td>Assists</td>
            <td>Damage</td>
          </tr>
      </table>
      
    </div>
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