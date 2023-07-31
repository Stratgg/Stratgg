
<!-- This modifies the title of this page -->
<svelte:head>
  <title>StratGG / Home</title>
  <link rel="icon" href={favicon} />
</svelte:head>
<script>
  import Footer from "$lib/components/Footer.svelte";
	import Nav from "$lib/components/Nav.svelte";
	import favicon from "$lib/assets/images/favicons/apple-touch-icon.png";
	import Articles from "$lib/components/Articles.svelte";
	import backGround from "$lib/assets/images/homepage/homebackground.png";
</script>

<Nav />

<div
	class="hero min-h-screen bg-base-200"
	style="background-image: url({backGround});"
>
	<div class="hero-content flex-col lg:flex-row">
		<div>
			<h1 class="text-5xl font-bold text-white-600/100"><strong>STRATGG</strong></h1>
			<p class="py-6 text-white drop-shadow-lg">
				Here at Strat gg, we want to create a competitive scene for teens (under 18) to get
				recognized for their abilities in video games. We will provide opportunities for teens to
				get recruited to professional esports or college teams. Strat gg will maintain personal
				relationships with colleges and coaches nationwide, allowing our members to receive
				university scholarships.
			</p>
			<button class="btn btn-primary">Get Started</button>
		</div>
	</div>
</div>
<Articles/>
<Footer />
