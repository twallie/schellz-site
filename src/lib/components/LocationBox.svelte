<script lang="ts">
	import Tomato from './Tomato.svelte';

	export let offersCatering: boolean = false;
</script>

<div id="location" class="bg-[#ee2f24] px-5 py-10 rounded-lg shadow-sm shadow-black h-full">
	<div class="flex flex-row">
		<div class="my-auto">
			<Tomato />
		</div>
		<div class="my-auto ml-5">
			<h1 class="text-2xl">Schellz Pizza Co.</h1>
			<div class="mb-3">
				<p class="mt-1">6732 Crenshaw Blvd</p>
				<p class="mt-1">Los Angeles, CA 90043</p>
			</div>
		</div>
	</div>
	<iframe
		title="Google Maps"
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938.2452496870876!2d-118.33118660132882!3d33.97724568708105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b763c115764f%3A0x60e42213cad08f42!2sSchellz%20Pizza%20Co!5e0!3m2!1sen!2sus!4v1702374703972!5m2!1sen!2sus"
		style="border:0;"
		class="w-full my-2 mx-auto"
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
