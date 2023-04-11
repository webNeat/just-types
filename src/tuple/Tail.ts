import {Equal, Is} from '../test'

export type Tail<T extends any[]> = ((...args: T) => any) extends ((arg: any, ...rest: infer Rest) => any) ? Rest : []

type Tests = [
  Is<Equal<Tail<[]>, []>>,
  Is<Equal<Tail<['a']>, []>>,
  Is<Equal<Tail<['a', 'b']>, ['b']>>,
  Is<Equal<Tail<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>,
]
