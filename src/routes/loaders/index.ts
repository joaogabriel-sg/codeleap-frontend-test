import { STORAGE_KEYS } from "@/shared/constants/storage-keys";
import { redirect } from "react-router";

const publicRouteLoader = () => {
  const username = localStorage.getItem(STORAGE_KEYS.USERNAME);
  const isAuthenticated = !!username;

  if (isAuthenticated) {
    return redirect("/app");
  }

  return null;
};

const privateRouteLoader = () => {
  const username = localStorage.getItem(STORAGE_KEYS.USERNAME);
  const isAuthenticated = !!username;

  if (!isAuthenticated) {
    return redirect("/auth/sign-in");
  }

  return null;
};

export const loaders = {
  privateRoute: privateRouteLoader,
  publicRoute: publicRouteLoader,
};
