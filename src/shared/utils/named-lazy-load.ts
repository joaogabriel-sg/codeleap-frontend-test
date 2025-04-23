import { lazy } from "react";

export const namedLazyLoad = <
  T extends Record<string, unknown>,
  U extends keyof T,
>(
  loader: (x?: string) => Promise<T>,
) =>
  new Proxy({} as unknown as T, {
    get: (_target, componentName: string | symbol) => {
      if (typeof componentName === "string") {
        return lazy(() =>
          loader(componentName).then((x) => ({
            default: x[
              componentName as U
            ] as unknown as React.ComponentType<unknown>,
          })),
        );
      }
    },
  });
