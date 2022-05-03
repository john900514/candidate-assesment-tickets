import { derived, readable, writable, get as getStoreValue } from 'svelte/store';

export const createTicketStores = (tickets = []) => {
	// const { subscribe, set, update } = writable(tickets);
	const allTickets = readable(tickets);
	const ticketsById = derived(allTickets, ($allTickets) => {
		const keyed = {};
		$allTickets.forEach((ticket) => {
			keyed[ticket.id] = ticket;
		});
		return keyed;
	});
	const get = (id) => getStoreValue(ticketsById)[id];
	const filter = writable(null);
	const filteredTickets = derived([allTickets, filter], ([$allTickets, $filter]) =>
		$filter ? $allTickets.filter((ticket) => ticket.tags.includes($filter)) : $allTickets
	);
	return {
		allTickets,
		filteredTickets,
		ticketsById,
		get,
		filter
	};
};
