<script lang="ts">
	import { fly } from 'svelte/transition';

	export let offersCatering: boolean = false;
</script>

<div class="bg-[#ee2f24] p-5 rounded-lg shadow-md">
	<h1 class="text-2xl">Location name</h1>
	<div class="mb-3">
		<p class="mt-1">Street address</p>
		<p class="mt-1">City, state, zip</p>
	</div>
	<iframe
		title="Google Maps"
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938.2452496870876!2d-118.33118660132882!3d33.97724568708105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b763c115764f%3A0x60e42213cad08f42!2sSchellz%20Pizza%20Co!5e0!3m2!1sen!2sus!4v1702374703972!5m2!1sen!2sus"
		style="border:0;"
		class="w-full my-2"
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	/>
	{#if offersCatering}
		<p class="font-bold underline text-center">Catering offered</p>
	{/if}
</div>

<style lang="postcss">
	h1,
	p {
		@apply text-white;
	}
</style>
