import {Equal, Is} from './Test'

export type Filter<List extends any[], T> = List extends [infer First, ...infer Rest]
  ? First extends T
    ? [First, ...Filter<Rest, T>]
    : Filter<Rest, T>
  : []

type Tests = [
  Is<Equal<Filter<[1, 2, true, 3, 'foo'], number>, [1, 2, 3]>>,
  Is<Equal<Filter<[1, 2, true, 3, 'foo'], string>, ['foo']>>,
  Is<Equal<Filter<[1, 2, true, 3, 'foo'], boolean | string>, [true, 'foo']>>,
  Is<
    Equal<
      Filter<
        [{active: true; data: 1}, {active: false; data: 2}, {active: true; data: 3}, {active: false; data: 4}],
        {active: true}
      >,
      [{active: true; data: 1}, {active: true; data: 3}]
    >
  >
]
