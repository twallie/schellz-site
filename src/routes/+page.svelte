<script lang="ts">
	import HomepageHokkaiDough from '$lib/components/HomepageHokkaiDough.svelte';
	import HomepageOrderOptions from '$lib/components/HomepageOrderOptions.svelte';
	import HomepageHero from '$lib/components/HomepageHero.svelte';
	import HomepageFaq from '$lib/components/HomepageFaq.svelte';
	import HomepageContact from '$lib/components/HomepageContact.svelte';
	import HomepageCatering from '$lib/components/HomepageCatering.svelte';
	import HomepageInfoBox from '$lib/components/HomepageInfoBox.svelte';
</script>

<div class="md:mx-[15%] lg:mx-[25%]">
	<HomepageHero />
	<div class="md:grid md:grid-cols-12 md:mb-1">
		<div class="md:col-span-9">
			<HomepageOrderOptions />
		</div>
		<div class="md:col-span-3">
			<HomepageInfoBox
				id="menu"
				title="Menus"
				buttonData={[
					['Location 1', 'menu.png'],
					['Location 2', 'menu.png']
				]}
			/>
		</div>
	</div>
	<HomepageCatering />
	<HomepageHokkaiDough />
	<HomepageFaq />
	<HomepageContact />
</div>
