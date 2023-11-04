<script lang="ts">
	import UberEatsLogo from '$lib/images/ubereats.png';
	import DoorDashLogo from '$lib/images/doordash.png';
	import ToastLogo from '$lib/images/toast.png';
	import HomepageInfoBox from './HomepageInfoBox.svelte';
	import type { ImageWithAlt } from '$lib/types';

	const title = 'Order Delivery or Takeout';
	const images: ImageWithAlt[] = [
		{
			src: UberEatsLogo,
			alt: 'UberEats logo'
		},
		{
			src: DoorDashLogo,
			alt: 'DoorDash logo'
		},
		{
			src: ToastLogo,
			alt: 'Toast logo'
		}
	];
</script>

<HomepageInfoBox {title} {images} />
