const set = new Set([1, 2, 3]);
const setIterator = set[Symbol.iterator]();

console.log(setIterator.next());
console.log(setIterator.next());
console.log(setIterator.next());
console.log(setIterator.next());

for (const value of set) {
  console.log(value);
}
