import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-canvas flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <h1 className="font-heading text-7xl font-bold text-charcoal mb-4">404</h1>
        <h2 className="font-heading text-2xl font-semibold text-charcoal mb-4">Page Not Found</h2>
        <p className="text-slate mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-charcoal text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
