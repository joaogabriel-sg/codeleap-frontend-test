import { STORAGE_KEYS } from "@/shared/constants/storage-keys";
import { useLocalStorage } from "@/shared/hooks/use-local-storage";
import { useNavigate } from "react-router";

export const useAuthUser = () => {
  const navigate = useNavigate();
  const [username, setUsername, removeUsername] = useLocalStorage<string>(
    STORAGE_KEYS.USERNAME,
    "",
  );

  const logIn = (username: string) => {
    setUsername(username);
    navigate("/app", { replace: true });
  };

  const logOut = () => {
    removeUsername();
    navigate("/auth/sign-in", { replace: true });
  };

  return { logIn, logOut, username };
};
