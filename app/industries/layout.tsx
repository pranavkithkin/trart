import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industries — Synopslabs AI',
  description: 'AI automation solutions for manufacturing, SaaS, finance, healthcare, retail, real estate, and consulting industries.',
  alternates: { canonical: '/industries' },
  openGraph: {
    title: 'Industries — Synopslabs AI',
    description: 'AI automation solutions tailored to your industry.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
