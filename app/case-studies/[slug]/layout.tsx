import type { Metadata } from 'next'
import { caseStudies } from '@/lib/case-studies-data'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const study = caseStudies.find(s => s.slug === params.slug)

  if (!study) {
    return { title: 'Case Study Not Found — Synopslabs AI' }
  }

  return {
    title: `${study.companyName}: ${study.title} — Synopslabs AI`,
    description: study.description,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      title: `${study.companyName}: ${study.title}`,
      description: study.description,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${study.companyName}: ${study.title}`,
      description: study.description,
    },
  }
}

export async function generateStaticParams() {
  return caseStudies.map(study => ({ slug: study.slug }))
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
