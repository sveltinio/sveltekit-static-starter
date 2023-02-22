import type { Sveltin } from '$sveltin';

export const capitalizeFirstLetter = (text: string): string => {
	return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
};

export const capitalizeAll = (text: string): string => {
	const splitted = text.toLowerCase().split(' ');
	const capitalized: Array<string> = [];

	splitted.forEach(function (item) {
		capitalized.push(capitalizeFirstLetter(item));
	});
	return capitalized.join(' ');
};

export const toTitle = (text: string): string => capitalizeAll(text.replace(/-/g, ' '));

export const toSlug = (text: string): string =>
	text
		.toLowerCase()
		.replace(/[^\w ]+/g, '')
		.replace(/ +/g, '-');

export const camelToKebabCase = (text: string): string =>
	text.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

export const isNotEmpty = (text: string): boolean => Boolean(text);

export const getPageUrl = (name: string, websiteData: Sveltin.WebSite): string =>
	websiteData.baseURL.concat('/', name);

export const getSlugPageUrl = (
	item: Sveltin.ResourceContent,
	websiteData: Sveltin.WebSite
): string => {
	return websiteData.baseURL.concat('/', item.resource, '/', item.metadata.slug);
};

export const getFavicon = (websiteData: Sveltin.WebSite): string =>
	websiteData.baseURL.concat('/', websiteData.favicon);

export const getCoverImagePath = (
	item: Sveltin.ResourceContent,
	websiteData: Sveltin.WebSite
): string => {
	if (item.metadata.cover && isNotEmpty(item.metadata.cover)) {
		return websiteData.baseURL.concat(
			'/',
			`resources/${item.resource}/${item.metadata.slug}/${item.metadata.cover}`
		);
	}
	return getFavicon(websiteData);
};

export const canonicalPageUrl = (name: string, baseURL: string): string => baseURL.concat(name);
