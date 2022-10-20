/* eslint-disable no-console */
import { $fetch } from 'ohmyfetch'
import { URI } from './types'

export function obtain<T>(uri: URI): Promise<T> {
  return $fetch<T>(uri)
}

export function obtainSafe<T>(uri: URI): Promise<T> {
  return obtain<T>(uri).catch((err: Error) => {
    console.warn(err)
    return {} as T
  })
}

export function obtainMedia(uri: URI): Promise<Blob> {
  return $fetch(uri, { responseType: 'blob' })
}

export async function obtainMimeType(uri: URI): Promise<string> {
  const { type } = await $fetch(uri, { method: 'HEAD' })
  return type
}
