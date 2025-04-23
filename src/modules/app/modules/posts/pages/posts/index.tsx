import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuthUser } from "@/modules/auth";
import { formatRelativeTime } from "@/shared/utils/date";
import { LogOutIcon, PencilIcon, Trash2Icon } from "lucide-react";

import { CreatePostForm } from "../../components/create-post-form";
import { DeletePostAlertDialog } from "../../components/delete-post-alert-dialog";
import {
  PostCardActions,
  PostCardContent,
  PostCardDetails,
  PostCardHeader,
  PostCardMention,
  PostCardRoot,
  PostCardTime,
  PostCardTitle,
} from "../../components/post-card";
import { UpdatePostDialog } from "../../components/update-post-dialog";
import { usePostsPageController } from "./posts.controller";

export function PostsPage() {
  const { logOut, username } = useAuthUser();
  const { dialog, pagination, posts, selectedPost, state } =
    usePostsPageController();

  return (
    <div className="mx-auto max-w-3xl bg-white min-h-screen">
      <div className="p-4 md:p-6 bg-primary text-primary-foreground flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">CodeLeap Network</h1>

        <div className="flex items-center gap-2">
          <span>{username}</span>
          <Button onClick={logOut} variant="ghost">
            <LogOutIcon className="size-6" />
          </Button>
        </div>
      </div>

      <div className="space-y-6 p-6">
        <CreatePostForm />

        {state.canShowPosts && (
          <>
            {posts.map((post) => (
              <PostCardRoot className="max-w-3xl" key={post.id}>
                <PostCardHeader>
                  <PostCardTitle>{post.title}</PostCardTitle>

                  {username === post.username && (
                    <PostCardActions>
                      <Button
                        aria-label="Delete post"
                        data-slot="card-action-button"
                        onClick={() => dialog.onOpenDeletePostAlertDialog(post)}
                        variant="ghost"
                      >
                        <Trash2Icon className="size-6" />
                      </Button>
                      <Button
                        aria-label="Edit post"
                        data-slot="card-action-button"
                        onClick={() => dialog.onOpenUpdatePostDialog(post)}
                        variant="ghost"
                      >
                        <PencilIcon className="size-6" />
                      </Button>
                    </PostCardActions>
                  )}
                </PostCardHeader>

                <PostCardContent>
                  <PostCardDetails>
                    <PostCardMention>@{post.username}</PostCardMention>
                    <PostCardTime>
                      {formatRelativeTime(post.created_datetime)}
                    </PostCardTime>
                  </PostCardDetails>

                  <p className="text-base">{post.content}</p>
                </PostCardContent>
              </PostCardRoot>
            ))}

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
            <PostCardRoot key={index}>
              <PostCardHeader className="bg-transparent">
                <Skeleton className="w-full h-8" />
              </PostCardHeader>

              <PostCardContent>
                <PostCardDetails>
                  <Skeleton className="h-4 w-full max-w-32" />
                  <Skeleton className="h-4 w-full max-w-24" />
                </PostCardDetails>

                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </PostCardContent>
            </PostCardRoot>
          ))}
      </div>

      <DeletePostAlertDialog
        isOpen={dialog.deletePostAlertDialog.visible}
        onOpenChange={dialog.onCloseDeletePostAlertDialog}
        post={selectedPost}
      />

      <UpdatePostDialog
        isOpen={dialog.updatePostDialog.visible}
        onClose={dialog.onCloseUpdatePostDialog}
        post={selectedPost}
      />
    </div>
  );
}
