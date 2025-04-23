import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { useUpdatePostMutation } from "../../hooks/mutations/use-update-post-mutation";
import {
  UpdatePostFormData,
  updatePostSchema,
} from "../../types/posts.schemas";
import { Post } from "../../types/posts.types";

type UseUpdatePostDialogControllerProps = {
  closeDialog: () => void;
  post: null | Post;
};

export const useUpdatePostDialogController = ({
  closeDialog,
  post,
}: UseUpdatePostDialogControllerProps) => {
  const { isPending: isUpdatingPost, mutateAsync } = useUpdatePostMutation();

  const updatePostForm = useForm<UpdatePostFormData>({
    defaultValues: {
      content: "",
      title: "",
    },
    resolver: zodResolver(updatePostSchema),
  });

  const handleSavePost = async (data: UpdatePostFormData) => {
    try {
      if (!post) {
        toast.error("Post not found. Please try again.");
        return;
      }

      await mutateAsync({
        content: data.content,
        id: post.id,
        title: data.title,
      });

      updatePostForm.reset();
      closeDialog();
      toast.success("Post updated successfully!");
    } catch {
      toast.error("Failed to update post. Please try again.");
    }
  };

  useEffect(() => {
    if (!post) return;

    updatePostForm.reset({
      content: post.content,
      title: post.title,
    });
  }, [post, updatePostForm]);

  return {
    handleSavePost,
    isUpdatingPost,
    updatePostForm,
  };
};
