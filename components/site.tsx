"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowLeft, BadgeCheck, BarChart3, BookOpenCheck, Building2, Check, ChevronDown, Clock3, FileCheck2, FileText, Camera, Landmark, Mail, MapPin, Menu, MessageCircle, Moon, Phone, ShieldCheck, Sparkles, Sun, Users, X } from "lucide-react"
import { tx, useLanguage } from "@/components/language-provider"

export const navItems = [
  { label: "الرئيسية", labelEn: "Home", href: "/" },
  { label: "عن يسير", labelEn: "About", href: "/#about" },
  { label: "خدماتنا", labelEn: "Services", href: "/#services" },
  { label: "شركاؤنا", labelEn: "Partners", href: "/#partners" },
  { label: "التوظيف", labelEn: "Careers", href: "/توظيف" },
  { label: "تواصل معنا", labelEn: "Contact", href: "/#contact" },
]

const socialLinks = [
  { label: "واتساب", labelEn: "WhatsApp", href: "https://iwtsp.com/966537177706", icon: MessageCircle },
  { label: "لينكدإن", labelEn: "LinkedIn", href: "https://www.linkedin.com/company/yseer-cpa/", icon: Users },
  { label: "إنستغرام", labelEn: "Instagram", href: "https://www.instagram.com/yseercpa?igsh=MTR0dnZpNHBrcm4xdg==", icon: Camera },
  { label: "إكس", labelEn: "X", href: "https://x.com/yseercpa?s=21", icon: X },
]

function navigateToHomeSection(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("/#") || window.location.pathname !== "/") return
  const target = document.getElementById(href.slice(2))
  if (!target) return
  event.preventDefault()
  window.history.pushState(null, "", href)
  target.scrollIntoView({ behavior: "smooth", block: "start" })
}

export const services = [
  { number: "01", title: "التأسيس المالي", titleEn: "Financial Setup", description: "نؤسس منظومة مالية متكاملة تبدأ من شجرة حسابات مدروسة، وتمتد إلى إجراءات واضحة وتدريب عملي لفريقك.", descriptionEn: "We build a complete financial foundation—from a well-designed chart of accounts to clear processes and practical team training.", icon: Landmark },
  { number: "02", title: "الزكاة والضريبة", titleEn: "Zakat & Tax", description: "نساعدك على التسجيل والامتثال وإعداد الإقرارات ومتابعة الاعتراضات الزكوية والضريبية بثقة.", descriptionEn: "We support registration, compliance, return preparation, and Zakat and tax objections with confidence.", icon: FileCheck2 },
  { number: "03", title: "مسك الدفاتر", titleEn: "Bookkeeping", description: "تسجيل دقيق للقيود اليومية وأرشفة منظمة للمستندات، لتكون أرقامك جاهزة عندما تحتاجها.", descriptionEn: "Accurate daily journal entries and organized document records keep your numbers ready when you need them.", icon: BookOpenCheck },
  { number: "04", title: "المراجعة والتدقيق", titleEn: "Audit & Assurance", description: "مراجعة مهنية مستقلة وتقارير واضحة تمنحك صورة أدق عن الأداء والالتزامات المالية.", descriptionEn: "Independent professional audits and clear reports give you a sharper view of performance and financial obligations.", icon: ShieldCheck },
  { number: "05", title: "التحليل المالي", titleEn: "Financial Analysis", description: "نحوّل بياناتك إلى مؤشرات ورؤى تساعدك على تقييم الأداء والتخطيط للخطوة القادمة.", descriptionEn: "We turn your data into practical insights to evaluate performance and plan what comes next.", icon: BarChart3 },
  { number: "06", title: "الإشراف المحاسبي", titleEn: "Accounting Supervision", description: "متابعة سير العمل المحاسبي ومراجعة التقارير لتعزيز الدقة ورفع كفاءة فريقك.", descriptionEn: "Ongoing oversight of accounting operations and reports improves accuracy and strengthens your team.", icon: Users },
  { number: "07", title: "الحوكمة", titleEn: "Governance", description: "سياسات وصلاحيات وضوابط امتثال واضحة تساعد منشأتك على العمل بشفافية واستدامة.", descriptionEn: "Clear policies, authorities, and compliance controls help your organization operate transparently and sustainably.", icon: BadgeCheck },
  { number: "08", title: "الدعم الإداري", titleEn: "Administrative Support", description: "نرتب العمليات والمهام الإدارية ونبني إجراءات عملية تساند نمو المنشأة وتماسك فريقك.", descriptionEn: "We streamline administrative operations and build practical processes that support business growth and team alignment.", icon: Building2 },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const { language, toggleLanguage } = useLanguage()

  useEffect(() => {
    const initialTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    document.documentElement.dataset.theme = initialTheme
    setTheme(initialTheme)
  }, [])

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark"
    document.documentElement.dataset.theme = nextTheme
    setTheme(nextTheme)
  }

  return <header className="site-header"><div className="container header-inner">
    <Link className="brand" href="/" aria-label={tx(language, "يسير للاستشارات المهنية - الصفحة الرئيسية", "Yseer Professional Consulting - Home")}>{language === "ar" ? <Image className="brand-arabic" src="/yseer-logo.png" alt="يسير للاستشارات المهنية" width={170} height={64} priority/> : <span className="brand-english" dir="ltr"><Image className="brand-english-symbol" src="/yseer-mark.png" alt="" width={42} height={38} priority/><span className="brand-english-copy"><strong>YSEER</strong><small>Professional Consulting</small></span></span>}</Link>
    <nav className={open ? "main-nav is-open" : "main-nav"} aria-label={tx(language, "القائمة الرئيسية", "Main navigation")}>{navItems.map((item) => <Link key={item.href} href={item.href} onClick={(event) => { setOpen(false); navigateToHomeSection(event, item.href) }}>{tx(language, item.label, item.labelEn)}</Link>)}<Link className="mobile-nav-cta" href="/#contact" onClick={(event) => { setOpen(false); navigateToHomeSection(event, "/#contact") }}>{tx(language, "اطلب استشارة", "Request a consultation")} <ArrowLeft size={16}/></Link></nav>
    <div className="header-socials" aria-label={tx(language, "حسابات يسير الاجتماعية", "Yseer social accounts")}>{socialLinks.map(({ label, labelEn, href, icon: Icon }) => <a key={label} href={href} aria-label={tx(language, label, labelEn)} target="_blank" rel="noreferrer"><Icon size={17}/></a>)}</div>
    <button className="language-toggle" type="button" onClick={toggleLanguage} aria-label={tx(language, "Switch to English", "التبديل إلى العربية")} lang={language === "ar" ? "en" : "ar"}>{language === "ar" ? "EN" : "عربي"}</button>
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={tx(language, theme === "dark" ? "التبديل إلى الوضع الفاتح" : "التبديل إلى الوضع الداكن", theme === "dark" ? "Switch to light mode" : "Switch to dark mode")} title={tx(language, theme === "dark" ? "الوضع الفاتح" : "الوضع الداكن", theme === "dark" ? "Light mode" : "Dark mode")}>{theme === "dark" ? <Sun size={19}/> : <Moon size={19}/>}</button>
    <button className="menu-toggle" aria-label={tx(language, open ? "إغلاق القائمة" : "فتح القائمة", open ? "Close menu" : "Open menu")} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
  </div></header>
}

