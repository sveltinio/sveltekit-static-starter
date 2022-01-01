<script lang="ts">
	export let id = '';
	export let name: string;
	export let url: string;
	export let alt = '';
	$: idText = id != '' ? id : name;
	$: altText = alt != '' ? alt : name;
</script>

<a
	id={idText}
	{name}
	rel="external noopener noreferrer"
	target="_blank"
	href={url}
	aria-label={altText}
	class={$$props.class}
	style={$$props.style}
>
	<slot />
</a>
