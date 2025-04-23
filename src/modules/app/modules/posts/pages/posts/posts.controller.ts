import { useDialog } from "@/shared/hooks/use-dialog";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";

import { useListPostsQuery } from "../../hooks/queries/use-list-posts-query";
import { Post } from "../../types/posts.types";

export const usePostsPageController = () => {
  const {
    data,
    fetchNextPage: fetchMorePosts,
    hasNextPage: hasMorePostsToFetch,
    isFetchingNextPage: isFetchingMorePosts,
    isLoading: isLoadingPostsList,
  } = useListPostsQuery();

  const [selectedPost, setSelectedPost] = useState<null | Post>(null);

  const deletePostAlertDialog = useDialog();
  const updatePostDialog = useDialog();

  const [lastListItemRef, isLastListItemInView] = useInView();

  const posts = useMemo(() => {
    return data?.pages.flatMap((page) => page.results) ?? [];
  }, [data?.pages]);

  const handleOpenDeletePostAlertDialog = useCallback(
    (post: Post) => {
      setSelectedPost(post);
      deletePostAlertDialog.show();
    },
    [deletePostAlertDialog],
  );

  const handleCloseDeletePostAlertDialog = useCallback(() => {
    setSelectedPost(null);
    deletePostAlertDialog.close();
  }, [deletePostAlertDialog]);

  const handleOpenUpdatePostDialog = useCallback(
    (post: Post) => {
      setSelectedPost(post);
      updatePostDialog.show();
    },
    [updatePostDialog],
  );

  const handleCloseUpdatePostDialog = useCallback(() => {
    setSelectedPost(null);
    updatePostDialog.close();
  }, [updatePostDialog]);

  useEffect(() => {
    if (isLastListItemInView && !isFetchingMorePosts) {
      fetchMorePosts();
    }
  }, [fetchMorePosts, isFetchingMorePosts, isLastListItemInView]);

  return {
    dialogs: {
      deletePostAlertDialog,
      updatePostDialog,
    },
    onCloseDeletePostAlertDialog: handleCloseDeletePostAlertDialog,
    onCloseUpdatePostDialog: handleCloseUpdatePostDialog,
    onOpenDeletePostAlertDialog: handleOpenDeletePostAlertDialog,
    onOpenUpdatePostDialog: handleOpenUpdatePostDialog,
    pagination: {
      hasMorePostsToFetch,
      isLastListItemInView,
      lastListItemRef,
    },
    posts,
    selectedPost,
    state: {
      canShowEmptyState: !isLoadingPostsList && posts.length === 0,
      canShowLoading: isLoadingPostsList || isFetchingMorePosts,
      canShowPosts: !isLoadingPostsList && posts.length > 0,
    },
  };
};
