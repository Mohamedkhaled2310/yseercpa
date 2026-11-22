import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans_Arabic, Inter } from 'next/font/google'
import { LanguageProvider } from '@/components/language-provider'
import { SiteFooter, SiteHeader } from '@/components/site'
import './globals.css'

const arabicFont = IBM_Plex_Sans_Arabic({ subsets: ['arabic'], weight: ['400', '500', '600', '700'], display: 'swap', variable: '--font-arabic' })
const englishFont = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-english' })

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
  colorScheme: 'light dark',
  themeColor: '#023632',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${arabicFont.variable} ${englishFont.variable} antialiased`}>
        <LanguageProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </LanguageProvider>
      </body>
    </html>
  )
}
