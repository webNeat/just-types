import { Decrement, Range } from '../number'
import { ZeroTo100 } from '../constants'
import {Equal, Is} from '../test'

// @ts-ignore
export type Insert<T extends any[] & {length: ZeroTo100}, Item, Index extends number = T['length']> =
  Index extends 0 ? [Item, ...T] :
  // @ts-ignore
  T extends [infer A, ...infer Rest] ? [A, ...Insert<Rest, Item, Decrement<Index>>] :
  [...T, Item]

type Tests = [
  Is<Equal<Insert<['a', 'b'], 'x', 0>, ['x', 'a', 'b']>>,
  Is<Equal<Insert<['a', 'b'], 'x', 1>, ['a', 'x', 'b']>>,
  Is<Equal<Insert<['a', 'b'], 'x', 2>, ['a', 'b', 'x']>>,
  Is<Equal<Insert<['a', 'b'], 'x', 0 | 2>, ['x', 'a', 'b'] | ['a', 'b', 'x']>>,
]