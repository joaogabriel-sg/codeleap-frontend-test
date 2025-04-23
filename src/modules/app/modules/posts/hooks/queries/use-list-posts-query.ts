/* eslint-disable perfectionist/sort-objects */
import { useInfiniteQuery } from "@tanstack/react-query";

import { postsQueryKey } from "../../config/query-key";
import { postsService } from "../../services/posts.service";

export function useListPostsQuery() {
  return useInfiniteQuery({
    queryKey: postsQueryKey.posts.lists(),
    queryFn: ({ pageParam }) =>
      postsService.list({ limit: pageParam.limit, offset: pageParam.offset }),
    initialPageParam: {
      limit: 5,
      offset: 0,
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.next) {
        const url = new URL(lastPage.next);
        const parameters = Object.fromEntries(url.searchParams.entries());
        return {
          limit: Number(parameters.limit),
          offset: Number(parameters.offset),
        };
      }

      return;
    },
  });
}
