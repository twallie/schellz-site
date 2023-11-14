<script lang="ts">
	import Down from '$lib/images/down.svg';
	import type { FAQItem } from '$lib/types';
	export let faq: FAQItem;

	let expanded = false;
	const onClick = () => {
		expanded = !expanded;
	};
</script>

<button class="flex flex-row pl-3 pt-5" on:click={onClick}>
	<img
		class="h-[1em] my-auto mr-2 {expanded ? 'rotate-360' : '-rotate-90'}"
		src={Down}
		alt="Expand"
	/>
	<h1 class="text-[1em] align-middle font-semibold">{faq.question}</h1>
</button>
{#if expanded}
	<p class="pt-2 px-8 text-left">{faq.answer}</p>
{/if}
