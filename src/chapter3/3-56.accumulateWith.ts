import { fx } from '../chapter2/2-29.fx-helper';

export function accumulateWith<A>(
  accumulator: (a: boolean, b: boolean) => boolean,
  acc: boolean,
  taking: (a: boolean) => boolean,
  f: (a: A) => boolean,
  iterable: Iterable<A>
): boolean {
  return fx(iterable).map(f).filter(taking).take(1).reduce(accumulator, acc);
}

export function every<A>(f: (a: A) => boolean, iterable: Iterable<A>): boolean {
  return accumulateWith(
    (a, b) => a && b,
    true,
    (a) => !a,
    f,
    iterable
  );
}

export function some<A>(f: (a: A) => boolean, iterable: Iterable<A>): boolean {
  return accumulateWith(
    (a, b) => a || b,
    false,
    (a) => a,
    f,
    iterable
  );
}
