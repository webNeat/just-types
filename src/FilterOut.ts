import {Equal} from 'expect-type'
import {Is} from './Test'

export type FilterOut<List extends any[], T> = List extends [infer First, ...infer Rest]
  ? Exclude<First, T> extends never
    ? FilterOut<Rest, T>
    : [Exclude<First, T>, ...FilterOut<Rest, T>]
  : []

type Tests = [
  Is<Equal<FilterOut<[1, 2, true, 3, 'foo'], number>, [true, 'foo']>>,
  Is<Equal<FilterOut<[1, 2, true, 3, 'foo'], string>, [1, 2, true, 3]>>,
  Is<Equal<FilterOut<[1, 2, true, 3, 'foo'], boolean | string>, [1, 2, 3]>>,
  Is<
    Equal<
      FilterOut<
        [{active: true; data: 1}, {active: false; data: 2}, {active: true; data: 3}, {active: false; data: 4}],
        {active: false}
      >,
      [{active: true; data: 1}, {active: true; data: 3}]
    >
  >
]
