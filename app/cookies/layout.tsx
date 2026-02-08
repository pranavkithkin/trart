import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy — Synopslabs AI',
  description: 'Learn about how Synopslabs AI uses cookies on our website and how you can manage your cookie preferences.',
  alternates: { canonical: '/cookies' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
