function map(f, iterable) {
  const iterator = iterable[Symbol.iterator]();
  return {
    next() {
      console.log('map');
      const { done, value } = iterator.next();
      console.log('map value f(value): ', value, f(value));
      return done ? { done, value } : { done, value: f(value) };
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}

function take(limit, iterable) {
  const iterator = iterable[Symbol.iterator]();
  return {
    next() {
      if (limit === 0) return { done: true };
      console.log('take limit: ', limit);
      const { done, value } = iterator.next();
      if (done) return { done, value };
      limit--;
      console.log('take value: ', value);
      return { done, value };
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}

const mapped = map((a) => a * a, [10, 20, 30]);
const taked = take(2, mapped);
console.log(taked.next());
console.log(taked.next());
console.log(taked.next());
