import { fx } from '../chapter2/2-29.fx-helper';

console.log('start');
const iterable = fx([1, 2, 3, 4, 5])
  .filter((a) => a % 2 === 1)
  .map((a) => a * a)
  .take(2);

for (const a of iterable) {
  console.log('result: ', a);
  console.log('---');
}

console.log('end');
