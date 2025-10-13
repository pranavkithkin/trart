import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Agent Consultancy - Transform Your Business with Intelligent Automation',
  description: 'Leading AI Agent Consultancy specializing in intelligent automation solutions. Get your free AI audit and discover how AI agents can transform your business operations.',
  keywords: 'AI agents, business automation, intelligent automation, AI consultancy, digital transformation',
  authors: [{ name: 'AI Agent Consultancy' }],
  openGraph: {
    title: 'AI Agent Consultancy - Transform Your Business with Intelligent Automation',
    description: 'Leading AI Agent Consultancy specializing in intelligent automation solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agent Consultancy - Transform Your Business with Intelligent Automation',
    description: 'Leading AI Agent Consultancy specializing in intelligent automation solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
