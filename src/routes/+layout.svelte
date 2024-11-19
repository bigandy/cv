<script>
	let { children } = $props();
</script>

<main>
	{@render children()}
</main>

<style>
	main {
		max-inline-size: 799px;
		margin-inline: auto;
	}
</style>
