import { isIterable, map } from './4-29.map-overload';
import { filter } from './4-32.filter-overload';
import { FxIterable } from '../chapter2/2-28.fxiterable';
import { toAsync } from './4-23.toAsync-generator';
import { fromAsync } from './4-18.executeWithLimit-chunk';

export function fx<A>(iterable: Iterable<A>): FxIterable<A>;
export function fx<A>(asyncIterable: AsyncIterable<A>): FxAsyncIterable<A>;
export function fx<A>(
  iterable: Iterable<A> | AsyncIterable<A>
): FxIterable<A> | FxAsyncIterable<A> {
  return isIterable(iterable)
    ? new FxIterable(iterable)
    : new FxAsyncIterable(iterable);
}

export class FxIterableV2<A> extends FxIterable<A> implements Iterable<A> {
  constructor(protected iterable: Iterable<A>) {
    super(iterable);
  }

  [Symbol.iterator]() {
    return this.iterable[Symbol.iterator]();
  }

  map<B>(f: (a: A) => B): FxIterableV2<B> {
    return new FxIterableV2(map(f, this));
  }

  filter(f: (a: A) => boolean): FxIterableV2<A> {
    return new FxIterableV2(filter(f, this));
  }

  toArray(): A[] {
    return [...this];
  }

  toAsync(): FxAsyncIterable<Awaited<A>> {
    return fx(toAsync(this));
  }
}
export class FxAsyncIterable<A> implements AsyncIterable<A> {
  constructor(protected asyncIterable: AsyncIterable<A>) {}

  [Symbol.asyncIterator]() {
    return this.asyncIterable[Symbol.asyncIterator]();
  }

  map<B>(f: (a: A) => B): FxAsyncIterable<Awaited<B>> {
    return new FxAsyncIterable(map(f, this));
  }

  filter(f: (a: A) => boolean): FxAsyncIterable<A> {
    return new FxAsyncIterable(filter(f, this));
  }

  toArray(): Promise<A[]> {
    return fromAsync(this);
  }
}
