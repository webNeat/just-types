# Just types

A collection of handy Typescript types.

[![Version](https://img.shields.io/npm/v/just-types?style=flat-square)](https://www.npmjs.com/package/just-types)
[![Tests Status](https://img.shields.io/github/actions/workflow/status/webneat/just-types/tests.yml?branch=main&style=flat-square)](https://github.com/webneat/just-types/actions?query=workflow:"Tests")
[![MIT](https://img.shields.io/npm/l/just-types?style=flat-square)](LICENSE)

# Contents

- [Installation](#installation)
- [Types Reference](#types-reference)
- [Testing Types](#testing-your-types-with-just-types)
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

# Types Reference

- [common](https://github.com/webNeat/just-types/blob/main/docs/common.md)
  - [Mutable](https://github.com/webNeat/just-types/blob/main/docs/common.md#mutable)
  - [Normalize](https://github.com/webNeat/just-types/blob/main/docs/common.md#normalize)

- [number](https://github.com/webNeat/just-types/blob/main/docs/number.md)
  - [Decrement](https://github.com/webNeat/just-types/blob/main/docs/number.md#decrement)
  - [Increment](https://github.com/webNeat/just-types/blob/main/docs/number.md#increment)
  - [Range](https://github.com/webNeat/just-types/blob/main/docs/number.md#range)

- [object](https://github.com/webNeat/just-types/blob/main/docs/object.md)
  - [ExcludeKeys](https://github.com/webNeat/just-types/blob/main/docs/object.md#excludekeys)
  - [ExcludeValues](https://github.com/webNeat/just-types/blob/main/docs/object.md#excludevalues)
  - [ExtractKeys](https://github.com/webNeat/just-types/blob/main/docs/object.md#extractkeys)
  - [ExtractValues](https://github.com/webNeat/just-types/blob/main/docs/object.md#extractvalues)
  - [FieldPath](https://github.com/webNeat/just-types/blob/main/docs/object.md#fieldpath)
  - [GetField](https://github.com/webNeat/just-types/blob/main/docs/object.md#getfield)
  - [Merge](https://github.com/webNeat/just-types/blob/main/docs/object.md#merge)
  - [PartialKeys](https://github.com/webNeat/just-types/blob/main/docs/object.md#partialkeys)
  - [PartialValues](https://github.com/webNeat/just-types/blob/main/docs/object.md#partialvalues)
  - [RequiredKeys](https://github.com/webNeat/just-types/blob/main/docs/object.md#requiredkeys)
  - [RequiredValues](https://github.com/webNeat/just-types/blob/main/docs/object.md#requiredvalues)

- [string](https://github.com/webNeat/just-types/blob/main/docs/string.md)
  - [Split](https://github.com/webNeat/just-types/blob/main/docs/string.md#split)
  - [Tail](https://github.com/webNeat/just-types/blob/main/docs/string.md#tail)

- [tuple](https://github.com/webNeat/just-types/blob/main/docs/tuple.md)
  - [Exclude](https://github.com/webNeat/just-types/blob/main/docs/tuple.md#exclude)
  - [Extract](https://github.com/webNeat/just-types/blob/main/docs/tuple.md#extract)
  - [Flatten](https://github.com/webNeat/just-types/blob/main/docs/tuple.md#flatten)
  - [Insert](https://github.com/webNeat/just-types/blob/main/docs/tuple.md#insert)
  - [Join](https://github.com/webNeat/just-types/blob/main/docs/tuple.md#join)
  - [Permutation](https://github.com/webNeat/just-types/blob/main/docs/tuple.md#permutation)
  - [Slice](https://github.com/webNeat/just-types/blob/main/docs/tuple.md#slice)
  - [SubArray](https://github.com/webNeat/just-types/blob/main/docs/tuple.md#subarray)
  - [SubSequence](https://github.com/webNeat/just-types/blob/main/docs/tuple.md#subsequence)
  - [Tail](https://github.com/webNeat/just-types/blob/main/docs/tuple.md#tail)

# Testing Your Types with just-types

`just-types` allows you to test your own types using `Is`, `Equal` and other testing utils. These utils are used internally to test `just-types` types. For Example, here is the source file of the `Split` type:

```ts
import {Equal, Is} from '../test'

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

```ts
import {Is, Equal, Not, Extends, StartsWith} from 'just-types/test'

Is<Equal<A, B>> // asserts that types `A` and `B` are the same.
Is<Not<Equal<A, B>>> // asserts that types `A` and `B` are different.
Is<StartsWith<A, B>> // where `A` and `B` extend `string`: asserts that all elements of `A` start with with an element of `B`.
Is<Extends<A, B>> // asserts that type `A` extends type `B`
```

# Contributing

You can contribute to this library in many ways, including:

- **Reporting bugs**: Simply open an issue and describe the bug. Please include a code snippet to reproduce the bug, it really helps to solve the problem quickly.

- **Suggesting new types**: If you have a common use case that you think worth having its own custom type, open an issue and we will discuss it. Do you already have an implementation for it? great, make a pull request and I will review it.

Those are just examples, any issue or pull request is welcome :)

# Changelog

**2.0.0-alpha.2 (April 13th 2023)**

- Add types:
  - In `common` module: `Normalize`
  - In `object` module: `PartialKeys`, `PartialValues`, `RequiredKeys` and `RequiredValues`

**2.0.0-alpha.1 (April 11th 2023)**

- Full rewrite of the library.
- Rewrite some types to use less recursion and be more efficient.
- Separate types into modules: `tuple`, `string`, `object`, ...
- Generate docs directly from source code.
- Drop Parcel and use `tsc` instead.
- Rename some types for better naming convention `FilterOut => tuple.Exclude`, `FilterProps => object.ExtractValues`, `FilterPropsOut => object.ExcludeValues`, ...

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