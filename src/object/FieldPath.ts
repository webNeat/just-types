import {Equal, Is} from '../test'

export type FieldPath<T> =
  T extends Record<string, any>
    ? { [key in keyof T]: [key] | [key, ...FieldPath<T[key]>] }[keyof T]
    : []

type Tests = [
  Is<Equal<FieldPath<{}>, never>>,
  Is<Equal<FieldPath<{a: number; b: null}>, ['a'] | ['b']>>,
  Is<
    Equal<
      FieldPath<{a: number; b: {c: 1; d: 2}; e: {f: {g: {}}}}>,
      ['a'] | ['b'] | ['b', 'c'] | ['b', 'd'] | ['e'] | ['e', 'f'] | ['e', 'f', 'g']
    >
  >
]
