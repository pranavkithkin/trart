import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services — Synopslabs AI',
  description: 'Explore our AI automation services: custom AI agents, workflow automation, AI audits, and intelligent process optimization for B2B companies.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services — Synopslabs AI',
    description: 'Custom AI agents, workflow automation, and intelligent process optimization for B2B companies.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
