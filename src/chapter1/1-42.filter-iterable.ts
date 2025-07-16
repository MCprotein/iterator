function filter<A, B>(
  f: (value: A) => B,
  iterable: Iterable<A>
): IterableIterator<A> {
  const iterator = iterable[Symbol.iterator]();
  return {
    next() {
      const { done, value } = iterator.next();

      if (done || f(value)) return { done, value };

      return this.next();
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}

console.log(...filter((x) => x % 2 === 1, [1, 2, 3, 4, 5]));

function filterDoWhile<A, B>(
  f: (value: A) => B,
  iterable: Iterable<A>
): IterableIterator<A> {
  const iterator = iterable[Symbol.iterator]();
  return {
    next() {
      do {
        const { done, value } = iterator.next();
        if (done || f(value)) return { done, value };
      } while (true);
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
function filterWhile<A, B>(
  f: (value: A) => B,
  iterable: Iterable<A>
): IterableIterator<A> {
  const iterator = iterable[Symbol.iterator]();
  return {
    next() {
      while (true) {
        const { done, value } = iterator.next();
        if (done) return { done, value };
        if (f(value)) return { done, value };
      }
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
