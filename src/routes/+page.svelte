<script lang="ts">
	import HomepageHokkaiDough from '$lib/components/HomepageHokkaiDough.svelte';
	import HomepageOrderOptions from '$lib/components/HomepageOrderOptions.svelte';
	import HomepageHero from '$lib/components/HomepageHero.svelte';
	import HomepageFaq from '$lib/components/HomepageFaq.svelte';
	import HomepageContact from '$lib/components/HomepageContact.svelte';
	import HomepageCatering from '$lib/components/HomepageCatering.svelte';
	import HomepageMenu from '$lib/components/HomepageMenu.svelte';
	import LocationBox from '$lib/components/LocationBox.svelte';
	import PrInfo from '$lib/components/PRInfo.svelte';
</script>

<div class="md:mx-[15%] lg:mx-[25%] space-y-1">
	<PrInfo
		text="Schellz's Pizza was ranked #20 in places to eat in Los Angeles!"
		link="https://www.yelp.com/collection/XaC45OLZQUFiLvTw5cLbvw/Top-100-Places-to-Eat-in-LA-County-2023?utm_content=Collections&utm_source=ishare"
	/>
	<div class="xl:flex xl:flex-row xl:h-[500px] space-y-1 xl:space-y-0 xl:space-x-1 w-full">
		<div class="xl:flex xl:flex-col space-y-1">
			<div class="h-[75%]">
				<HomepageHero />
			</div>
			<div class="h-[25%]">
				<HomepageMenu />
			</div>
		</div>
		<HomepageOrderOptions />
	</div>
	<LocationBox />
	<HomepageCatering />
	<HomepageHokkaiDough />
	<HomepageFaq />
	<HomepageContact />
</div>
