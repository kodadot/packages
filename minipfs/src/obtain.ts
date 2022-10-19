/* eslint-disable no-console */
import { $fetch } from 'ohmyfetch'
import { URI } from './types'

export function obtain<T>(uri: URI): Promise<T> {
  return $fetch<T>(uri)
    .catch((err) => {
      console.error(err)
      return {} as T
    })
}

export function obtainMedia(uri: URI): Promise<Blob> {
  return $fetch(uri, { responseType: 'blob' })
}
