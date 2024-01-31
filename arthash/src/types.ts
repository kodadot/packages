export type TODO = any

export type FxFeatureValue = string | number | boolean
export type FxFeatures = Record<string, FxFeatureValue>

export interface FxHashApi {
  hash: string
  minter: string
  iteration: number
  rand: RandFunction
  randminter: RandFunction
  context: FxHashExecutionContext
  preview: () => void
  isPreview: boolean
  features: (features: FxFeatures) => void
  getFeature: (id: string) => FxFeatureValue | undefined
  getFeatures: () => FxFeatures
  // stringifyParams: (definitions: FxParamDefinition<FxParamType>[]) => string
  // params: (paramsDefinitions: FxParamDefinition<FxParamType>[]) => void
  // getDefinitions: () => FxParamDefinition<FxParamType>[]
  // getParam: (id: string) => FxParamValue<FxParamType>
  // getParams: () => FxParamValue<FxParamType>
  // getRawParam: (id: string) => string
  // getRawParams: () => { string: string }
  // on: (event: FxEventId, handler: () => void, onDone: () => void) => void
  // emit: (event: FxEventId, data: FxEmitData) => void
}
export type RandFunction = () => number
export type FxHashExecutionContext = "standalone" | "capture" | "minting"
// export {}

declare global {
  interface Window {
    hash: string
    $fx: any // FxHashApi
  }
}

