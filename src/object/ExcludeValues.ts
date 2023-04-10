import {Equal, Is} from '../test'

export type ExcludeValues<T, U> = {
  [key in keyof T as Exclude<T[key], U> extends never ? never : key]: Exclude<T[key], U>
}

type Tests = [
  Is<Equal<ExcludeValues<{}, string>, {}>>,
  Is<Equal<ExcludeValues<{a: string, b: number}, string>, {b: number}>>,
  Is<Equal<ExcludeValues<{a: string, b: number}, string | number>, {}>>,
  Is<Equal<ExcludeValues<{a: string, b: number}, number | boolean>, {a: string}>>,
]
