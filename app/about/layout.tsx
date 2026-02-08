import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — Synopslabs AI',
  description: 'Learn about Synopslabs AI, a B2B AI automation consultancy based in Dubai. Meet our team and discover our mission to transform businesses with intelligent automation.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us — Synopslabs AI',
    description: 'Meet the team behind Synopslabs AI and our mission to transform businesses with intelligent automation.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
