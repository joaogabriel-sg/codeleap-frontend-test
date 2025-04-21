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
        element: <SignUpPage />,
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
        element: <div>App</div>,
      },
    ],
    loader: loaders.privateRoute,
    path: "/app",
  },
]);
