import { naturals } from "./1-17.naturals-iterable-iterator";
import { forEach } from "./1-35.forEach";
import { map } from "./1-37.map";
import { filter } from "./1-40.filter";

forEach(
  console.log,
  map(
    (x) => x * 10,
    filter((x) => x % 2 === 1, naturals(5))
  )
);
