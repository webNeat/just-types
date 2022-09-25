import {Equal} from 'expect-type'
import {Is} from './Is'

type RangeFromZero<Last extends number, Counter extends any[] = []> = Counter['length'] extends Last
  ? Last
  : Counter['length'] | RangeFromZero<Last, [1, ...Counter]>

export type Range<First extends number, Last extends number> =
  | First
  | Exclude<RangeFromZero<Last>, RangeFromZero<First>>

type Tests = [
  Is<Equal<Range<3, 3>, 3>>,
  Is<Equal<Range<4, 7>, 4 | 5 | 6 | 7>>,
  Is<Equal<Range<0, 5>, 0 | 1 | 2 | 3 | 4 | 5>>
]
