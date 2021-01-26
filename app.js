const btn = document.getElementById('btn');
const excuse = document.getElementById('excuse');

btn.addEventListener('click', generateExcuse);

function generateExcuse(e) {
	e.preventDefault();

	excuse.innerHTML = excusePhrase();
}


function excusePhrase() {
	let who = ['The dog','My grandma','His turtle','My bird'];
	let action = ['ate','peed','crushed','broke'];
	let what = ['my homework', 'the keys', 'the car'];
	let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
	let phrase = '';

	phrase = `${who[getIndex(who.length)]} ${action[getIndex(action.length)]} ${what[getIndex(what.length)]} ${when[getIndex(when.length)]}`;

	return phrase;
}

function getIndex(max) {
	return Math.floor((Math.random() * max));
}