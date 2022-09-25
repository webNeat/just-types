import {Equal} from 'expect-type'
import {Is} from './Test'

export type FilterProps<T, A> = {
  [key in keyof T as Extract<T[key], A> extends never ? never : key]: Extract<T[key], A>
}

type Tests = [
  Is<Equal<FilterProps<{}, number>, {}>>,
  Is<Equal<FilterProps<{a: number}, number>, {a: number}>>,
  Is<Equal<FilterProps<{a?: number}, number>, {a?: number}>>,
  Is<Equal<FilterProps<{a: string}, number>, {}>>,
  Is<Equal<FilterProps<{a: string; b: number; c: true}, string | boolean>, {a: string; c: true}>>,
  Is<Equal<FilterProps<{a: string; b: number; c?: true}, string | boolean>, {a: string; c?: true}>>,
  Is<Equal<FilterProps<{a: string; b?: number; c: true}, string | undefined>, {a: string; b?: undefined}>>
]
