const arr = [8, 20, -2, 4, -6];

function bubbleSort(arr) {
  let swap;
  for (let i = 0; i < arr.length; i++) {
    // Outer loop keeps track of total no. of passes
    // In each pass one no. will go to the end ie in its correct position

    swap = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let container = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = container;
        swap = true;
      }
    }
    if (!swap) {
      return arr;
    }
    // helps to break early ie if there were no swaps in the latest pass then it means that array is sorted
    // and hence break
  }
}

// Big-O: O(n^2)

console.log(bubbleSort(arr));
