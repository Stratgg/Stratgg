<!-- This modifies the title of this page -->
<svelte:head>
  <title>StratGG / League of Legends</title>
  <link rel="icon" href={favicon} />
</svelte:head>


<script>
  import Footer from "$lib/components/Footer.svelte";
	import Nav from "$lib/components/Nav.svelte";
  import favicon from "$lib/assets/images/favicons/apple-touch-icon.png";
</script>

<Nav/>
<Footer/>