export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f172a] text-white">
      <div className="text-center">
        <div className="mx-auto mb-5 h-14 w-14 animate-spin rounded-full border-4 border-white/20 border-t-white" />
        <h2 className="text-2xl font-semibold tracking-wide">Ultimate Heights</h2>
        <p className="mt-2 text-sm text-white/70">
          Loading premium experience...
        </p>
      </div>
    </div>
  );
}
