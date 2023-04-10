import {Equal, Is} from '../test'

type ExtractOrEmpty<T, U> = Extract<T, U> extends never ? [] : [Extract<T, U>]

export type TupleExtract<T extends any[], U> = 
  T extends [infer A, infer B, infer C, ...infer Rest] ? [...ExtractOrEmpty<A, U>, ...ExtractOrEmpty<B, U>, ...ExtractOrEmpty<C, U>, ...TupleExtract<Rest, U>] :
  T extends [infer A, infer B, ...infer Rest] ? [...ExtractOrEmpty<A, U>, ...ExtractOrEmpty<B, U>, ...TupleExtract<Rest, U>] :
  T extends [infer A, ...infer Rest] ? [...ExtractOrEmpty<A, U>, ...TupleExtract<Rest, U>] :
  []

type Tests = [
  Is<Equal<TupleExtract<[], string>, []>>,
  Is<Equal<TupleExtract<['foo', 'hi', 'hello', string], string>, ['foo', 'hi', 'hello', string]>>,
  Is<Equal<TupleExtract<['foo', 'hi', 'hello', string], `h${string}`>, ['hi', 'hello']>>,
  Is<Equal<TupleExtract<[1 | 'foo', 2 | 'hi', 3 | 'hello'], `h${string}`>, ['hi', 'hello']>>,
  Is<Equal<TupleExtract<[1 | 'foo', 2 | 'hi', 3 | 'hello'], number>, [1, 2, 3]>>,
  Is<Equal<TupleExtract<[1 | 'foo', 2, false, 'hi', 3 | 'hello', true], number|string>, [1 | 'foo', 2, 'hi', 3 | 'hello']>>,
]
