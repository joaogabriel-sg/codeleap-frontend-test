import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postsQueryKey } from "../../config/query-key";
import { postsService } from "../../services/posts.service";
import { InputDeletePost } from "../../types/posts.contracts";

export function useDeletePostMutation() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, InputDeletePost>({
    mutationFn: postsService.delete,
    onError: (error) => {
      console.error("Error deleting post:", error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: postsQueryKey.posts.lists() });
    },
  });
}
