function* reverse<T>(arrayLike: ArrayLike<T>): IterableIterator<T> {
  let index = arrayLike.length;

  while (index) {
    yield arrayLike[--index];
  }
}

const array = ["A", "B", "C", "D", "E", "F"];
const iter = reverse(array);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
