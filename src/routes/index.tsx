import { AppLayout } from "@/modules/app/components/layouts/app-layout";
import { PostsPage } from "@/modules/app/modules/posts";
import { AuthLayout, SignUpPage } from "@/modules/auth";
import { createBrowserRouter } from "react-router";

import { loaders } from "./loaders";
import { RedirectWithPermissions } from "./redirect";

export const router = createBrowserRouter([
  {
    element: <RedirectWithPermissions />,
    path: "/",
  },
  {
    children: [
      {
        Component: SignUpPage,
        path: "sign-up",
      },
    ],
    Component: AuthLayout,
    loader: loaders.publicRoute,
    path: "/auth",
  },
  {
    children: [
      {
        Component: PostsPage,
        index: true,
      },
    ],
    Component: AppLayout,
    loader: loaders.privateRoute,
    path: "/app",
  },
]);
