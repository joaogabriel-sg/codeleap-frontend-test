import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useLoggedUser } from "@/shared/hooks/use-logged-user";
import { formatRelativeTime } from "@/shared/utils/date";
import { PencilIcon, Trash2Icon } from "lucide-react";

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
import { useListPostsQuery } from "../../hooks/queries/use-list-posts-query";

export function PostsPage() {
  const loggedUser = useLoggedUser();
  const { data, isLoading } = useListPostsQuery();

  const posts = data?.results ?? [];
  const showEmptyState = !isLoading && posts.length === 0;

  return (
    <div className="mx-auto max-w-3xl bg-white min-h-screen">
      <div className="p-4 md:p-6 bg-primary text-primary-foreground">
        <h1 className="text-2xl font-bold">CodeLeap Network</h1>
      </div>

      <div className="space-y-4 p-6">
        {isLoading &&
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

        {!isLoading &&
          posts.map((post) => (
            <PostCardRoot className="max-w-3xl" key={post.id}>
              <PostCardHeader>
                <PostCardTitle>{post.title}</PostCardTitle>

                {loggedUser === post.username && (
                  <PostCardActions>
                    <Button
                      aria-label="Delete post"
                      data-slot="card-action-button"
                      variant="ghost"
                    >
                      <Trash2Icon className="size-6" />
                    </Button>
                    <Button
                      aria-label="Edit post"
                      data-slot="card-action-button"
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

        {showEmptyState && (
          <div className="flex h-96 items-center justify-center">
            <p className="text-lg text-muted-foreground text-center">
              No posts available.
              <br />
              Please check back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
