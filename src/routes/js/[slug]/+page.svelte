<script>
	import JSTeht1 from '$lib/3_js/JSTeht1.svelte';
	import JSTeht2 from '$lib/3_js/JSTeht2.svelte';
	import JSTeht3 from '$lib/3_js/JSTeht3.svelte';
	import JSTeht4 from '$lib/3_js/JSTeht4.svelte';
	export let data;
</script>

<h1>Chapter 1 JS Exercise {data.number}</h1>
<div>
	<a href={`/js/${data.number - 1}`}>Previous Exercise</a>
	<br />
	<a href={`/js/${data.number + 1}`}>Next Exercise</a>
</div>
{#if data.number === 1}
	<JSTeht1 />
{:else if data.number === 2}
	<JSTeht2 />
{:else if data.number === 3}
	<JSTeht3 />
{:else if data.number === 4}
	<JSTeht4 />
{:else}
	<div>
		<h3>Exercise not found.</h3>
		<a href="/">Go back to front page</a>
	</div>
{/if}
