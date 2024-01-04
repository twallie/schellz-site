<script lang="ts">
	import Logo from '$lib/images/logo.png';
	import XSymbol from '$lib/images/x.svg';
	import Sidenav from '$lib/images/sidenav-button.svg';
	import SidenavMenu from './SidenavMenu.svelte';
	import XButton from './XButton.svelte';

	export let sidenavClicked = false;
	export let visible = true;
	let bannerOpen = false; // set to true to reenable banner

	const flipSidenavValue = () => {
		sidenavClicked = !sidenavClicked;
	};

	const closeBanner = () => {
		bannerOpen = false;
	};
</script>

<div
	class="flex flex-row justify-between align-middle
	bg-white pb-1 bg-opacity-[95%]
	{visible ? '' : 'invisible'}
	"
>
	<div class="w-[150px] md:w-[225px]">
		<img src={Logo} alt="Schellz's Logo" />
	</div>
	<div class="h-[50px] w-[50px] my-auto ml-auto mr-5">
		<button on:click={flipSidenavValue}>
			<img class={sidenavClicked ? 'hidden' : ''} src={Sidenav} alt="Open sidenav button" />
			<img class={!sidenavClicked ? 'hidden' : ''} src={XSymbol} alt="Close sidenav button" />
		</button>
	</div>
</div>
{#if bannerOpen}
	<div
		class="
		bg-red
		text-center
		flex flex-row justify-between align-middle
		py-2
		r rounded-b-lg
		{visible ? '' : 'invisible'}
	"
	>
		<div class="w-full">
			<p class="text-center font-bold text-lg underline">25% OFF ALL ORDERS</p>
		</div>
		<XButton onClick={closeBanner} />
	</div>
{/if}
{#if sidenavClicked && visible}
	<div class="h-full">
		<SidenavMenu bind:sidenavClicked />
	</div>
{/if}
