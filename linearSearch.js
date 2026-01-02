const arr = [2, 5, 1, 0, 100, 8];

function linearSearch(t, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(0, arr));
console.log(linearSearch(7, arr));

// Big-O = O(n)
