<script>
	let isOpen = true;
	const toggle = () => {
		isOpen = !isOpen;
	};
</script>

<button class="toggle" on:click={toggle} type="button">toggle nav</button>
{#if isOpen}
	<div class="container">
		<nav class="main-nav">
			<ol>
				<li>
					<a href="/html">HTML</a>
					<ul>
						<li><a href="/html/1">Exercise 1</a></li>
						<li><a href="/html/2">Exercise 2</a></li>
						<li><a href="/html/3">Exercise 3</a></li>
						<li><a href="/html/4">Exercise 4</a></li>
						<li><a href="/html/5">Exercise 5</a></li>
					</ul>
				</li>
				<li>
					<a href="/css">CSS</a>
					<ul>
						<li><a href="/css/1">Portfolio</a></li>
					</ul>
				</li>
				<li>
					<a href="/js">JS</a>
					<ul>
						<li><a href="/js/1">Exercise 1</a></li>
						<li><a href="/js/2">Exercise 2</a></li>
						<li><a href="/js/3">Exercise 3</a></li>
						<li><a href="/js/4">Exercise 4</a></li>
					</ul>
				</li>
				<li>
					<a href="/boss">BOSS CHALLENGE</a>
					<ul>
						<li><a href="/boss/1">Guessing game</a></li>
						<li><a href="/boss/2">Hand Paper Scissors</a></li>
						<li><a href="/boss/3">Guess hexa color</a></li>
						<li><a href="/boss/4">Tic Tac Toe</a></li>
						<li><a href="/boss/5">To Do List</a></li>
					</ul>
				</li>
			</ol>
		</nav>

		<div>
			<slot />
		</div>
	</div>
{:else}
	<slot />
{/if}

<style>
	.toggle {
		position: sticky;
		bottom: 1rem;
		left: 1rem;
	}
	.container {
		display: flex;
	}
	.main-nav {
		padding: 0;
		height: 100vh;
		background-color: rgb(48, 67, 85);
		color: white;
		margin-right: 2rem;
		overflow-y: scroll;
	}
	.main-nav a {
		font-weight: bold;
		color: aliceblue;
		display: inline-flex;
		width: 100%;
	}
	a:hover {
		background-color: rgba(0, 0, 0, 0.25);
	}
	ul li {
		list-style-type: none;
	}
	ul,
	ol {
		padding-left: 0;
	}
	li {
		padding: 0 0.5rem;
	}
	a {
		padding: 0.5rem 0;
	}
	:global(body) {
		margin: 0;
	}
</style>
