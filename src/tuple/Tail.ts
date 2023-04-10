import {Equal, Is} from '../test'

export type Tail<T extends any[]> = T extends [infer _, ...infer X] ? X : []

type Tests = [
  Is<Equal<Tail<[]>, []>>,
  Is<Equal<Tail<['a']>, []>>,
  Is<Equal<Tail<['a', 'b']>, ['b']>>,
  Is<Equal<Tail<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>,
]
