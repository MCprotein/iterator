export function forEach<A, B>(f: (value: A) => void, iterable: Iterable<A>) {
  for (const value of iterable) {
    f(value);
  }
}

const array = [1, 2, 3];
forEach(console.log, array);
