"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, ArrowUpLeft, BadgeCheck, BarChart3, BookOpenCheck, Building2, Check, ChevronDown, Clock3, FileCheck2, FileText, Landmark, Mail, MapPin, Menu, Phone, ShieldCheck, Sparkles, Users, X } from "lucide-react"

export const navItems = [
  { label: "الرئيسية", href: "/" },
  { label: "عن يسير", href: "/من-نحن" },
  { label: "خدماتنا", href: "/خدماتنا" },
  { label: "شركاؤنا", href: "/شركاؤنا" },
  { label: "التوظيف", href: "/توظيف" },
  { label: "تواصل معنا", href: "/تواصل-معنا" },
]

export const services = [
  { number: "01", title: "التأسيس المالي", description: "نؤسس منظومة مالية متكاملة تبدأ من شجرة حسابات مدروسة، وتمتد إلى إجراءات واضحة وتدريب عملي لفريقك.", icon: Landmark },
  { number: "02", title: "الزكاة والضريبة", description: "نساعدك على التسجيل والامتثال وإعداد الإقرارات ومتابعة الاعتراضات الزكوية والضريبية بثقة.", icon: FileCheck2 },
  { number: "03", title: "مسك الدفاتر", description: "تسجيل دقيق للقيود اليومية وأرشفة منظمة للمستندات، لتكون أرقامك جاهزة عندما تحتاجها.", icon: BookOpenCheck },
  { number: "04", title: "المراجعة والتدقيق", description: "مراجعة مهنية مستقلة وتقارير واضحة تمنحك صورة أدق عن الأداء والالتزامات المالية.", icon: ShieldCheck },
  { number: "05", title: "التحليل المالي", description: "نحوّل بياناتك إلى مؤشرات ورؤى تساعدك على تقييم الأداء والتخطيط للخطوة القادمة.", icon: BarChart3 },
  { number: "06", title: "الإشراف المحاسبي", description: "متابعة سير العمل المحاسبي ومراجعة التقارير لتعزيز الدقة ورفع كفاءة فريقك.", icon: Users },
  { number: "07", title: "الحوكمة", description: "سياسات وصلاحيات وضوابط امتثال واضحة تساعد منشأتك على العمل بشفافية واستدامة.", icon: BadgeCheck },
  { number: "08", title: "الدعم الإداري", description: "نرتب العمليات والمهام الإدارية ونبني إجراءات عملية تساند نمو المنشأة وتماسك فريقها.", icon: Building2 },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><div className="container header-inner">
    <Link className="brand" href="/" aria-label="يسير - الصفحة الرئيسية"><span className="brand-mark">ي</span><span className="brand-copy"><strong>يسير</strong><small>للاستشارات المهنية</small></span></Link>
    <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="القائمة الرئيسية">{navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}<Link className="mobile-nav-cta" href="/تواصل-معنا" onClick={() => setOpen(false)}>اطلب استشارة <ArrowLeft size={16}/></Link></nav>
    <Link className="header-cta" href="/تواصل-معنا">خلّنا نتحدث <ArrowLeft size={16}/></Link>
    <button className="menu-toggle" aria-label={open ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
  </div></header>
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="container"><div className="footer-top"><div className="footer-brand"><Link className="brand brand-light" href="/"><span className="brand-mark">ي</span><span className="brand-copy"><strong>يسير</strong><small>للاستشارات المهنية</small></span></Link><p>وضوح في الأرقام، وثقة في كل قرار. شريكك المهني لنمو مالي مستدام.</p></div><div className="footer-links"><h3>روابط سريعة</h3>{navItems.slice(1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div><div className="footer-contact"><h3>يسعدنا تواصلك</h3><a href="tel:920031899"><Phone size={17}/> 920031899</a><a href="tel:+966537177706"><Phone size={17}/> +966 53 717 7706</a><a href="mailto:info@yseercpa.sa"><Mail size={17}/> info@yseercpa.sa</a><span><MapPin size={17}/> القصيم، بريدة</span></div><div className="footer-hours"><h3>أوقات العمل</h3><p>الأحد – الخميس</p><p>8:00 ص – 4:00 م</p><Link className="footer-contact-cta" href="/تواصل-معنا">اطلب عرض سعر <ArrowLeft size={16}/></Link></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} يسير للاستشارات المهنية. جميع الحقوق محفوظة.</span><span>نصنع وضوحًا ماليًا يدوم.</span></div></div></footer>
}

export function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return <div className={`section-heading${light ? " section-heading-light" : ""}`}><span className="eyebrow"><i/> {eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>
}

export function ServiceGrid({ compact = false }: { compact?: boolean }) {
  const list = compact ? services.slice(0, 4) : services
  return <div className="services-grid">{list.map(({ number, title, description, icon: Icon }) => <article className="service-card" id={`service-${number}`} key={number}><div className="service-card-top"><span className="service-icon"><Icon size={21}/></span><span className="service-number">{number}</span></div><h3>{title}</h3><p>{description}</p><Link href={`/خدماتنا#service-${number}`} aria-label={`اكتشف خدمة ${title}`}><ArrowUpLeft size={19}/></Link></article>)}</div>
}

export function ContactForm({ hiring = false }: { hiring?: boolean }) {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") || "").trim()
    const email = String(data.get("email") || "").trim()
    const details = String(data.get("details") || "").trim()
    if (!name || !email || !details) { setError("فضلاً أكمل الحقول المطلوبة."); return }
    const subject = encodeURIComponent(hiring ? `طلب توظيف من ${name}` : `طلب استشارة من ${name}`)
    const body = encodeURIComponent(`الاسم: ${name}\nالبريد: ${email}\nالهاتف: ${data.get("phone") || "غير مذكور"}\n${hiring ? "المسمى الوظيفي" : `الخدمة: ${data.get("service") || "غير محددة"}`}\n\n${details}`)
    window.location.href = `mailto:info@yseercpa.sa?subject=${subject}&body=${body}`
    setSent(true); setError("")
  }
  return <form className="contact-form" onSubmit={submit} noValidate><div className="form-grid"><label>الاسم الكامل <span>*</span><input name="name" autoComplete="name" required placeholder="اكتب اسمك"/></label><label>البريد الإلكتروني <span>*</span><input name="email" type="email" autoComplete="email" required placeholder="name@company.com"/></label><label>رقم الجوال<input name="phone" type="tel" autoComplete="tel" placeholder="05xxxxxxxx" dir="ltr"/></label>{hiring ? <label>المسمى الوظيفي<input name="service" placeholder="المسمى الذي تتقدم إليه"/></label> : <label>الخدمة المطلوبة<select name="service" defaultValue=""><option value="" disabled>اختر الخدمة</option>{services.map((service) => <option key={service.number}>{service.title}</option>)}</select><ChevronDown size={17} className="select-chevron"/></label>}</div><label>كيف نقدر نساعدك؟ <span>*</span><textarea name="details" rows={4} required placeholder={hiring ? "عرفنا عن خبراتك واهتماماتك..." : "اكتب نبذة عن احتياجك أو استفسارك..."}/></label><div className="form-bottom"><button className="button button-primary" type="submit">{hiring ? "إرسال طلب التقديم" : "إرسال طلبك"}<ArrowLeft size={17}/></button><span>لن نستخدم بياناتك إلا للتواصل بشأن طلبك.</span></div>{error && <p className="form-message form-error" role="alert">{error}</p>}{sent && <p className="form-message" role="status"><Check size={17}/> تم تجهيز رسالة بريدك. أرسلها من تطبيق البريد لإكمال الطلب.</p>}</form>
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-hero"><div className="container page-hero-inner"><span className="eyebrow"><i/> {eyebrow}</span><h1>{title}</h1><p>{description}</p><div className="breadcrumb"><Link href="/">الرئيسية</Link><ArrowLeft size={14}/><span>{eyebrow}</span></div></div><div className="page-hero-orbit" aria-hidden="true">ي</div></section>
}

export function ContactStrip() {
  return <div className="contact-strip"><span><Clock3 size={16}/> نرد عليك خلال يوم عمل</span><a href="tel:920031899"><Phone size={16}/> 920031899</a></div>
}
