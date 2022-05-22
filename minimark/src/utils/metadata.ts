import { Attribute, Metadata } from '../common/types'
import { unSanitizeIpfsUrl } from './ipfs'

export const createMetadata = (
  name: string,
  description: string,
  imageHash: string,
  animationUrl = '',
  attributes: Attribute[] = [],
  externalUrl = '',
  type = ''
): Metadata => {
  return {
    name,
    description,
    image: unSanitizeIpfsUrl(imageHash),
    animation_url: unSanitizeIpfsUrl(animationUrl),
    attributes: attributes,
    external_url: externalUrl || 'https://kodadot.xyz',
    type,
  }
}
