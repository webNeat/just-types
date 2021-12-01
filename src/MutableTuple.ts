import {Equal, Is} from './Is'

export type MutableTuple<A extends readonly any[]> = A extends readonly []
  ? []
  : A extends readonly [infer X, ...infer R]
  ? [X, ...MutableTuple<R>]
  : never

type Tests = [
  Is<Equal<MutableTuple<readonly []>, []>>,
  Is<Equal<MutableTuple<readonly ['a']>, ['a']>>,
  Is<Equal<MutableTuple<readonly ['a', 'b']>, ['a', 'b']>>
]
