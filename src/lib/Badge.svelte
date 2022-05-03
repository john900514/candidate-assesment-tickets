<script>
	export let tag;

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
			badgeClass = 'badge-error';
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
	}
</script>

<div class="badge badge-sm {badgeClass}">{tag}</div>
