<script lang="ts">
	import Logo from '$lib/images/logo.png';
	import XSymbol from '$lib/images/x.svg';
	import Sidenav from '$lib/images/sidenav-button.svg';
	import SidenavMenu from './SidenavMenu.svelte';

	export let sidenavClicked = false;
	export let visible = true;

	const flipSidenavValue = () => {
		sidenavClicked = !sidenavClicked;
	};
</script>

<div
	class="flex flex-row justify-between align-middle
	{visible ? 'visible' : 'invisible'}
	bg-slate-200 pb-1 bg-opacity-[95%] shadow-2xl"
>
	<div class="w-1/2">
		<img src={Logo} alt="Schellz's Logo" />
	</div>
	<div class="h-[50px] w-[50px] my-auto ml-auto mr-5">
		<button on:click={flipSidenavValue}>
			<img class={sidenavClicked ? 'hidden' : ''} src={Sidenav} alt="Open sidenav button" />
			<img class={!sidenavClicked ? 'hidden' : ''} src={XSymbol} alt="Close sidenav button" />
		</button>
	</div>
</div>
{#if sidenavClicked && visible}
	<SidenavMenu bind:sidenavClicked />
{/if}
