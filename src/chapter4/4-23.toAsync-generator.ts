export async function* toAsync<T>(
  iterable: Iterable<T | Promise<T>>
): AsyncIterableIterator<Awaited<T>> {
  for await (const value of iterable) {
    yield value;
  }
}

async function test() {
  const asyncIterable = toAsync([1]);
  const asyncIterator = asyncIterable[Symbol.asyncIterator]();
  await asyncIterator.next().then(({ value }) => console.log(value));

  const asyncIterable2 = toAsync([Promise.resolve(2)]);
  const asyncIterator2 = asyncIterable2[Symbol.asyncIterator]();
  await asyncIterator2.next().then(({ value }) => console.log(value));
}

test();
