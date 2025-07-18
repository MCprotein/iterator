import { forEach } from '../chapter1/1-35.forEach';
import { reduce } from './2-22.reduce-overload';
// import { map } from '../chapter1/1-37.map';
// import { filter } from '../chapter1/1-40.filter';
// import { take } from '../chapter3/3-4.sum-of-squares-of-odd-numbers-take';
import { filter, map, take } from '../chapter3/3-32.lazy-evaluation-functions';
import { chunk } from '../chapter4/4-17.chunk';

export class FxIterable<A> {
  constructor(protected iterable: Iterable<A>) {}

  [Symbol.iterator]() {
    return this.iterable[Symbol.iterator]();
  }

  map<B>(f: (a: A) => B): FxIterable<B> {
    return new FxIterable(map((a) => f(a), this.iterable));
  }

  filter(f: (a: A) => boolean): FxIterable<A> {
    return new FxIterable(filter(f, this.iterable));
  }

  forEach(f: (a: A) => void): void {
    return forEach(f, this.iterable);
  }

  reduce<Acc>(f: (acc: Acc, a: A) => Acc, acc: Acc): Acc;
  reduce<Acc>(f: (a: A, b: A) => Acc): Acc;
  reduce<Acc>(f: (acc: Acc | A, a: A) => Acc, acc?: Acc): Acc {
    return acc === undefined
      ? reduce(f, this.iterable)
      : reduce(f, acc, this.iterable);
  }

  toArray(): A[] {
    return [...this];
  }

  reject(f: (a: A) => boolean): FxIterable<A> {
    return this.filter((a) => !f(a));
  }

  to<R>(converter: (iterable: Iterable<A>) => R): R {
    return converter(this.iterable);
  }

  chain<B>(f: (iterable: this) => Iterable<B>): FxIterable<B> {
    return new FxIterable(f(this));
  }

  take(limit: number): FxIterable<A> {
    return new FxIterable(take(limit, this));
  }

  chunk(size: number): FxIterable<A[]> {
    return new FxIterable(chunk(size, this));
  }
}

const mapped = new FxIterable(['a', 'b'])
  .map((a) => a.toUpperCase())
  .map((b) => b + b)
  .toArray()
  .sort();

new FxIterable(['a', 'B'])
  .map((a) => a.toUpperCase())
  .map((a) => a + a)
  .forEach((a) => console.log(a));

new FxIterable(['a', 'B'])
  .map((a) => a.toUpperCase())
  .map((a) => a + a)
  .to((iterable) => [...iterable])
  .sort();

new FxIterable(['a', 'B'])
  .map((a) => a.toUpperCase())
  .map((a) => a + a)
  .to((iterable) => new Set(iterable))
  .add('10');

new FxIterable([5, 2, 3, 1, 4, 5, 3])
  .filter((n) => n % 2 === 1)
  .map((n) => n * 10)
  .chain((iterable) => new Set(iterable))
  .reduce((a, b) => a + b);
