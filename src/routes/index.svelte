<script>
	import { fade } from 'svelte/transition';
	import Badge from '$lib/Badge.svelte';
	import TicketModal from '$lib/TicketModal.svelte';
	import { createTicketStores } from '$lib/store.js';

	export let tickets = [];

	const { allTickets, filteredTickets, ticketsById, get, filter } = createTicketStores(tickets);

	let selectedTicket = null;

	const handleCloseModal = () => {
		selectedTicket = null;
		console.log('closed!');
	};
</script>

<div
	transition:fade
	class="flex flex-row gap-4 py-4 items-center border border-1 rounded-lg px-4 my-4"
>
	{#if $filter}
		<div>Only Showing:</div>
		<Badge tag={$filter} on:click={() => ($filter = null)} closeable clickable />
	{:else}
		<div>All Tickets:</div>
	{/if}
</div>

<div class="flex flex-col gap-4">
	{#each $filteredTickets as ticket, i}
		<div
			class="p-4 bg-neutral flex flex-col lg:flex-row gap-4 rounded-xl items-center cursor-pointer shadow-lg"
			role="button"
			on:click={() => (selectedTicket = ticket)}
			in:fade={{ delay: i * 100 }}
			out:fade={{ delay: i * 100 }}
		>
			<span>{ticket.title}</span>
			<div class="flex flex-row gap-2">
				{#each ticket.tags as tag}
					<Badge {tag} on:click={() => ($filter = tag)} clickable />
				{/each}
			</div>
		</div>
	{/each}
</div>

<TicketModal
	ticket={selectedTicket}
	on:close={handleCloseModal}
	on:closed={() => (selectedTicket = null)}
	on:setSelectedTicket={({ detail }) => (selectedTicket = detail)}
	{ticketsById}
/>
