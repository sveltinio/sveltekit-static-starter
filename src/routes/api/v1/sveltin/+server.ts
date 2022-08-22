import { sveltinVersion, sveltekitVersion, buildTime } from '$config/defaults.js';

/** @type {import('./$types').RequestHandler} */
export function GET(): Response {
	return new Response(
		JSON.stringify({
			sveltinVersion,
			sveltekitVersion,
			buildTime
		})
	);
}
