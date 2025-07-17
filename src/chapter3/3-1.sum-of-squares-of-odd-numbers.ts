function sumOfSquaresOfOddNumbers(limit: number, list: number[]): number {
  let acc = 0;
  for (const a of list) {
    if (a % 2 === 1) {
      const b = a * a;
      acc += b;
      if (--limit === 0) break;
    }
  }
  return acc;
}

console.log(sumOfSquaresOfOddNumbers(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
