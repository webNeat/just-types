import {Equal, Is} from '../test'

export type ExtractKeys<T, U> = {
  [key in keyof T as Extract<key, U>]: T[key]
}

type Tests = [
  Is<Equal<ExtractKeys<{}, string>, {}>>,
  Is<Equal<ExtractKeys<{a: string, b: number}, string>, {a: string, b: number}>>,
  Is<Equal<ExtractKeys<{a: string, b: number}, 'a'>, {a: string}>>,
  Is<Equal<ExtractKeys<{hi: string, foo: string, hello: number, bar: boolean}, `h${string}`>, {hi: string, hello: number}>>,
  Is<Equal<ExtractKeys<{hi: string, foo: string, hello: number, bar: boolean}, 'a' | 'foo' | 'hi'>, {hi: string, foo: string}>>,
]
