import { delay } from './4-1.delay';
import { toAsync } from './4-23.toAsync-generator';

export function* filterSync<A>(
  f: (a: A) => boolean,
  iterable: Iterable<A>
): IterableIterator<A> {
  for (const value of iterable) {
    if (f(value)) {
      yield value;
    }
  }
}

export async function* filterAsync<A>(
  f: (a: A) => boolean | Promise<boolean>,
  asyncIterable: AsyncIterable<A>
): AsyncIterableIterator<A> {
  for await (const value of asyncIterable) {
    if (await f(value)) {
      yield value;
    }
  }
}

async function main() {
  //   for await (const a of filterAsync(
  //     (a: number) => a % 2 === 1,
  //     toAsync([1, 2, 3])
  //   )) {
  //     console.log(a);
  //   }

  for await (const a of filterAsync(
    (a: number) => delay(100, a % 2 === 1),
    toAsync([1, 2, 3])
  )) {
    console.log(a);
  }
}
main();
