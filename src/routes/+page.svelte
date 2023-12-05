<script lang="ts">
	import HomepageHokkaiDough from '$lib/components/HomepageHokkaiDough.svelte';
	import HomepageOrderOptions from '$lib/components/HomepageOrderOptions.svelte';
	import HomepageHero from '$lib/components/HomepageHero.svelte';
	import HomepageFaq from '$lib/components/HomepageFaq.svelte';
	import HomepageContact from '$lib/components/HomepageContact.svelte';
	import HomepageCatering from '$lib/components/HomepageCatering.svelte';
	import StyledButton from '$lib/components/StyledButton.svelte';
	import HomepageInfoBox from '$lib/components/HomepageInfoBox.svelte';
</script>

<HomepageHero />
<HomepageOrderOptions />
<HomepageHokkaiDough />
<HomepageInfoBox
	title="Menus"
	buttonData={[
		['Location 1', 'menu.png'],
		['Location 2', 'menu.png']
	]}
/>
<HomepageCatering />
<HomepageFaq />
<HomepageContact />
