# string

## Table Of Contents

- [Split](#split)
- [Tail](#tail)

## Split

**Import**
```ts
import {Split} from 'just-types/string'
// or
import {string} from 'just-types'
// use string.Split
```

```ts
import {Split} from 'just-types/string'

Split<'foo', '-'> //=>  ['foo']
Split<'foo-bar-baz', '-'> //=>  ['foo', 'bar', 'baz']
Split<'foo--', '-'> //=>  ['foo', '', '']
```

## Tail

**Import**
```ts
import {Tail} from 'just-types/string'
// or
import {string} from 'just-types'
// use string.Tail
```

```ts
import {Tail} from 'just-types/string'

Tail<''> //=>  ''
Tail<'a'> //=>  ''
Tail<'abcd'> //=>  'bcd'
```