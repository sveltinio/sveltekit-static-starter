import { sveltinVersion, sveltekitVersion, buildTime } from '$config/defaults.js';
export function get(): Record<string, unknown> {
	return {
		body: {
			sveltinVersion,
			sveltekitVersion,
			buildTime
		}
	};
}
