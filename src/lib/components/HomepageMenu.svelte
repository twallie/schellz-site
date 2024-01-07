<script lang="ts">
	import { goto } from '$app/navigation';
	import HomepageInfoBox from './HomepageInfoBox.svelte';
	import MenuButton from './MenuButton.svelte';
</script>

<div
	id="menu"
	class="
		text-center
		text-white
		bg-[#ee2f24] py-4 rounded-lg
		shadow-sm shadow-black
		h-full
		pb-6
	"
>
	<div class="flex flex-col align-middle">
		<h1 class="text-2xl font-medium mx-5">Menu</h1>
		<div class="flex flex-row flex-wrap pt-5 flex-1 h-[80%] xl:mt-0 justify-center">
			<MenuButton text="View" onclick={() => goto('menu.png')} />
		</div>
	</div>
</div>
