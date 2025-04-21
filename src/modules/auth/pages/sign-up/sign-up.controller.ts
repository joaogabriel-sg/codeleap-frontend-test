import { STORAGE_KEYS } from "@/shared/constants/storage-keys";
import { useLocalStorage } from "@/shared/hooks/use-local-storage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { SignUpFormData, signUpSchema } from "../../schemas/sign-up.schema";

export const useSignUpController = () => {
  const navigate = useNavigate();

  const [, setUsername] = useLocalStorage<null | string>(
    STORAGE_KEYS.USERNAME,
    null,
  );

  const form = useForm<SignUpFormData>({
    defaultValues: {
      username: "",
    },
    resolver: zodResolver(signUpSchema),
  });

  const handleSubmit = (data: SignUpFormData) => {
    setUsername(data.username);
    form.reset();
    navigate("/");
  };

  return {
    disabled: !form.formState.isValid,
    form,
    handleSubmit,
  };
};
