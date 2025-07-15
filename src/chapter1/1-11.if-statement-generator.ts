function* generator(condition: boolean) {
  yield 1;
  if (condition) {
    yield 2;
  }
  yield 3;
}

const iter1 = generator(false);

console.log(iter1.next());
console.log(iter1.next());
console.log(iter1.next());

const iter2 = generator(true);

console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
