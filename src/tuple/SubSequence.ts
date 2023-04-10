import { ZeroTo100 } from '../constants'
import {Equal, Is} from '../test'

export type SubSequence<T extends any[] & {length: ZeroTo100}> = 
  T extends [infer Head, ... infer Tail]
    // @ts-ignore
    ? [Head] | [Head, ...SubSequence<Tail>] | SubSequence<Tail>
    : []

type Tests = [
  Is<Equal<SubSequence<['a']>, [] | ['a']>>,
  Is<Equal<SubSequence<['a', 'b']>, [] | ['a'] | ['b'] | ['a', 'b']>>,
  Is<Equal<
    SubSequence<['a', 'b', 'c']>,
    [] | ['a'] | ['b'] | ['c'] | ['a', 'b'] | ['a', 'c'] | ['b', 'c'] | ['a', 'b', 'c']
  >>
]
