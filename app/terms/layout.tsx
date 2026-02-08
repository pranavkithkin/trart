import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Synopslabs AI',
  description: 'Read the Synopslabs AI terms of service governing use of our website and AI automation services.',
  alternates: { canonical: '/terms' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
