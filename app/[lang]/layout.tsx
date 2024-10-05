import '@/app/global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from '../(components)/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from '../(components)/footer'
import { baseUrl } from '../sitemap'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pt' }]
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Adeir Junior",
    template: "%s | Adeir Junior",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "My Website",
    description:
      "This is the place for my portfolio, my blog, and my social links.",
    url: baseUrl,
    siteName: "adeir.me",
    locale: "en_US",
    type: "website",
    images: "/og",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { lang: 'en' | 'pt'}
}) {
  return (
    <html
      lang={params.lang}
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex flex-col px-2 md:px-0">
          <Navbar lang={params.lang}/>
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
