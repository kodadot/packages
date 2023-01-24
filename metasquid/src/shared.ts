/* eslint-disable no-redeclare */
import { BatchBlock, SubstrateBlock } from '@subsquid/substrate-processor'
import { BaseBlock, BaseCall, BaseContext, EntityWithId, IEvent } from './types'

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
  const { blockNumber, timestamp } = toBaseBlock(context)

  return { caller, blockNumber, timestamp }
}

export function ensure<T>(value: any): T {
  return value as T
}

export function metadataOf({ metadata }: { metadata?: string }): string {
  return metadata ?? ''
}

export function toBaseBlock(context: BatchBlock<any>): BaseBlock;
export function toBaseBlock(context: BaseContext): BaseBlock;
export function toBaseBlock(context: SubstrateBlock): BaseBlock;
export function toBaseBlock(context: BatchBlock<any> | BaseContext | SubstrateBlock): BaseBlock {
  const blockFrom = (): SubstrateBlock => {
    if ('block' in context) {
      return context.block
    }

    if ('header' in context) {
      return context.header
    }
    return context
  }

  const block = blockFrom()
  const blockNumber = block.height.toString()
  const timestamp = new Date(block.timestamp)

  return { blockNumber, timestamp }
}

export function toMap<T extends EntityWithId>(array: T[]): Map<string, T> {
  return new Map(array.map(item => [item.id, item]))
}
