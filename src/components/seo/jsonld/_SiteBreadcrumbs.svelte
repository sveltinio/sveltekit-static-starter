<script lang="ts">
	import { JsonLd } from 'svelte-meta-tags';
	import forEach from 'lodash-es/forEach.js';
	import {
		MenuItem,
		WebSite,
		JsonLdBreadcrumbsItem,
		JsonLdBreadcrumbsItemToObject
	} from '$lib/interfaces';

	export let data: WebSite;
	export let menuData: MenuItem[];

	let elementList = Array<Object>();
	forEach(menuData, function (item) {
		const elem: JsonLdBreadcrumbsItem = {
			position: item.weight,
			name: item.identifier,
			url: `${data.baseURL}` + item.url
		};
		elementList.push(JsonLdBreadcrumbsItemToObject(elem));
	});
</script>

<JsonLd
	schema={{
		'@type': 'BreadcrumbList',
		itemListElement: elementList
	}}
/>
