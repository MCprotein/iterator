import { delay } from './4-1.delay';

async function* stringAsyncTest(): AsyncIterableIterator<string> {
  yield delay(1000, 'a');

  const b = (await delay(500, 'b')) + 'c';

  yield b;
}

async function test() {
  const asyncIterator: AsyncIterableIterator<string> = stringAsyncTest();
  const result1 = await asyncIterator.next();
  console.log(result1.value);

  const result2 = await asyncIterator.next();
  console.log(result2.value);

  const { done } = await asyncIterator.next();
  console.log(done);
}

test();
