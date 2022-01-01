<script lang="ts">
	import { assets } from '$app/paths';
	export let pathToFile: string;
	export let altText: string;
	export let webp = true;
	export let avif = true;
	export let width = '100%';
	export let height = '100%';

	function getFilename(pathToFile): string {
		return pathToFile.split('.').slice(0, -1).join('.');
	}
</script>

<picture>
	{#if avif}
		<source type="image/avif" srcset="{assets}/avif/{getFilename(pathToFile)}.avif" />
	{/if}

	{#if webp}
		<source type="image/webp" srcset="{assets}/webp/{getFilename(pathToFile)}.webp" />
	{/if}

	<img
		src="{assets}/{getFilename(pathToFile)}"
		loading="lazy"
		decoding="async"
		alt={altText}
		title={altText}
		aria-label={altText}
		class={$$props.class}
		style={$$props.style}
		{width}
		{height}
	/>
</picture>
