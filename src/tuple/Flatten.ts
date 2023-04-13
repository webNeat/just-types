import {Equal, Is} from '../test'
import {Decrement} from '../number'
import { ZeroTo100 } from '../constants'

export type Flatten<T extends any[], Depth extends ZeroTo100 = 1> =
  [Depth, T] extends [0, any] | [any, []] ? T :
  T extends [infer Head, ...infer Tail] 
    ? Head extends any[]
      // @ts-ignore
      ? [...Flatten<Head, Decrement<Depth>>, ...Flatten<Tail, Depth>]
      : [Head, ...Flatten<Tail, Depth>]
    : T

type Tests = [
  Is<Equal<Flatten<[]>, []>>,
  Is<Equal<Flatten<[[1]]>, [1]>>,
  Is<Equal<Flatten<[[1], [2]]>, [1, 2]>>,
  Is<Equal<Flatten<[[1], [[2, 3]], [[4]]]>, [1, [2, 3], [4]]>>,
  Is<Equal<Flatten<[[1], [[2, 3]], [[4]]], 2>, [1, 2, 3, 4]>>,
  Is<Equal<Flatten<[[1], [[2, 3]], [[4]]], 5>, [1, 2, 3, 4]>>
]
