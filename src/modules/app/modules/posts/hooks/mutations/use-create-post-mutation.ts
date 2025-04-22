import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postsQueryKey } from "../../config/query-key";
import { postsService } from "../../services/posts.service";
import { InputCreatePost, OutputCreatePost } from "../../types/posts.contracts";

export function useCreatePostMutation() {
  const queryClient = useQueryClient();

  return useMutation<OutputCreatePost, Error, InputCreatePost>({
    mutationFn: postsService.create,
    onError: (error) => {
      console.error("Error creating post:", error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: postsQueryKey.posts.lists() });
    },
  });
}
