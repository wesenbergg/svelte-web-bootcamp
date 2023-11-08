<!-- 
  Tehtävänä on luoda portfolio sivu alla olevasta HTML:stä. Voit muokata vapaasti HTML:ää.
  Voit käyttää visuaalisena inspiraationa figma-layouttia.
  https://www.figma.com/proto/PGeJk3HfeB39pmmWPTkAmL/Untitled?type=design&node-id=1-2&t=WuGo8SusnxJqj1KQ-1&scaling=min-zoom&page-id=0%3A1&mode=design

  Muutamia tavoitteita:
  - Käytä ainakin kerran flexboxia
  - Kustomoi linkit
  - Muokkaa fonttien kokoa, lisää fonteille väri
  - Muokkaa taustaväriä
  - lisää margin, padding ja borderit
    - käytä border radius
-->
<nav>
	<ul>
		<li><a href="#home">Home</a></li>
		<li><a href="#portfolio">Portfolio</a></li>
		<li><a href="#contact">Contact</a></li>
	</ul>
</nav>
<main>
	<section id="home">
		<div class="header-row">
			<div>
				<span>role</span>
				<span>SOFTWARE DEVELOPER</span>
			</div>
			<img
				class="profileImage"
				alt="Kuva ohjelmistokehittäjästä"
				src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?auto=format&fit=crop&q=80&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			/>
		</div>

		<h1>OMA NIMI ISOLLA</h1>
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia veniam veritatis dolore
			deserunt, voluptate perferendis architecto quibusdam fuga libero minima error earum nostrum,
			enim dolor quis dolores ut est atque.
		</p>
	</section>
	<section id="portfolio">
		<h2>Portfolio</h2>
		<div class="card">
			<div>
				<span>TESTER</span>
				<span>Jan 2023 - now</span>
			</div>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia veniam veritatis dolore
				deserunt, voluptate perferendis architecto quibusdam fuga libero minima error earum nostrum,
				enim dolor quis dolores ut est atque.
			</p>
		</div>
		<div class="card">
			<div>
				<span>SUMMER TRAINEE</span>
				<span>4 mo</span>
			</div>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia veniam veritatis dolore
				deserunt, voluptate perferendis architecto quibusdam fuga libero minima error earum nostrum,
				enim dolor quis dolores ut est atque.
			</p>
		</div>
	</section>
	<section id="skill">
		<div class="a">
			<h3>My top programming skills</h3>
			<ol>
				<li>Svelte</li>
				<li>HTML</li>
				<li>JS</li>
				<li>CSS</li>
				<li>Git</li>
			</ol>
		</div>

		<div class="b">
			<h3>My top skills as employee</h3>
			<ol>
				<li>Documentations</li>
				<li>Testing</li>
				<li>Communication</li>
				<li>Flexibility</li>
				<li>Agile</li>
			</ol>
		</div>

		<div class="c">
			<h3>My top spoken lang</h3>
			<ol>
				<li>Finnish</li>
				<li>English</li>
				<li>Russian</li>
				<li>Estonian</li>
				<li>Swedish</li>
			</ol>
		</div>
	</section>
	<section id="contact">
		<h2>Contact</h2>
		<div>
			<img
				class="contactBanner"
				alt="contact form banner"
				src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=50&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			/>
			<form>
				<div>
					<label for="firstname">First name</label>
					<input type="text" name="firstname" id="firstname" />
				</div>
				<div>
					<label for="lastname">Last name</label>
					<input type="text" name="lastname" id="lastname" />
				</div>
				<div>
					<label for="email">Email</label>
					<input type="email" name="email" id="email" />
				</div>
				<div>
					<label for="message">Message</label>
					<textarea rows={4} name="message" id="message" />
				</div>
				<button type="submit">SUBMIT</button>
			</form>
		</div>
	</section>
	<footer>
		<a href="#home">BACK TO TOP ^</a>
	</footer>
</main>

<style>
	nav li a {
	}
	.profileImage {
		object-fit: cover;
		width: 350px;
		height: 350px;
	}
	.contactBanner {
		object-fit: cover;
		width: 300px;
		height: 400px;
	}
	footer {
		display: flex;
		justify-content: center;
		background-color: purple;
		padding: 1rem 0;
	}
	footer a {
		color: aliceblue;
		text-decoration: none;
	}
	#contact {
		margin: 4rem;
	}
	#contact div,
	#contact h2 {
		display: flex;
	}
	#contact form {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: center;
	}
	#contact form div {
		padding: 0.5rem 1rem;
		display: flex;
		flex-direction: column;
		width: 80%;
	}
	#skill {
		padding: 4rem;
		background-color: purple;
		display: grid;
		grid-template-areas:
			'. a a b b .'
			'. . c c . .';
	}
	.a {
		grid-area: a;
	}
	.b {
		grid-area: b;
	}
	.c {
		grid-area: c;
	}
	#skill div {
		background-color: rgba(240, 248, 255, 0.66);
		border-radius: 1rem;
		margin: 1rem;
		padding: 0 1rem;
		text-align: center;
	}
	#portfolio {
		padding: 2rem;
	}
	#portfolio .card {
		background-color: rgb(255, 240, 253);
		padding: 1rem;
		margin: 1rem 0;
		border-radius: 1rem;
		display: flex;
	}
	#portfolio .card span {
		display: block;
		margin: 0 1rem 0 0;
		text-wrap: nowrap;
	}
	#home {
		background-color: purple;
		padding: 6rem 2rem;
		margin-top: -1.5rem;
	}
	#home * {
		color: aliceblue;
	}
	.header-row {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}
	.header-row span {
		display: block;
	}
	nav {
		position: fixed;
		top: 0;
		width: 100%;
	}
	nav ul {
		margin: auto;
		width: 600px;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		background-color: rgb(208, 66, 208);
		padding: 0.5rem;
		border-radius: 1rem;
	}
	nav li {
		list-style-type: none;
	}
	nav a {
		color: rgba(255, 255, 255, 0.9);
		text-decoration: none;
		text-transform: uppercase;
		font-weight: bold;
	}
</style>
