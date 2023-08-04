<script>

  function toggle() {
	window.document.body.classList.toggle('dark-mode')
}
</script>


	<input on:click={toggle} type="checkbox" class="toggle toggle-info" checked />


<style>
	/* light mode */
	:global(body) {
		background-color:#00162D ;
		color: white;
		transition: background-color 0.3s
	}
	/* dark mode */
	:global(body.dark-mode) {
		background-color: #f2eee2;
		color: #2E435C;
	}
</style>