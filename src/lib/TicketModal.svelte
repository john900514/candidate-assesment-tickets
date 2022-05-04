<script>
	import { createEventDispatcher } from 'svelte';
	import {
		Dialog,
		DialogOverlay,
		DialogTitle,
		DialogDescription
	} from '@rgossiaux/svelte-headlessui';
	import { fade, fly } from 'svelte/transition';
	import Badge from '$lib/Badge.svelte';

	const dispatch = createEventDispatcher();

	export let ticket;
	export let ticketsById;

	let selectedImage = null;

	$: isOpen = ticket !== null;

	const closeModal = () => {
		dispatch('close');
	};

	const goToTicket = (ticket) => {
		dispatch('setSelectedTicket', ticket);
	};
</script>

{#if isOpen}
	<div transition:fade>
		<Dialog
			open={isOpen}
			static
			on:close={closeModal}
			class="fixed inset-0 flex flex-col items-center justify-center"
		>
			<DialogOverlay
				class="absolute inset-0 z-[-1] bg-base-content bg-opacity-50 filter backdrop-blur-sm"
			/>

			<div
				class="flex flex-col gap-2 px-8 lg:px-16 pb-8 lg:pb-16 bg-base-300 w-[90vw] lg:w-[50rem] lg:max-w-[50vw] rounded-lg relative"
				in:fly
			>
				<div class="w-full flex justify-end pt-4">
					<button class="p-4 btn btn-ghost" on:click={closeModal}>X</button>
				</div>
				{#if ticket?.tags?.length}
					<div class="flex flex-row gap-2">
						{#each ticket.tags as tag}
							<Badge {tag} />
						{/each}
					</div>
				{/if}
				{#if ticket?.blockedBy?.length}
					<div class="flex flex-row gap-2">
						{#each ticket.blockedBy as ticket_id}
							<button
								class="badge badge-error badge-sm cursor-pointer"
								on:click={() => goToTicket($ticketsById[ticket_id])}
							>
								Blocked by: {$ticketsById[ticket_id].title}
							</button>
						{/each}
					</div>
				{/if}
				<DialogTitle class="text-3xl font-bold">{ticket?.title}</DialogTitle>
				<DialogDescription class="mt-8 flex flex-col gap-2" as="div">
					<p>{ticket?.description}</p>
					{#if ticket?.subtasks?.length}
						<h2 class="font-bold uppercase text-sm mt-4">Subtasks:</h2>
						<ol class="list-disc ml-4">
							{#each ticket.subtasks as subtask}
								<li>{subtask}</li>
							{/each}
						</ol>
					{/if}
				</DialogDescription>
				{#if ticket?.images?.length}
					<h2 class="font-bold uppercase text-sm mt-4">Attachments:</h2>
					<div class="flex flex-row gap-2">
						{#each ticket.images as image}
							<button on:click={() => (selectedImage = image)}
								><img
									src={image.src}
									class="w-32 h-32 rounded border border-white border-opacity-50 object-cover"
									alt=""
								/></button
							>
						{/each}
					</div>
				{/if}
			</div>
		</Dialog>
	</div>

	{#if selectedImage}
		<Dialog
			open={selectedImage !== null}
			static
			on:close={() => (selectedImage = null)}
			class="fixed z-2 inset-0 flex flex-col items-center justify-center"
		>
			<DialogOverlay
				class="absolute inset-0 bg-base-content bg-opacity-50 filter backdrop-blur-sm"
			/>

			<div class="flex flex-col gap-2 px-8 lg:px-16 pb-8 lg:pb-16 relative" in:fade>
				<img src={selectedImage.src} class="w-full h-full object-fit" alt={selectedImage?.description} />
				<DialogTitle class="text-3xl font-bold">{ticket?.title}</DialogTitle>
				<DialogDescription class="text-white absolute bottom-0 inset-x-0 px-8" as="div">
					<p>{selectedImage?.description}</p>
				</DialogDescription>
			</div>
		</Dialog>
	{/if}
{/if}
