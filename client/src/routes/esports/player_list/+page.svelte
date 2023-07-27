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
{#each playerList as player}
  <h1>{player.id}</h1>
  <h1>{player.first_name}</h1>
  <h1>{player.last_name}</h1>
  <h1>{player.rating}</h1>
  <h1>{player.location}</h1>
  <h1>{player.game}</h1>
{/each}
<Footer/>