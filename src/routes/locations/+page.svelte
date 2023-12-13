<script lang="ts">
	import LocationBox from '$lib/components/LocationBox.svelte';
</script>

<div class="flex flex-col mx-[10%] lg:mx-[20%]">
	<div class="mb-10">
		<h1 class="text-2xl text-center font-bold mb-2">Primary Location</h1>
		<LocationBox offersCatering={true} />
	</div>

	<h1 class="text-xl text-center font-bold mb-2">Other Locations</h1>
	<div
		class="
        flex flex-col
    "
	>
		<div class="md:grid md:grid-cols-2 md:grid-rows-1 md:space-x-1">
			<LocationBox />
			<LocationBox />
		</div>
	</div>
</div>
