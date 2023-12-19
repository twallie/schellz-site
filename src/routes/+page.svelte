<script lang="ts">
	import HomepageHokkaiDough from '$lib/components/HomepageHokkaiDough.svelte';
	import HomepageOrderOptions from '$lib/components/HomepageOrderOptions.svelte';
	import HomepageHero from '$lib/components/HomepageHero.svelte';
	import HomepageFaq from '$lib/components/HomepageFaq.svelte';
	import HomepageContact from '$lib/components/HomepageContact.svelte';
	import HomepageCatering from '$lib/components/HomepageCatering.svelte';
	import HomepageMenu from '$lib/components/HomepageMenu.svelte';
	import LocationBox from '$lib/components/LocationBox.svelte';
</script>

<div class="md:mx-[15%] lg:mx-[25%] 2xl:mx-[35%] space-y-1">
	<HomepageHero />
	<div
		class="
		space-y-1
		sm:grid sm:grid-cols-12 sm:space-y-0 sm:gap-1
	"
	>
		<div class="sm:col-span-9">
			<HomepageOrderOptions />
		</div>
		<div class="sm:col-span-3">
			<HomepageMenu />
		</div>
	</div>
	<LocationBox />
	<HomepageCatering />
	<HomepageHokkaiDough />
	<HomepageFaq />
	<HomepageContact />
</div>
