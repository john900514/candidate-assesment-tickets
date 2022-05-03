<script>
	import { createEventDispatcher } from 'svelte';
	import {
		Dialog,
		DialogOverlay,
		DialogTitle,
		DialogDescription
	} from '@rgossiaux/svelte-headlessui';
	import { fade } from 'svelte/transition';
	import Badge from '$lib/Badge.svelte';

	const dispatch = createEventDispatcher();

	export let ticket;

	$: isOpen = ticket !== null;

	const closeModal = () => {
		dispatch('close');
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
			>
				<div class="w-full flex justify-end pt-4">
					<button class="p-4 btn btn-ghost" on:click={closeModal}>X</button>
				</div>
				<div class="flex flex-row gap-2">
					{#each ticket.tags as tag}
						<Badge {tag} />
					{/each}
				</div>
				<DialogTitle class="text-3xl font-bold">{ticket?.title}</DialogTitle>
				<DialogDescription class="mt-8">
					{ticket?.description}
				</DialogDescription>
			</div>
		</Dialog>
	</div>
{/if}
