<script lang="ts">
	import type { NavigationItem } from '$lib/interfaces';
	export let resource: string;
	export let next: NavigationItem;
	export let previous: NavigationItem;
</script>

<div>
	{#if previous.title}
		&larr;
		<a href={`/${resource}/${previous.slug}`}>Previous</a>
	{:else}
		<div />
	{/if}
	{#if next.title}
		<a href={`/${resource}/${next.slug}`}>Next</a>
		&rarr;
	{/if}
</div>
