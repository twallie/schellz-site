<script lang="ts">
	import X from '$lib/images/x.svg';

	export let onClick: () => void = () => {};
</script>

<button on:click={onClick} class="mr-2">
	<img class="w-[1.5em] h-[1.5em]" src={X} alt="X button" />
</button>
