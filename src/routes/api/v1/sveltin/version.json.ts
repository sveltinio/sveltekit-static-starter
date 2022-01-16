import { sveltinVersion } from '$config/defaults.js';
export function get(): Record<string, unknown> {
	return {
		body: {
			sveltinVersion
		}
	};
}
