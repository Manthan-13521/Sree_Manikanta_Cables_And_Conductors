import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-navy flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold text-electric mb-4">404</h1>
        <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-300 max-w-md mx-auto mb-8 text-lg">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-8 py-3 bg-electric hover:bg-electric/90 text-white font-medium rounded-xl transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