export function SiteFooter() {
  const { language } = useLanguage()
  return <footer className="site-footer"><div className="container"><div className="footer-top"><div className="footer-brand"><Link className="brand brand-light" href="/" aria-label={tx(language, "يسير للاستشارات المهنية", "Yseer Professional Consulting")}>{language === "ar" ? <Image className="brand-arabic" src="/yseer-logo.png" alt="يسير للاستشارات المهنية" width={170} height={64}/> : <span className="brand-english" dir="ltr"><Image className="brand-english-symbol" src="/yseer-mark.png" alt="" width={42} height={38}/><span className="brand-english-copy"><strong>YSEER</strong><small>Professional Consulting</small></span></span>}</Link><p>{tx(language, "وضوح في الأرقام، وثقة في كل قرار. شريكك المهني لنمو مالي مستدام.", "Clarity in numbers. Confidence in every decision. Your trusted partner for sustainable financial growth.")}</p></div><div className="footer-links"><h3>{tx(language, "روابط سريعة", "Quick links")}</h3>{navItems.slice(1).map((item) => <Link key={item.href} href={item.href} onClick={(event) => navigateToHomeSection(event, item.href)}>{tx(language, item.label, item.labelEn)}</Link>)}</div><div className="footer-contact"><h3>{tx(language, "يسعدنا تواصلك", "Get in touch")}</h3><a href="tel:920031899"><Phone size={17}/> 920031899</a><a href="tel:+966537177706"><Phone size={17}/> +966 53 717 7706</a><a href="mailto:info@yseercpa.sa"><Mail size={17}/> info@yseercpa.sa</a><span><MapPin size={17}/> {tx(language, "القصيم، بريدة", "Buraydah, Al Qassim")}</span></div><div className="footer-hours"><h3>{tx(language, "أوقات العمل", "Business hours")}</h3><p>{tx(language, "الأحد – الخميس", "Sunday – Thursday")}</p><p>{tx(language, "8:00 ص – 4:00 م", "8:00 AM – 4:00 PM")}</p><Link className="footer-contact-cta" href="/#contact" onClick={(event) => navigateToHomeSection(event, "/#contact")}>{tx(language, "اطلب عرض سعر", "Request a quote")} <ArrowLeft size={16}/></Link></div></div><div className="footer-bottom"><span>{tx(language, `© ${new Date().getFullYear()} يسير للاستشارات المهنية. جميع الحقوق محفوظة.`, `© ${new Date().getFullYear()} Yseer Professional Consulting. All rights reserved.`)}</span><span>{tx(language, "نصنع وضوحًا ماليًا يدوم.", "Building lasting financial clarity.")}</span></div></div></footer>
}

export function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return <div className={`section-heading${light ? " section-heading-light" : ""}`}><span className="eyebrow"><i/> {eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>
}

