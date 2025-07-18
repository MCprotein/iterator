import { delay } from './4-1.delay';

export function mapSync<A, B>(
  f: (a: A) => B,
  iterable: Iterable<A>
): IterableIterator<B> {
  const iterator = iterable[Symbol.iterator]();
  return {
    next() {
      const { done, value } = iterator.next();
      return done ? { done, value } : { done, value: f(value) };
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}

export function mapAsync<A, B>(
  f: (a: A) => B,
  asyncIterable: AsyncIterable<A>
): AsyncIterableIterator<Awaited<B>> {
  const asyncIterator = asyncIterable[Symbol.asyncIterator]();
  return {
    async next() {
      const { done, value } = await asyncIterator.next();
      return done ? { done, value } : { done, value: await f(value) };
    },
    [Symbol.asyncIterator]() {
      return this;
    }
  };
}

async function* strings(): AsyncIterableIterator<string> {
  yield delay(500, 'a');
  yield delay(200, 'a');
}

async function main() {
  const mapped = mapAsync((a) => a.toUpperCase(), strings());

  for await (const a of mapped) {
    console.log(a);
  }
}
main();
