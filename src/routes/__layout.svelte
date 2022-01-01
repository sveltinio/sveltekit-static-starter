<script lang="ts">
	import { base } from '$app/paths';
	import '../app.css';
	import { website } from '$config/website.js';
	import type { WebSite, MenuItem } from '$lib/interfaces';
	import externals from '$config/externals.js';
	import sveltinVersion from '$config/defaults.js';
	import menu from '$config/menu.js';
	import orderBy from 'lodash-es/orderBy.js';
	import GoogleFonts from '$components/GoogleFonts.svelte';
	import SEO from '$components/SEO.svelte';
	import GoogleAnalytics from '$components/GoogleAnalytics.svelte';

	const websiteData = website as unknown as WebSite;
	const menuItems = orderBy(menu, 'weight');
	const menuData = menuItems as unknown as MenuItem[];
	const googleAnalytics = externals.googleAnalytics.UA_ID;
</script>

<svelte:head>
	<html lang={websiteData.language} />
	<title>{websiteData.name}</title>
	<link rel="canonical" href={websiteData.baseURL} />
	<meta name="description" content={websiteData.description} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	{#if websiteData.keywords != ''}
		<meta name="keywords" content={websiteData.keywords} />
	{/if}

	<GoogleFonts fonts={externals.googleFonts} />

	{#if googleAnalytics != ''}
		<GoogleAnalytics UA_ID={googleAnalytics} />
	{/if}
</svelte:head>

<SEO websiteData={website} {menuData} />

<div class="main-container">
	<main>
		<slot />
	</main>
	<footer>
		<div class="content">
			<div class="wrapper">
				<div>
					<a href="/">
						<img
							src="{base}/{websiteData.logo}"
							alt="sveltin logo"
							style="width: 100px; height: 48px;"
						/>
						<span class="sr-only">Sveltin Logo</span>
					</a>
				</div>
				<p>The CLI to Boost Your Productivity creating SvelteKit powered static websites.</p>
				<p><strong>You are running Sveltin v{sveltinVersion}</strong></p>
			</div>
		</div>
	</footer>
</div>
