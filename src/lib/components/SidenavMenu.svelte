<script lang="ts">
	import StyledButton from './StyledButton.svelte';

	export let sidenavClicked: boolean = false;

	const scrollToHokkaiDough = () => {
		const element = document.getElementById('hokkaidough');
		if (element == null) {
			return;
		}
		element.scrollIntoView();
		sidenavClicked = false;
	};
</script>

<div class="flex flex-col fixed w-full h-full pt-5 px-10 bg-slate-200 bg-opacity-[70%] space-y-1">
	<StyledButton text="Order Now" />
	<StyledButton text="Hokkaidough" />
	<StyledButton text="Find Us" />
	<StyledButton text="Full Menu" />
	<StyledButton text="FAQ" />
</div>
