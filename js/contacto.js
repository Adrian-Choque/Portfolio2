superplaceholder({
	el: document.querySelector('.text1'),
	sentences: [ 'Escribe tu Nombre de Usuario', 'Por Favor'],
	options: {

		letterDelay:90, 
		sentenceDelay: 500,
		startOnFocus: false,
		loop: true,
		shuffle: false,
		showCursor: true,
		cursor: '|'
	}
});

superplaceholder({
	el: document.querySelector('.text2'),
	sentences: [ 'digita tu asunto'],
	options: {

		letterDelay:90,
		sentenceDelay: 500,
		startOnFocus: false,
		loop: true,
		shuffle: false,
		showCursor: true,
		cursor: '|'
	}
});
superplaceholder({
	el: document.querySelector('.text3'),
	sentences: [ 'Digita tu correo'],
	options: {

		letterDelay:90,
		sentenceDelay: 500,
		startOnFocus: false,
		loop: true,
		shuffle: false,
		showCursor: true,
		cursor: '|'
	}
});
superplaceholder({
	el: document.querySelector('.text4'),
	sentences: [ 'Escribe tu mensaje'],
	options: {

		letterDelay:90,
		sentenceDelay: 500,
		startOnFocus: false,
		loop: true,
		shuffle: false,
		showCursor: true,
		cursor: '|'
	}
});