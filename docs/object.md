# object

## Table Of Contents

- [ExcludeKeys](#excludekeys)
- [ExcludeValues](#excludevalues)
- [ExtractKeys](#extractkeys)
- [ExtractValues](#extractvalues)
- [FieldPath](#fieldpath)
- [GetField](#getfield)
- [Merge](#merge)

## ExcludeKeys

**Import**
```ts
import {ExcludeKeys} from 'just-types/object'
// or
import {object} from 'just-types' // and use object.ExcludeKeys

ExcludeKeys<{}, string> //=> {}
ExcludeKeys<{a: string, b: number}, string> //=> {}
ExcludeKeys<{a: string, b: number}, 'a'> //=> {b: number}
ExcludeKeys<{hi: string, foo: string, hello: number, bar: boolean}, `h${string}`> //=> {foo: string, bar: boolean}
ExcludeKeys<{hi: string, foo: string, hello: number, bar: boolean}, 'a' | 'foo' | 'hi'> //=> {hello: number, bar: boolean}
```

## ExcludeValues

**Import**
```ts
import {ExcludeValues} from 'just-types/object'
// or
import {object} from 'just-types' // and use object.ExcludeValues

ExcludeValues<{}, string> //=> {}
ExcludeValues<{a: string, b: number}, string> //=> {b: number}
ExcludeValues<{a: string, b: number}, string | number> //=> {}
ExcludeValues<{a: string, b: number}, number | boolean> //=> {a: string}
```

## ExtractKeys

**Import**
```ts
import {ExtractKeys} from 'just-types/object'
// or
import {object} from 'just-types' // and use object.ExtractKeys

ExtractKeys<{}, string> //=> {}
ExtractKeys<{a: string, b: number}, string> //=> {a: string, b: number}
ExtractKeys<{a: string, b: number}, 'a'> //=> {a: string}
ExtractKeys<{hi: string, foo: string, hello: number, bar: boolean}, `h${string}`> //=> {hi: string, hello: number}
ExtractKeys<{hi: string, foo: string, hello: number, bar: boolean}, 'a' | 'foo' | 'hi'> //=> {hi: string, foo: string}
```

## ExtractValues

**Import**
```ts
import {ExtractValues} from 'just-types/object'
// or
import {object} from 'just-types' // and use object.ExtractValues

ExtractValues<{}, string> //=> {}
ExtractValues<{a: string, b: number}, string> //=> {a: string}
ExtractValues<{a: string, b: number}, string | number> //=> {a: string, b: number}
ExtractValues<{a: string, b: number}, any> //=> {a: string, b: number}
```

## FieldPath

**Import**
```ts
import {FieldPath} from 'just-types/object'
// or
import {object} from 'just-types' // and use object.FieldPath

FieldPath<{}> //=> never
FieldPath<{a: number; b: null}> //=> ['a'] | ['b']
FieldPath<{a: number; b: {c: 1; d: 2}; e: {f: {g: {}}}}> //=> ['a'] | ['b'] | ['b', 'c'] | ['b', 'd'] | ['e'] | ['e', 'f'] | ['e', 'f', 'g']
```

## GetField

**Import**
```ts
import {GetField} from 'just-types/object'
// or
import {object} from 'just-types' // and use object.GetField

GetField<{a: number; b: null}, ['a']> //=> number
GetField<{a: number; b: null}, ['b']> //=> null
GetField<{a: number; b: {c: 1; d: 2}; e: {f: {g: number}}}, ['e', 'f', 'g']> //=> number
GetField<{a: number; b: {c: 1; d: 2}; e: {f: {g: number}}}, ['b']> //=> {c: 1; d: 2}
GetField<{a: number; b: {c: 1; d: 2}; e: {f: {g: number}}}, ['e', 'f']> //=> {g: number}
```

## Merge

**Import**
```ts
import {Merge} from 'just-types/object'
// or
import {object} from 'just-types' // and use object.Merge

Merge<{}, {a: number; c: null}> //=> {a: number; c: null}
Merge<{a: number; c: null}, {}> //=> {a: number; c: null}
Merge<{a: number; c: null}, {b: string}> //=> {a: number; b: string; c: null}
Merge<{a: number; c: null}, {a: string}> //=> {a: string; c: null}
Merge<{a: {b: string}}, {a: {c: number}}> //=> {a: {c: number}}
Merge<{a: {b: string}}, {a: {c: number}}, 2> //=> {a: {b: string; c: number}}
Merge<string, number> //=> number
Merge<{a: number; c: null}, string> //=> string
Merge<string, {a: number; c: null}> //=> {a: number; c: null}
Merge<
  {a: {foo: string; bar: number}; c: {d: {e: {f: null}; g: unknown}}},
  {a: {foo: number; bar: {baz: bigint}}; c: {c1: number; c2: number; d: {e: {h: number}; g: null}}},
  5
> //=> {
//   a: {foo: number; bar: {baz: bigint}}
//   c: {c1: number; c2: number; d: {e: {f: null; h: number}; g: null}}
// }
```