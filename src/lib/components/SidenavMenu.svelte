<script lang="ts">
	import { fly } from 'svelte/transition';
	import StyledButton from './StyledButton.svelte';

	export let sidenavClicked: boolean = false;

	const scrollToHokkaiDough = () => {
		scrollTo('hokkaidough');
	};

	const scrollToFAQ = () => {
		scrollTo('faq');
	};

	const scrollToMenu = () => {
		scrollTo('menu');
	};

	const scrollToOrder = () => {
		scrollTo('order');
	};

	function scrollTo(id: string) {
		const element = document.getElementById(id);
		if (element == null) {
			return;
		}
		element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
		sidenavClicked = false;
	}
</script>

<div
	class="flex flex-col space-y-3 fixed w-full h-full pt-[20%] md:pt-[10%] px-10 bg-slate-200 bg-opacity-[70%] md:w-[50%] md:right-0"
>
	<StyledButton text="Order Now" onClick={scrollToOrder} />
	<StyledButton text="Hokkaidough" onClick={scrollToHokkaiDough} />
	<StyledButton text="Find Us" />
	<StyledButton text="Full Menu" onClick={scrollToMenu} />
	<StyledButton text="FAQ" onClick={scrollToFAQ} />
</div>
