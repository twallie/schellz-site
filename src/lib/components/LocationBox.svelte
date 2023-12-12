<script lang="ts">
	import { fly } from 'svelte/transition';

	export let offersCatering: boolean = false;
</script>

<div class="bg-[#ee2f24] px-5 py-2 rounded-lg shadow-md">
	<h1 class="text-2xl font-bold">Location name</h1>
	<div class={offersCatering ? 'mb-3' : ''}>
		<p>Street address</p>
		<p>City, state, zip</p>
	</div>
	{#if offersCatering}
		<p class="font-bold underline text-center">Catering offered</p>
	{/if}
</div>
