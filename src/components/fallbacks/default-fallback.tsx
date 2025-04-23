import { Loader2Icon } from "lucide-react";

import { CodeLeapDefaultLogo } from "../logos/codeleap-default-logo";

export function DefaultFallback() {
  return (
    <div className="text-center py-12 flex flex-col items-center justify-center gap-4">
      <CodeLeapDefaultLogo />
      <Loader2Icon className="animate-spin size-8" />
    </div>
  );
}
