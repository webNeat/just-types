# common

## Table Of Contents

- [Mutable](#mutable)

## Mutable

**Import**
```ts
import {Mutable} from 'just-types/common'
// or
import {common} from 'just-types'
// use common.Mutable
```

```ts
import {Mutable} from 'just-types/common'

Mutable<readonly []> //=>  []
Mutable<readonly ['a']> //=>  ['a']
Mutable<readonly ['a', 'b']> //=>  ['a', 'b']
Mutable<{readonly a: string, readonly b: number}> //=>  {a: string, b: number}
```