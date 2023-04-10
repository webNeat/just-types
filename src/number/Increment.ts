import {Equal, Is} from '../test'
import { Minus100To100, PlusOne } from '../constants'

export type Increment<N extends Minus100To100> = PlusOne[`${N}`]

type Tests = [
  Is<Equal<Increment<0>, 1>>,
  Is<Equal<Increment<1>, 2>>,
  Is<Equal<Increment<100>, 101>>,
  Is<Equal<Increment<-1>, 0>>,
  Is<Equal<Increment<-100>, -99>>,
]
