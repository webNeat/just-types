import {Is} from './Test'
import {Equal} from 'expect-type'

export type InsertAt<
  Item,
  Index,
  List extends any[],
  ItemsBefore extends any[] = []
> = ItemsBefore['length'] extends Index
  ? [...ItemsBefore, Item, ...List]
  : List extends [infer First, ...infer Rest]
  ? InsertAt<Item, Index, Rest, [...ItemsBefore, First]>
  : [...ItemsBefore, Item]

type Tests = [
  Is<Equal<InsertAt<'x', 0, ['a', 'b']>, ['x', 'a', 'b']>>,
  Is<Equal<InsertAt<'x', 1, ['a', 'b']>, ['a', 'x', 'b']>>,
  Is<Equal<InsertAt<'x', 2, ['a', 'b']>, ['a', 'b', 'x']>>,
  Is<Equal<InsertAt<'x', 5, ['a', 'b']>, ['a', 'b', 'x']>>
]
