import { useQuery } from "@tanstack/react-query";

import { postsQueryKey } from "../../config/query-key";
import { postsService } from "../../services/posts.service";

export function useListPostsQuery() {
  return useQuery({
    queryFn: () => postsService.list(),
    queryKey: postsQueryKey.posts.lists(),
  });
}
