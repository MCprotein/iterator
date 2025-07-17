import { fx } from '../chapter2/2-29.fx-helper';
import { isOdd } from './3-50.every';

export function some<A>(f: (a: A) => boolean, iterable: Iterable<A>): boolean {
  return fx(iterable)
    .map(f)
    .filter((a) => a)
    .take(1)
    .reduce((a, b) => a || b, false);
}

console.log(some(isOdd, [2, 5, 6]));
console.log(some(isOdd, [2, 4, 6]));
