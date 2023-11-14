<script lang="ts">
	import type { FAQItem, ImageWithAlt, InfoBoxTextColorOptions } from '$lib/types';
	import FaqExpandable from './FaqExpandable.svelte';

	// for faqItems

	export let title: string;
	export let description: string | undefined = undefined;
	export let images: ImageWithAlt[] | undefined = undefined;
	export let textColor: InfoBoxTextColorOptions = 'white';
	export let id: string | undefined = undefined;
	export let faqItems: FAQItem[] | undefined = undefined;
</script>

<div
	{id}
	class="
		text-center
		{textColor == 'white' ? 'text-white' : 'text-black'}
		bg-[#ee2f24] mx-1 mb-1 py-4 rounded-lg
		shadow-sm shadow-black
	"
>
	<h1 class="text-2xl font-medium">{title}</h1>
	{#if description}
		<p class="mt-1 px-2 pt-1">{description}</p>
	{/if}
	{#if images}
		<div class="flex flex-row justify-center space-x-2">
			{#each images as image}
				<img class="object-cover h-20 w-auto" src={image.src} alt={image.alt} />
			{/each}
		</div>
	{/if}
	{#if faqItems}
		{#each faqItems as faq}
			<FaqExpandable {faq} />
		{/each}
	{/if}
</div>
