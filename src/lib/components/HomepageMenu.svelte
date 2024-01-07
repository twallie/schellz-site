<script lang="ts">
	import { goto } from '$app/navigation';
	import MenuButton from './MenuButton.svelte';
	import Onion from './Onion.svelte';
	import Pineapple from './Pineapple.svelte';
	import Tomato from './Tomato.svelte';
</script>

<div
	id="menu"
	class="
		text-center
		text-white
		bg-[#ee2f24] rounded-lg
		shadow-sm shadow-black
		h-full

		flex flex-row justify-evenly py-5
	"
>
	<div class="my-auto">
		<Onion />
	</div>
	<div class="flex flex-col align-middle">
		<h1 class="text-2xl font-medium mx-5">Menu</h1>
		<div class="my-auto">
			<MenuButton text="View" onclick={() => goto('menu.png')} />
		</div>
	</div>
	<div class="my-auto">
		<Pineapple />
	</div>
</div>
