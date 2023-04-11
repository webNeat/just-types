import {Equal, Is} from '../test'
import { Minus100To100 } from '../constants'
import { Increment } from './Increment'

export type Range<First extends Minus100To100, Last extends Minus100To100> =
  First extends Last ? First :
  // @ts-ignore
  Increment<First> extends Last ? First | Last : 
  // @ts-ignore
  Increment<Increment<First>> extends Last ? First | Increment<First> | Last : 
  // @ts-ignore
  First | Increment<First> | Increment<Increment<First>> | Range<Increment<Increment<Increment<First>>>, Last>

type Tests = [
  Is<Equal<Range<3, 3>, 3>>,
  Is<Equal<Range<4, 7>, 4 | 5 | 6 | 7>>,
  Is<Equal<Range<0, 5>, 0 | 1 | 2 | 3 | 4 | 5>>,
  Is<Equal<Range<-5, 2>, -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2>>,
]
