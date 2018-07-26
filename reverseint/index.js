// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

var reversedNumber = '';

function reverseInt(n) {

	
	// console.log(n)
	let splitNumber = n.toString().split('')
	// console.log(splitNumber)

	for (var i = splitNumber.length - 1; i >= 0; i-- ) {
		reversedNumber += splitNumber[i];
		
	}
	// if Math.sign()

	if (n < 0 ) {

		return parseInt(reversedNumber) * -1

	}	

	return parseInt(reversedNumber)

	
	
}

console.log(reverseInt(-90))
module.exports = reverseInt;
