import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — Synopslabs AI',
  description: 'Get in touch with Synopslabs AI. Reach out for AI automation consulting, partnership inquiries, or to schedule a free AI audit for your business.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us — Synopslabs AI',
    description: 'Reach out for AI automation consulting or to schedule a free AI audit.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
