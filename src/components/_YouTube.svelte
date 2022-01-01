<script>
	export let id;
	export let title;

	$: url = `https://www.youtube.com/embed/${id}?autoplay=0`;
</script>

<div class={$$props.class} style={$$props.style}>
	<iframe
		src={url}
		style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;"
		allowfullscreen
		{title}
	/>
</div>
