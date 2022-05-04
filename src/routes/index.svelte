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
				{#if ticket?.images?.length}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-paperclip"
						><path
							d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
						/></svg
					>
				{/if}
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
