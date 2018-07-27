// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

	const arr = ['a', 'e', 'i', 'o', 'u'];

	let wordOne = str.replace(/[^\w]/g, "").toLowerCase().split('');
	console.log("Word: " + wordOne);
	// arr.push(wordOne.split(''));
	console.log(wordOne);

	let vowelCount = 0;

	for (var letters of wordOne) {
		if(arr.includes(letters)) {
			vowelCount++
		}
	}


	console.log(vowelCount)
}



vowels('Hi There!')

module.exports = vowels;
