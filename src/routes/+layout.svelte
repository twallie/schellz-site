<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import SidenavMenu from '$lib/components/SidenavMenu.svelte';

	let sidenavClicked: boolean = false;
</script>

{#if sidenavClicked}
	<SidenavMenu bind:sidenavClicked />
{/if}
<Header bind:sidenavClicked />

<slot />
