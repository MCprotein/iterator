function* map<A, B>(
  f: (value: A) => B,
  iterable: Iterable<A>
): IterableIterator<B> {
  for (const value of iterable) {
    yield f(value);
  }
}

const array = [1, 2, 3, 4];
const mapped: IterableIterator<number> = map((x) => x * 2, array);
const iterator = mapped[Symbol.iterator]();

console.log(mapped.next().value);
console.log(iterator.next().value);
console.log([...iterator]);
