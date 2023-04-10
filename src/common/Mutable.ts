import {Equal, Is} from '../test'

export type Mutable<T> = {
  -readonly [K in keyof T]: T[K]
};

type Tests = [
  Is<Equal<Mutable<readonly []>, []>>,
  Is<Equal<Mutable<readonly ['a']>, ['a']>>,
  Is<Equal<Mutable<readonly ['a', 'b']>, ['a', 'b']>>,
  Is<Equal<Mutable<{readonly a: string, readonly b: number}>, {a: string, b: number}>>,
]
