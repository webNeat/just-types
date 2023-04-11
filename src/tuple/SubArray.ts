import {Equal, Is} from '../test'
import { ZeroTo100 } from '../constants'
import { Range } from '../number'
import { Slice } from './Slice'

export type SubArray<T extends any[] & {length: ZeroTo100}> = Slice<T, Range<0, T['length']>, Range<0, T['length']>>

type Tests = [
  Is<Equal<SubArray<['a']>, [] | ['a']>>,
  Is<Equal<SubArray<['a', 'b']>, [] | ['a'] | ['b'] | ['a', 'b']>>,
  Is<Equal<
    SubArray<['a', 'b', 'c']>,
    [] | ['a'] | ['b'] | ['c'] | ['a', 'b'] | ['b', 'c'] | ['a', 'b', 'c']
  >>
]
