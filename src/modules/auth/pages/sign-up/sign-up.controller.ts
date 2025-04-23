import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useAuthUser } from "../../hooks/use-auth-user";
import { SignUpFormData, signUpSchema } from "../../types/auth.schema";

export const useSignUpController = () => {
  const { logIn } = useAuthUser();

  const form = useForm<SignUpFormData>({
    defaultValues: {
      username: "",
    },
    resolver: zodResolver(signUpSchema),
  });

  const handleSubmit = (data: SignUpFormData) => {
    logIn(data.username);
    form.reset();
  };

  return {
    disabled: !form.formState.isValid,
    form,
    handleSubmit,
  };
};
