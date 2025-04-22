export function formatRelativeTime(date: Date | string) {
  const targetDate = new Date(date);
  const now = Date.now();
  const diff = (+targetDate - now) / 1000;

  const units: {
    name: Intl.RelativeTimeFormatUnit;
    seconds: number;
  }[] = [
    { name: "year", seconds: 31_536_000 },
    { name: "month", seconds: 2_592_000 },
    { name: "week", seconds: 604_800 },
    { name: "day", seconds: 86_400 },
    { name: "hour", seconds: 3600 },
    { name: "minute", seconds: 60 },
    { name: "second", seconds: 1 },
  ];

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  for (const unit of units) {
    const delta = diff / unit.seconds;
    if (Math.abs(delta) >= 1) {
      return rtf.format(Math.round(delta), unit.name);
    }
  }

  return rtf.format(0, "second"); // "now"
}
