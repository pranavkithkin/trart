import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies — Synopslabs AI',
  description: 'See how Synopslabs AI has helped B2B companies achieve measurable ROI through AI agents and intelligent automation. Real results from real implementations.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'Case Studies — Synopslabs AI',
    description: 'Real AI automation results from real B2B implementations.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
