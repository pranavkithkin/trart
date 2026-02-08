import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free AI Audit — Synopslabs AI',
  description: 'Request your free AI audit. We analyze your business processes and identify high-impact automation opportunities with measurable ROI.',
  alternates: { canonical: '/audit' },
  openGraph: {
    title: 'Free AI Audit — Synopslabs AI',
    description: 'Get a free AI audit to identify high-impact automation opportunities for your business.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
