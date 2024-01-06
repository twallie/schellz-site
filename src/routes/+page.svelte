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
	<HomepageHero />
	<PrInfo
		text="Schellz's Pizza was ranked #20 in places to eat in Los Angeles!"
		link="https://www.yelp.com/collection/XaC45OLZQUFiLvTw5cLbvw/Top-100-Places-to-Eat-in-LA-County-2023?utm_content=Collections&utm_source=ishare"
	/>
	<div
		class="
		space-y-1
		lg:grid lg:grid-cols-12 lg:space-y-0 lg:gap-1
	"
	>
		<div class="lg:col-span-9">
			<HomepageOrderOptions />
		</div>
		<div class="lg:col-span-3">
			<HomepageMenu />
		</div>
	</div>
	<LocationBox />
	<HomepageCatering />
	<HomepageHokkaiDough />
	<HomepageFaq />
	<HomepageContact />
</div>
