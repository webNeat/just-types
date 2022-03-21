import {Equal, Is} from './Is'

export type Tail<List extends any[]> = ((...args: List) => any) extends (arg: any, ...rest: infer Rest) => any
  ? Rest
  : never

type Tests = [
  Is<Equal<Tail<[]>, []>>,
  Is<Equal<Tail<['a']>, []>>,
  Is<Equal<Tail<['a', 'b']>, ['b']>>,
  Is<Equal<Tail<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>
]
type Test_Join<T extends string[]> = T extends [infer X, ...string[]]
  ? `${X extends string ? X : ''}${Test_Join<Tail<T>>}`
  : ''
