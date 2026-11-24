import type { Metadata } from 'next'
import HomePage from '@/app/page'
import { metadataForPage } from '@/lib/seo'

export const metadata: Metadata = metadataForPage('home', 'en')

export default function EnglishHomePage() {
  return <HomePage />
}
