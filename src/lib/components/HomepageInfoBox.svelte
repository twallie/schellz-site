<script lang="ts">
	import { goto } from '$app/navigation';
	import type { FAQItem, ImageWithAlt, InfoBoxTextColorOptions } from '$lib/types';
	import FaqExpandable from './FaqExpandable.svelte';
	import MenuButton from './MenuButton.svelte';

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
		bg-[#ee2f24] py-4 rounded-lg
		h-full
		shadow-sm shadow-black
		pb-6
	"
>
	<div class="flex flex-col align-middle">
		{#if title}
			<h1 class="text-2xl font-medium mx-5">{title}</h1>
		{/if}

		{#if description}
			<p class="mt-1 px-2 pt-1 md:mx-7">{description}</p>
		{/if}

		{#if images}
			<div class="flex flex-row lg:flex-col justify-around flex-wrap lg:flex-nowrap mt-5">
				{#each images as image}
					<div
						class="px-6 py-3 bg-red-500 shadow-md active:shadow-inner active:shadow-black hover:bg-darkred rounded-2xl gap-1 m-1 space-x-2 shadow-black mb-3 mx-auto"
					>
						<a href={image.link}>
							<img class="object-cover mx-auto h-20" src={image.src} alt={image.alt} />
						</a>
					</div>
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
			<div class="flex flex-row flex-wrap flex-1 h-[80%] xl:mt-0 justify-center">
				{#each buttonData as data}
					<MenuButton text={data[0]} onclick={() => goto(data[1])} />
				{/each}
			</div>
		{/if}
	</div>
</div>
