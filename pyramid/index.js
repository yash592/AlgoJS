// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {

	const mid = Math.floor((2*n-1)/2);


	for(r=0; r<n; r++) {
		let pyr = '';
		for(c = 0; c < 2*n-1; c++) {
			if(c >= mid - r && c <= mid + r ) {
				pyr += '$'
			} else {
				pyr += '.'
			}
		}

		console.log(pyr)
	}

	
}

pyramid(4)
// pyramid(3)
// pyramid(4)

module.exports = pyramid;
