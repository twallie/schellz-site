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
		h-full
		shadow-sm shadow-black
		text-white
		pb-6
		lg:py-[50px]
	"
>
	<div class="flex flex-col align-middle">
		<h1 class="text-2xl font-medium mx-5">{title}</h1>

		<div>
			<p class="mt-1 px-2 pt-1 md:mx-7">{description}</p>
			<div class="mt-5 font-bold underline hover:text-gray-300">
				<a href={link}>{linkText}</a>
			</div>
		</div>
	</div>
</div>
