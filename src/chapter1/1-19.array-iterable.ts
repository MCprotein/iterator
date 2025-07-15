const array = [1, 2, 3];
const arrayIterator = array[Symbol.iterator]();

console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());

for (const value of array) {
  console.log(value);
}
