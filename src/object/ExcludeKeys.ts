import {Equal, Is} from '../test'

export type ExcludeKeys<T, U> = {
  [key in keyof T as Exclude<key, U>]: T[key]
}

type Tests = [
  Is<Equal<ExcludeKeys<{}, string>, {}>>,
  Is<Equal<ExcludeKeys<{a: string, b: number}, string>, {}>>,
  Is<Equal<ExcludeKeys<{a: string, b: number}, 'a'>, {b: number}>>,
  Is<Equal<ExcludeKeys<{hi: string, foo: string, hello: number, bar: boolean}, `h${string}`>, {foo: string, bar: boolean}>>,
  Is<Equal<ExcludeKeys<{hi: string, foo: string, hello: number, bar: boolean}, 'a' | 'foo' | 'hi'>, {hello: number, bar: boolean}>>,
]
