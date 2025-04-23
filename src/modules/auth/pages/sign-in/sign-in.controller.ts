import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useAuthUser } from "../../hooks/use-auth-user";
import { useManageUsers } from "../../hooks/use-manage-users";
import { SignUpFormData, signUpSchema } from "../../types/auth.schema";

export const useSignInController = () => {
  const { logIn } = useAuthUser();
  const { isUserRegistered } = useManageUsers();

  const form = useForm<SignUpFormData>({
    defaultValues: {
      username: "",
    },
    resolver: zodResolver(signUpSchema),
  });

  const handleSubmit = (data: SignUpFormData) => {
    if (!isUserRegistered(data.username)) {
      form.setError("username", {
        message: "User not registered",
        type: "manual",
      });
      return;
    }

    logIn(data.username);
    form.reset();
  };

  return {
    disabled: !form.formState.isValid,
    form,
    handleSubmit,
  };
};
