<script lang="ts">
	import { goto } from '$app/navigation';
	import type { FAQItem, ImageWithAlt, InfoBoxTextColorOptions } from '$lib/types';
	import FaqExpandable from './FaqExpandable.svelte';
	import MenuButton from './MenuButton.svelte';

	// for faqItems

	export let title: string | undefined = undefined;
	export let description: string | undefined = undefined;
	export let images: ImageWithAlt[] | undefined = undefined;
	export let textColor: InfoBoxTextColorOptions = 'white';
	export let id: string | undefined = undefined;
	export let faqItems: FAQItem[] | undefined = undefined;
	export let linkText: string | undefined = undefined;
	export let link: string = '';
	export let buttonData: string[][] | undefined = undefined;
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
	{#if title}
		<h1 class="text-2xl font-medium">{title}</h1>
	{/if}

	{#if description}
		<p class="mt-1 px-2 pt-1">{description}</p>
	{/if}

	{#if images}
		<div class="flex flex-row justify-center space-x-2">
			{#each images as image}
				<a href={image.link}>
					<img class="object-cover h-20 w-auto" src={image.src} alt={image.alt} />
				</a>
			{/each}
		</div>
	{/if}

	{#if faqItems}
		{#each faqItems as faq}
			<FaqExpandable {faq} />
		{/each}
	{/if}

	{#if linkText}
		<div class="mt-5 font-bold underline">
			<a href={link}>{linkText}</a>
		</div>
	{/if}

	{#if buttonData}
		<div class="flex flex-row flex-wrap justify-around mt-2">
			{#each buttonData as data}
				<div class="">
					<MenuButton text={data[0]} onclick={() => goto(data[1])} />
				</div>
			{/each}
		</div>
	{/if}
</div>
