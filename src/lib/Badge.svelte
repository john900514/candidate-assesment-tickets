<script>
	import { fade } from 'svelte/transition';

	export let tag;

	export let closeable = false;

	export let clickable = false;

	let badgeClass = '';
	switch (tag) {
		case 'front-end':
			badgeClass = 'badge-success';
			break;
		case 'new-feature':
			badgeClass = 'badge-info';
			break;
		case 'bug-fix':
			badgeClass = 'badge-warning';
			break;
		case 'challenge':
			badgeClass = 'bg-pink-500';
			break;
		case 'mobile':
			badgeClass = 'badge-primary';
			break;
		case 'full-stack':
			badgeClass = 'badge-secondary';
			break;
		case 'animation':
			badgeClass = 'badge-accent';
			break;
		case 'back-end':
			badgeClass = 'bg-gray-300 text-black';
			break;
		case 'reporting':
			badgeClass = 'bg-blue-200 text-black';
			break;
		case 'performance':
			badgeClass = 'bg-orange-500 text-white';
			break;
	}
</script>

<div
	class="badge badge-sm {badgeClass}"
	class:cursor-pointer={clickable}
	on:click|preventDefault|stopPropagation
	transition:fade
>
	{tag}
	{#if closeable}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="inline-block w-4 h-4 stroke-current"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M6 18L18 6M6 6l12 12"
			/></svg
		>
	{/if}
</div>
