import {Equal, Is} from '../test'

export type Tail<T extends string> = T extends `${infer _}${infer X}` ? X : ''

type Tests = [
  Is<Equal<Tail<''>, ''>>,
  Is<Equal<Tail<'a'>, ''>>,
  Is<Equal<Tail<'abcd'>, 'bcd'>>
]
