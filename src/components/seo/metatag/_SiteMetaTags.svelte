<script lang="ts">
	import type { WebSite } from '$lib/interfaces';

	import { MetaTags, MetaTagsProps } from 'svelte-meta-tags';
	export let data: WebSite;

	const metatags: MetaTagsProps = {
		title: `${data.title}`,
		description: `${data.seoDescription}`,
		canonical: `${data.baseURL}`,
		robotsProps: {
			nosnippet: false,
			notranslate: false,
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
			description: `${data.seoDescription}`,
			images: [
				{
					url: `${data.baseURL}/${data.logo}`,
					width: 800,
					height: 600,
					alt: 'Logo'
				}
			]
		},
		twitter: {
			site: `${data.baseURL}`,
			handle: `${data.socials.twitter}`,
			cardType: 'summary_large_image'
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
