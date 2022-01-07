import { Cache, QueryInput } from "@urql/exchange-graphcache";

export const typedUpdateQuery = <Result, Query>(
  cache: Cache,
  qi: QueryInput,
  result: any,
  update: (result: Result, q: Query) => Query
) => {
  return cache.updateQuery(qi, (data) => update(result, data as any) as any);
};
