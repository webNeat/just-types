# Just types

A collection of handy Typescript types.

[![Version](https://img.shields.io/npm/v/just-types?style=flat-square)](https://www.npmjs.com/package/just-types)
[![Tests Status](https://img.shields.io/github/workflow/status/webneat/just-types/Tests?style=flat-square)](https://github.com/webneat/just-types/actions?query=workflow:"Tests")
[![MIT](https://img.shields.io/npm/l/just-types?style=flat-square)](LICENSE)

# Contents

- [Installation](#installation)
- [Testing Types](#)
- [List of Types](#list-of-types)
  - [Decrement](#decrement)
  - [FieldPath](#fieldpath)
  - [Filter](#filter)
  - [FilterProps](#filterprops)
  - [FilterOut](#filterout)
  - [FilterOutProps](#filteroutprops)
  - [Flatten](#flatten)
  - [GetField](#getfield)
  - [Increment](#increment)
  - [InsertAt](#insertat)
  - [Join](#join)
  - [Merge](#merge)
  - [MutableTuple](#mutabletuple)
  - [Permutation](#permutation)
  - [Range](#range)
  - [Split](#split)
  - [SubArray](#subarray)
  - [Tail](#tail)

- [Contributing](#contributing)
- [Changelog](#changelog)

# Installation

Install using `npm`

```
npm install -D just-types
```

Or using `yarn`

```
yarn add --dev just-types
```

# List of Types

## Decrement
```ts
Decrement<0> //=> -1
Decrement<1> //=> 0
Decrement<100> //=> 99
Decrement<101> //=> number
Decrement<-10> //=> number
```
**Note:** Only handles possitive integers between 0 and 100. Returns `number` for other integers.

## FieldPath
```ts
FieldPath<{}> //=> ''
FieldPath<{a: number; b: null}> //=> 'a' | 'b'
FieldPath<{a: number; b: {c: 1; d: 2}; e: {f: {g: {}}}}
//=> 'a' | 'b' | 'b.c' | 'b.d' | 'e' | 'e.f' | 'e.f.g'
```

## Filter
```ts
Filter<[1, 2, true, 3, 'foo'], number> //=> [1, 2, 3]
Filter<[1, 2, true, 3, 'foo'], string> //=> ['foo']
Filter<[1 | 'hello', 2 | 'world', true, 3, 'foo'], number> //=> [1, 2, 3]
Filter<[1 | 'hello', 2 | 'world', true, 3, 'foo'], string> //=> ['hello', 'world', 'foo']
Filter<[1, 2, true, 3, 'foo'], boolean | string> //=> [true, 'foo']
Filter<
  [{active: true; data: 1}, {active: false; data: 2}, {active: true; data: 3}, {active: false; data: 4}],
  {active: true}
> //=> [{active: true; data: 1}, {active: true; data: 3}]
```

# FilterProps
```ts
FilterProps<{}, number> //=> {}
FilterProps<{a: string}, number> //=> {}
FilterProps<{a: number}, number> //=> {a: number}
FilterProps<{a?: number}, number> //=> {a?: number}
FilterProps<{a: string; b: number; c: true}, string | boolean> //=> {a: string; c: true}
FilterProps<{a: string; b: number; c?: true}, string | boolean> //=> {a: string; c?: true}
FilterProps<{a: string; b?: number; c: true}, string | undefined> //=> {a: string; b?: undefined}
```

## FilterOut
```ts
FilterOut<[1, 2, true, 3, 'foo'], number> //=> [true, 'foo']
FilterOut<[1, 2, true, 3, 'foo'], string> //=> [1, 2, true, 3]
FilterOut<[1, 2, true, 3, 'foo'], boolean | string> //=> [1, 2, 3]
FilterOut<
  [{active: true; data: 1}, {active: false; data: 2}, {active: true; data: 3}, {active: false; data: 4}],
  {active: false}
> //=> [{active: true; data: 1}, {active: true; data: 3}]
```

# FilterOutProps
```ts
FilterOutProps<{}, number> //=> {}
FilterOutProps<{a: number}, number> //=> {}
FilterOutProps<{a: number}, string> //=> {a: number}
FilterOutProps<{a?: number}, number> //=> {a?: undefined}
FilterOutProps<{a: string | number; b?: string}, number> //=> {a: string; b?: string}
```

## Flatten
```ts
Flatten<[]> // => []
Flatten<[[1]]> // => [1]
Flatten<[[1], [2]]> // => [1, 2]
Flatten<[[1], [[2, 3]], [[4]]]> // => [1, [2, 3], [4]]
Flatten<[[1], [[2, 3]], [[4]]], 2> // => [1, 2, 3, 4]
```

## GetField
```ts
GetField<{a: number; b: null}, 'a'> //=> number
GetField<{a: number; b: null}, 'b'> //=> null
GetField<{a: number; b: {c: 1; d: 2}; e: {f: {g: number}}}, 'e.f.g'> //=> number
GetField<{a: number; b: {c: 1; d: 2}; e: {f: {g: number}}}, 'b'> //=> {c: 1; d: 2}
GetField<{a: number; b: {c: 1; d: 2}; e: {f: {g: number}}}, 'e.f'> //=> {g: number}
```

## Increment
```ts
Increment<0> //=> 1
Increment<1> //=> 2
Increment<100> //=> 101
Increment<101> //=> number
Increment<-1> //=> number
```
**Note:** Only handles possitive integers between 0 and 100. Returns `number` for other integers.

## InsertAt
```ts
InsertAt<'x', 0, ['a', 'b']> // => ['x', 'a', 'b']
InsertAt<'x', 1, ['a', 'b']> // => ['a', 'x', 'b']
InsertAt<'x', 2, ['a', 'b']> // => ['a', 'b', 'x']
InsertAt<'x', 5, ['a', 'b']> // => ['a', 'b', 'x']
```

## Join
```ts
Join<[], '-'> // => ''
Join<['a'], '-'> // => 'a'
Join<['a', 'b'], '-'> // => 'a-b'
```

# Merge
```ts
Merge<{}, {a: number; c: null}> //=> {a: number; c: null}
Merge<{a: number; c: null}, {}> //=> {a: number; c: null}
Merge<{a: number; c: null}, {b: string}> //=> {a: number; b: string; c: null}
Merge<{a: number; c: null}, {a: string}> //=> {a: string; c: null}
// It only merges only level by default
Merge<{a: {b: string}}, {a: {c: number}}> //=> {a: {c: number}},
// But you can set the level as 3rd argument
Merge<{a: {b: string}}, {a: {c: number}}, 2> //=> {a: {b: string, c: number}}
```

## MutableTuple
```ts
MutableTuple<readonly []> // => []
MutableTuple<readonly ['a']> // => ['a']
MutableTuple<readonly ['a', 'b']> // => ['a', 'b']
```

## Permutation
```ts
Permutation<[]> // => []
Permutation<['a']> // => ['a']
Permutation<['a', 'b']> // => ['a', 'b'] | ['b', 'a']
Permutation<['a', 'b', 'c']> // => ['a', 'b', 'c'] | ['a', 'c', 'b'] | ['b', 'a', 'c'] | ['b', 'c', 'a'] | ['c', 'a', 'b'] | ['c', 'b', 'a']
```

## Range
```ts
Range<3, 3> // => 3
Range<4, 7> // => 4 | 5 | 6 | 7
Range<0, 5> // => 0 | 1 | 2 | 3 | 4 | 5
```

## Split
```ts
Split<'foo', '-'> // => ['foo']
Split<'foo-bar-baz', '-'> // => ['foo', 'bar', 'baz']
Split<'foo--', '-'> // => ['foo', '', '']
```

## SubArray
```ts
SubArray<['a']> // => ['a']
SubArray<['a', 'b']> // => ['a'] | ['b'] | ['a', 'b']
SubArray<['a', 'b', 'c']> // => ['a'] | ['b'] | ['c'] | ['a', 'b'] | ['a', 'c'] | ['b', 'c'] | ['a', 'b', 'c']
```

## Tail
```ts
// Works with Arrays
Tail<[]> //=> []
Tail<['a']> //=> []
Tail<['a', 'b']> //=> ['b']
Tail<['a', 'b', 'c', 'd']> //=> ['b', 'c', 'd']
// and strings
Tail<''> //=> ''
Tail<'a'> //=> ''
Tail<'abcd'> //=> 'bcd'
```

# Testing Your Types with just-types

`just-types` allows you to test your own types using `Is`, `Equal` and other testing utils. These utils are used internally to test `just-types` types. For Example, here is the source file of the `Split` type:

```ts
import {Equal, Is} from './Test'

export type Split<
  Text extends string,
  Separator extends string
> = Text extends `${infer First}${Separator}${infer Rest}` ? [First, ...Split<Rest, Separator>] : [Text]

type Tests = [
  Is<Equal<Split<'foo', '-'>, ['foo']>>,
  Is<Equal<Split<'foo-bar-baz', '-'>, ['foo', 'bar', 'baz']>>,
  Is<Equal<Split<'foo--', '-'>, ['foo', '', '']>>
]
```

As you see, we define the type, then we declare a `Tests` type (can be named anything) and assign a list of assertions types to it. These types are evaluated in realtime by Typescript, so we have instant feedback if something is wrong.

## List of assertions

- `Is<Equal<A, B>>`: asserts that types `A` and `B` are the same.
- `Is<Not<Equal<A, B>>>`: asserts that types `A` and `B` are different.
- `Is<StartsWith<A, B>>`, where `A` and `B` extend `string`: asserts that all elements of `A` start with with an element of `B`.
- `Is<Extends<A, B>>`: asserts that type `A` extends type `B`

# Contributing

You can contribute to this library in many ways, including:

- **Reporting bugs**: Simply open an issue and describe the bug. Please include a code snippet to reproduce the bug, it really helps to solve the problem quickly.

- **Suggesting new types**: If you have a common use case that you think worth having its own custom type, open an issue and we will discuss it. Do you already have an implementation for it? great, make a pull request and I will review it. Please make sure your code is consistent with the rest of the codebase and use [Prettier](https://prettier.io/) and [EditorConfig](https://editorconfig.org/) to format your files.

Those are just examples, any issue or pull request is welcome :)

# Changelog

**1.6.0 (Sptember 24th 2022)**

- Add `FilterOut`, `FilterProps`, `FilterOutProps` and `Merge`.
- Add assertion type `Extends`.
- Improve `Tail` to support `string` types.
- Fix `Filter` to correctly handle union types.

**1.5.0 (September 2nd 2022)**

- Export testing types: `Is`, `Not`, `Equal`, `StartsWith` 

**1.4.2 (March 21th 2022)**

- Add `repository` and `homepage` to `package.json` (forgot to add them on `1.4.1` :P).

**1.4.1 (March 21th 2022)**

- Fix issue [Tail type gives wrong results in specific recursive scenarios](https://github.com/webNeat/just-types/issues/1)

**1.4.0 (January 29th 2022)**

- Add [Split](#split)

**1.3.1 (January 9th 2022)**

- Export missing types

**1.3.0 (January 9th 2022)**

- Add [Filter](#filter)
- Add [FiledPath](#fieldpath)
- Add [GetField](#getfield)

**1.2.0 (January 2nd 2022)**

- Add [Increment](#increment)
- Add [Decrement](#decrement)
- Add depth parameter to [Flatten](#flatten)

**1.1.0 (December 01, 2021)**

- Add [MutableTuple](#mutabletuple)

**1.0.0 (November 22, 2021)**

The first release containing the 7 types:
  - [Flatten](#flatten)
  - [InsertAt](#insertat)
  - [Join](#join)
  - [Permutation](#permutation)
  - [Range](#range)
  - [SubArray](#subarray)
  - [Tail](#tail)