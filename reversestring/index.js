// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str) {
	var split = str.split("") // splits word and pushes it into an array
	// console.log(split)
	var reverse = split.reverse()
	var reversedWord = reverse.join('');
	return reversedWord	 

}

console.log(reverse('Arpit'))


module.exports = reverse;
