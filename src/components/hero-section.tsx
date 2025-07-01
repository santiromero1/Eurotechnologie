"use client"

import { useLanguage } from "@/contexts/language-context"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">{t("hero.subtitle")}</p>
            <button
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              onClick={() => {
                const el = document.getElementById('contact')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {t("hero.cta")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/bg.png"
                alt="Eurotechnologie Group - Global Technology Solutions"
                fill
                className="object-cover h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-blue-600">2004</div>
              <div className="text-sm text-gray-600">Founded</div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-green-600">20+</div>
              <div className="text-sm text-gray-600">Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
