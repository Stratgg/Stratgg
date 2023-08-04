
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
	</script>

<Nav/>
<div class=" bg-[url('lib/assets/images/homepage/homebackground.png')] text-white hero min-h-screen ">
	<div
    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div class="mx-auto max-w-3xl text-center">
      <h1
        class="bg-clip-text text-3xl font-extrabold  sm:text-5xl">
        <span class="sm:block ">
					 Welcome To
				</span>
				<span class="sm:block  text-transparent text-7xl bg-clip-text bg-gradient-to-r from-primary to-accent">
					STRATGG
				</span>
      </h1>

        <p class="py-6 text-white drop-shadow-lg mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
				Here at Stratgg, we want to create a competitive scene for teens (under 18) to get
				recognized for their abilities in video games. We will provide opportunities for teens to
				get recruited to professional esports or college teams. Stratgg will maintain personal
				relationships with colleges and coaches nationwide, allowing our members to receive
				university scholarships.
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-4">
      </div>
    </div>
  </div>	
</div>
	<Articles/>
<Footer />
