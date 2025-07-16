import { forEach } from "./1-35.forEach";

function* map<A, B>(
  f: (value: A) => B,
  iterable: Iterable<A>
): IterableIterator<B> {
  const iterator = iterable[Symbol.iterator]();
  while (true) {
    const { value, done } = iterator.next();
    if (done) break;
    yield f(value);
  }
}

const mapped = map(
  ([k, v]) => `${k}: ${v}`,
  new Map([
    ["a", 1],
    ["b", 2],
  ])
);
forEach(console.log, mapped);
