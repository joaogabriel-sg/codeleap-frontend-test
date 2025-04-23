import { STORAGE_KEYS } from "@/shared/constants/storage-keys";
import { useLocalStorage } from "@/shared/hooks/use-local-storage";

export const useManageUsers = () => {
  const [users, setUsers] = useLocalStorage<string[]>(STORAGE_KEYS.USERS, []);

  const registerUser = (username: string) => {
    setUsers((previousUsers) => {
      const newUsers = [...previousUsers, username];
      return newUsers;
    });
  };

  const isUserRegistered = (username: string) => {
    return users.includes(username);
  };

  return { isUserRegistered, registerUser };
};
