// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

	let wordOne = stringA.replace(/[^\w]/g, "").toLowerCase();
	
	let wordTwo = stringB.replace(/[^\w]/g, "").toLowerCase();

	let objOne = {};

	let objTwo = {};

	// let countOne =


	if (wordOne.length != wordTwo.length) {
		console.log("Not Anagrams")
	}

	else  {
		console.log(wordOne)
		for (var letters of wordOne) {
			if(!objOne[letters]) {
				objOne[letters] = 1;
			}

			else {
				objOne[letters]++
			}
			

		}

		console.log(objOne);
		
	}

	for (var letters of wordTwo) {
		if(!objTwo[letters]) {
			objTwo[letters] = 1;
		}

		else {
			objTwo[letters]++
		}
		

	}

	console.log(objTwo);
	
	if(objOne[letters] === objTwo[letters]) {
		console.log('Anagrams')
	}

	else {
		console.log("Not anagrams")
	}

}

anagrams('RAIL! SAFETY!', 'fairy tales')

module.exports = anagrams;
