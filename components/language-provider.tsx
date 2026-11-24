"use client"

import { createContext, useContext, useEffect } from "react"
import type { ReactNode } from "react"
import { usePathname, useRouter } from "next/navigation"
import { localizedHref } from "@/lib/seo"

export type Language = "ar" | "en"

const LanguageContext = createContext<{ language: Language; toggleLanguage: () => void } | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname() || "/"
  const router = useRouter()
  const language: Language = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ar"

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  function toggleLanguage() {
    const nextLanguage = language === "ar" ? "en" : "ar"
    const hash = window.location.hash
    router.push(`${localizedHref(pathname, nextLanguage)}${hash}`)
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used within LanguageProvider")
  return context
}

export function tx(language: Language, arabic: string, english: string) {
  return language === "ar" ? arabic : english
}
