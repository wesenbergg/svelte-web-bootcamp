<!-- 
   JS tehtäviä osa 3: Tietorakenteet

   1. Tee päivän ruokalista jossa:
        - h2-otsikko "Päivän ruoka"
        - ruokalistan päivät on h3-otsikolla
        - paaruoka, keitto ja jalkkari on listattuna <ul>-listaan
        - käytä apuna päivänRuokalista muuttujaa
   2. Tee viikon ruokalista jossa:
        - h2-otsikko "Viikon ruokalista"
        - ruokalistan päivät on h3-otsikolla
        - paaruoka, keitto ja jalkkari on listattuna <ul>-listaan
        - käytä toistorakennetta ja ruokalista muuttujaa alla.
    3. Tee lista valtioista:
        - Otsikoi h2 "Valtiot"
        - käytä data kansiossa valtiot.json tiedostoa
        - Käytä h3 otsikkoa valtion nimissä
        - Luettele loput attribuutit haluamallasi tavalla
-->

<script>
	let paivanRuokalista = {
		paiva: 'Maanantai',
		paaruoka: 'Makaroonilaatikko',
		keitto: 'Porkkanasose',
		jalkkari: 'Tiramisu'
	};
	let viikonRuokalista = [
		{
			paiva: 'Maanantai',
			paaruoka: 'Makaroonilaatikko',
			keitto: 'Porkkanasose',
			jalkkari: 'Tiramisu'
		},
		{
			paiva: 'Tiistai',
			paaruoka: 'Kinkkukiusaus',
			keitto: 'Pinaattikeitto',
			jalkkari: 'Granola'
		},
		{
			paiva: 'Keskiviikko',
			paaruoka: 'Pinaattiohukaiset',
			keitto: 'Jauhelihakeitto',
			jalkkari: 'Jugurtti'
		},
		{
			paiva: 'Torstai',
			paaruoka: 'Hernekeitto',
			keitto: 'Hernekeitto',
			jalkkari: 'Pannukakku'
		},
		{
			paiva: 'Perjantai',
			paaruoka: 'Spagetti Bolognese',
			keitto: 'Kanakeitto',
			jalkkari: 'Mousse'
		}
	];
	import valtiot from '$lib/_data/valtiot.json';
</script>

<section>
	<!-- Renderöi ensimmäinen tehtävä tähän -->
</section>

<section>
	<!-- Renderöi toinen tehtävä tähän -->
</section>

<section>
	<!-- Renderöi kolmas tehtävä tähän -->
</section>
