<script lang="ts">
	import StyledButton from './StyledButton.svelte';

	export let sidenavClicked: boolean = false;

	const scrollToHokkaiDough = () => {
		scrollTo('hokkaidough');
	};

	const scrollToFAQ = () => {
		scrollTo('faq');
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

<div class="flex flex-col fixed w-full h-full pt-5 px-10 bg-slate-200 bg-opacity-[70%] space-y-1">
	<StyledButton text="Order Now" />
	<StyledButton text="Hokkaidough" onClick={scrollToHokkaiDough} />
	<StyledButton text="Find Us" />
	<StyledButton text="Full Menu" />
	<StyledButton text="FAQ" onClick={scrollToFAQ} />
</div>
