<script>
	import '$lib/global.css';
</script>

<div class="flex flex-col mx-auto min-h-screen">
	<div
		class="flex flex-row h-16 container m-auto items-center justify-center lg:justify-start flex-wrap p-4 mb-8"
	>
		<img src="cape_and_bay_logo.svg" alt="Cape & Bay Logo" class="w-64" />
		<div class="flex-grow hidden lg:flex" />
		<div class="text-base-content leading-loose uppercase">Developer Assessment Tickets</div>
	</div>
	<div class="container flex flex-col m-auto">
		<div class="flex flex-grow flex-wrap py-4 justify-center">
			<main class="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
				<slot />
			</main>
		</div>
	</div>

	<footer class="p-8 bg-neutral text-sm text-center mt-8">
		© 2022 Cape & Bay, LLC | Redsitribution prohibited
	</footer>
</div>
