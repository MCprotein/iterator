import { isIterable } from './4-29.map-overload';

function reduceSync<A, Acc>(
  f: (acc: Acc, a: A) => Acc,
  acc: Acc,
  iterable: Iterable<A>
): Acc {
  for (const a of iterable) {
    acc = f(acc, a);
  }
  return acc;
}

async function reduceAsync<A, Acc>(
  f: (acc: Acc, a: A) => Acc | Promise<Acc>,
  acc: Acc,
  asyncIterable: AsyncIterable<A>
): Promise<Acc> {
  for await (const a of asyncIterable) {
    acc = await f(acc, a);
  }
  return acc;
}

export function reduce<A, Acc>(
  f: (acc: Acc, a: A) => Acc,
  acc: Acc,
  iterable: Iterable<A>
): Acc;
export function reduce<A, Acc>(
  f: (acc: Acc, a: A) => Acc | Promise<Acc>,
  acc: Acc,
  asyncIterable: AsyncIterable<A>
): Promise<Acc>;
export function reduce<A, Acc>(
  f: any,
  acc: Acc,
  iterable: Iterable<A> | AsyncIterable<A>
): Acc | Promise<Acc> {
  return isIterable(iterable)
    ? reduceSync(f, acc, iterable)
    : reduceAsync(f, acc, iterable);
}
