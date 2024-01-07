<script lang="ts">
	import { fade } from 'svelte/transition';

	export let src: string;
	export let alt: string;
	export let transitionMs: number;
</script>

<img
	in:fade={{ duration: transitionMs }}
	out:fade={{ duration: transitionMs }}
	class="object-cover rounded-xl w-full -z-50"
	{src}
	{alt}
/>
