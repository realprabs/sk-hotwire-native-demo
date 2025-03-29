import { redirect } from '@sveltejs/kit'

export const actions = {
    default: async ({ request }) => {
        return redirect(302, '/success')
    }
}
