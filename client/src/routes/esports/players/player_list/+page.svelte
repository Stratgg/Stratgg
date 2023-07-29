<!-- This modifies the title of this page -->
<svelte:head>
  <title>StratGG / Player List</title>
  <link rel="icon" href={favicon} />
</svelte:head>

<script>
  import Footer from "$lib/components/Footer.svelte";
	import Nav from "$lib/components/Nav.svelte";
  import favicon from "$lib/assets/images/favicons/apple-touch-icon.png";
  export let data
  const {playerList} = data
</script>

<Nav/>
  <div id="playerListTableContainer" class="overflow-x-auto">
    <table id="playerListTable" class="table table-zebra">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Rating</th>
          <th>Location</th>
          <th>Game</th>
        </tr>
      </thead>
      <tbody >
          {#each playerList as player}
          <tr>
            <td><a class="block" href="player_id">{player.first_name}</a></td>
            <td><a class="block" href="player_id">{player.last_name}</a></td>
            <td><a class="block" href="player_id">{player.rating}</td>
            <td><a class="block" href="player_id">{player.location}</td>
            <td><a class="block" href="player_id">{player.game}</td>
            </tr>
          {/each}    
      </tbody>  
    </table>
  </div>
<Footer/>