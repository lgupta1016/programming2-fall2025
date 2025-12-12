
function getResults() {

	let Maldives = 0
	let Canada = 0
	let Italy = 0
	let Japan = 0

// First Question

	let spa = document.getElementById('spa');
	if(spa.checked) { 
		Maldives = Maldives + 1;

	}

	let cabin = document.getElementById('cabin');
	if(cabin.checked) {
		Canada = Canada + 1;
	}

	let villa = document.getElementById('villa');
	if(villa.checked) {
		Italy = Italy + 1;
	}

	let penthouse = document.getElementById('penthouse');
	if(penthouse.checked) {
		Japan = Japan + 1;
	}

// Second Question

	let lounging = document.getElementById('lounging');
	if(lounging.checked) { 
		Maldives = Maldives + 1;

	}

	let hiking = document.getElementById('hiking');
	if(hiking.checked) {
		Canada = Canada + 1;
	}

	let horseback = document.getElementById('horseback');
	if(horseback.checked) {
		Italy = Italy + 1;
	}

	let exploring = document.getElementById('exploring');
	if(exploring.checked) {
		Japan = Japan + 1;
	}

// Third question

	let seafood = document.getElementById('seafood');
	if(seafood.checked) { 
		Maldives = Maldives + 1;

	}

	let comfort = document.getElementById('comfort');
	if(comfort.checked) {
		Canada = Canada + 1;
	}

	let leisurely = document.getElementById('leisurely');
	if(leisurely.checked) {
		Italy = Italy + 1;
	}

	let fancy = document.getElementById('fancy');
	if(fancy.checked) {
		Japan = Japan + 1;
	}

// Fourth Question

	let relaxation = document.getElementById('relaxation');
	if(relaxation.checked) { 
		Maldives = Maldives + 1;

	}

	let cozy = document.getElementById('cozy');
	if(cozy.checked) {
		Canada = Canada + 1;
	}

	let stargazing = document.getElementById('stargazing');
	if(stargazing.checked) {
		Italy = Italy + 1;
	}

	let nightlife = document.getElementById('nightlife');
	if(nightlife.checked) {
		Japan = Japan + 1;
	}

	if (Maldives > Canada && Maldives > Italy && Maldives > Japan){
		document.getElementById("maldives").style.display= "block"
		document.getElementById("body").style.backgroundColor = "Gold"
		const audio = new Audio('Peaceful.mp3');
    	audio.play();

	}

	if (Canada > Maldives && Canada > Italy && Canada > Japan){
		document.getElementById("canada").style.display= "block"
		document.getElementById("body").style.backgroundColor = "skyblue"
		const audio = new Audio('Canada.mp3');
    	audio.play();
	}

	if (Italy > Maldives && Italy > Canada && Italy > Japan){
		document.getElementById("italy").style.display= "block"
		document.getElementById("body").style.backgroundColor = "lightgreen"
		const audio = new Audio('Italy.mp3');
    	audio.play();
	}

	if (Japan > Maldives && Japan > Italy && Japan > Canada){
		document.getElementById("japan").style.display= "block"
		document.getElementById("body").style.backgroundColor = "purple"
		const audio = new Audio('Tokyo.mp3');
    	audio.play();
	}
}

	


