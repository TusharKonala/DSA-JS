function isPowerOfTwo(input) {
  let res = 2;
  if (input === 1 || input === 2) {
    return true;
  }
  while (res < input) {
    res *= 2;
  }
  if (res === input) {
    return true;
  } else {
    return false;
  }
}

console.log(isPowerOfTwo(8));

// Big-O: O(logn)
