import { DefaultFallback } from "@/components/fallbacks/default-fallback";
import { Suspense } from "react";
import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <div className="min-h-screen">
      <Suspense
        fallback={
          <div className="min-h-screen p-4 flex items-center justify-center">
            <DefaultFallback />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
}
