import { STORAGE_KEYS } from "../constants/storage-keys";
import { useLocalStorage } from "./use-local-storage";

export function useLoggedUser() {
  const [loggedUser] = useLocalStorage(STORAGE_KEYS.USERNAME, "");
  return loggedUser;
}
