<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import StaticHeader from '$lib/components/StaticHeader.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let sidenavClicked: boolean = false;
	let scrollY = 0;

	let topOfPage: boolean = true;
	$: topOfPage = scrollY == 0;
</script>

<Header bind:sidenavClicked visible={false} />
<StaticHeader bind:sidenavClicked bind:topOfPage />
<div class="mt-2">
	<slot />
</div>
<Footer />

<svelte:window bind:scrollY />
