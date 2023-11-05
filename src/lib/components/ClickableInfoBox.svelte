<script lang="ts">
	import type { ImageWithAlt, InfoBoxTextColorOptions } from '$lib/types';
	import HomepageInfoBox from './HomepageInfoBox.svelte';

	export let title: string;
	export let description: string | undefined = undefined;
	export let images: ImageWithAlt[] | undefined = undefined;
	export let textColor: InfoBoxTextColorOptions = 'white';
	export let onClick: (() => void) | undefined = undefined;
</script>

<button on:click={onClick}>
	<HomepageInfoBox {title} {description} {images} {textColor} />
</button>
