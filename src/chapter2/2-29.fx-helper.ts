import { FxIterable } from "./2-28.fxiterable";

export function fx<A>(iterable: Iterable<A>): FxIterable<A> {
  return new FxIterable(iterable);
}

const mapped2 = fx(["a", "b"])
  .map((a) => a.toUpperCase())
  .map((b) => b + b);
