<!-- This modifies the title of this page -->
<svelte:head>
  <title>StratGG / Home</title>
  <link rel="icon" href={favicon} />
</svelte:head>
<script>
  import Footer from "$lib/components/Footer.svelte";
	import Nav from "$lib/components/Nav.svelte";
  import favicon from "$lib/assets/favicons/favicon-32x32.ico";
</script>

<Nav/>
<Footer/>