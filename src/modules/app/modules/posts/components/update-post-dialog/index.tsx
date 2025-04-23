import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2Icon } from "lucide-react";

import { Post } from "../../types/posts.types";
import { useUpdatePostDialogController } from "./update-post-dialog.controller";

type UpdatePostDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  post: null | Post;
};

export function UpdatePostDialog({
  isOpen,
  onClose: onClose,
  post,
}: UpdatePostDialogProps) {
  const { handleSavePost, isUpdatingPost, updatePostForm } =
    useUpdatePostDialogController({
      closeDialog: onClose,
      post,
    });

  if (!post) return null;

  return (
    <Dialog onOpenChange={onClose} open={isOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...updatePostForm}>
          <form onSubmit={updatePostForm.handleSubmit(handleSavePost)}>
            <DialogHeader>
              <DialogTitle>Edit item</DialogTitle>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <FormField
                control={updatePostForm.control}
                disabled={isUpdatingPost}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="E.g.: Hello World" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={updatePostForm.control}
                disabled={isUpdatingPost}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <Textarea
                        className="resize-none"
                        placeholder="E.g.: This is my first post!"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter>
              <Button
                disabled={isUpdatingPost}
                onClick={onClose}
                type="button"
                variant="secondary"
              >
                Cancel
              </Button>
              <Button disabled={isUpdatingPost} type="submit">
                {isUpdatingPost && <Loader2Icon className="animate-spin" />}
                Save
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
