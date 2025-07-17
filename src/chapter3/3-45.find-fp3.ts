import { fx } from '../chapter2/2-29.fx-helper';
import { head } from './3-44.find-fp2';

const find = <A>(
  f: (value: A) => boolean,
  iterable: Iterable<A>
): A | undefined => fx(iterable).filter(f).to(head);
