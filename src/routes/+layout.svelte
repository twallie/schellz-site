<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import ClickableInfoBox from '$lib/components/ClickableInfoBox.svelte';

	let sidenavClicked: boolean;
</script>

{#if sidenavClicked}
	<div class="flex flex-col fixed w-60 bg-white/75 h-full justify-center">
		<ClickableInfoBox textColor="black" title="Order Now" />
		<ClickableInfoBox textColor="black" title="HokkaiDough" />
		<ClickableInfoBox textColor="black" title="Find Us" />
		<ClickableInfoBox textColor="black" title="Full Menu" />
		<ClickableInfoBox textColor="black" title="FAQ" />
	</div>
{/if}
<Header bind:sidenavClicked />

<slot />
