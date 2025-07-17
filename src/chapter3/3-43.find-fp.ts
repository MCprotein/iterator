import { filter } from './3-32.lazy-evaluation-funcitons';

function find<A>(
  f: (value: A) => boolean,
  iterable: Iterable<A>
): A | undefined {
  return filter(f, iterable).next().value;
}

const result = find((a) => a > 2, [1, 2, 3, 4]);
console.log(result);
