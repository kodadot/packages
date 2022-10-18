import { $fetch } from 'ohmyfetch'
import { MetadataMap } from './types'

export function magic<T> (url: string): Promise<T> {
  return $fetch<T>(url)
}

export const mapToMagic = <T = MetadataMap>(url: string): Promise<T> => magic<T>(url)
