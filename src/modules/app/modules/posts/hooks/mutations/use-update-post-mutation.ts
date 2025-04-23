import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postsQueryKey } from "../../config/query-key";
import { postsService } from "../../services/posts.service";
import { InputUpdatePost, OutputUpdatePost } from "../../types/posts.contracts";

export function useUpdatePostMutation() {
  const queryClient = useQueryClient();

  return useMutation<OutputUpdatePost, Error, InputUpdatePost>({
    mutationFn: postsService.update,
    onError: (error) => {
      console.error("Error updating post:", error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: postsQueryKey.posts.lists() });
    },
  });
}
