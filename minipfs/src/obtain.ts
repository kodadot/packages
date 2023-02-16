/* eslint-disable no-console */
import { $fetch } from 'ohmyfetch'
import { URI } from './types'

export function obtain<T>(uri: URI): Promise<T> {
  return $fetch<T>(uri)
}

export async function obtainSafe<T>(uri: URI): Promise<T> {
  try {
    return await obtain<T>(uri)
  } catch (err) {
    const message = `[KODADOT::MINIPFS] Fail to Obtain: ${err.message}`
    console.warn(message)
    return Promise.reject<T>(message)
    // throw new Error(`[KODADOT::MINIPFS] Fail to Obtain: ${err.message}`)
  }
}

export function obtainMedia(uri: URI): Promise<Blob> {
  return $fetch(uri, { responseType: 'blob' })
}

export async function obtainMimeType(uri: URI): Promise<string> {
  const { type } = await $fetch(uri, { method: 'HEAD' })
  return type
}
