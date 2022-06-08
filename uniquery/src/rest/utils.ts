import { FetchOptions } from 'ohmyfetch'
import { GraphRequest } from './types'

export const getOptions = ({ baseURL, query }: GraphRequest): FetchOptions<'json'> => ({
  baseURL,
  method: 'POST',
  body: query
})
