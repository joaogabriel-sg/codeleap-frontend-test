import { STORAGE_KEYS } from "@/shared/constants/storage-keys";
import { Navigate } from "react-router";

export function RedirectWithPermissions() {
  const username = localStorage.getItem(STORAGE_KEYS.USERNAME);
  const isAuthenticated = !!username;

  if (isAuthenticated) {
    return <Navigate to="/app" />;
  }

  return <Navigate to="/auth/sign-in" />;
}
