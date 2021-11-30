import {Equal, Is} from './Is'

export type Tail<List extends readonly any[]> = List extends [infer _, ...infer Rest] ? Rest : []

type Tests = [
  Is<Equal<Tail<[]>, []>>,
  Is<Equal<Tail<['a']>, []>>,
  Is<Equal<Tail<['a', 'b']>, ['b']>>,
  Is<Equal<Tail<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>
]
