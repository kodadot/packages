export type Callback<T = any, V = any> = (param: T) => Promise<V>
export type UnwrapCallback<T> = (param: T) => string
