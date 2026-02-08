import type { Metadata } from 'next'
import { blogPosts } from '@/lib/blog-data'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    return { title: 'Post Not Found — Synopslabs AI' }
  }

  return {
    title: `${post.title} — Synopslabs AI Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }))
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
