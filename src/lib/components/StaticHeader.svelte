<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	export let sidenavClicked = false;
	export let topOfPage = false;
	$: notTopOfPage = !topOfPage;
</script>

<div class="f fixed top-0 {notTopOfPage ? 'visible' : 'invisible'}">
	<Header bind:visible={notTopOfPage} bind:sidenavClicked />
</div>
