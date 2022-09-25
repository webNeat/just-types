import {Equal} from 'expect-type'
import {Is} from './Is'

type ArrayTail<List extends any[]> = ((...args: List) => any) extends (arg: any, ...rest: infer Rest) => any
  ? Rest
  : never
type StringTail<T extends string> = T extends `${infer _}${infer Rest}` ? Rest : T

export type Tail<T extends string | any[]> = T extends any[]
  ? ArrayTail<T>
  : T extends string
  ? StringTail<T>
  : never

type Tests = [
  Is<Equal<Tail<[]>, []>>,
  Is<Equal<Tail<['a']>, []>>,
  Is<Equal<Tail<['a', 'b']>, ['b']>>,
  Is<Equal<Tail<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>,
  Is<Equal<Tail<''>, ''>>,
  Is<Equal<Tail<'a'>, ''>>,
  Is<Equal<Tail<'abcd'>, 'bcd'>>
]
type Test_Join<T extends string[]> = T extends [infer X, ...string[]]
  ? `${X extends string ? X : ''}${Test_Join<Tail<T>>}`
  : ''
