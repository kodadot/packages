export const serializer = (_: unknown, value: unknown): unknown => typeof value === 'bigint' ? value.toString() : value
