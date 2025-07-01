"use client"

import { useLanguage } from "@/contexts/language-context"
import { Package, Settings, Truck } from "lucide-react"

export default function SolutionsSection() {
  const { t } = useLanguage()

  const solutions = [
    {
      icon: Package,
      titleKey: "solutions.private.title",
      descriptionKey: "solutions.private.description",
      color: "bg-blue-500",
    },
    {
      icon: Settings,
      titleKey: "solutions.oem.title",
      descriptionKey: "solutions.oem.description",
      color: "bg-green-500",
    },
    {
      icon: Truck,
      titleKey: "solutions.wholesale.title",
      descriptionKey: "solutions.wholesale.description",
      color: "bg-purple-500",
    },
  ]

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("solutions.title")}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`${solution.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                <solution.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t(solution.titleKey)}</h3>
              <p className="text-gray-600 leading-relaxed">{t(solution.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
