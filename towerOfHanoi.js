function TOH(n, rodA, rodB, rodC) {
  if (n > 0) {
    TOH(n - 1, rodA, rodC, rodB);
    console.log(`Move a disk from ${rodA} to ${rodC} `);
    TOH(n - 1, rodB, rodA, rodC);
  }
}

TOH(3, 1, 2, 3);
