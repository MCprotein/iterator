import { fx } from "../chapter2/2-29.fx-helper";

function sumOfSquaresOfOddNumbers(limit: number, list: number[]): number {
  return fx(list)
    .filter((a) => a % 2 === 1)
    .map((a) => a * a)
    .take(limit)
    .reduce((a, b) => a + b, 0);
}

console.log(sumOfSquaresOfOddNumbers(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
