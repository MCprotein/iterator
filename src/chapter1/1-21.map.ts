const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

const mapIterator = map[Symbol.iterator]();

console.log(mapIterator.next());
console.log(mapIterator.next());
console.log(mapIterator.next());
console.log(mapIterator.next());

for (const [key, value] of map) {
  console.log(key, value);
}
