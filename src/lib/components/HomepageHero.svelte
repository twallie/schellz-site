<script lang="ts">
	import HeroImage0 from '$lib/images/hero.jpg';
	import HeroImage1 from '$lib/images/pizza-hero-1.jpg';
	import HeroImage2 from '$lib/images/pizza-hero-2.jpg';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	// Total length an image is shown
	const HERO_CYCLE_MS = 10000;

	// How long an image is shown before transitioning
	const HERO_IMAGE_SHOWN_PHASE_MS = HERO_CYCLE_MS * 0.9;

	// How long the transition is
	const HERO_IMAGE_TRANSITION_MS = HERO_CYCLE_MS - HERO_IMAGE_SHOWN_PHASE_MS;

	let shown = 0;

	const incr = () => {
		let temp = shown;
		shown = -1; // switch phase
		sleep(HERO_IMAGE_TRANSITION_MS).then(() => {
			shown = temp + 1;
		});
	};

	function sleep(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	let clear: any;
	$: {
		clearInterval(clear);
		clear = setInterval(incr, HERO_CYCLE_MS);
	}

	$: {
		shown = shown == 3 ? 0 : shown;
		console.log(shown);
	}
</script>

<div class="flex justify-center h-full">
	{#if shown == 0}
		<img
			in:fade={{ duration: HERO_IMAGE_TRANSITION_MS }}
			out:fade={{ duration: HERO_IMAGE_TRANSITION_MS }}
			class="object-cover rounded-xl w-full"
			src={HeroImage0}
			alt="A delicious pizza"
		/>
	{:else if shown == 1}
		<img
			in:fade={{ duration: HERO_IMAGE_TRANSITION_MS }}
			out:fade={{ duration: HERO_IMAGE_TRANSITION_MS }}
			class="object-cover rounded-xl w-full"
			src={HeroImage1}
			alt="A delicious pizza"
		/>
	{:else if shown == 2}
		<img
			in:fade={{ duration: HERO_IMAGE_TRANSITION_MS }}
			out:fade={{ duration: HERO_IMAGE_TRANSITION_MS }}
			class="object-cover rounded-xl w-full"
			src={HeroImage2}
			alt="A delicious pizza"
		/>
	{/if}
</div>
