import type { Metadata } from 'next'

export const SITE_URL = 'https://yseercpa.sa'

export const SEO_PAGES = {
  home: {
    paths: { ar: '/', en: '/en' },
    metadata: {
      ar: {
        title: 'يسير للاستشارات المهنية | مراجعة ومحاسبة وزكاة وضريبة',
        description: 'خدمات مراجعة وتدقيق، استشارات مالية، زكاة وضريبة ومسك دفاتر للمنشآت في بريدة والقصيم. تواصل مع يسير للاستشارات المهنية.',
      },
      en: {
        title: 'Yseer Professional Consulting | Audit, Accounting & Tax',
        description: 'Independent audit, accounting, financial advisory, Zakat and tax services for businesses in Buraydah, Al Qassim and across Saudi Arabia.',
      },
    },
  },
  about: {
    paths: { ar: '/من-نحن', en: '/en/about' },
    metadata: {
      ar: {
        title: 'من نحن | يسير للاستشارات المهنية',
        description: 'تعرف على يسير للاستشارات المهنية وخبرتنا في المراجعة والاستشارات المالية والزكوية والضريبية للمنشآت في بريدة والقصيم.',
      },
      en: {
        title: 'About Yseer | Professional Consulting in Saudi Arabia',
        description: 'Meet Yseer Professional Consulting and learn how our independent audit, financial, Zakat and tax advisory services support Saudi businesses.',
      },
    },
  },
  services: {
    paths: { ar: '/خدماتنا', en: '/en/services' },
    metadata: {
      ar: {
        title: 'خدمات المراجعة والمحاسبة والزكاة والضريبة | يسير',
        description: 'اكتشف خدمات يسير في المراجعة والتدقيق، مسك الدفاتر، التأسيس المالي، الاستشارات الزكوية والضريبية والتحليل المالي.',
      },
      en: {
        title: 'Audit, Accounting, Zakat & Tax Services | Yseer',
        description: 'Explore Yseer services in audit and assurance, bookkeeping, financial setup, Zakat and tax compliance, financial analysis and governance.',
      },
    },
  },
  partners: {
    paths: { ar: '/شركاؤنا', en: '/en/partners' },
    metadata: {
      ar: {
        title: 'شركاؤنا | يسير للاستشارات المهنية',
        description: 'تعرف على نهج يسير في بناء شراكات مهنية مع المنشآت والقطاعات المختلفة، بخدمات مالية ومحاسبية قائمة على الوضوح والالتزام.',
      },
      en: {
        title: 'Our Partners | Yseer Professional Consulting',
        description: 'Learn how Yseer builds trusted professional partnerships with businesses across industries through clear, reliable financial advisory.',
      },
    },
  },
  contact: {
    paths: { ar: '/تواصل-معنا', en: '/en/contact' },
    metadata: {
      ar: {
        title: 'تواصل مع مستشار مالي ومحاسبي في بريدة | يسير',
        description: 'تواصل مع يسير للاستشارات المهنية في بريدة، القصيم لطلب خدمات المراجعة والمحاسبة والاستشارات الزكوية والضريبية.',
      },
      en: {
        title: 'Contact Yseer | Audit & Accounting in Buraydah',
        description: 'Contact Yseer Professional Consulting in Buraydah, Al Qassim for audit, accounting, financial, Zakat and tax advisory services.',
      },
    },
  },
  careers: {
    paths: { ar: '/توظيف', en: '/en/careers' },
    metadata: {
      ar: {
        title: 'الوظائف والتوظيف | يسير للاستشارات المهنية',
        description: 'اكتشف فرص العمل في يسير للاستشارات المهنية وشارك في تطوير خدمات المحاسبة والمراجعة والاستشارات في المملكة العربية السعودية.',
      },
      en: {
        title: 'Careers at Yseer | Professional Consulting',
        description: 'Explore career opportunities at Yseer Professional Consulting and help shape the future of accounting, audit and advisory in Saudi Arabia.',
      },
    },
  },
} as const

export type SeoPageKey = keyof typeof SEO_PAGES
export type SiteLanguage = 'ar' | 'en'

export function getPageKeyFromSlug(slug: string, language: SiteLanguage): SeoPageKey | undefined {
  let decodedSlug = slug
  try {
    decodedSlug = decodeURIComponent(slug)
  } catch {}

  return (Object.keys(SEO_PAGES) as SeoPageKey[]).find((key) => SEO_PAGES[key].paths[language].split('/').filter(Boolean).at(-1) === decodedSlug)
}

export function localizedHref(href: string, language: SiteLanguage) {
  const hashIndex = href.indexOf('#')
  const pathname = hashIndex === -1 ? href : href.slice(0, hashIndex)
  const hash = hashIndex === -1 ? '' : href.slice(hashIndex)
  if (!pathname) return hash

  let decodedPathname = pathname
  try {
    decodedPathname = decodeURIComponent(pathname)
  } catch {}

  const route = (Object.keys(SEO_PAGES) as SeoPageKey[]).find((key) => {
    const paths = SEO_PAGES[key].paths
    return paths.ar === decodedPathname || paths.en === decodedPathname
  })

  return route ? `${SEO_PAGES[route].paths[language]}${hash}` : href
}

export function metadataForPage(page: SeoPageKey, language: SiteLanguage): Metadata {
  const entry = SEO_PAGES[page]
  const canonical = new URL(entry.paths[language], SITE_URL).toString()
  const title = entry.metadata[language].title
  const description = entry.metadata[language].description
  const image = new URL('/og-preview', SITE_URL).toString()

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ar: new URL(entry.paths.ar, SITE_URL).toString(),
        en: new URL(entry.paths.en, SITE_URL).toString(),
        'x-default': new URL(entry.paths.ar, SITE_URL).toString(),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'يسير للاستشارات المهنية | Yseer Professional Consulting',
      locale: language === 'ar' ? 'ar_SA' : 'en_US',
      type: 'website',
      images: [{ url: image, width: 1200, height: 630, alt: 'يسير للاستشارات المهنية | Yseer Professional Consulting' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: { index: true, follow: true },
  }
}
