import { QUERY_KEY, QUERY_OPERATION } from "@/shared/types/query-key";

export const postsQueryKey = {
  [QUERY_KEY.POSTS]: {
    default: [QUERY_KEY.POSTS] as const,
    lists: () =>
      [
        ...postsQueryKey[QUERY_KEY.POSTS].default,
        QUERY_OPERATION.LIST,
      ] as const,
  },
};
