export const unwrapURI = (uri: string): string => decodeURIComponent(uri)

export const unwrapJSON = <T = any>(json: string, throwable = true): T | undefined => {
  try {
    return JSON.parse(json) as T
  } catch (error) {
    if (throwable) {
      throw error
    }
    return undefined
  }
}

const wrapURI = (uri: string): string => encodeURIComponent(uri)

const wrapJSON = <T>(json: T): string => JSON.stringify(json)

export const wrapToString = <T>(object: T): string => wrapURI(wrapJSON(object))
