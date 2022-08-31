import { BaseContext } from './types'

export function loggerOf(ctx: BaseContext) {
  return ctx.log
}
