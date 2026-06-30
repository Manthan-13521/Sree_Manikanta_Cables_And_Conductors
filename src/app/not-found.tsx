import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-primary flex items-center justify-center">
      <div className="text-center text-white space-y-6 px-4">
        <h1 className="text-h1">404</h1>
        <h3 className="text-h3">Page Not Found</h3>
        <p className="text-body-lg text-white/70 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
