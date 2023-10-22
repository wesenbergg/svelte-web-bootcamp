<script>
	import HTMLTeht1 from '$lib/exercises/1_html/HTMLTeht1.svelte';
	import HTMLTeht2 from '$lib/exercises/1_html/HTMLTeht2.svelte';
	import HTMLTeht3 from '$lib/exercises/1_html/HTMLTeht3.svelte';
	import HTMLTeht4 from '$lib/exercises/1_html/HTMLTeht4.svelte';
	import HTMLTeht5 from '$lib/exercises/1_html/HTMLTeht5.svelte';
	export let data;
</script>

<h1>Chapter 1 HTML Exercise {data.number}</h1>
<div>
	<a href={`/html/${data.number - 1}`}>Previous Exercise</a>
	<br />
	<a href={`/html/${data.number + 1}`}>Next Exercise</a>
</div>
{#if data.number === 1}
	<HTMLTeht1 />
{:else if data.number === 2}
	<HTMLTeht2 />
{:else if data.number === 3}
	<HTMLTeht3 />
{:else if data.number === 4}
	<HTMLTeht4 />
{:else if data.number === 5}
	<HTMLTeht5 />
{:else}
	<div>
		<h3>Exercise not found.</h3>
		<a href="/">Go back to front page</a>
	</div>
{/if}
