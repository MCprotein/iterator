import { fx } from '../chapter2/2-29.fx-helper';
import { take } from '../chapter3/3-32.lazy-evaluation-functions';

export function* chunk<T>(
  size: number,
  iterable: Iterable<T>
): IterableIterator<T[]> {
  const iterator = iterable[Symbol.iterator]();
  while (true) {
    const arr = [
      ...take(size, {
        [Symbol.iterator]() {
          return iterator;
        }
      })
    ];
    if (arr.length) yield arr;
    if (arr.length < size) break;
  }
}

console.log([...chunk(2, [1, 2, 3, 4, 5])]);

fx([1, 2, 3, 4, 5])
  .chunk(2)
  .map((arr) => arr.map((a) => a * 10))
  .forEach((arr) => console.log(arr));
