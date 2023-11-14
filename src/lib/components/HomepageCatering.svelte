<script lang="ts">
	import HomepageInfoBox from './HomepageInfoBox.svelte';
	const title = 'Catering';
	const description =
		'We partner with ezCater for catering takout and delivery. You can also email pizza@schellz.com for large party and catering inquiries.';

	const linkText = 'Click here to place a catering order.';
	const link = 'https://www.ezcater.com/catering/pvt/schellz-pizza-co-3';
</script>

<HomepageInfoBox {title} {description} {linkText} {link} />
