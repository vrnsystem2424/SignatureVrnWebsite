import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-slate-900">404</h1>
        <p className="mt-3 text-slate-600">
          The page you are looking for is not available right now.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-700"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
