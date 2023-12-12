<script>
	import LocationBox from '$lib/components/LocationBox.svelte';
</script>

<div class="flex flex-col mx-[10%]">
	<div class="mb-10">
		<h1 class="text-2xl text-center font-bold mb-2">Primary Location</h1>
		<LocationBox offersCatering={true} />
	</div>

	<h1 class="text-xl text-center font-bold mb-2">Other Locations</h1>
	<div
		class="
        flex flex-col space-y-3 mb-3
    "
	>
		<LocationBox />
		<LocationBox />
	</div>
</div>
