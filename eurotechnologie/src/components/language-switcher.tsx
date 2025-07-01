"use client"

import { useLanguage } from "@/contexts/language-context"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-gray-600" />
      <div className="flex bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setLanguage("es")}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
            language === "es" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          ES
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
            language === "en" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          EN
        </button>
      </div>
    </div>
  )
}
