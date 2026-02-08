'use client'

import Link from 'next/link'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-canvas flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <h1 className="font-heading text-5xl font-bold text-charcoal mb-4">Something went wrong</h1>
        <p className="text-slate mb-8">
          An unexpected error occurred. Please try again or return to the homepage.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={reset}
            className="px-8 py-3 bg-charcoal text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-3 border-2 border-charcoal text-charcoal font-semibold rounded-xl hover:bg-charcoal hover:text-white transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
