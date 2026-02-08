import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coming Soon — Synopslabs AI',
  description: 'Something new is on the way from Synopslabs AI. Stay tuned for updates on our latest AI automation solutions.',
  alternates: { canonical: '/coming-soon' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
