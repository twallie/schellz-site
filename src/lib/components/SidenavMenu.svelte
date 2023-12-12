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
	class="
		flex flex-col space-y-3
		fixed
		w-full h-full pt-[20%] px-10
		bg-slate-200 bg-opacity-[70%]

		md:w-[50%]
		md:right-0
		md:pt-[10%]

		lg:flex-row
		lg:justify-center lg:space-x-3
		lg:space-y-0
		lg:w-[100%]
		lg:h-[75px]
		lg:p-0
	"
	in:fly={{ x: 200, duration: 200 }}
	out:fly={{ x: 200, duration: 200 }}
>
	<StyledButton text="Order Now" onClick={scrollToOrder} />
	<StyledButton text="Hokkaidough" onClick={scrollToHokkaiDough} />
	<StyledButton text="Find Us" />
	<StyledButton text="Full Menu" onClick={scrollToMenu} />
	<StyledButton text="FAQ" onClick={scrollToFAQ} />
</div>
