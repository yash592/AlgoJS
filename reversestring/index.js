// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


const reverseOne = (str) => {
	let split = str.split("") // splits word and pushes it into an array
	// console.log(split)
	let reverse = split.reverse()
	let reversedWord = reverse.join('');
	return reversedWord	 

}

console.log(reverseOne('BumBum'))

var wordArray = []

function reverseTwo(str) {

	var reversed = "";
		
	for (var i = str.length - 1;  i >= 0; i--) {
		reversed += str[i];
		
	}

	return reversed;

}

console.log(reverseTwo('Apple'))





module.exports = reverseOne;
