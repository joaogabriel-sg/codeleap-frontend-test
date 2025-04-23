import { Button } from "@/components/ui/button";
import { useAuthUser } from "@/modules/auth";
import { LogOutIcon } from "lucide-react";

export function Header() {
  const { logOut, username } = useAuthUser();

  return (
    <div className="p-4 md:p-6 bg-primary text-primary-foreground flex items-center justify-between gap-4">
      <h1 className="text-2xl font-bold">CodeLeap Network</h1>

      <div className="flex items-center gap-2">
        <span>{username}</span>
        <Button onClick={logOut} variant="ghost">
          <LogOutIcon className="size-6" />
        </Button>
      </div>
    </div>
  );
}
