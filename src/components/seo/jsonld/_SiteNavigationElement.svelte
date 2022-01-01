<script lang="ts">
	import { JsonLd } from 'svelte-meta-tags';
	import forEach from 'lodash-es/forEach.js';
	import {
		WebSite,
		MenuItem,
		jsonLdSiteNavigationElementToObject,
		JsonLdSiteNavigationElementItem
	} from '$lib/interfaces';

	export let data: WebSite;
	export let menuData: MenuItem[];

	let elementList = Array<Object>();
	forEach(menuData, function (item) {
		const elem: JsonLdSiteNavigationElementItem = {
			position: item.weight,
			name: item.identifier,
			description: item.identifier,
			url: `${data.baseURL}` + item.url
		};
		elementList.push(jsonLdSiteNavigationElementToObject(elem));
	});
</script>

<JsonLd
	schema={{
		'@type': 'ItemList',
		itemListElement: elementList
	}}
/>
