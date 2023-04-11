# tuple

## Table Of Contents

- [Exclude](#exclude)
- [Extract](#extract)
- [Flatten](#flatten)
- [Insert](#insert)
- [Join](#join)
- [Permutation](#permutation)
- [Slice](#slice)
- [SubArray](#subarray)
- [SubSequence](#subsequence)
- [Tail](#tail)

## Exclude

```ts
import {Exclude} from 'just-types/tuple'
// or
import {tuple} from 'just-types' // and use tuple.Exclude

TupleExclude<[], string> //=> []
TupleExclude<['foo', 'hi', 'hello', string], string> //=> []
TupleExclude<['foo', 'hi', 'hello', string], `h${string}`> //=> ['foo', string]
TupleExclude<[1 | 'foo', 2 | 'hi', 3 | 'hello'], `h${string}`> //=> [1 | 'foo', 2, 3]
TupleExclude<[1 | 'foo', 2 | 'hi', 3 | 'hello'], string> //=> [1, 2, 3]
TupleExclude<[1 | 'foo', 2, false, 'hi', 3 | 'hello', true], number|boolean> //=> ['foo', 'hi', 'hello']
```

## Extract

```ts
import {Extract} from 'just-types/tuple'
// or
import {tuple} from 'just-types' // and use tuple.Extract

TupleExtract<[], string> //=> []
TupleExtract<['foo', 'hi', 'hello', string], string> //=> ['foo', 'hi', 'hello', string]
TupleExtract<['foo', 'hi', 'hello', string], `h${string}`> //=> ['hi', 'hello']
TupleExtract<[1 | 'foo', 2 | 'hi', 3 | 'hello'], `h${string}`> //=> ['hi', 'hello']
TupleExtract<[1 | 'foo', 2 | 'hi', 3 | 'hello'], number> //=> [1, 2, 3]
TupleExtract<[1 | 'foo', 2, false, 'hi', 3 | 'hello', true], number|string> //=> [1 | 'foo', 2, 'hi', 3 | 'hello']
```

## Flatten

```ts
import {Flatten} from 'just-types/tuple'
// or
import {tuple} from 'just-types' // and use tuple.Flatten

Flatten<[]> //=> []
Flatten<[[1]]> //=> [1]
Flatten<[[1], [2]]> //=> [1, 2]
Flatten<[[1], [[2, 3]], [[4]]]> //=> [1, [2, 3], [4]]
Flatten<[[1], [[2, 3]], [[4]]], 2> //=> [1, 2, 3, 4]
Flatten<[[1], [[2, 3]], [[4]]], 5> //=> [1, 2, 3, 4]
```

## Insert

```ts
import {Insert} from 'just-types/tuple'
// or
import {tuple} from 'just-types' // and use tuple.Insert

Insert<['a', 'b'], 'x', 0> //=> ['x', 'a', 'b']
Insert<['a', 'b'], 'x', 1> //=> ['a', 'x', 'b']
Insert<['a', 'b'], 'x', 2> //=> ['a', 'b', 'x']
Insert<['a', 'b'], 'x', 0 | 2> //=> ['x', 'a', 'b'] | ['a', 'b', 'x']
```

## Join

```ts
import {Join} from 'just-types/tuple'
// or
import {tuple} from 'just-types' // and use tuple.Join

Join<[], '-'> //=> ''
Join<['a'], '-'> //=> 'a'
Join<['a', 'b'], '-'> //=> 'a-b'
```

## Permutation

```ts
import {Permutation} from 'just-types/tuple'
// or
import {tuple} from 'just-types' // and use tuple.Permutation

Permutation<[]> //=> []
Permutation<['a']> //=> ['a']
Permutation<['a', 'b']> //=> ['a', 'b'] | ['b', 'a']
Permutation<['a', 'b', 'c']> //=> ['a', 'b', 'c'] | ['a', 'c', 'b'] | ['b', 'a', 'c'] | ['b', 'c', 'a'] | ['c', 'a', 'b'] | ['c', 'b', 'a']
```

## Slice

```ts
import {Slice} from 'just-types/tuple'
// or
import {tuple} from 'just-types' // and use tuple.Slice

Slice<['a', 'b', 'c', 'd'], 0> //=> ['a', 'b', 'c', 'd']
Slice<['a', 'b', 'c', 'd'], 2> //=> ['c', 'd']
Slice<['a', 'b', 'c', 'd'], 1, 2> //=> ['b', 'c']
Slice<['a', 'b', 'c', 'd'], 4> //=> []
Slice<['a', 'b', 'c', 'd'], 2, 99> //=> ['c', 'd']
```

## SubArray

```ts
import {SubArray} from 'just-types/tuple'
// or
import {tuple} from 'just-types' // and use tuple.SubArray

SubArray<['a']> //=> [] | ['a']
SubArray<['a', 'b']> //=> [] | ['a'] | ['b'] | ['a', 'b']
SubArray<['a', 'b', 'c']> //=> [] | ['a'] | ['b'] | ['c'] | ['a', 'b'] | ['b', 'c'] | ['a', 'b', 'c']
```

## SubSequence

```ts
import {SubSequence} from 'just-types/tuple'
// or
import {tuple} from 'just-types' // and use tuple.SubSequence

SubSequence<['a']> //=> [] | ['a']
SubSequence<['a', 'b']> //=> [] | ['a'] | ['b'] | ['a', 'b']
SubSequence<['a', 'b', 'c']> //=> [] | ['a'] | ['b'] | ['c'] | ['a', 'b'] | ['a', 'c'] | ['b', 'c'] | ['a', 'b', 'c']
```

## Tail

```ts
import {Tail} from 'just-types/tuple'
// or
import {tuple} from 'just-types' // and use tuple.Tail

Tail<[]> //=> []
Tail<['a']> //=> []
Tail<['a', 'b']> //=> ['b']
Tail<['a', 'b', 'c', 'd']> //=> ['b', 'c', 'd']
```