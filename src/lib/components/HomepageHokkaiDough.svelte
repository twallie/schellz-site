<!--
    @component
    A component representing a special blurb for information on the Schellz's signature HokkaiDough
    Displayed title and description are modifiable through editing the `title` and `script` constants under the script tag.
-->
<script lang="ts">
	import HomepageInfoBox from './HomepageInfoBox.svelte';

	const title = 'What is Hokkaidough?';
	const description =
		'Our trademarked Hokkaidough is inspired by the delicious Japanese Shokupan, and the beautiful island of Hokkaido (北海道). HokkaiDough is unique due to our long and slow fermentation process, and quality. The result is a product with amazing texture and a subtle sweetness. HokkaiDough contains no egg nor dairy products, which makes it perfect for folks with allergies or dietary restrictions.';
	const id = 'hokkaidough';
</script>

<HomepageInfoBox {id} {title} {description} />
