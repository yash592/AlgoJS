// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

swap = (a, b) => {
  let temp = a; // a = 1
  a = b; // a = 2
  b = temp; // b = 1
}

// console.log(swap(1,2));


bubbleSort = (arr) => {
  const len = arr.length;
  for(i=0; i < len; i++) {
    for(j=0; j < (len-i-1); j++) {
      if(arr[j] > arr[j+1]) {
        let t = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = t
      }
    }
  }
  return arr;
}


console.log(bubbleSort(arr))

selectionSort = (arr) => {

}

mergeSort = (arr) => {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
