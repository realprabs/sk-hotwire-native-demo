import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	await new Promise((resolve) => setTimeout(resolve, 5000));
};
