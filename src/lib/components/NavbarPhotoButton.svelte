<script lang="ts">
	export let src: string;
	export let alt: string;
	export let giveBackground: boolean = false;
</script>

<button class={giveBackground ? 'bg-white bg-opacity-80 rounded-3xl' : ''}>
	<img {src} class="h-[75px] my-auto" {alt} />
</button>
