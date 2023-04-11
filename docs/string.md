# string

## Table Of Contents

- [Split](#split)
- [Tail](#tail)

## Split

**Import**
```ts
import {Split} from 'just-types/string'
// or
import {string} from 'just-types' // and use string.Split

Split<'foo', '-'> //=> ['foo']
Split<'foo-bar-baz', '-'> //=> ['foo', 'bar', 'baz']
Split<'foo--', '-'> //=> ['foo', '', '']
```

## Tail

**Import**
```ts
import {Tail} from 'just-types/string'
// or
import {string} from 'just-types' // and use string.Tail

Tail<''> //=> ''
Tail<'a'> //=> ''
Tail<'abcd'> //=> 'bcd'
```