import { DefaultFallback } from "@/components/fallbacks/default-fallback";
import { Suspense } from "react";
import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <div className="min-h-screen p-4 flex items-center justify-center">
      <Suspense fallback={<DefaultFallback />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
