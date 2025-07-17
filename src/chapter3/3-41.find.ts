function find<A>(
  f: (value: A) => boolean,
  iterable: Iterable<A>
): A | undefined {
  const iterator = iterable[Symbol.iterator]();
  while (true) {
    const { value, done } = iterator.next();
    if (done) break;
    if (f(value)) return value;
  }
  return undefined;
}

const result = find((a) => a > 2, [1, 2, 3, 4]);
console.log(result);
