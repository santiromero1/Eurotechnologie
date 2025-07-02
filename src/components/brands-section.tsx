"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from 'next/image'

export default function BrandsSection() {
  const { t } = useLanguage()

  const brands = [
    { name: "T-GO", key: "brands.tgo", img: "/our-brand/tgo.png" },
    { name: "Eurocase", key: "brands.eurocase", img: "/our-brand/eurocase.png" },
    { name: "Datavision", key: "brands.datavision", img: "/our-brand/datavision.png" },
    { name: "Maxima", key: "brands.maxima", img: "/our-brand/maxima.png" },
    { name: "Tabi", key: "brands.tabi", img: "/our-brand/tabi.png" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("brands.title")}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-100 rounded-xl p-2 mb-4 group-hover:bg-gray-200 transition-colors flex items-center justify-center h-36">
              <Image
                  src={brand.img}
                  alt={brand.name}
                  className="h-full w-full object-contain"
                  loading="lazy"
                  width={140}
                  height={80}
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{brand.name}</h3>
              <p className="text-sm text-gray-600">{t(brand.key)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

