<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import ClickableInfoBox from '$lib/components/ClickableInfoBox.svelte';

	import XSymbol from '$lib/images/x.svg';

	let sidenavClicked: boolean;

	const scrollToHokkaiDough = () => {
		const element = document.getElementById('hokkaidough');
		if (element == null) {
			return;
		}
		element.scrollIntoView();
		sidenavClicked = false;
	};

	const closeSidenav = () => {
		sidenavClicked = false;
	};
</script>

{#if sidenavClicked}
	<div class="flex flex-col fixed w-60 top-0 right-0 bg-white/75 h-full">
		<button on:click={closeSidenav} class="w-[50px] ml-auto mt-10 mr-5 mb-5">
			<img src={XSymbol} alt="Close" />
		</button>
		<ClickableInfoBox textColor="black" title="Order Now" />
		<ClickableInfoBox onClick={scrollToHokkaiDough} textColor="black" title="HokkaiDough" />
		<ClickableInfoBox textColor="black" title="Find Us" />
		<ClickableInfoBox textColor="black" title="Full Menu" />
		<ClickableInfoBox textColor="black" title="FAQ" />
	</div>
{/if}
<Header bind:sidenavClicked />

<slot />
