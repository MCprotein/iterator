import { map } from "../chapter1/1-37.map";
import { filter } from "../chapter1/1-40.filter";
import { reduce } from "../chapter2/2-21.reduce";

export function* take<A>(
  limit: number,
  iterable: Iterable<A>
): IterableIterator<A> {
  const iterator = iterable[Symbol.iterator]();
  while (true) {
    const { value, done } = iterator.next();
    if (done) break;
    yield value;
    if (--limit === 0) break;
  }
}

function sumOfSquaresOfOddNumbers(limit: number, list: number[]): number {
  return reduce(
    (a, b) => a + b,
    0,
    take(
      limit,
      map(
        (a) => a * a,
        filter((a) => a % 2 === 1, list)
      )
    )
  );
}

console.log(sumOfSquaresOfOddNumbers(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
