import { ArrayLikeIterator } from "./1-2.ArrayLike";

const array: Array<string> = ["a", "b", "c"];
const iterator2: Iterator<string> = new ArrayLikeIterator(array);

console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
