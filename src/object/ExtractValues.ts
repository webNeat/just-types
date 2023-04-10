import {Equal, Is} from '../test'

export type ExtractValues<T, U> = {
  [key in keyof T as Extract<T[key], U> extends never ? never : key]: Extract<T[key], U>
}

type Tests = [
  Is<Equal<ExtractValues<{}, string>, {}>>,
  Is<Equal<ExtractValues<{a: string, b: number}, string>, {a: string}>>,
  Is<Equal<ExtractValues<{a: string, b: number}, string | number>, {a: string, b: number}>>,
  Is<Equal<ExtractValues<{a: string, b: number}, any>, {a: string, b: number}>>,
]
