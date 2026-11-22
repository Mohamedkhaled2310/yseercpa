import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_Arabic } from 'next/font/google'
import './globals.css'

const arabicFont = Noto_Sans_Arabic({ subsets: ['arabic'], display: 'swap', variable: '--font-arabic' })
import { SiteFooter, SiteHeader } from '@/components/site'

export const metadata: Metadata = {
  title: {
    default: 'يسير للاستشارات المهنية | وضوح مالي يدعم نمو أعمالك',
    template: '%s | يسير للاستشارات المهنية',
  },
  description: 'يسير للاستشارات المهنية شريكك في المراجعة والاستشارات المالية والزكوية والضريبية، لبناء منظومة مالية أوضح وأكثر كفاءة.',
  metadataBase: new URL('https://yseercpa.sa'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'يسير للاستشارات المهنية',
    description: 'قرارات أقوى تبدأ من أرقام أوضح.',
    locale: 'ar_SA',
    type: 'website',
  },
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#f8f8f5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${arabicFont.variable} antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
