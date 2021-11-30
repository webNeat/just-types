import {InsertAt} from './InsertAt'
import {Equal, Is} from './Is'

type InsertAnywhere<
  Item,
  List extends any[],
  Counter extends any[] = []
> = Counter['length'] extends List['length']
  ? InsertAt<Item, Counter['length'], List>
  : InsertAt<Item, Counter['length'], List> | InsertAnywhere<Item, List, [1, ...Counter]>

export type Permutation<Values extends readonly any[]> = Values extends [infer Value, ...infer Rest]
  ? InsertAnywhere<Value, Permutation<Rest>>
  : []

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
