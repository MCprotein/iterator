import { fx } from '../chapter2/2-29.fx-helper';

export async function fromAsync<T>(
  iterable: Iterable<Promise<T>> | AsyncIterable<T>
): Promise<T[]> {
  const arr: T[] = [];
  for await (const a of iterable) {
    arr.push(a);
  }
  return arr;
}

const executeWithLimit = <T>(fs: (() => Promise<T>)[], limit: number) =>
  fx(fs)
    .chunk(limit)
    .map((fs) => fs.map((f) => f()))
    .map((ps) => Promise.all(ps))
    .to(fromAsync)
    .then((arr) => arr.flat());

const executeWithLimit2 = <T>(fs: (() => Promise<T>)[], limit: number) =>
  fx(fs)
    .map((f) => f())
    .chunk(limit)
    .map((ps) => Promise.all(ps))
    .to(fromAsync)
    .then((arr) => arr.flat());
