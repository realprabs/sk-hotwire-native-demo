import { error } from '@sveltejs/kit';

export const GET = () => {
    error(401, 'Unauthorized');
};
