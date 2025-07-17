import { fx } from '../chapter2/2-29.fx-helper';
import { isOdd } from './3-50.every';

console.log('🔍 every 함수 로직 분석');
console.log('======================\n');

// 케이스 1: 모든 값이 조건을 만족하는 경우
console.log('📊 케이스 1: every(isOdd, [1, 3, 5])');
console.log('----------------------------------');

const input1 = [1, 3, 5];
console.log('1. 입력:', input1);

const step1_1 = fx(input1).map(isOdd);
console.log('2. map(isOdd):', [...step1_1]);

const step1_2 = fx(input1)
  .map(isOdd)
  .filter((a) => !a);
console.log('3. filter((a) => !a):', [...step1_2]);

const step1_3 = fx(input1)
  .map(isOdd)
  .filter((a) => !a)
  .take(1);
console.log('4. take(1):', [...step1_3]);

const step1_4 = fx(input1)
  .map(isOdd)
  .filter((a) => !a)
  .take(1)
  .reduce((a, b) => a && b, true);
console.log('5. reduce((a, b) => a && b, true):', step1_4);

console.log('\n📊 케이스 2: 일부 값이 조건을 만족하지 않는 경우');
console.log('------------------------------------------------');

const input2 = [1, 2, 5];
console.log('1. 입력:', input2);

const step2_1 = fx(input2).map(isOdd);
console.log('2. map(isOdd):', [...step2_1]);

const step2_2 = fx(input2)
  .map(isOdd)
  .filter((a) => !a);
console.log('3. filter((a) => !a):', [...step2_2]);

const step2_3 = fx(input2)
  .map(isOdd)
  .filter((a) => !a)
  .take(1);
console.log('4. take(1):', [...step2_3]);

const step2_4 = fx(input2)
  .map(isOdd)
  .filter((a) => !a)
  .take(1)
  .reduce((a, b) => a && b, true);
console.log('5. reduce((a, b) => a && b, true):', step2_4);

console.log('\n🎯 핵심 포인트: 빈 배열에서 reduce 동작');
console.log('========================================');

// 빈 배열에서 reduce 테스트
const emptyArray: boolean[] = [];
const reduceResult = fx(emptyArray).reduce((a, b) => a && b, true);
console.log('빈 배열에서 reduce((a, b) => a && b, true):', reduceResult);

console.log('\n💡 결론:');
console.log('------');
console.log(
  '• 모든 값이 조건을 만족하면 → filter 후 빈 배열 → reduce에서 초기값 true 반환'
);
console.log(
  '• 하나라도 조건을 만족하지 않으면 → filter 후 false 존재 → take(1)로 첫 번째 false → reduce에서 true && false = false'
);
console.log('• 이것이 every 함수의 의도된 동작!');

// 실제 every 함수와 결과 비교
function every<A>(f: (a: A) => boolean, iterable: Iterable<A>): boolean {
  return fx(iterable)
    .map(f)
    .filter((a) => !a)
    .take(1)
    .reduce((a, b) => a && b, true);
}

console.log('\n✅ 최종 결과:');
console.log('every(isOdd, [1, 3, 5]):', every(isOdd, [1, 3, 5]));
console.log('every(isOdd, [1, 2, 5]):', every(isOdd, [1, 2, 5]));
