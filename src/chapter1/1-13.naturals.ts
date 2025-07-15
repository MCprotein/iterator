function* naturals() {
  let n = 1;
  while (true) {
    yield n++;
  }
}

const iter = naturals();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
