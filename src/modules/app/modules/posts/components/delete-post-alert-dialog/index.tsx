import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

import { Post } from "../../types/posts.types";
import { useDeletePostController } from "./delete-post.controller";

type DeletePostAlertDialogProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  post: null | Post;
};

export function DeletePostAlertDialog({
  isOpen,
  onOpenChange,
  post,
}: DeletePostAlertDialogProps) {
  const { handleConfirmPostDeletion, isDeletingPost } = useDeletePostController(
    { closeDialog: () => onOpenChange(false) },
  );

  if (!post) return null;

  return (
    <AlertDialog onOpenChange={onOpenChange} open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this item?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete the post{" "}
            <strong>"{post.title}"</strong> and cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeletingPost}>
            Cancel
          </AlertDialogCancel>
          <Button
            disabled={isDeletingPost}
            onClick={() => handleConfirmPostDeletion(post.id)}
          >
            {isDeletingPost && <Loader2Icon className="animate-spin" />}
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
