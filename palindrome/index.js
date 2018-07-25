// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	letLowerCase = str.toLowerCase();
	console.log(letLowerCase)
	let reversed = letLowerCase.split('').reverse().join('').toLowerCase();
	console.log(reversed)
	

	if(reversed === letLowerCase) {
		console.log("Yes lad")
	}
	else {
		console.log("No")
	}
}
palindrome('yash');

module.exports = palindrome;
