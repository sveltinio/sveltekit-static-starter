import { stringify } from 'ajv';

export interface WebSite {
	name: string;
	baseURL: string;
	language: string;
	title: string;
	slogan: string;
	description: string;
	logo: string;
	copyright: string;
	keywords: string;
	contactEmail: string;
	sitemap: Sitemap;
	socials: Socials;
	webmaster: WebMaster;
}

export interface Sitemap {
	changefreq: string;
	priority: number;
}

export interface Socials {
	linkedin: string;
	twitter: string;
	github: string;
	facebook: string;
	instagram: string;
	youtube: string;
}

export interface WebMaster {
	name: string;
	address: string;
	contactEmail: string;
}

export interface MenuItem {
	identifier: string;
	name: string;
	url: string;
	weight: number;
	children: Array<MenuItem>;
}

export interface ExternalLinkItem {
	identifier: string;
	name: string;
	url: string;
	weight: number;
}

export interface NavigationItem {
	title: string;
	slug: string;
}

export interface ContentItem {
	title: string;
	slug: string;
	author: string;
	headline: string;
	date: string;
	cover: string;
	draft: boolean;
	headings: Array<Record<string, unknown>>;
	html: string;
}

export interface Metadata {
	name: string;
	items: Array<MetadataItem>;
}

export interface MetadataItem {
	title: string;
	slug: string;
	headline: string;
}

export interface JsonLdSiteNavigationElementItem {
	position: number;
	name: string;
	description: string;
	url: string;
}

export function jsonLdSiteNavigationElementToObject(item: JsonLdSiteNavigationElementItem): Object {
	return {
		'@type': 'SiteNavigationElement',
		position: item.position,
		name: item.name,
		description: item.description,
		url: item.url
	};
}

export interface JsonLdBreadcrumbsItem {
	position: number;
	name: string;
	url: string;
}

export function JsonLdBreadcrumbsItemToObject(item: JsonLdBreadcrumbsItem): Object {
	return {
		'@type': 'ListItem',
		position: item.position,
		name: item.name,
		item: item.url
	};
}
