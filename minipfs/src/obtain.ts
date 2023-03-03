/* eslint-disable no-console */
import { $fetch } from 'ohmyfetch'
import { URI } from './types'

export function obtain<T>(uri: URI): Promise<T> {
  return $fetch<T>(uri, {
    retry: 3,
    mode: 'no-cors',
    redirect: 'follow',
    onRequestError({ error }) {
      const message = `[KODADOT::MINIPFS] Fail to Obtain: ${error.message}`
      console.warn(message)
    },
    onResponseError({ request, response }) {
      const message = `[KODADOT::MINIPFS] Obtaininig ${request} failed with status ${response.status}`
      console.warn(message)
    }
  })
}

export async function obtainSafe<T>(uri: URI): Promise<T> {
  try {
    return await obtain<T>(uri)
  } catch (err) {
    return {} as T
  }
}

export function obtainMedia(uri: URI): Promise<Blob> {
  return $fetch(uri, { responseType: 'blob' })
}

export async function obtainMimeType(uri: URI): Promise<string> {
  const { type } = await $fetch(uri, { method: 'HEAD' })
  return type
}
