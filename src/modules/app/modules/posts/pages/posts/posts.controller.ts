import { useDialog } from "@/shared/hooks/use-dialog";
import { useState } from "react";

import { useListPostsQuery } from "../../hooks/queries/use-list-posts-query";
import { Post } from "../../types/posts.types";

export const usePostsPageController = () => {
  const { data, isLoading: isLoadingPostsList } = useListPostsQuery();
  const [selectedPost, setSelectedPost] = useState<null | Post>(null);
  const deletePostAlertDialog = useDialog();
  const updatePostDialog = useDialog();

  const posts = data?.results ?? [];
  const showEmptyState = !isLoadingPostsList && posts.length === 0;

  const handleOpenDeletePostAlertDialog = (post: Post) => {
    setSelectedPost(post);
    deletePostAlertDialog.show();
  };

  const handleCloseDeletePostAlertDialog = () => {
    setSelectedPost(null);
    deletePostAlertDialog.close();
  };

  const handleOpenUpdatePostDialog = (post: Post) => {
    setSelectedPost(post);
    updatePostDialog.show();
  };

  const handleCloseUpdatePostDialog = () => {
    setSelectedPost(null);
    updatePostDialog.close();
  };

  return {
    dialogs: {
      deletePostAlertDialog,
      onCloseDeletePostAlertDialog: handleCloseDeletePostAlertDialog,
      onCloseUpdatePostDialog: handleCloseUpdatePostDialog,
      onOpenDeletePostAlertDialog: handleOpenDeletePostAlertDialog,
      onOpenUpdatePostDialog: handleOpenUpdatePostDialog,
      updatePostDialog,
    },
    posts,
    selectedPost,
    state: {
      isEmpty: showEmptyState,
      isLoadingPostsList,
    },
  };
};
