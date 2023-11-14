<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import StaticHeader from '$lib/components/StaticHeader.svelte';

	//
	import Logo from '$lib/images/logo.png';
	//

	let sidenavClicked: boolean = false;
	let scrollY = 0;

	let topOfPage: boolean = true;
	$: topOfPage = scrollY == 0;
</script>

<Header bind:sidenavClicked bind:visible={topOfPage} />
<StaticHeader bind:sidenavClicked bind:topOfPage />

<slot />

<footer class="mt-10 bg-black flex flex-col text-center py-5">
	<img src={Logo} class="w-1/2 mx-auto" alt="Schells Logo" />
	<p class="text-white text-sm pt-5">© 2023 ALL RIGHT RESERVED.</p>
</footer>

<svelte:window bind:scrollY />
