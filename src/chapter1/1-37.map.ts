import { naturals } from "./1-17.naturals-iterable-iterator";
import { forEach } from "./1-35.forEach";

export function* map<A, B>(
  f: (value: A) => B,
  iterable: Iterable<A>
): IterableIterator<B> {
  for (const value of iterable) {
    yield f(value);
  }
}

const array = [1, 2, 3];
const mapped = map((x) => x * 2, array);
console.log([...mapped]);

console.log("mapped2");
const mapped2 = map((x) => x * 3, naturals(3));
forEach(console.log, mapped2);
