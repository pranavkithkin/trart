import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import HowItWorks from '@/components/HowItWorks'
import CaseStudies from '@/components/CaseStudies'
import Testimonials from '@/components/Testimonials'
import TrustBanner from '@/components/TrustBanner'

export default function Home() {
  return (
    <>
      <TrustBanner />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <CaseStudies />
      <Testimonials />
    </>
  )
}
