import {Equal} from 'expect-type'
import {Is} from './Test'
import {Decrement} from './Decrement'

export type Merge<A, B, Level extends number = 1> = [A, B] extends [Record<string, any>, Record<string, any>]
  ? Level extends 1
    ? Pick<A, Exclude<keyof A, keyof B>> & B
    : Pick<A, Exclude<keyof A, keyof B>> &
        Pick<B, Exclude<keyof B, keyof A>> & {
          [key in keyof A & keyof B]: Merge<A[key], B[key], Decrement<Level>>
        }
  : B

type Tests = [
  Is<Equal<Merge<{}, {a: number; c: null}>, {a: number; c: null}>>,
  Is<Equal<Merge<{a: number; c: null}, {}>, {a: number; c: null}>>,
  Is<Equal<Merge<{a: number; c: null}, {b: string}>, {a: number; b: string; c: null}>>,
  Is<Equal<Merge<{a: number; c: null}, {a: string}>, {a: string; c: null}>>,

  Is<Equal<Merge<{a: {b: string}}, {a: {c: number}}>, {a: {c: number}}>>,
  Is<Equal<Merge<{a: {b: string}}, {a: {c: number}}, 2>, {a: {b: string; c: number}}>>,

  Is<Equal<Merge<string, number>, number>>,
  Is<Equal<Merge<{a: number; c: null}, string>, string>>,
  Is<Equal<Merge<string, {a: number; c: null}>, {a: number; c: null}>>,

  Is<
    Equal<
      Merge<
        {a: {foo: string; bar: number}; c: {d: {e: {f: null}; g: unknown}}},
        {a: {foo: number; bar: {baz: bigint}}; c: {c1: number; c2: number; d: {e: {h: number}; g: null}}},
        5
      >,
      {
        a: {foo: number; bar: {baz: bigint}}
        c: {c1: number; c2: number; d: {e: {f: null; h: number}; g: null}}
      }
    >
  >
]
