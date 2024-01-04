<script lang="ts">
	import UberEatsLogo from '$lib/images/ubereats.png';
	import DoorDashLogo from '$lib/images/doordash.png';
	import ToastLogo from '$lib/images/toast.png';
	import HomepageInfoBox from './HomepageInfoBox.svelte';
	import type { ImageWithAlt } from '$lib/types';

	const title = 'Order Delivery or Takeout';
	const images: ImageWithAlt[] = [
		{
			src: ToastLogo,
			alt: 'Toast logo',
			link: 'https://www.toasttab.com/local/order/schellzpizza/r-7d7ea823-73f1-4015-b6e9-b6e198d8b49d'
		},
		{
			src: DoorDashLogo,
			alt: 'DoorDash logo',
			link: 'https://www.doordash.com/store/schellz-pizza-co-los-angeles-24518174/'
		},
		{
			src: UberEatsLogo,
			alt: 'UberEats logo',
			link: 'https://www.ubereats.com/store/schellz-pizza-co/EPEQxsAGQDCj2zouyuer3w'
		}
	];
</script>

<HomepageInfoBox id="order" {title} {images} />
