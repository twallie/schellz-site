<script lang="ts">
	import type { ImageWithAlt } from '$lib/types';

	export let title: string;
	export let description: string | undefined = undefined;
	export let images: ImageWithAlt[] | undefined = undefined;
</script>

<div class="text-center text-white bg-red-600 mx-1 mb-1 py-2 rounded-lg">
	<h1 class="text-2xl">{title}</h1>
	{#if description}
		<p class="mt-1">{description}</p>
	{/if}
	{#if images}
		<div class="flex flex-row justify-center space-x-2">
			{#each images as image}
				<img class="object-cover h-20 w-auto" src={image.src} alt={image.alt} />
			{/each}
		</div>
	{/if}
</div>
