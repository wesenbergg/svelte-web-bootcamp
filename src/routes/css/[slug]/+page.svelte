<script>
	import Portfolio from '$lib/2_css/Portfolio.svelte';
	export let data;
</script>

{#if data.number === 1}
	<Portfolio />
{/if}
