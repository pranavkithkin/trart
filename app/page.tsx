import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import HowItWorks from '@/components/HowItWorks'
import CaseStudies from '@/components/CaseStudies'
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
      <CaseStudies />
      <Testimonials />
    </>
  )
}
