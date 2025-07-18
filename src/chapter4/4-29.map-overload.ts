import { mapAsync } from './4-25.mapSync-mapAsync';
import { mapSync } from './4-25.mapSync-mapAsync';

export function isIterable<T = unknown>(
  a: Iterable<T> | unknown
): a is Iterable<T> {
  return typeof a?.[Symbol.iterator] === 'function';
}

export function map<A, B>(
  f: (a: A) => B,
  iterable: Iterable<A>
): IterableIterator<B>;
export function map<A, B>(
  f: (a: A) => B,
  asyncIterable: AsyncIterable<A>
): AsyncIterableIterator<Awaited<B>>;
export function map<A, B>(
  f: (a: A) => B,
  iterable: Iterable<A> | AsyncIterable<A>
): IterableIterator<B> | AsyncIterableIterator<Awaited<B>> {
  return isIterable(iterable) ? mapSync(f, iterable) : mapAsync(f, iterable);
}
