function* generator() {
  yield 1;
  console.log("hi");
  yield 2;
  yield 3;
}

const iter = generator();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
