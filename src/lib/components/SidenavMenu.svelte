<script lang="ts">
	import { fly } from 'svelte/transition';
	import StyledButton from './StyledButton.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import Instagram from '$lib/images/instagram.png';
	import Yelp from '$lib/images/yelp.svg';
	import TikTok from '$lib/images/tiktok.svg';
	import LinkedIn from '$lib/images/linkedin.svg';

	import NavbarPhotoButton from './NavbarPhotoButton.svelte';

	export let sidenavClicked: boolean = false;

	const scrollToHokkaiDough = () => {
		scrollTo('hokkaidough');
	};

	const scrollToFAQ = () => {
		scrollTo('faq');
	};

	const goToMenu = () => {
		goto('/menu.png');
	};

	const scrollToOrder = () => {
		scrollTo('order');
	};

	const goToLocations = () => {
		scrollTo('location');
	};

	function scrollTo(id: string) {
		if ($page.url.pathname != '/') {
			goto('/').then(() => scrollTo(id));
		}

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
	flex flex-col fixed
	w-full
	h-full
	bg-slate-200
	bg-opacity-[70%]
	py-5 align-middle

	md:w-[50%]
	md:right-0

	lg:w-[35%]

	xl:w-[100%]
	xl:left-0
	xl:h-auto
	xl:px-[300px]
	"
	in:fly={{ x: 200, duration: 200 }}
	out:fly={{ x: 200, duration: 200 }}
>
	<div
		class="
			flex
			flex-col
			space-y-3
			w-full
			mb-5
			px-[50px]
			pb-5

			xl:flex-row
			xl:space-y-0
			xl:space-x-3
			xl:justify-around
			xl:mb-0
		"
	>
		<StyledButton text="Order Now" onClick={scrollToOrder} />
		<StyledButton text="Hokkaidough" onClick={scrollToHokkaiDough} />
		<StyledButton text="Find Us" onClick={goToLocations} />
		<StyledButton text="Full Menu" onClick={goToMenu} />
		<StyledButton text="FAQ" onClick={scrollToFAQ} />
	</div>
	<div
		class="
		flex flex-row justify-around flex-wrap mx-10
		xl:space-x-10
		"
	>
		<NavbarPhotoButton
			src={Instagram}
			alt="Instagram"
			giveBackground={true}
			linkTo="https://www.instagram.com/schellz_pizza_co/?hl=en"
		/>
		<NavbarPhotoButton
			src={Yelp}
			alt="Yelp"
			linkTo="https://www.yelp.com/biz/schellz-pizza-los-angeles-9"
		/>
		<NavbarPhotoButton
			src={TikTok}
			alt="TikTok"
			linkTo="https://www.tiktok.com/@schellz_pizza_co"
		/>
		<NavbarPhotoButton
			src={LinkedIn}
			alt="LinkedIn"
			linkTo="https://www.linkedin.com/company/schellz/"
		/>
	</div>
</div>
