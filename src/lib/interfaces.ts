declare global {
	interface Window {
		dataLayer: Array<any>;
	}
}

export interface ExternalLinkItem {
	identifier: string;
	name: string;
	url: string;
	weight: number;
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
