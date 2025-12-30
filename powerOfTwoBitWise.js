function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitWise(8));
console.log(isPowerOfTwoBitWise(10));

// Binary representation of nos: 1010, & ensures that if two nos are
// 1 then result is 1 otherwise result is 0
// ie 1010 & 1000 = 1000 (first no. is 1)
// if a no. is a power of 2 then: n & n-1 will produce 0

// Big-O: O(1)
