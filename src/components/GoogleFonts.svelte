<script>
	export let fonts;
</script>

<link rel="preconnect" href="https://fonts.gstatic.com" />

{#each fonts as font}
	<link
		media="print"
		onload="this.onload=null;this.removeAttribute('media');"
		href="https://fonts.googleapis.com/css2?family={font.name}:wght@{font.weight.join(
			';'
		)}&display=swap"
		rel="stylesheet"
	/>
{/each}
