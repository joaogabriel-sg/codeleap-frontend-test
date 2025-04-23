import { formatRelativeTime } from "@/shared/utils/date";
import { useEffect, useState } from "react";

export function useRelativeTime(date: Date | string, intervalMs = 60_000) {
  const [relativeTime, setRelativeTime] = useState(() =>
    formatRelativeTime(date),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRelativeTime(formatRelativeTime(date));
    }, intervalMs);

    return () => {
      clearInterval(interval);
    };
  }, [date, intervalMs]);

  return relativeTime;
}
