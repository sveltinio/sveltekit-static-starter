import { sveltinVersion, sveltekitVersion, buildTime } from '$config/defaults.js';
export function GET(): Record<string, unknown> {
	return {
		body: {
			sveltinVersion,
			sveltekitVersion,
			buildTime
		}
	};
}
