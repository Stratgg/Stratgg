<!-- This modifies the title of this page -->
<svelte:head>
  <title>StratGG / Player List</title>
  <link rel="icon" href={favicon} />
</svelte:head>

<script>
  import Footer from "$lib/components/Footer.svelte";
	import Nav from "$lib/components/Nav.svelte";
  import favicon from "$lib/assets/favicons/favicon-32x32.ico";
  export let data
  const {playerList} = data
  console.log(playerList)
</script>



<Nav/>
  <div class="overflow-x-auto">
    <table class="table table-zebra">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Rating</th>
          <th>Rating</th>
          <th>Game</th>
        </tr>
      </thead>
      <tbody >
        <tr > 
          {#each playerList as player}
          <td>{player.first_name}</td>
          <td>{player.last_name}</td>
          <td>{player.rating}</td>
          <td>{player.location}</td>
          <td>{player.game}</td>
          {/each}    
        </tr>
        
        
      </tbody>  
    </table>
  </div>
<Footer/>