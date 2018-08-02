// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

	const mat = [];

	for( i=0; i < n; i++) {
		mat.push([]);
		
	}

	let indexes = 1;
	let stCol = 0;
	let enCol = n-1;
	let stRow = 0;
	let enRow = n-1;

	while(stCol <= enCol && stRow <= enRow) {

		for(let j = stCol; j <= enCol; j++) {
			mat[stRow][j] = indexes;
			indexes++;
		}
		stRow++;

		for(let k = stRow; k <= enRow; k++) {
			mat[k][enCol] = indexes;
			indexes++;
		}
		enCol--;

		for(let l = enCol; l >= stCol; l--) {
			mat[enRow][l] = indexes;
			indexes++;
		}
		enRow--;

		for(let m = enRow; m >= stRow; m--) {
			mat[m][stCol] = indexes;
			indexes++;			
		}
		stCol++;

		
	}

	return mat;

		

}

console.log(matrix(3))
module.exports = matrix;
