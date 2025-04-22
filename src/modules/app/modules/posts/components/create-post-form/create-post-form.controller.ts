import { useLoggedUser } from "@/shared/hooks/use-logged-user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { useCreatePostMutation } from "../../hooks/mutations/use-create-post-mutation";
import {
  CreatePostFormData,
  createPostSchema,
} from "../../types/posts.schemas";

export const useCreatePostFormController = () => {
  const loggedUser = useLoggedUser();
  const { isPending: isCreatingPost, mutateAsync } = useCreatePostMutation();

  const createPostForm = useForm<CreatePostFormData>({
    defaultValues: {
      content: "",
      title: "",
    },
    resolver: zodResolver(createPostSchema),
  });

  const handleCreatePost = async (data: CreatePostFormData) => {
    try {
      await mutateAsync({
        content: data.content,
        title: data.title,
        username: loggedUser,
      });

      createPostForm.reset();
      toast.success("Post created successfully!");
    } catch {
      toast.error("Failed to create post. Please try again.");
    }
  };

  return {
    createPostForm,
    handleCreatePost,
    isCreatingPost,
  };
};
