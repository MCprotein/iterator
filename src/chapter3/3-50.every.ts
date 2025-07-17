import { fx } from '../chapter2/2-29.fx-helper';

export const isOdd = (a: number) => a % 2 === 1;

export function every<A>(f: (a: A) => boolean, iterable: Iterable<A>): boolean {
  return fx(iterable)
    .map(f)
    .reduce((a, b) => a && b, true);
}

console.log(every(isOdd, [1, 3, 5]));
console.log(every(isOdd, [1, 2, 5]));
