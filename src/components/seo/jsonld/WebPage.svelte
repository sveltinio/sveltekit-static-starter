<script>
	import { JsonLd } from 'svelte-meta-tags';
	export let name;
	export let description;
	export let publisher;
	export let baseURL;
</script>

<JsonLd
	schema={{
		'@type': 'WebPage',
		name: { name },
		description: { description },
		publisher: {
			'@type': 'ProfilePage',
			name: { publisher }
		},
		isPartOf: {
			'@id': `${baseURL}/#website`
		}
	}}
/>