export function ServiceGrid({ compact = false }: { compact?: boolean }) {
  const { language } = useLanguage()
  const list = compact ? services.slice(0, 4) : services
  return <div className="services-grid">{list.map(({ number, title, titleEn, description, descriptionEn, icon: Icon }) => <article className="service-card" id={`service-${number}`} key={number}><div className="service-card-top"><span className="service-icon"><Icon size={21}/></span><span className="service-number">{number}</span></div><h3>{tx(language, title, titleEn)}</h3><p>{tx(language, description, descriptionEn)}</p><Link href={`/خدماتنا#service-${number}`} aria-label={tx(language, `اكتشف خدمة ${title}`, `Explore ${titleEn}`)}><ArrowLeft size={19}/></Link></article>)}</div>
}

export function ContactForm({ hiring = false }: { hiring?: boolean }) {
  const { language } = useLanguage()
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") || "").trim()
    const email = String(data.get("email") || "").trim()
    const details = String(data.get("details") || "").trim()
    if (!name || !email || !details) { setError(tx(language, "فضلاً أكمل الحقول المطلوبة.", "Please complete all required fields.")); return }
    const subject = encodeURIComponent(hiring ? tx(language, `طلب توظيف من ${name}`, `Career application from ${name}`) : tx(language, `طلب استشارة من ${name}`, `Consultation request from ${name}`))
    const body = encodeURIComponent(language === "ar" ? `الاسم: ${name}\nالبريد: ${email}\nالهاتف: ${data.get("phone") || "غير مذكور"}\n${hiring ? "المسمى الوظيفي" : `الخدمة: ${data.get("service") || "غير محددة"}`}\n\n${details}` : `Name: ${name}\nEmail: ${email}\nPhone: ${data.get("phone") || "Not provided"}\n${hiring ? "Position" : "Service"}: ${data.get("service") || "Not specified"}\n\n${details}`)
    window.location.href = `mailto:info@yseercpa.sa?subject=${subject}&body=${body}`
    setSent(true); setError("")
  }
  return <form className="contact-form" onSubmit={submit} noValidate><div className="form-grid"><label>{tx(language, "الاسم الكامل", "Full name")} <span>*</span><input name="name" autoComplete="name" required placeholder={tx(language, "اكتب اسمك", "Enter your name")}/></label><label>{tx(language, "البريد الإلكتروني", "Email address")} <span>*</span><input name="email" type="email" autoComplete="email" required placeholder="name@company.com"/></label><label>{tx(language, "رقم الجوال", "Phone number")}<input name="phone" type="tel" autoComplete="tel" placeholder={tx(language, "05xxxxxxxx", "+966 5X XXX XXXX")} dir="ltr"/></label>{hiring ? <label>{tx(language, "المسمى الوظيفي", "Position")}<input name="service" placeholder={tx(language, "المسمى الذي تتقدم إليه", "Role you are applying for")}/></label> : <label>{tx(language, "الخدمة المطلوبة", "Service of interest")}<select name="service" defaultValue=""><option value="" disabled>{tx(language, "اختر الخدمة", "Select a service")}</option>{services.map((service) => <option key={service.number}>{tx(language, service.title, service.titleEn)}</option>)}</select><ChevronDown size={17} className="select-chevron"/></label>}</div><label>{tx(language, "كيف نقدر نساعدك؟", "How can we help?")} <span>*</span><textarea name="details" rows={4} required placeholder={hiring ? tx(language, "عرفنا عن خبراتك واهتماماتك...", "Tell us about your experience and interests...") : tx(language, "اكتب نبذة عن احتياجك أو استفسارك...", "Briefly describe your needs or question...")}/></label><div className="form-bottom"><button className="button button-primary" type="submit">{hiring ? tx(language, "إرسال طلب التقديم", "Submit application") : tx(language, "إرسال طلبك", "Send your request")}<ArrowLeft size={17}/></button><span>{tx(language, "لن نستخدم بياناتك إلا للتواصل بشأن طلبك.", "Your details will only be used to respond to your request.")}</span></div>{error && <p className="form-message form-error" role="alert">{error}</p>}{sent && <p className="form-message" role="status"><Check size={17}/> {tx(language, "تم تجهيز رسالة بريدك. أرسلها من تطبيق البريد لإكمال الطلب.", "Your email draft is ready. Send it from your mail app to complete your request.")}</p>}</form>
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  const { language } = useLanguage()
  return <section className="page-hero"><div className="container page-hero-inner"><span className="eyebrow"><i/> {eyebrow}</span><h1>{title}</h1><p>{description}</p><div className="breadcrumb"><Link href="/">{tx(language, "الرئيسية", "Home")}</Link><ArrowLeft size={14}/><span>{eyebrow}</span></div></div><div className="page-hero-orbit" aria-hidden="true">ي</div></section>
}

export function ContactStrip() {
  const { language } = useLanguage()
  return <div className="contact-strip"><span><Clock3 size={16}/> {tx(language, "نرد عليك خلال يوم عمل", "We respond within one business day")}</span><a href="tel:920031899"><Phone size={16}/> 920031899</a></div>
}
