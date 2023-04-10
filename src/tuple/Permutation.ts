import {Insert} from './Insert'
import { Range } from '../number'
import {Equal, Is} from '../test'
import { ZeroTo10, ZeroTo100 } from '../constants'

type InsertAnywhere<T extends any[] & {length: ZeroTo100}, X> = Insert<T, X, Range<0, T['length']>>

export type Permutation<T extends any[] & {length: ZeroTo10}> =
  // @ts-ignore
  T extends [infer A, infer B, infer C, ...infer Rest] ? InsertAnywhere<InsertAnywhere<InsertAnywhere<Permutation<Rest>, A>, B>, C> :
  // @ts-ignore
  T extends [infer A, infer B, ...infer Rest] ? InsertAnywhere<InsertAnywhere<Permutation<Rest>, A>, B> :
  // @ts-ignore
  T extends [infer A, ...infer Rest] ? InsertAnywhere<Permutation<Rest>, A> :
  []

type Tests = [
  Is<Equal<Permutation<[]>, []>>,
  Is<Equal<Permutation<['a']>, ['a']>>,
  Is<Equal<Permutation<['a', 'b']>, ['a', 'b'] | ['b', 'a']>>,
  Is<
    Equal<
      Permutation<['a', 'b', 'c']>,
      ['a', 'b', 'c'] | ['a', 'c', 'b'] | ['b', 'a', 'c'] | ['b', 'c', 'a'] | ['c', 'a', 'b'] | ['c', 'b', 'a']
    >
  >
]
