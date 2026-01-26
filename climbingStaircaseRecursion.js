function climbingStaircase(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  const waysToClimb = climbingStaircase(n - 1) + climbingStaircase(n - 2);
  return waysToClimb;
}

console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));

// Big-O: O(2^n)
