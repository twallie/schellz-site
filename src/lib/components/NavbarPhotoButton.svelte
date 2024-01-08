<script lang="ts">
	import { goto } from '$app/navigation';

	export let src: string;
	export let alt: string;
	export let giveBackground: boolean = false;
	export let linkTo: string;
</script>

<button
	class={giveBackground ? 'bg-white bg-opacity-80 rounded-3xl' : ''}
	on:click={() => goto(linkTo)}
>
	<img {src} class="h-[75px] my-auto" {alt} />
</button>
