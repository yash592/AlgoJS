// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"




function maxChar(str) {

	const word = str.split('');
	var count = 1;
	
	for(var i = 0; i < word.length; i++) {

		if (word[i] === word[i+1]) {
			count++;		

		}
		
		
	}

	return count;


}



console.log(maxChar("HHHello"))

module.exports = maxChar;
