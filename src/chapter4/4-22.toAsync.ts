function toAsync<T>(
  iterable: Iterable<T | Promise<T>>
): AsyncIterable<Awaited<T>> {
  return {
    [Symbol.asyncIterator](): AsyncIterator<Awaited<T>> {
      const iterator = iterable[Symbol.iterator]();
      return {
        async next() {
          const { done, value } = iterator.next();
          return done ? { done, value } : { done, value: await value };
        }
      };
    }
  };
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
