<script>
	import DarkModeToggle from "./DarkModeToggle.svelte";
</script>

<div class="navbar bg-base-100">
	<div class="flex">
		<a href="/" class="btn btn-ghost normal-case text-xl">StratGG</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/esports/players/player_list">Player List</a></li>
			<li>
				<details>
					<summary> Games </summary>
					<ul class="p-2 bg-base-100">
						<li><a href="/esports/games/cs_go">CS:GO</a></li>
						<li><a href="/esports/games/league_of_legends">League of Legends</a></li>
						<li><a href="/esports/games/valorant">Valorant</a></li>
					</ul>
				</details>
			</li>
			<li><a href="/contact_us">Contact Us</a></li>
		</ul>
	</div>
	<DarkModeToggle/>
</div>
