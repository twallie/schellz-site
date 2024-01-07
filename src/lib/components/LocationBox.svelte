<script lang="ts">
	import Tomato from './Tomato.svelte';

	export let offersCatering: boolean = false;
</script>

<div
	id="location"
	class="bg-[#ee2f24] p-3 rounded-lg shadow-sm shadow-black h-[100%] py-auto flex flex-col"
>
	<div class="my-auto mx-auto w-[99%]">
		<div class="flex flex-row space-x-5 pb-2">
			<div class="my-auto">
				<Tomato />
			</div>
			<div class="my-auto">
				<h1 class="text-2xl font-bold">Schellz Pizza Co.</h1>
				<div class="font-light">
					<p class="">6732 Crenshaw Blvd</p>
					<p class="">Los Angeles, CA 90043</p>
				</div>
			</div>
		</div>
		<div class="my-auto">
			<iframe
				title="Google Maps"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938.2452496870876!2d-118.33118660132882!3d33.97724568708105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b763c115764f%3A0x60e42213cad08f42!2sSchellz%20Pizza%20Co!5e0!3m2!1sen!2sus!4v1702374703972!5m2!1sen!2sus"
				style="border:0;"
				class="w-full"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			/>
			{#if offersCatering}
				<p class="font-bold underline text-center">Catering offered</p>
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
	h1,
	p {
		@apply text-white;
	}
</style>
