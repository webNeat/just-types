import {Equal, Is} from '../test'

type ExcludeOrEmpty<T, U> = Exclude<T, U> extends never ? [] : [Exclude<T, U>]

export type TupleExclude<T extends any[], U> = 
  T extends [infer A, infer B, infer C, ...infer Rest] ? [...ExcludeOrEmpty<A, U>, ...ExcludeOrEmpty<B, U>, ...ExcludeOrEmpty<C, U>, ...TupleExclude<Rest, U>] :
  T extends [infer A, infer B, ...infer Rest] ? [...ExcludeOrEmpty<A, U>, ...ExcludeOrEmpty<B, U>, ...TupleExclude<Rest, U>] :
  T extends [infer A, ...infer Rest] ? [...ExcludeOrEmpty<A, U>, ...TupleExclude<Rest, U>] :
  []

type Tests = [
  Is<Equal<TupleExclude<[], string>, []>>,
  Is<Equal<TupleExclude<['foo', 'hi', 'hello', string], string>, []>>,
  Is<Equal<TupleExclude<['foo', 'hi', 'hello', string], `h${string}`>, ['foo', string]>>,
  Is<Equal<TupleExclude<[1 | 'foo', 2 | 'hi', 3 | 'hello'], `h${string}`>, [1 | 'foo', 2, 3]>>,
  Is<Equal<TupleExclude<[1 | 'foo', 2 | 'hi', 3 | 'hello'], string>, [1, 2, 3]>>,
  Is<Equal<TupleExclude<[1 | 'foo', 2, false, 'hi', 3 | 'hello', true], number|boolean>, ['foo', 'hi', 'hello']>>,
]
