import { forEach } from "../chapter1/1-35.forEach";
import { map } from "../chapter1/1-37.map";
import { filter } from "../chapter1/1-40.filter";
import { fx } from "./2-29.fx-helper";
import { reduce } from "./2-22.reduce-overload";

export class FxIterable<A> {
  constructor(private iterable: Iterable<A>) {}

  [Symbol.iterator]() {
    return this.iterable[Symbol.iterator]();
  }

  map<B>(f: (a: A) => B): FxIterable<B> {
    return fx(map((a) => f(a), this.iterable));
  }

  filter(f: (a: A) => boolean): FxIterable<A> {
    return fx(filter(f, this.iterable));
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
    return fx(f(this));
  }
}

const mapped = new FxIterable(["a", "b"])
  .map((a) => a.toUpperCase())
  .map((b) => b + b)
  .toArray()
  .sort();

fx(["a", "B"])
  .map((a) => a.toUpperCase())
  .map((a) => a + a)
  .forEach((a) => console.log(a));

fx(["a", "B"])
  .map((a) => a.toUpperCase())
  .map((a) => a + a)
  .to((iterable) => [...iterable])
  .sort();

fx(["a", "B"])
  .map((a) => a.toUpperCase())
  .map((a) => a + a)
  .to((iterable) => new Set(iterable))
  .add("10");

fx([5, 2, 3, 1, 4, 5, 3])
  .filter((n) => n % 2 === 1)
  .map((n) => n * 10)
  .chain((iterable) => new Set(iterable))
  .reduce((a, b) => a + b);
