import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Demos — Synopslabs AI',
  description: 'See live demonstrations of our AI automation solutions. Experience how intelligent agents can transform your business processes.',
  alternates: { canonical: '/demos' },
  openGraph: {
    title: 'Demos — Synopslabs AI',
    description: 'Live demonstrations of AI automation solutions.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
