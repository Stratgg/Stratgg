
<!-- This modifies the title of this page -->
<svelte:head>
  <title>StratGG / Home</title>
  <link rel="icon" href={favicon} />
</svelte:head>
<script>
  import Footer from "$lib/components/Footer.svelte";
	import Nav from "$lib/components/Nav.svelte";
	import favicon from "$lib/assets/images/favicons/apple-touch-icon.png";
</script>

<Nav />

<div
	class="hero min-h-screen bg-base-200"
	style="background-image: url('src/lib/assets/images/footer-icons/Thisguy2.png');"
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

<!-- Container for demo purpose -->
<div class="container my-24 mx-auto md:px-6">
	<!-- Section: Design Block -->
	<section class="mb-32 text-center">
		<h2 class="mb-12 text-center text-3xl font-bold">Latest articles</h2>

		<div class="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
			<div class="mb-6 lg:mb-0">
				<div
					class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
					data-te-ripple-init
					data-te-ripple-color="light"
				>
					<img
						src="https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg"
						class="w-full"
						alt="Louvre"
					/>
					<a href="#!">
						<div
							class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"
						/>
					</a>
				</div>

				<h5 class="mb-3 text-lg font-bold">Welcome to the GRAND FINALS</h5>
				<p class="mb-6 text-neutral-500 dark:text-neutral-300">
					<small
						>Published <u>13.01.2024</u> by
						<a href="#!">Anna Maria Doe</a></small
					>
				</p>
				<p class="text-neutral-500 dark:text-neutral-300">
					At the grand finals of "Terra Eclipse Pro League 2023," Team Resurgence, a veteran South
					Korean squad, meets their match in The Alchemists, an underdog team from Brazil, in a
					heated game of 'CyberLink.'
				</p>
			</div>

			<div class="mb-6 lg:mb-0">
				<div
					class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
					data-te-ripple-init
					data-te-ripple-color="light"
				>
					<img
						src="https://mdbcdn.b-cdn.net/img/new/standard/city/032.jpg"
						class="w-full"
						alt="Louvre"
					/>
					<a href="#!">
						<div
							class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"
						/>
					</a>
				</div>

				<h5 class="mb-3 text-lg font-bold">Young Player has AUDACITY</h5>

				<p class="mb-6 text-neutral-500 dark:text-neutral-300">
					<small
						>Published <u>12.01.2022</u> by
						<a href="#!">Halley Frank</a></small
					>
				</p>
				<p class="text-neutral-500 dark:text-neutral-300">
					Despite the strategic prowess of Team Resurgence, the unexpected audacity of Alchemists'
					youngest player, "StellarGhost," levels the playing field, setting the stage for an epic
					showdown.
				</p>
			</div>

			<div class="mb-0">
				<div>
					<div
						class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
						data-te-ripple-init
						data-te-ripple-color="light"
					>
						<img
							src="https://mdbcdn.b-cdn.net/img/new/standard/city/059.jpg"
							class="w-full"
							alt="Louvre"
						/>
						<a href="#!">
							<div
								class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"
							/>
						</a>
					</div>

					<h5 class="mb-3 text-lg font-bold">The Alchemists Defy ALL ODDS</h5>
					<p class="mb-6 text-neutral-500 dark:text-neutral-300">
						<small
							>Published <u>10.01.2022</u> by
							<a href="#!">Joe Svan</a></small
						>
					</p>
					<p class="text-neutral-500 dark:text-neutral-300">
						In a heart-stopping finale, The Alchemists defy all odds, seizing victory with a
						surprise assault that redefines the notion of an underdog in eSports history.
					</p>
				</div>
			</div>
		</div>
	</section>
	<section class="mb-32 text-center">
		<h2 class="mb-12 text-center text-3xl font-bold">Latest articles</h2>

		<div class="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
			<div class="mb-6 lg:mb-0">
				<div
					class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
					data-te-ripple-init
					data-te-ripple-color="light"
				>
					<img
						src="src\lib\assets\images\footer-icons\DesignsforArticles2.jpg"
						class="w-full"
						alt="Louvre"
					/>
					<a href="#!">
						<div
							class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"
						/>
					</a>
				</div>

				<h5 class="mb-3 text-lg font-bold">
					Trailing behind, the Raging Tigers find a ray of hope in their prodigious player,
					"Tempest," whose game-changing maneuver brings the Tigers back into the fray, promising a
					riveting match ahead.
				</h5>
				<p class="mb-6 text-neutral-500 dark:text-neutral-300">
					<small
						>Published <u>13.01.2024</u> by
						<a href="#!">Anna Maria Doe</a></small
					>
				</p>
				<p class="text-neutral-500 dark:text-neutral-300">
					Trailing behind, the Raging Tigers find a ray of hope in their prodigious player,
					"Tempest," whose game-changing maneuver brings the Tigers back into the fray, promising a
					riveting match ahead.
				</p>
			</div>

			<div class="mb-6 lg:mb-0">
				<div
					class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
					data-te-ripple-init
					data-te-ripple-color="light"
				>
					<img
						src="src\lib\assets\images\footer-icons\gaming keyboard.png"
						class="w-full"
						alt="Louvre"
					/>
					<a href="#!">
						<div
							class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"
						/>
					</a>
				</div>

				<h5 class="mb-3 text-lg font-bold">
					The "Rising Phoenix League 2023" pits the unstoppable Team Onslaught from the U.S against
					the fearless Raging Tigers from India, in a gripping encounter on the eSports battlefield
					of 'Galactic Frontiers.
				</h5>

				<p class="mb-6 text-neutral-500 dark:text-neutral-300">
					<small
						>Published <u>12.01.2022</u> by
						<a href="#!">Halley Frank</a></small
					>
				</p>
				<p class="text-neutral-500 dark:text-neutral-300">
					The "Rising Phoenix League 2023" pits the unstoppable Team Onslaught from the U.S against
					the fearless Raging Tigers from India, in a gripping encounter on the eSports battlefield
					of 'Galactic Frontiers.'
				</p>
			</div>

			<div class="mb-0">
				<div>
					<div
						class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
						data-te-ripple-init
						data-te-ripple-color="light"
					>
						<img
							src="https://mdbcdn.b-cdn.net/img/new/standard/city/059.jpg"
							class="w-full"
							alt="Louvre"
						/>
						<a href="#!">
							<div
								class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"
							/>
						</a>
					</div>

					<h5 class="mb-3 text-lg font-bold">
						The Miracle Match: Raging Tigers' Unforgettable Comeback Shakes eSports World
					</h5>
					<p class="mb-6 text-neutral-500 dark:text-neutral-300">
						<small
							>Published <u>10.01.2022</u> by
							<a href="#!">Joe Svan</a></small
						>
					</p>
					<p class="text-neutral-500 dark:text-neutral-300">
						In a nail-biting climax, Raging Tigers, backed by Tempest's heroics, pull off a
						miraculous comeback, sending ripples through the eSports world and cementing their
						legacy as one of the greatest underdog stories ever.
					</p>
				</div>
			</div>
		</div>
	</section>
	<!-- Section: Design Block -->
</div>
<!-- Container for demo purpose -->
<Footer />
