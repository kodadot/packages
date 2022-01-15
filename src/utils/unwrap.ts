
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