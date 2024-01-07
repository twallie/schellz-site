<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import StaticHeader from '$lib/components/StaticHeader.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import ExperimentalBackground from '$lib/images/experimental/PINEAPPLE_zoomed_out.png';

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

<style lang="postcss">
	:global(body) {
		background-image: url('experiment.png');
		background-repeat: repeat;
		animation-name: move;
		animation-direction: forward;
		animation-iteration-count: infinite;
		animation-duration: 10s;
		animation-timing-function: linear;
	}

	@keyframes move {
		0% {
			background-position: 0px 0px;
		}
		100% {
			background-position: 1000px 656px;
		}
	}
</style>
