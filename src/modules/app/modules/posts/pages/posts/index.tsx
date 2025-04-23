import { useAuthUser } from "@/modules/auth";

import { CreatePostForm } from "../../components/create-post-form";
import { DeletePostAlertDialog } from "../../components/delete-post-alert-dialog";
import { Header } from "../../components/header";
import { PostCard, PostCardSkeleton } from "../../components/post-card";
import { UpdatePostDialog } from "../../components/update-post-dialog";
import { usePostsPageController } from "./posts.controller";

export function PostsPage() {
  const { username } = useAuthUser();
  const {
    dialogs,
    onCloseDeletePostAlertDialog,
    onCloseUpdatePostDialog,
    onOpenDeletePostAlertDialog,
    onOpenUpdatePostDialog,
    pagination,
    posts,
    selectedPost,
    state,
  } = usePostsPageController();

  return (
    <div className="mx-auto max-w-3xl bg-white min-h-screen">
      <Header />

      <div className="space-y-6 p-6">
        <CreatePostForm />

        {state.canShowPosts && (
          <>
            {posts.map((post) =>
              username === post.username ? (
                <PostCard
                  isOwner
                  key={post.id}
                  onDelete={onOpenDeletePostAlertDialog}
                  onEdit={onOpenUpdatePostDialog}
                  post={post}
                />
              ) : (
                <PostCard key={post.id} post={post} />
              ),
            )}

            {pagination.hasMorePostsToFetch && (
              <div ref={pagination.lastListItemRef} />
            )}
          </>
        )}

        {state.canShowEmptyState && (
          <div className="flex h-96 items-center justify-center">
            <p className="text-lg text-muted-foreground text-center">
              No posts available.
              <br />
              Please check back later.
            </p>
          </div>
        )}

        {state.canShowLoading &&
          Array.from({ length: 5 }).map((_, index) => (
            <PostCardSkeleton key={index} />
          ))}
      </div>

      <DeletePostAlertDialog
        isOpen={dialogs.deletePostAlertDialog.visible}
        onOpenChange={onCloseDeletePostAlertDialog}
        post={selectedPost}
      />

      <UpdatePostDialog
        isOpen={dialogs.updatePostDialog.visible}
        onClose={onCloseUpdatePostDialog}
        post={selectedPost}
      />
    </div>
  );
}
