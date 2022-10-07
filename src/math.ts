export function addNumbers(...args: number[]): number {
  return args.reduce((sum, current) => sum + current);
}
