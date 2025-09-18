import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ request }) => {
	const isNativeApp = request.headers.get('user-agent')?.includes('Turbo Native') || false;
	return {
		isNativeApp
	};
};
