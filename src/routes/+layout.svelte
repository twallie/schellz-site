<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import StaticHeader from '$lib/components/StaticHeader.svelte';

	let sidenavClicked: boolean = false;
	let scrollY = 0;

	let topOfPage: boolean = true;
	$: topOfPage = scrollY == 0;
</script>

<Header bind:sidenavClicked bind:visible={topOfPage} />
<StaticHeader bind:sidenavClicked bind:topOfPage />

<slot />

<svelte:window bind:scrollY />

<style>
</style>
