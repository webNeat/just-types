import {Equal, Is} from './Is'

export type Flatten<List extends readonly any[][]> = List extends [infer First, ...infer Rest]
  ? // @ts-expect-error `First` and `Rest` are not inferred correctly
    [...First, ...Flatten<Rest>]
  : []

type Tests = [
  Is<Equal<Flatten<[]>, []>>,
  Is<Equal<Flatten<[[1]]>, [1]>>,
  Is<Equal<Flatten<[[1], [2]]>, [1, 2]>>,
  Is<Equal<Flatten<[[1], [2, 3], [[4]]]>, [1, 2, 3, [4]]>>
]
