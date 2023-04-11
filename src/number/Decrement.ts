import {Equal, Is} from '../test'
import { Minus100To100, MinusOne } from '../constants'

export type Decrement<N extends Minus100To100> = MinusOne[`${N}`]

type Tests = [
  Is<Equal<Decrement<0>, -1>>,
  Is<Equal<Decrement<1>, 0>>,
  Is<Equal<Decrement<100>, 99>>,
  Is<Equal<Decrement<0>, -1>>,
  Is<Equal<Decrement<-99>, -100>>,
  Is<Equal<Decrement<-100>, -101>>,
]
