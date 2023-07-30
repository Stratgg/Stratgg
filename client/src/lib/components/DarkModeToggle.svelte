<script>
  function toggle() {
	window.document.body.classList.toggle('dark-mode')
}
</script>

<input on:click={toggle} type="checkbox" class="toggle toggle-info" checked />

<style>
	:global(body) {
		background-color: #f2eee2;
		color: #2E435C;
		transition: background-color 0.3s
	}
	:global(body.dark-mode) {
		background-color:#00162D ;
		color: white;
	}
</style>