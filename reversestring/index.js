// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const wordArray = [];

function reverse(str) {
	var split = str.split("")
	// console.log(split)
	var reverse = split.reverse()
	var final = reverse.join('');
	console.log(final)	 

}

reverse('apples')


module.exports = reverse;
