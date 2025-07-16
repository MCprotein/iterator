function map<A, B>(
  f: (value: A) => B,
  iterable: Iterable<A>
): IterableIterator<B> {
  const iterator = iterable[Symbol.iterator]();

  return {
    next() {
      const { value, done } = iterator.next();
      return done ? { done, value } : { done, value: f(value) };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}

const iterator = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();

const mapped = map((x) => x * 10, iterator);
console.log([...mapped]);
