function binarySearch(arr, left, right, target) {
  if (left > right) return -1;

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid;
  else if (arr[mid] < target) {
    left = mid + 1;
    return binarySearch(arr, left, right, target);
  } else {
    right = mid - 1;
    return binarySearch(arr, left, right, target);
  }
}

const arr = [-5, 2, 4, 6, 10];
console.log(binarySearch(arr, 0, arr.length - 1, 6));
console.log(binarySearch(arr, 0, arr.length - 1, 20));

// Big-O = O(logn)
