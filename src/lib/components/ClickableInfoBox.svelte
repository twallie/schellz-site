<script lang="ts">
	import type { ImageWithAlt, InfoBoxTextColorOptions } from '$lib/types';
	import HomepageInfoBox from './HomepageInfoBox.svelte';

	export let title: string;
	export let description: string | undefined = undefined;
	export let images: ImageWithAlt[] | undefined = undefined;
	export let textColor: InfoBoxTextColorOptions = 'white';
</script>

<button>
	<HomepageInfoBox {title} {description} {images} {textColor} />
</button>
