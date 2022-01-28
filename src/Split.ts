import {Equal, Is} from './Is'

export type Split<
  Text extends string,
  Separator extends string
> = Text extends `${infer First}${Separator}${infer Rest}` ? [First, ...Split<Rest, Separator>] : [Text]

type Tests = [
  Is<Equal<Split<'foo', '-'>, ['foo']>>,
  Is<Equal<Split<'foo-bar-baz', '-'>, ['foo', 'bar', 'baz']>>,
  Is<Equal<Split<'foo--', '-'>, ['foo', '', '']>>
]
