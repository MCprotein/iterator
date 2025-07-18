async function executeWithLimit<T>(
  promises: Promise<T>[],
  limit: number
): Promise<T[]> {
  const result1 = await Promise.all([promises[0], promises[1], promises[2]]);
  const result2 = await Promise.all([promises[3], promises[4], promises[5]]);
  return [...result1, ...result2];
}
