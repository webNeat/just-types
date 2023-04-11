# number

## Table Of Contents

- [Decrement](#decrement)
- [Increment](#increment)
- [Range](#range)

## Decrement

```ts
import {Decrement} from 'just-types/number'
// or
import {number} from 'just-types' // and use number.Decrement

Decrement<0> //=> -1
Decrement<1> //=> 0
Decrement<100> //=> 99
Decrement<0> //=> -1
Decrement<-99> //=> -100
Decrement<-100> //=> -101
```

## Increment

```ts
import {Increment} from 'just-types/number'
// or
import {number} from 'just-types' // and use number.Increment

Increment<0> //=> 1
Increment<1> //=> 2
Increment<100> //=> 101
Increment<-1> //=> 0
Increment<-100> //=> -99
```

## Range

```ts
import {Range} from 'just-types/number'
// or
import {number} from 'just-types' // and use number.Range

Range<3, 3> //=> 3
Range<4, 7> //=> 4 | 5 | 6 | 7
Range<0, 5> //=> 0 | 1 | 2 | 3 | 4 | 5
Range<-5, 2> //=> -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2
```