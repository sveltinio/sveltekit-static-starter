<script lang="ts">
	import sveltinVersion from '$config/defaults.js';
	import type { WebSite } from '$lib/interfaces';

	const generatorText = 'Sveltin v' + sveltinVersion;
	export let data: WebSite;
</script>

<title>{data.name}</title>
<link rel="canonical" href={data.baseURL} />
<meta name="description" content={data.seoDescription} />
<meta name="generator" content={generatorText} />
{#if data.keywords != ''}
	<meta name="keywords" content={data.keywords} />
{/if}
<!-- Robots-->
<meta
	name="robots"
	content="index,follow,max-snippet:-1,max-image-preview:large,noarchive,max-video-preview:-1"
/>
<meta
	name="googlebot"
	content="index,follow,max-snippet:-1,max-image-preview:large,noarchive,max-video-preview:-1"
/>
<!-- Google / Search Engine Tags -->
<meta itemprop="name" content={data.name} />
<meta itemprop="description" content={data.seoDescription} />
<meta itemprop="image" content="{data.baseURL}/{data.logo}" />
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content={data.baseURL} />
<meta property="og:title" content="{data.title}" />
<meta
	property="og:description"
	content="{data.seoDescription}"
/>
<meta property="og:image" content="{data.baseURL}/{data.logo}" />
<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={data.baseURL} />
<meta
	property="twitter:title"
	content="{data.seoDescription}"
/>
<meta
	property="twitter:description"
	content="{data.seoDescription}"
/>
<meta property="twitter:image" content="{data.baseURL}/{data.logo}" />
