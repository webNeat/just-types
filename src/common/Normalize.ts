import { Equal, Is } from "../test"

/**
 * Flattens the type to allow better auto-complete in editors.
 */
export type Normalize<T> = {
  [K in keyof T]: T[K]
}

type Tests = [
  Is<Equal<Normalize<string>, string>>,
  Is<Equal<Normalize<{a: string} & {b: number}>, {a: string, b: number}>>,
]