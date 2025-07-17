import { filter } from './3-32.lazy-evaluation-functions';

export const head = <A>(iterable: Iterable<A>): A | undefined =>
  iterable[Symbol.iterator]().next().value;

const find = <A>(
  f: (value: A) => boolean,
  iterable: Iterable<A>
): A | undefined => head(filter(f, iterable));

const result = find((a) => a > 2, [1, 2, 3, 4]);
console.log(result);
