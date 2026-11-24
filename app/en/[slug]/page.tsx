import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { InnerPageContent } from '@/components/inner-page-content'
import { getPageKeyFromSlug, metadataForPage, SEO_PAGES, type SeoPageKey } from '@/lib/seo'

const pages = (Object.keys(SEO_PAGES) as SeoPageKey[]).filter((page) => page !== 'home')

export function generateStaticParams() {
  return pages.map((page) => ({ slug: SEO_PAGES[page].paths.en.split('/').at(-1) as string }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = getPageKeyFromSlug(slug, 'en')
  return page ? metadataForPage(page, 'en') : { title: 'Page not found', robots: { index: false, follow: true } }
}

export default async function EnglishInnerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = getPageKeyFromSlug(slug, 'en')
  if (!page || page === 'home') notFound()

  const arabicSlug = SEO_PAGES[page].paths.ar.split('/').at(-1)
  if (!arabicSlug) notFound()

  return <InnerPageContent slug={arabicSlug} />
}
