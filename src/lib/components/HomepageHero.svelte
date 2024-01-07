<script lang="ts">
	import HeroImage0 from '$lib/images/Homepage1_lowres.jpg';
	import HeroImage1 from '$lib/images/Homepage2_lowres.jpg';
	import HeroImage2 from '$lib/images/Homepage3_lowres.jpg';
	import HeroImage from './HeroImage.svelte';

	const PRELOAD = [HeroImage0, HeroImage1, HeroImage2];

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
	}
</script>

<svelte:head>
	{#each PRELOAD as link}
		<link rel="preload" as="image" href={link} />
	{/each}
</svelte:head>

<div class="flex justify-center h-[250px] lg:h-full -z-50">
	{#if shown == 0}
		<HeroImage
			transitionMs={HERO_IMAGE_TRANSITION_MS}
			src={HeroImage0}
			alt="An overhead view of a delicious looking pizza."
		/>
	{:else if shown == 1}
		<HeroImage
			transitionMs={HERO_IMAGE_TRANSITION_MS}
			src={HeroImage1}
			alt="A side profile of the left side of a delicious looking pizza."
		/>
	{:else if shown == 2}
		<HeroImage
			transitionMs={HERO_IMAGE_TRANSITION_MS}
			src={HeroImage2}
			alt="A side profile of the right side of a delicious looking pizza."
		/>
	{:else if shown == -1}
		<div class="h-[500px] bg-white" />
	{/if}
</div>
