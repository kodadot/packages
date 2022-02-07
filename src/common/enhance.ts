import { UpdateFunction } from './types'

export const basicUpdateNameFunction: UpdateFunction = (name: string, index: number): string => `${name} #${index + 1}`
