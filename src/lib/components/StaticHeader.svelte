<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	export let sidenavClicked = false;
	export let topOfPage = false;
	$: notTopOfPage = !topOfPage;
</script>

<div class="f fixed top-0 z-10 w-full {notTopOfPage ? 'visible shadow-2xl' : ''}">
	<Header bind:sidenavClicked />
</div>
