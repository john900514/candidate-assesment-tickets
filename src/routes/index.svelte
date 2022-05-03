<script>
	import Badge from '$lib/Badge.svelte';
	import TicketModal from '$lib/TicketModal.svelte';

	export let tickets = [];

	let selectedTicket = null;

	const handleCloseModal = () => {
		selectedTicket = null;
		console.log('closed!');
	};
</script>

<div class="flex flex-col gap-4">
	{#each tickets as ticket}
		<div
			class="p-4 bg-neutral flex flex-col lg:flex-row gap-4 rounded-xl items-center cursor-pointer shadow-lg"
			role="button"
			on:click={() => (selectedTicket = ticket)}
		>
			<span>{ticket.title}</span>
			<div class="flex flex-row gap-2">
				{#each ticket.tags as tag}
					<Badge {tag} />
				{/each}
			</div>
		</div>
	{/each}
</div>

<TicketModal
	ticket={selectedTicket}
	on:close={handleCloseModal}
	on:closed={() => (selectedTicket = null)}
/>
