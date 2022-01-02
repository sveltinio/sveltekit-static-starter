<script lang="ts">
	import type { WebSite } from '$lib/interfaces';
	import { JsonLd } from 'svelte-meta-tags';

	export let data: WebSite;
</script>

<JsonLd
	schema={{
		'@type': 'WebPage',
		name: `${data.name}`,
		description: `${data.seoDescription}`,
		publisher: {
			'@type': 'ProfilePage',
			name: `${data.webmaster.name}`
		},
		isPartOf: {
			'@id': `${data.baseURL}/#website`
		}
	}}
/>
