<script type="ts">
	import SiteMetaTags from './seo/metatag/_SiteMetaTags.svelte';
	import SiteNavigationElement from './seo/jsonld/_SiteNavigationElement.svelte';
	import SiteBreadcrumbs from './seo/jsonld/_SiteBreadcrumbs.svelte';
	import Website from './seo/jsonld/_Website.svelte';
	import type { MenuItem, WebSite } from '$lib/interfaces';
	import WebPage from './seo/jsonld/WebPage.svelte';

	export let websiteData: WebSite;
	export let menuData: MenuItem[];
</script>

<SiteMetaTags data={websiteData} />
<Website data={websiteData} />
<WebPage data={websiteData} />
<SiteNavigationElement data={websiteData} {menuData} />
<SiteBreadcrumbs data={websiteData} {menuData} />
