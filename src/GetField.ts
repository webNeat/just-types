import {Equal} from 'expect-type'
import {Is} from './Is'
import {FieldPath} from './FieldPath'

export type GetField<T, Path extends FieldPath<T>> = Path extends `${infer First}.${infer Rest}`
  ? First extends keyof T
    ? // @ts-expect-error Complaining that Rest doesn't extend FieldPath<T[First]>
      GetField<T[First], Rest>
    : never
  : Path extends keyof T
  ? T[Path]
  : never

type Tests = [
  Is<Equal<GetField<{a: number; b: null}, 'a'>, number>>,
  Is<Equal<GetField<{a: number; b: null}, 'b'>, null>>,
  Is<Equal<GetField<{a: number; b: {c: 1; d: 2}; e: {f: {g: number}}}, 'e.f.g'>, number>>,
  Is<Equal<GetField<{a: number; b: {c: 1; d: 2}; e: {f: {g: number}}}, 'b'>, {c: 1; d: 2}>>,
  Is<Equal<GetField<{a: number; b: {c: 1; d: 2}; e: {f: {g: number}}}, 'e.f'>, {g: number}>>
]
