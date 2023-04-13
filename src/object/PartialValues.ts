import { Normalize } from "../common"
import { Equal, Is } from "../test"

export type PartialValues<T, U> = Normalize<
  {[K in keyof T as Extract<T[K], U> extends never ? K : never]: T[K]} &
  {[K in keyof T as Extract<T[K], U> extends never ? never : K]?: T[K]}
>

type Tests = [
  Is<Equal<PartialValues<{a: string, b: number, c: boolean}, string | boolean>, {a?: string, b: number, c?: boolean}>>,
  Is<Equal<PartialValues<{a: 'Hello', b: string, c: boolean}, string>, {a?: 'Hello', b?: string, c: boolean}>>,
  Is<Equal<PartialValues<{a?: string, b?: number, c: boolean}, string>, {a?: string, b?: number, c: boolean}>>,
]