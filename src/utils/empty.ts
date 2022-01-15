export function isEmpty(obj: Record<string, any>) {
  for (const _ in obj) { return false; }
  return true;
}