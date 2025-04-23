import { toast } from "sonner";

import { useDeletePostMutation } from "../../hooks/mutations/use-delete-post-mutation";

type UseDeletePostControllerProps = {
  closeDialog: () => void;
};

export const useDeletePostController = ({
  closeDialog,
}: UseDeletePostControllerProps) => {
  const { isPending: isDeletingPost, mutateAsync } = useDeletePostMutation();

  const handleConfirmPostDeletion = async (id: number) => {
    try {
      await mutateAsync({ id });

      closeDialog();
      toast.success("Post deleted successfully!");
    } catch {
      toast.error("Failed to delete post. Please try again.");
    }
  };

  return {
    handleConfirmPostDeletion,
    isDeletingPost,
  };
};
