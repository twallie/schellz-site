<script lang="ts">
	import HomepageHokkaiDough from '$lib/components/HomepageHokkaiDough.svelte';
	import HomepageOrderOptions from '$lib/components/HomepageOrderOptions.svelte';
	import HomepageHero from '$lib/components/HomepageHero.svelte';
	import HomepageFaq from '$lib/components/HomepageFaq.svelte';
	import HomepageContact from '$lib/components/HomepageContact.svelte';
	import HomepageCatering from '$lib/components/HomepageCatering.svelte';
	import HomepageMenu from '$lib/components/HomepageMenu.svelte';
</script>

<div class="md:mx-[15%] lg:mx-[25%] 2xl:mx-[35%]">
	<HomepageHero />
	<div class="md:grid md:grid-cols-12 md:mb-1">
		<div class="md:col-span-9">
			<HomepageOrderOptions />
		</div>
		<div class="md:col-span-3">
			<HomepageMenu />
		</div>
	</div>
	<HomepageCatering />
	<HomepageHokkaiDough />
	<HomepageFaq />
	<HomepageContact />
</div>
