<script lang="ts">
	export let text: string;
	export let onclick: (() => void) | undefined = undefined;
</script>

<button on:click={onclick}>
	<div
		class="
		text-center
	    text-white
		bg-red-900 rounded-lg
		shadow-sm shadow-black
		py-2 px-2
	"
	>
		<h1 class="text-md font-medium">{text}</h1>
	</div>
</button>
