import {Equal, Is} from '../test'

export type Split<T extends string, Separator extends string> =
  T extends `${infer First}${Separator}${infer Rest}` ? [First, ...Split<Rest, Separator>] : [T]

type Tests = [
  Is<Equal<Split<'foo', '-'>, ['foo']>>,
  Is<Equal<Split<'foo-bar-baz', '-'>, ['foo', 'bar', 'baz']>>,
  Is<Equal<Split<'foo--', '-'>, ['foo', '', '']>>
]
