import { BaseCall, BaseContext, IEvent } from './types'

export function eventFrom<T>(interaction: T, { blockNumber, caller, timestamp }: BaseCall, meta: string, currentOwner?: string): IEvent<T> {
  return {
    interaction,
    blockNumber: BigInt(blockNumber),
    caller,
    currentOwner: currentOwner ?? caller,
    timestamp,
    meta
  }
}

export function toBaseCall(context: BaseContext): BaseCall {
  const caller = ''
  const blockNumber = context.block.height.toString()
  const timestamp = new Date(context.block.timestamp)

  return { caller, blockNumber, timestamp }
}

export function ensure<T>(value: any): T {
  return value as T
}

export function metadataOf({ metadata }: { metadata?: string }): string {
  return metadata ?? ''
}
