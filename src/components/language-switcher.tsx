"use client"

import { useLanguage } from "@/contexts/language-context"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-gray-600" />
      {/* Desktop: botones */}
      <div className="hidden sm:flex bg-gray-100 rounded-lg p-1">
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
        <button
          onClick={() => setLanguage("pt")}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
            language === "pt" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          PT
        </button>
        <button
          onClick={() => setLanguage("it")}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
            language === "it" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          IT
        </button>
        <button
          onClick={() => setLanguage("fr")}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
            language === "fr" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          FR
        </button>
      </div>
      {/* Mobile: select */}
      <div className="sm:hidden bg-gray-100 rounded-lg p-1">
        <select
          value={language}
          onChange={e => setLanguage(e.target.value as any)}
          className="px-3 py-1 text-sm font-medium rounded-md bg-gray-100 text-gray-700 focus:outline-none"
        >
          <option value="es">ES</option>
          <option value="en">EN</option>
          <option value="pt">PT</option>
          <option value="it">IT</option>
          <option value="fr">FR</option>
        </select>
      </div>
    </div>
  )
}
