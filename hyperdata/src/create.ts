import { contentFrom } from './normalize'
import {
  Content,
  KodaMetadata
} from './types'

export function createContent<T extends KodaMetadata>(metadata: T): Content {
  const content = contentFrom(metadata)
  // TODO: do validation here
  return content
}
