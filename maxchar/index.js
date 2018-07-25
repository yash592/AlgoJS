// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

var maxObj = {};


function maxChar(str) {

	for( let char of str ) {
		if (!maxObj[char]) {
			maxObj[char] = 1;
		}

		else {
			maxObj[char]++;
		}
	}
}

console.log(maxObj)

maxChar("Hello")

module.exports = maxChar;
