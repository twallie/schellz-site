<script lang="ts">
	import ClickableInfoBox from './ClickableInfoBox.svelte';

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

<div class="flex flex-col fixed w-full h-full pt-5 px-10 bg-slate-200 bg-opacity-[70%]">
	<ClickableInfoBox textColor="black" title="Order Now" />
	<ClickableInfoBox onClick={scrollToHokkaiDough} textColor="black" title="HokkaiDough" />
	<ClickableInfoBox textColor="black" title="Find Us" />
	<ClickableInfoBox textColor="black" title="Full Menu" />
	<ClickableInfoBox textColor="black" title="FAQ" />
</div>
