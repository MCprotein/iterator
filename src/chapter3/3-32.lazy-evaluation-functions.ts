export function* filter<A>(
  f: (value: A) => boolean,
  iterable: Iterable<A>
): IterableIterator<A> {
  const iterator = iterable[Symbol.iterator]();
  while (true) {
    console.log('filter');
    const { value, done } = iterator.next();
    if (done) break;
    console.log('filter value f(value): ', value, f(value));
    if (f(value)) yield value;
  }
}

export function* map<A, B>(
  f: (a: A) => B,
  iterable: Iterable<A>
): IterableIterator<B> {
  const iterator = iterable[Symbol.iterator]();
  while (true) {
    console.log('map');
    const { value, done } = iterator.next();
    if (done) break;
    console.log('map value f(value): ', value, f(value));
    yield f(value);
  }
}

export function* take<A>(
  limit: number,
  iterable: Iterable<A>
): IterableIterator<A> {
  const iterator = iterable[Symbol.iterator]();
  while (true) {
    console.log('take limit: ', limit);
    const { value, done } = iterator.next();
    if (done) break;
    console.log('take value: ', value);
    yield value;
    if (--limit === 0) break;
  }
}
