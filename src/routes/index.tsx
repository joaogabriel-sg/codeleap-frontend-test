import { AppLayout } from "@/modules/app/components/layouts/app-layout";
import { AuthLayout } from "@/modules/auth";
import { namedLazyLoad } from "@/shared/utils/named-lazy-load";
import { createBrowserRouter } from "react-router";

import { loaders } from "./loaders";
import { RedirectWithPermissions } from "./redirect";

const { SignInPage, SignUpPage } = namedLazyLoad(
  () => import("@/modules/auth"),
);
const { PostsPage } = namedLazyLoad(
  () => import("@/modules/app/modules/posts"),
);

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
      {
        Component: SignInPage,
        path: "sign-in",
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
