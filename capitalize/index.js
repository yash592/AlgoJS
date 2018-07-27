// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	const words = [];

	for(let letter of str.split(" ")) {
		
		words.push(letter[0].toUpperCase() + letter.slice(1))
	}

	console.log(words.join(' '));

}


capitalize('a short sentence')

function capitalizeOne(str) {

	let firstLetter = str[0].toUpperCase();

	for (var i = 1; i < str.length; i++ ) {

		if(str[i-1] === ' ') {
			firstLetter += str[i].toUpperCase();			
		}

		else {
			firstLetter += str[i];
		}

	}

	console.log(firstLetter)

}

capitalizeOne('a short sentence')

module.exports = capitalize;
