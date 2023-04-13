import { Normalize } from "../common"
import { Equal, Is } from "../test"

export type RequiredKeys<T, U> = Normalize<Omit<T, Extract<keyof T, U>> & Required<Pick<T, Extract<keyof T, U>>>>

type Tests = [
  Is<Equal<RequiredKeys<{a?: string, b?: number, c: boolean}, 'a' | 'c'>, {a: string, b?: number, c: boolean}>>,
  Is<Equal<RequiredKeys<{a?: string, b?: number, c: boolean}, string>, {a: string, b: number, c: boolean}>>,
  Is<Equal<RequiredKeys<{a?: string, b?: number, c: boolean}, 'a' | 'd'>, {a: string, b?: number, c: boolean}>>,
]