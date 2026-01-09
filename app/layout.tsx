import type { Metadata } from 'next'
import { Inter, Poppins, Manrope, Space_Grotesk, Open_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'Synopslabs AI - Transform Your Business with Intelligent Automation',
  description: 'Synopslabs AI specializes in intelligent automation solutions. Get your free AI audit and discover how AI agents can transform your business operations.',
  keywords: 'AI agents, business automation, intelligent automation, Synopslabs AI, digital transformation',
  authors: [{ name: 'Synopslabs AI' }],
  openGraph: {
    title: 'Synopslabs AI - Transform Your Business with Intelligent Automation',
    description: 'Synopslabs AI specializes in intelligent automation solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Synopslabs AI - Transform Your Business with Intelligent Automation',
    description: 'Synopslabs AI specializes in intelligent automation solutions.',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />
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
      <body className={`${inter.variable} ${poppins.variable} ${manrope.variable} ${spaceGrotesk.variable} ${openSans.variable} font-body pb-safe`}>
        <Navbar />
        <main className="min-h-screen pb-safe">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
