<script lang="ts">
	export let text: string;
	export let onClick: (() => void) | undefined = undefined;
</script>

<button on:click={onClick}>
	<div
		class="
		text-center
	    text-black
		bg-[#ee2f24] rounded-lg
		shadow-sm shadow-black
		py-2 px-2
		md:mx-[10%]
		lg:mx-[20%]
	"
	>
		<h1 class="text-2xl font-medium">{text}</h1>
	</div>
</button>
