"use client"

import { useLanguage } from "@/contexts/language-context"
import { useEffect, useRef } from "react"
import Image from 'next/image'


export default function TrustedBySection() {
  const { t } = useLanguage()

  // Lista de logos con nombre de archivo y alt
  const clientLogos = [
    { src: "/trusted-by/carrefour.png", alt: "Carrefour" },
    { src: "/trusted-by/walmart.png", alt: "Walmart" },
    { src: "/trusted-by/falabella.png", alt: "Falabella" },
    { src: "/trusted-by/Ripley.png", alt: "Ripley" },
    { src: "/trusted-by/Cencosud.png", alt: "Cencosud" },
    { src: "/trusted-by/compumundo.png", alt: "Compumundo" },
    { src: "/trusted-by/garbarino.png", alt: "Garbarino" },
    { src: "/trusted-by/musimundo.png", alt: "Musimundo" },
    { src: "/trusted-by/coppel.png", alt: "Coppel" },
    { src: "/trusted-by/megatone.png", alt: "Megatone" },
    { src: "/trusted-by/tiendainglesa.png", alt: "Tienda Inglesa" },
    { src: "/trusted-by/macstation.png", alt: "MacStation" },
  ]

  // Carrusel automático
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return
    let animationFrame: number
    // let scrollAmount = 0
    const speed = 1 // píxeles por frame

    const scroll = () => {
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0
      } else {
        carousel.scrollLeft += speed
      }
      animationFrame = requestAnimationFrame(scroll)
    }
    animationFrame = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("trusted.title")}</h2>
        </div>

        {/* Carrusel de marcas */}
        <div
          ref={carouselRef}
          className="flex overflow-x-hidden whitespace-nowrap items-center relative"
          style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}
        >
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <div
              key={index}
              className="inline-block text-center grayscale hover:grayscale-0 transition-all mx-8"
              style={{ minWidth: 180 }}
            >
              <div className="bg-gray-100 rounded-lg p-6 h-24 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-auto object-contain"
                  loading="lazy"
                  width={200}
                  height={100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
