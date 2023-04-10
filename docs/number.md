# number

## Table Of Contents

- [Decrement](#decrement)
- [Increment](#increment)
- [Range](#range)

## Decrement

**Import**
```ts
import {Decrement} from 'just-types/number'
// or
import {number} from 'just-types'
// use number.Decrement
```

```ts
import {Decrement} from 'just-types/number'

Decrement<0> //=>  -1
Decrement<1> //=>  0
Decrement<100> //=>  99
Decrement<0> //=>  -1
Decrement<-99> //=>  -100
Decrement<-100> //=>  -101
```

## Increment

**Import**
```ts
import {Increment} from 'just-types/number'
// or
import {number} from 'just-types'
// use number.Increment
```

```ts
import {Increment} from 'just-types/number'

Increment<0> //=>  1
Increment<1> //=>  2
Increment<100> //=>  101
Increment<-1> //=>  0
Increment<-100> //=>  -99
```

## Range

**Import**
```ts
import {Range} from 'just-types/number'
// or
import {number} from 'just-types'
// use number.Range
```

```ts
import {Range} from 'just-types/number'

Range<3, 3> //=>  3
Range<4, 7> //=>  4 | 5 | 6 | 7
Range<0, 5> //=>  0 | 1 | 2 | 3 | 4 | 5
Range<-5, 2> //=>  -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2
```