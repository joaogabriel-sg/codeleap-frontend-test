import { useListPostsQuery } from "../../hooks/queries/use-list-posts-query";

export const usePostsPageController = () => {
  const { data, isLoading: isLoadingPostsList } = useListPostsQuery();

  const posts = data?.results ?? [];
  const showEmptyState = !isLoadingPostsList && posts.length === 0;

  return {
    isLoadingPostsList,
    posts,
    showEmptyState,
  };
};
