export type Is<T extends true> = T
export type Not<T extends boolean> = true extends T ? false : true
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false

type MergeInsertions<T> = T extends object ? {[K in keyof T]: MergeInsertions<T[K]>} : T
export type Alike<X, Y> = Equal<MergeInsertions<X>, MergeInsertions<Y>>
