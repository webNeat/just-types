import {Equal, Is} from './Test'
import {Decrement} from './Decrement'

export type Flatten<List, Depth extends number = 1> = Depth extends 0
  ? List
  : List extends []
  ? []
  : List extends [infer First, ...infer Rest]
  ? First extends any[]
    ? [...Flatten<First, Decrement<Depth>>, ...Flatten<Rest, Depth>]
    : [First, ...Flatten<Rest, Depth>]
  : List

type Tests = [
  Is<Equal<Flatten<[]>, []>>,
  Is<Equal<Flatten<[[1]]>, [1]>>,
  Is<Equal<Flatten<[[1], [2]]>, [1, 2]>>,
  Is<Equal<Flatten<[[1], [[2, 3]], [[4]]]>, [1, [2, 3], [4]]>>,
  Is<Equal<Flatten<[[1], [[2, 3]], [[4]]], 2>, [1, 2, 3, 4]>>,
  Is<Equal<Flatten<[[1], [[2, 3]], [[4]]], 5>, [1, 2, 3, 4]>>
]
