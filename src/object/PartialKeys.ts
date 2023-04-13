import { Normalize } from "../common"
import { Equal, Is } from "../test"

export type PartialKeys<T, U> = Normalize<Omit<T, Extract<keyof T, U>> & Partial<Pick<T, Extract<keyof T, U>>>>

type Tests = [
  Is<Equal<PartialKeys<{a: string, b: number, c: boolean}, 'a' | 'c'>, {a?: string, b: number, c?: boolean}>>,
  Is<Equal<PartialKeys<{a: string, b: number, c: boolean}, string>, {a?: string, b?: number, c?: boolean}>>,
  Is<Equal<PartialKeys<{a?: string, b?: number, c: boolean}, 'a' | 'd'>, {a?: string, b?: number, c: boolean}>>,
]