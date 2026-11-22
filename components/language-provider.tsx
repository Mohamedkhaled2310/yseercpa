"use client"

import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"

export type Language = "ar" | "en"

const LanguageContext = createContext<{ language: Language; toggleLanguage: () => void } | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar")

  function toggleLanguage() {
    const nextLanguage = language === "ar" ? "en" : "ar"
    setLanguage(nextLanguage)
    document.documentElement.lang = nextLanguage
    document.documentElement.dir = nextLanguage === "ar" ? "rtl" : "ltr"
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
