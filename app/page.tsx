import type { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Synopslabs AI — Transform Your Business with Intelligent Automation',
  description: 'Synopslabs AI specializes in AI agents and intelligent automation for B2B companies. Get your free AI audit and discover how AI can transform your operations.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Synopslabs AI — Transform Your Business with Intelligent Automation',
    description: 'AI agents and intelligent automation for B2B companies in Dubai.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Synopslabs AI — Transform Your Business with Intelligent Automation',
    description: 'AI agents and intelligent automation for B2B companies in Dubai.',
  },
}
import ProblemSolution from '@/components/ProblemSolution'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import TrustBanner from '@/components/TrustBanner'
import TechStack from '@/components/TechStack'
import TrustedBy from '@/components/TrustedBy'

export default function Home() {
  return (
    <>
      <TrustBanner />
      <Hero />
      <ProblemSolution />
      <TechStack />
      <TrustedBy />
      <HowItWorks />
      <Testimonials />
    </>
  )
}
