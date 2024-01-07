<script lang="ts">
	import HomepageInfoBox from './HomepageInfoBox.svelte';
	const title = 'Catering';
	const description =
		'We partner with ezCater for catering takout and delivery. You can also email pizza@schellz.com for large party and catering inquiries.';

	const linkText = 'Click here to place a catering order.';
	const link = 'https://www.ezcater.com/catering/pvt/schellz-pizza-co-3';
</script>

<div
	class="
		text-center
		bg-[#ee2f24] py-4 rounded-lg
		h-[100%]
		shadow-sm shadow-black
		text-white
		flex flex-col
	"
>
	<div class="my-auto flex flex-col space-y-5">
		<h1 class="text-3xl font-medium mx-5">{title}</h1>
		<div class="mx-10 xl:text-xl space-y-5">
			<p class="">{description}</p>
			<div class="font-bold underline hover:text-gray-300">
				<a href={link}>{linkText}</a>
			</div>
		</div>
	</div>
</div>
