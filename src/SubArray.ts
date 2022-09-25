import {Equal} from 'expect-type'
import {Is} from './Test'

export type SubArray<List extends any[], ItemsBefore extends any[] = []> = List extends [
  infer Item,
  ...infer Rest
]
  ? [...ItemsBefore, Item] | SubArray<Rest, [...ItemsBefore, Item]> | SubArray<Rest, ItemsBefore>
  : ItemsBefore extends []
  ? never
  : ItemsBefore

type Tests = [
  Is<Equal<SubArray<['a']>, ['a']>>,
  Is<Equal<SubArray<['a', 'b']>, ['a'] | ['b'] | ['a', 'b']>>,
  Is<
    Equal<
      SubArray<['a', 'b', 'c']>,
      ['a'] | ['b'] | ['c'] | ['a', 'b'] | ['a', 'c'] | ['b', 'c'] | ['a', 'b', 'c']
    >
  >
]
