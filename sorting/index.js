// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// console.log(swap(1,2));

bubbleSort = (arr) => {
  const len = arr.length;
  for(i=0; i < len; i++) {
    for(j=0; j < (len-i-1); j++) {
      if(arr[j] > arr[j+1]) {
        let t = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = t;
      }
    }
  }
  return arr;
}

// console.log(bubbleSort(arr))

////////////////////////////////////////////////////////////////////////////

selectionSort = (arr) => {
  const len = arr.length;
  for(i=0; i < len; i++) {
    let minEl = i;
    for(j=i+1; j < len; j++) {
      if(arr[j] < arr[minEl]) {
        minEl = j;
      }
    }
    if(minEl !== i) {
      let t = arr[minEl];
      arr[minEl]=arr[i];
      arr[i] = t;
    }

  }

  return arr;




}
console.log(selectionSort(arr));

////////////////////////////////////////////////////////////////////////////

mergeSort = (arr) => {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
