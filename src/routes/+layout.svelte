<script>
	let { children } = $props();
</script>

<main>
	{@render children()}
</main>

<style>
	@font-face {
		font-family: Fraunces;
		font-style: normal;
		font-weight: 100 900;
		font-display: fallback;
		src: url('$lib/fonts/Fraunces-Variable.woff2') format('woff2');
		font-stretch: normal;
	}
	@font-face {
		font-family: 'Work Sans';
		font-style: normal;
		font-weight: 100 900;
		font-display: fallback;
		src: url('$lib/fonts/WorkSans-VariableFont_wght.woff2') format('woff2');
		font-stretch: normal;
	}

	:root {
		--heading-font: 'Fraunces', serif;
		--body-font: 'Work Sans', serif;
	}

	main {
		max-inline-size: 799px;
		margin-inline: auto;
		font-family: var(--body-font);
	}
</style>
