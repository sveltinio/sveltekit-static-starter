import version from '$config/defaults';
export function get(): Record<string, unknown> {
	return {
		body: {
			version
		}
	};
}
