function naturals(end = Infinity): Iterator<number> {
  let n = 1;
  return {
    next(): IteratorResult<number> {
      return n <= end
        ? { value: n++, done: false }
        : { value: undefined, done: true };
    },
  };
}

const iterator = naturals(3);

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().done);
