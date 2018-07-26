// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"




function maxChar(str) {

	let chars = {};
	let count = 0;
	let maxChar = '';

	for (let char of str) {
		if(!chars[char]) {
			chars[char] = 1;
		} else {
			chars[char]++
		}

		console.log( chars )
	}

	for (let keys in chars) {

		if(chars[keys] > count) {
			count = chars[keys];
			maxChar = keys

		}	


	}

	return maxChar;

	

}



console.log(maxChar("Hellllllo"))

module.exports = maxChar;
