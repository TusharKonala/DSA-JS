const arr = [-5, 2, 4, 6, 10];

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch(arr, 10));
console.log(binarySearch(arr, 6));
console.log(binarySearch(arr, 20));

// Big-O = O(logn)
