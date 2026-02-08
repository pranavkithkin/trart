import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Synopslabs AI',
  description: 'Read the Synopslabs AI privacy policy. Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: '/privacy' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
