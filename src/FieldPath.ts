import {Equal, Is} from './Is'

export type FieldPath<T, IsFirst = true> = {} extends T
  ? ''
  : T extends Record<string, any>
  ? // @ts-expect-error key is not inferred as string!
    {[key in keyof T]: `${IsFirst extends true ? '' : '.'}${key}${'' | FieldPath<T[key], false>}`}[keyof T]
  : ''

type Tests = [
  Is<Equal<FieldPath<{}>, ''>>,
  Is<Equal<FieldPath<{a: number; b: null}>, 'a' | 'b'>>,
  Is<
    Equal<
      FieldPath<{a: number; b: {c: 1; d: 2}; e: {f: {g: {}}}}>,
      'a' | 'b' | 'b.c' | 'b.d' | 'e' | 'e.f' | 'e.f.g'
    >
  >
]
