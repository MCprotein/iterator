import { reverse } from "./1-5.reverse";

function map<A, B>(
  transform: (value: A) => B,
  iterator: Iterator<A>
): Iterator<B> {
  return {
    next(): IteratorResult<B> {
      const { value, done } = iterator.next();

      return done ? { value, done } : { value: transform(value), done };
    },
  };
}

// 1-9
const array = ["A", "B", "C", "D", "E", "F"];
const iterator = map((str) => str.toLowerCase(), reverse(array));
console.log(iterator.next());
console.log(iterator.next());
