import { useDialog } from "@/shared/hooks/use-dialog";
import { useState } from "react";

import { useListPostsQuery } from "../../hooks/queries/use-list-posts-query";
import { Post } from "../../types/posts.types";

export const usePostsPageController = () => {
  const { data, isLoading: isLoadingPostsList } = useListPostsQuery();
  const [selectedPost, setSelectedPost] = useState<null | Post>(null);
  const deletePostAlertDialog = useDialog();

  const posts = data?.results ?? [];
  const showEmptyState = !isLoadingPostsList && posts.length === 0;

  const handleOpenDeletePostAlertDialog = (post: Post) => {
    setSelectedPost(post);
    deletePostAlertDialog.show();
  };

  return {
    deletePostAlertDialog,
    handleOpenDeletePostAlertDialog,
    isLoadingPostsList,
    posts,
    selectedPost,
    showEmptyState,
  };
};
