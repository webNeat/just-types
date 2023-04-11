import {Equal, Is} from '../test'
import {FieldPath} from './FieldPath'

export type GetField<T, Path extends FieldPath<T>> = 
  // @ts-ignore
  Path extends [infer A] ? T[A] :
  // @ts-ignore
  Path extends [infer A, infer B] ? T[A][B] :
  // @ts-ignore
  Path extends [infer A, infer B, ...infer Rest] ? GetField<T[A][B], Rest> :
  never

type Tests = [
  Is<Equal<GetField<{a: number; b: null}, ['a']>, number>>,
  Is<Equal<GetField<{a: number; b: null}, ['b']>, null>>,
  Is<Equal<GetField<{a: number; b: {c: 1; d: 2}; e: {f: {g: number}}}, ['e', 'f', 'g']>, number>>,
  Is<Equal<GetField<{a: number; b: {c: 1; d: 2}; e: {f: {g: number}}}, ['b']>, {c: 1; d: 2}>>,
  Is<Equal<GetField<{a: number; b: {c: 1; d: 2}; e: {f: {g: number}}}, ['e', 'f']>, {g: number}>>
]
