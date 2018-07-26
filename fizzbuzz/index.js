// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz



// console.log(randomArray)

function fizzBuzz(n) {

	if(n%3===0 && n%5===0){
		console.log("FizzBuzz")
	}

	else if(n%5===0) {
		console.log("Buzz")
	}

	else if(n%3===0) {
		console.log("Fizz")
	}
}

fizzBuzz(15);
fizzBuzz(3);
fizzBuzz(5);

module.exports = fizzBuzz;
