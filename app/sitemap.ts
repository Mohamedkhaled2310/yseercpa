import type { MetadataRoute } from 'next'
import { SEO_PAGES, SITE_URL, type SeoPageKey } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  return (Object.keys(SEO_PAGES) as SeoPageKey[]).flatMap((page) => {
    const paths = SEO_PAGES[page].paths
    const languages = {
      ar: new URL(paths.ar, SITE_URL).toString(),
      en: new URL(paths.en, SITE_URL).toString(),
      'x-default': new URL(paths.ar, SITE_URL).toString(),
    }

    return (['ar', 'en'] as const).map((language) => ({
      url: languages[language],
      changeFrequency: page === 'home' ? 'weekly' as const : 'monthly' as const,
      priority: page === 'home' ? 1 : 0.7,
      alternates: { languages },
    }))
  })
}
