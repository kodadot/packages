export const unwrap = (rmrk: string): string => {
  // eslint-disable-next-line no-console
  console.warn(`Your ${rmrk} is nice but import specific version instead of this one`)
  throw new Error('Use V1 or V2 instead')
}
