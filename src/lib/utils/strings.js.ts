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
