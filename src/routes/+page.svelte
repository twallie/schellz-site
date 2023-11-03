<script lang="ts">
	import UberEats from '$lib/images/ubereats.png';
	import DoorDashLogo from '$lib/images/doordash.png';
	import ToastLogo from '$lib/images/toast.png';
</script>

<div class="text-center text-white bg-red-600 mx-1 mb-1 py-2 rounded-lg">
	<h1 class="text-2xl">Order Delivery or Takeout</h1>
	<div class="flex flex-row justify-center space-x-2">
		<img class="object-cover h-20 w-20" src={UberEats} alt="Uber Eats logo" />
		<img class="object-cover h-20 w-30" src={DoorDashLogo} alt="DoorDash logo" />
		<img class="object-cover h-[60px] w-[62px]" src={ToastLogo} alt="DoorDash logo" />
	</div>
</div>

<div class="text-center text-white bg-red-600 mx-1 mb-1 py-2 rounded-lg">
	<h1 class="text-2xl">Today's Hours</h1>
</div>

<div class="text-center text-white bg-red-600 mx-1 py-2 rounded-lg">
	<h1 class="text-2xl mb-2">What is Hokkaidough?</h1>
	<p>
		Our trademarked Hokkaidough is inspired by the delicious Japanese Shokupan, and the beautiful
		isalnd of Hokkaido (japanese text). HokkaiDough is unique due to our long and slow fermentation
		process, and quality. The result is a product with amazing texture and a subtle sweetness.
		HokkaiDough contains no egg nor dairy products, which makes it perfect for folks with allergies
		or dietary restrictions.
	</p>
</div>
