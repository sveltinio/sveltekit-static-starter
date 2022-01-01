<script lang="ts">
	import type { WebSite } from '$lib/interfaces';

	import { MetaTags, MetaTagsProps } from 'svelte-meta-tags';
	export let data: WebSite;

	const metatags: MetaTagsProps = {
		title: `${data.title}`,
		description: `${data.description}`,
		canonical: `${data.baseURL}`,
		robotsProps: {
			nosnippet: true,
			notranslate: true,
			noimageindex: true,
			noarchive: true,
			maxSnippet: -1,
			maxImagePreview: 'large',
			maxVideoPreview: -1
		},
		openGraph: {
			type: 'website',
			url: `${data.baseURL}`,
			site_name: `${data.name}`,
			title: `${data.title}`,
			description: `${data.description}`,
			images: [
				{
					url: `${data.baseURL}/${data.logo}`,
					width: 800,
					height: 600,
					alt: 'Logo'
				}
			]
		},
		additionalMetaTags: [
			{
				name: 'generator',
				content: 'Sveltin'
			}
		]
	};
</script>

<MetaTags {...metatags} />
