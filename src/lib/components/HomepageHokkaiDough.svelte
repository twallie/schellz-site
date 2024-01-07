<!--
    @component
    A component representing a special blurb for information on the Schellz's signature HokkaiDough
    Displayed title and description are modifiable through editing the `title` and `script` constants under the script tag.
-->
<script lang="ts">
	import HomepageInfoBox from './HomepageInfoBox.svelte';
	import Mushroom from './Mushroom.svelte';
	import Tomato from './Tomato.svelte';

	const title = 'What is Hokkaidough?';
	const description =
		'Our trademarked Hokkaidough is inspired by the delicious Japanese Shokupan, and the beautiful island of Hokkaido (北海道). Hokkaidough is unique due to our long and slow fermentation process, and quality. The result is a product with amazing texture and a subtle sweetness. Hokkaidough contains no egg nor dairy products, which makes it perfect for folks with allergies or dietary restrictions.';
	const id = 'hokkaidough';
</script>

<div
	{id}
	class="
		text-center
		text-white
		bg-red
		rounded-lg
		h-full
		shadow-sm shadow-black
		py-5 px-2
	"
>
	<div
		class="
		flex flex-col
		md:flex-row
		md:justify-evenly
	"
	>
		<div class="mx-auto md:order-last mb-4 md:my-auto">
			<Mushroom />
		</div>

		<div class="md:w-[80%] md:ml-5">
			<h1 class="text-2xl font-medium mx-5">
				{title}
			</h1>

			<p class="md:mt-3">
				{description}
			</p>
		</div>
	</div>
</div>
