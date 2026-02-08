import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Synopslabs AI',
  description: 'Insights on AI automation, intelligent agents, and digital transformation for B2B businesses. Expert articles from the Synopslabs AI team.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — Synopslabs AI',
    description: 'Expert insights on AI automation and digital transformation for B2B businesses.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
