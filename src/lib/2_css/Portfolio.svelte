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
		<div>
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
		<div>
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
		<div>
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
		<div>
			<div>
				<h3>My top programming skills</h3>
				<ol>
					<li>Svelte</li>
					<li>HTML</li>
					<li>JS</li>
					<li>CSS</li>
					<li>Git</li>
				</ol>
			</div>

			<div>
				<h3>My top skills as employee</h3>
				<ol>
					<li>Documentations</li>
					<li>Testing</li>
					<li>Communication</li>
					<li>Flexibility</li>
					<li>Agile</li>
				</ol>
			</div>

			<div>
				<h3>My top spoken lang</h3>
				<ol>
					<li>Finnish</li>
					<li>English</li>
					<li>Russian</li>
					<li>Estonian</li>
					<li>Swedish</li>
				</ol>
			</div>
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
		<a href="#home">Back to TOP ^</a>
	</footer>
</main>

<style>
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
</style>
