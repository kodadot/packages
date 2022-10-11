import type { CreatedBase } from './types';

export function checkBase({ symbol, parts, themes }: CreatedBase) {
  if (symbol.includes('.') || symbol.includes('-')) {
    throw new Error('Symbol must not use dashes or dots')
  }

  if (Array.isArray(parts) && parts.some(part => !part.id)) {
    throw new Error('Id is required for part')
  }

  if (themes && !Object.keys(themes).includes('default')) {
    throw new Error('Missing default key for theme')
  }
}
