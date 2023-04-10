import {Equal, Is} from '../test'

type Literal = string | number | bigint | symbol

export type Join<T extends Literal[], Separator extends Literal> =
  T extends [infer Head, ...infer Tail]
    ? Tail extends []
      // @ts-ignore
      ? `${Head}`
      // @ts-ignore
      : `${Head}${Separator}${Join<Tail, Separator>}`
    : ''

type Tests = [
  Is<Equal<Join<[], '-'>, ''>>,
  Is<Equal<Join<['a'], '-'>, 'a'>>,
  Is<Equal<Join<['a', 'b'], '-'>, 'a-b'>>
]
