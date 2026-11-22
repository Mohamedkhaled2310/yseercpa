import { InnerPageContent } from "@/components/inner-page-content"

const pages = ["من-نحن", "خدماتنا", "شركاؤنا", "تواصل-معنا", "توظيف"]
export function generateStaticParams() { return pages.map((slug) => ({ slug })) }

export default async function InnerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: rawSlug } = await params
  let slug = rawSlug
  try { slug = decodeURIComponent(rawSlug) } catch {}
  return <InnerPageContent slug={slug} />
}
