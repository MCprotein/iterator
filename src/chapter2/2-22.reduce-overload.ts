function baseReduce<A, Acc>(
  f: (acc: Acc, a: A) => Acc,
  acc: Acc,
  iterator: Iterator<A>
): Acc {
  while (true) {
    const { done, value } = iterator.next();
    if (done) break;
    acc = f(acc, value);
  }
  return acc;
}

export function reduce<A, Acc>(
  f: (acc: Acc, a: A) => Acc,
  acc: Acc,
  iterable: Iterable<A>
): Acc;
export function reduce<A, Acc>(
  f: (a: A, b: A) => Acc,
  iterable: Iterable<A>
): Acc;
export function reduce<A, Acc>(
  f: (a: Acc | A, b: A) => Acc,
  accOrIterable: Acc | Iterable<A>,
  iterable?: Iterable<A>
): Acc {
  if (iterable === undefined) {
    const iterator = (accOrIterable as Iterable<A>)[Symbol.iterator]();
    const { done, value: acc } = iterator.next();
    if (done)
      throw new TypeError("'reduce' of empty iterable with no initial value");
    return baseReduce(f, acc, iterator) as Acc;
  }

  return baseReduce(f, accOrIterable as Acc, iterable[Symbol.iterator]());
}
