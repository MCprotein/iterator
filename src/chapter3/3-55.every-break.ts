import { fx } from '../chapter2/2-29.fx-helper';
import { isOdd } from './3-50.every';

export function every<A>(f: (a: A) => boolean, iterable: Iterable<A>): boolean {
  return fx(iterable)
    .map(f)
    .filter((a) => !a)
    .take(1)
    .reduce((a, b) => a && b, true);
}

console.log(every(isOdd, [1, 3, 5]));
console.log(every(isOdd, [1, 2, 5]));
