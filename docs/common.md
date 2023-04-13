# common

## Table Of Contents

- [Mutable](#mutable)
- [Normalize](#normalize)

## Mutable

```ts
import {Mutable} from 'just-types/common'
// or
import {common} from 'just-types' // and use common.Mutable

Mutable<readonly []> //=> []
Mutable<readonly ['a']> //=> ['a']
Mutable<readonly ['a', 'b']> //=> ['a', 'b']
Mutable<{readonly a: string, readonly b: number}> //=> {a: string, b: number}
```

## Normalize
Flattens the type to allow better auto-complete in editors.
```ts
import {Normalize} from 'just-types/common'
// or
import {common} from 'just-types' // and use common.Normalize

Normalize<string> //=> string
Normalize<{a: string} & {b: number}> //=> {a: string, b: number}
```