export function reverse<T>(arrayLike: ArrayLike<T>): Iterator<T> {
  let index = arrayLike.length;

  return {
    next() {
      if (index === 0) {
        return {
          value: undefined,
          done: true,
        };
      }

      return {
        value: arrayLike[--index],
        done: false,
      };
    },
  };
}

const array = ["A", "B"];
const reversed = reverse(array);
console.log(array);

console.log(reversed.next());
console.log(reversed.next());
