<script lang="ts">
	export let text: string;
	export let link: string;
</script>

<div
	class="
		bg-red
		text-white text-center
		rounded-md
		shadow shadow-black
		p-2
		sm:flex sm:flex-row sm:justify-center
		xl:text-xl
	"
>
	<p class="mb-2 sm:mb-0">{text}</p>
	<a
		href={link}
		class="
		sm:mt-0 sm:ml-2 underline font-bold text-black
		hover:text-gray-200
	">See details</a
	>
</div>
