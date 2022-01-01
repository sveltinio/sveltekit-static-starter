<script lang="ts">
	import type { WebSite } from '$lib/interfaces';
	import { JsonLd } from 'svelte-meta-tags';

	export let data: WebSite;

	const sameAs = Object.values(data.socials).filter((v) => v != '');
</script>

<JsonLd
	schema={{
		'@type': 'WebSite',
		'@id': `${data.baseURL}/#website`,
		name: `${data.name}`,
		url: `${data.baseURL}`,
		description: `${data.description}`,
		inLanguage: `${data.language}`,
		sameAs: [`${sameAs}`]
	}}
/>
