<!-- 
    JS tehtävä osa 4: Api kutsut

    Tutustu API kutsuihin oheisessa tehtävässä
    https://svelte.dev/repl/70e61d6cc91345cdaca2db9b7077a941?version=4.2.2

    1. Tee api kutsu https://api.kanye.rest :iin
    2. Tulosta palautettu teksti selaimessa
    3. Lisää nappi "PÄIVITÄ" jonka painalluksesta haetaan uusi anekdootti

 -->

<script>
	const data = hae();
	async function hae() {
		// kutsu https://api.kanye.rest tässä
	}
</script>

{#await data}
	<p>...waiting</p>
{:then data}
	<p><!-- vastaus tähän --></p>
{:catch error}
	<p>An error occurred!</p>
{/await}
