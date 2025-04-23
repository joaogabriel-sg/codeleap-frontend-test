import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { formatRelativeTime } from "@/shared/utils/date";
import { PencilIcon, Trash2Icon } from "lucide-react";
import { memo } from "react";

import { Post } from "../../types/posts.types";
import {
  PostCardActions,
  PostCardContent,
  PostCardDetails,
  PostCardHeader,
  PostCardMention,
  PostCardRoot,
  PostCardTime,
  PostCardTitle,
} from "./components";

type PostCardBaseProps = {
  post: Post;
};

type PostCardComponentProps = PostCardBaseProps &
  (PostCardGuestProps | PostCardOwnerProps);

type PostCardGuestProps = {
  isOwner?: false;
};

type PostCardOwnerProps = {
  isOwner: true;
  onDelete: (post: Post) => void;
  onEdit: (post: Post) => void;
};

function PostCardComponent(props: PostCardComponentProps) {
  return (
    <PostCardRoot className="max-w-3xl">
      <PostCardHeader>
        <PostCardTitle>{props.post.title}</PostCardTitle>
        {props.isOwner && (
          <PostCardActions>
            <Button
              aria-label="Delete post"
              data-slot="card-action-button"
              onClick={() => props.onDelete(props.post)}
              variant="ghost"
            >
              <Trash2Icon className="size-6" />
            </Button>
            <Button
              aria-label="Edit post"
              data-slot="card-action-button"
              onClick={() => props.onEdit(props.post)}
              variant="ghost"
            >
              <PencilIcon className="size-6" />
            </Button>
          </PostCardActions>
        )}
      </PostCardHeader>

      <PostCardContent>
        <PostCardDetails>
          <PostCardMention>@{props.post.username}</PostCardMention>
          <PostCardTime>
            {formatRelativeTime(props.post.created_datetime)}
          </PostCardTime>
        </PostCardDetails>

        <p className="text-base">{props.post.content}</p>
      </PostCardContent>
    </PostCardRoot>
  );
}

export const PostCard = memo(PostCardComponent);

export function PostCardSkeleton() {
  return (
    <PostCardRoot>
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
  );
}
