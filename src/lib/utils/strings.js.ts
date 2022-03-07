import type { IWebSite } from '@sveltinio/seo/types';
import type { ResourceContent } from '@sveltinio/widgets/types';

export const textToSlug = (text: string): string => {
	return text
		.toLowerCase()
		.replace(/[^\w ]+/g, '')
		.replace(/ +/g, '-');
};

export const convertToSentenceCase = (text: string): string => {
	return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase().replace(/-/g, ' ');
};

export const isNotEmpty = (text: string): boolean => {
	return Boolean(text);
};

export const getPageUrl = (name: string, websiteData: IWebSite): string => {
	return websiteData.baseURL.concat('/', name, '/');
};

export const getSlugPageUrl = (item: ResourceContent, websiteData: IWebSite): string => {
	return websiteData.baseURL.concat('/', item.resource, '/', item.metadata.slug, '/');
};

export const getFavicon = (websiteData: IWebSite): string => {
	return websiteData.baseURL.concat('/', websiteData.favicon);
};

export const getCoverImagePath = (item: ResourceContent, websiteData: IWebSite): string => {
	if (item.metadata.cover && isNotEmpty(item.metadata.cover)) {
		return websiteData.baseURL.concat(
			'/',
			`resources/${item.resource}/${item.metadata.slug}/${item.metadata.cover}`
		);
	}
	return getFavicon(websiteData);
};
