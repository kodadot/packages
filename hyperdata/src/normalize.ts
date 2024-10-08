import { MIME_TYPE } from './constatnts'
import {
  Attribute,
  Content,
  FXHashMetadata,
  GenArt,
  KodaMetadata,
  OpenSeaAttribute,
  OpenSeaMetadata,
  PluralAssetMetadata,
  PluralAttribute,
  SanitizerFunc,
  TezosAttribute,
  TezosMetadata,
} from './types'

export function attributeFrom(attr: OpenSeaAttribute): Attribute
export function attributeFrom(attr: TezosAttribute): Attribute
export function attributeFrom(attr: PluralAttribute): Attribute
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function attributeFrom(attr: any): Attribute {
  const display: string = attr.display_type || attr.type || ''
  const trait: string | undefined = attr.trait_type || attr.name || attr.label
  const value: string = attr.value?.toString()

  return {
    display,
    trait: trait?.toString() ?? '',
    value,
  }
}

export function contentFrom(meta: OpenSeaMetadata, eager?: boolean): Content
export function contentFrom(meta: FXHashMetadata, eager?: boolean): Content
export function contentFrom(meta: TezosMetadata, eager?: boolean): Content
export function contentFrom(meta: PluralAssetMetadata, eager?: boolean): Content
export function contentFrom(meta: KodaMetadata, eager?: boolean): Content
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function contentFrom(meta: any, eager?: boolean): Content {
  const description = meta.description || ''
  const thumbnail = meta.thumbnailUri || meta.thumbnail
  const image = meta.image || meta.displayUri || thumbnail || meta.mediaUri
  const animationUrl = meta.animation_url || meta.mediaUri || meta.artifactUri
  const attributes = meta.attributes?.map(attributeFrom) || []
  const name = meta.name
  const type = meta.mimeType || meta.type
  const banner = meta.banner || meta.cover
  const externalUrl = meta.external_url || meta.youtube_url || meta.externalUri
  const tags = Array.isArray(meta.tags) ? meta.tags : []
  const generativeUri = meta.generativeUri || meta.generatorUri || meta.generative_uri
  const kind = meta.kind //|| meta.kindOf
  let generative: GenArt | undefined

  if (eager) {
    generative = generativeFrom(meta)
  }

  return {
    description,
    image,
    animationUrl, // rename to media?
    banner,
    attributes,
    name,
    type: MIME_TYPE.test(type) ? type : '',
    externalUrl,
    tags,
    kind,
    thumbnail,
    generative,
    generativeUri,
    _raw: eager ? meta : undefined,
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function generativeFrom(meta: any): GenArt | undefined {
  const uri = meta.generativeUri || meta.generatorUri || meta.generative_uri

  if (!uri) {
    return undefined
  }

  const hash = meta.previewHash || meta.iterationHash
  const previewParam =
    meta.previewParam ||
    (meta.external_url?.includes('koda') && 'hash') ||
    'fxhash'
  const capture = meta.capture
  const settings = meta.settings

  return {
    uri,
    hash,
    previewParam,
    capture,
    settings,
  }
}

export function normalize(content: Content, sanitizer: SanitizerFunc): Content {
  return {
    ...content,
    image: sanitizer(content.image),
    animationUrl: sanitizer(content.animationUrl),
    thumbnail: sanitizer(content.thumbnail),
  }
}

export function mergeAttributes(
  attrs: OpenSeaAttribute[],
  overrides: Attribute[]
): Attribute[]
export function mergeAttributes(
  attrs: TezosAttribute[],
  overrides: Attribute[]
): Attribute[]
export function mergeAttributes(
  attrs: PluralAttribute[],
  overrides: Attribute[]
): Attribute[]
// export function mergeAttributes(attrs: Attribute[], overrides: Attribute[]): Attribute[]
export function mergeAttributes(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  attrs: any[],
  overrides: Attribute[]
): Attribute[] {
  const initial = new Map(
    attrs.map(attributeFrom).map((a) => [a.trait, a.value])
  )

  for (const override of overrides) {
    initial.set(override.trait, override.value)
  }

  return Array.from(initial.entries()).map(([trait, value]) => ({
    trait,
    value,
  }))
}
