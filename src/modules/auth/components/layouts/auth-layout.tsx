import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <div className="min-h-screen p-4 flex items-center justify-center">
      <Outlet />
    </div>
  );
}
