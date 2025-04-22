import { cn } from "@/shared/utils";

function PostCardActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center gap-2 md:gap-4", className)}
      data-slot="card-action"
      {...props}
    />
  );
}

function PostCardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("p-4 md:p-6 space-y-4", className)}
      data-slot="card-content"
      {...props}
    />
  );
}

function PostCardDetails({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-2 md:gap-4",
        className,
      )}
      data-slot="card-details"
      {...props}
    />
  );
}

function PostCardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "p-4 md:p-6 bg-primary text-primary-foreground flex items-center justify-between",
        className,
      )}
      data-slot="card-header"
      {...props}
    />
  );
}

function PostCardMention({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("leading-none text-muted-foreground font-bold", className)}
      data-slot="card-mention"
      {...props}
    />
  );
}

function PostCardRoot({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground flex flex-col rounded-lg md:rounded-xl border shadow-sm overflow-hidden",
        className,
      )}
      data-slot="card"
      {...props}
    />
  );
}

function PostCardTime({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "text-sm leading-none text-muted-foreground font-normal",
        className,
      )}
      data-slot="card-time"
      {...props}
    />
  );
}

function PostCardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("leading-none font-bold text-[1.375rem]", className)}
      data-slot="card-title"
      {...props}
    />
  );
}

export {
  PostCardActions,
  PostCardContent,
  PostCardDetails,
  PostCardHeader,
  PostCardMention,
  PostCardRoot,
  PostCardTime,
  PostCardTitle,
};
