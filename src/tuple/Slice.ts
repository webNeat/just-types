import { Decrement, Range } from '../number'
import { ZeroTo100 } from '../constants'
import {Equal, Is} from '../test'

export type Slice<T extends any[] & {length: ZeroTo100}, Start extends ZeroTo100, Count extends ZeroTo100 = 100> =
  Count extends 0
    ? []
    : T extends [infer Head, ... infer Tail]
      ? Start extends 0
        // @ts-expect-error
        ? [Head, ...Slice<Tail, 0, Decrement<Count>>]
        // @ts-expect-error
        : Slice<Tail, Decrement<Start>, Count> 
      : []

type Tests = [
  Is<Equal<Slice<['a', 'b', 'c', 'd'], 0>, ['a', 'b', 'c', 'd']>>,
  Is<Equal<Slice<['a', 'b', 'c', 'd'], 2>, ['c', 'd']>>,
  Is<Equal<Slice<['a', 'b', 'c', 'd'], 1, 2>, ['b', 'c']>>,
  Is<Equal<Slice<['a', 'b', 'c', 'd'], 4>, []>>,
  Is<Equal<Slice<['a', 'b', 'c', 'd'], 2, 99>, ['c', 'd']>>,
]
