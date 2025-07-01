"use client"

import { useLanguage } from "@/contexts/language-context"
import { Globe, MapPin, Users, Award } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  const { t } = useLanguage()

  const stats = [
    { icon: Globe, label: "Global Presence", value: "4+" },
    { icon: MapPin, label: "Countries", value: "10+" },
    { icon: Users, label: "Team Members", value: "100+" },
    { icon: Award, label: "Years Experience", value: "20+" },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/fabrica.jpg"
                alt="Eurotechnologie Group Office"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("about.title")}</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{t("about.description")}</p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
