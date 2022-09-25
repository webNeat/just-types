import {Equal, Is} from './Test'

export type FilterOutProps<T, A> = {
  [key in keyof T as Exclude<T[key], A> extends never ? never : key]: Exclude<T[key], A>
}

type Tests = [
  Is<Equal<FilterOutProps<{}, number>, {}>>,
  Is<Equal<FilterOutProps<{a: number}, number>, {}>>,
  Is<Equal<FilterOutProps<{a: number}, string>, {a: number}>>,
  Is<Equal<FilterOutProps<{a?: number}, number>, {a?: undefined}>>,
  Is<Equal<FilterOutProps<{a: string | number; b?: string}, number>, {a: string; b?: string}>>
]
