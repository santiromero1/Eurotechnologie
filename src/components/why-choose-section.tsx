"use client"

import { useLanguage } from "@/contexts/language-context"
import { CheckCircle, Award, Lightbulb, Package } from "lucide-react"

export default function WhyChooseSection() {
  const { t } = useLanguage()

  const advantages = [
    { icon: Award, key: "why.experience" },
    { icon: CheckCircle, key: "why.quality" },
    { icon: Lightbulb, key: "why.innovation" },
    { icon: Package, key: "why.offering" },
  ]

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("why.title")}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                <advantage.icon className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-gray-700 font-medium">{t(advantage.key)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
