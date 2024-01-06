<script lang="ts">
	export let text: string;
	export let onclick: (() => void) | undefined = undefined;
</script>

<button on:click={onclick}>
	<div
		class="
		text-center
	    text-white
		text-xl
		font-bold
		bg-red-900 rounded-lg
		shadow-md shadow-black
		py-2 px-5
		mt-3
		sm:mt-0
	"
	>
		<h1 class="text-md font-medium">{text}</h1>
	</div>
</button>
