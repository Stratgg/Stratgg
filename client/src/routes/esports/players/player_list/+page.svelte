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
  <div id="playerListTableContainer" class="overflow-x-auto  w-6/12 m-auto mt-20 mb-20">
    <table id="playerListTable" class="table">
      <thead class="text-3xl ">
        <tr>
          <th>Gamer Tag</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Rating</th>
          <th>Location</th>
          <th>Game</th>
        </tr>
      </thead>
      <tbody class="text-xl text-center" >
          {#each playerList as player}
          <tr class="hover:bg-gray-400">
            <td><a class="block" href='{player.id}'>{player.gamer_tag}</a></td>
            <td><a class="block" href='{player.id}'>{player.first_name}</a></td>
            <td><a class="block" href='{player.id}'>{player.last_name}</a></td>
            <td><a class="block" href='{player.id}'>{player.rating}</td>
            <td><a class="block" href='{player.id}'>{player.location}</td>
            <td><a class="block" href='{player.id}'>{player.game}</td>
            </tr>
          {/each}    
      </tbody>  
    </table>
  </div>
<Footer/>