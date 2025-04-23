export function ErrorFallback() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Something went wrong</h1>
        <p className="text-gray-500">Please try again later.</p>
      </div>
    </div>
  );
}
