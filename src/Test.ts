export type Is<T extends true> = T
export type Not<T extends boolean> = true extends T ? false : true
export type StartsWith<Text extends string, Prefix extends string> = Text extends `${Prefix}${infer _}`
  ? true
  : false
