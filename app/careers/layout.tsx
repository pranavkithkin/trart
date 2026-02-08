import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers — Synopslabs AI',
  description: 'Join the Synopslabs AI team. Explore open positions in AI engineering, automation consulting, and business development in Dubai.',
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Careers — Synopslabs AI',
    description: 'Explore open positions at Synopslabs AI in Dubai.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
