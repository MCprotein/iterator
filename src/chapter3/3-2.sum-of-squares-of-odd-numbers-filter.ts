import { filter } from "../chapter1/1-40.filter";

function sumOfSquaresOfOddNumbers(limit: number, list: number[]): number {
  let acc = 0;
  for (const a of filter((a) => a % 2 === 1, list)) {
    const b = a * a;
    acc += b;
    if (--limit === 0) break;
  }
  return acc;
}

console.log(sumOfSquaresOfOddNumbers(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
