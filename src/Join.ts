import {Equal, Is} from './Is'
import {Literal} from './Literal'

export type Join<List extends readonly Literal[], Separator extends Literal> = List extends []
  ? ''
  : List extends [Literal]
  ? `${List[0]}`
  : List extends [Literal, ...infer Rest]
  ? // @ts-expect-error `Rest` is not inferred as Literal[]
    `${List[0]}${Separator}${Join<Rest, Separator>}`
  : never

type Tests = [
  Is<Equal<Join<[], '-'>, ''>>,
  Is<Equal<Join<['a'], '-'>, 'a'>>,
  Is<Equal<Join<['a', 'b'], '-'>, 'a-b'>>
]
