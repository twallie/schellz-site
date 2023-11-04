<script lang="ts">
	import Logo from '$lib/images/logo.png';
	import Sidenav from '$lib/images/sidenav-button.svg';
</script>

<div class="flex flex-row justify-between align-middle">
	<div class="w-1/2">
		<img src={Logo} alt="Schellz's Logo" />
	</div>
	<div class="h-[50px] w-[50px] my-auto ml-auto mr-5">
		<button><img src={Sidenav} alt="sidenav button" /></button>
	</div>
</div>
