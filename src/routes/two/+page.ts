import type { PageLoad } from './$types';

export const load: PageLoad = ({ url }) => {
    const action = url.searchParams.get('action') ?? 'advance';
    return { action };
};