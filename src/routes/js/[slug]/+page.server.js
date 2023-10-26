import { error } from '@sveltejs/kit';

export function load({ params }) {
	const eNumber = Number(params?.slug);
	if (!eNumber) throw error(404);

	return {
		number: eNumber
	};
}
