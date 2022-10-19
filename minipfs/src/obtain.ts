/* eslint-disable no-console */
import { $fetch } from 'ohmyfetch'
import { URI } from './types'

export function obtain<T>(uri: URI): Promise<T> {
  return $fetch<T>(uri)
}

export function obtainMedia(uri: URI): Promise<Blob> {
  return $fetch(uri, { responseType: 'blob' })
}

export async function obtainMimeType(uri: URI): Promise<string> {
  const { type } = await $fetch(uri, { method: 'HEAD' })
  return type
}
