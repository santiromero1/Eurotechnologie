"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.solutions": "Solutions",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "Your Strategic Link Between China and the World",
    "hero.subtitle":
      "We simplify international business. We are leaders in manufacturing and distributing technology and consumer solutions, connecting Asia with Latin American and European markets since 2004.",
    "hero.cta": "Connect with an Expert",

    // About Section
    "about.title": "Facilitating Access to Technology in Latin America",
    "about.description":
      "With over 20 years of experience, Eurotechnologie Group has established itself as a trusted bridge between Asian manufacturers and global markets. Our international presence spans from our Miami headquarters to operations in Hong Kong, Argentina, and throughout Latin America.",

    // Solutions Section
    "solutions.title": "An Ecosystem of Solutions for Your Business",
    "solutions.private.title": "Private Label Brand Development",
    "solutions.private.description": "Complete brand development from concept to market launch",
    "solutions.oem.title": "OEM & ODM Customization",
    "solutions.oem.description": "Tailored manufacturing solutions to meet your specific requirements",
    "solutions.wholesale.title": "Wholesale Distribution",
    "solutions.wholesale.description": "Comprehensive distribution network across Latin America",

    // Brands Section
    "brands.title": "Our Brand Portfolio",
    "brands.tgo": "T-GO: Premium mobile accessories and tech solutions",
    "brands.eurocase": "Eurocase: Professional protective cases and storage",
    "brands.datavision": "Datavision: Advanced data management solutions",
    "brands.maxima": "Maxima: High-performance consumer electronics",

    // Why Choose Us Section
    "why.title": "The Advantage of a Strategic Partner",
    "why.experience": "20+ years of international business experience",
    "why.quality": "High quality control with low RMA rates",
    "why.innovation": "Innovation & design excellence",
    "why.offering": "Wide product offering across multiple categories",

    // Trusted By Section
    "trusted.title": "Major Brands Trust Us",

    // Contact Section
    "contact.title": "Ready to Take Your Business to the Next Level?",
    "contact.name": "Name",
    "contact.company": "Company",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.cta": "Send Inquiry",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.description": "Connecting Asia with global markets since 2004",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.solutions": "Soluciones",
    "nav.contact": "Contacto",

    // Hero Section
    "hero.title": "Su Nexo Estratégico entre China y el Mundo",
    "hero.subtitle":
      "Simplificamos los negocios internacionales. Somos líderes en la fabricación y distribución de soluciones tecnológicas y de consumo, conectando Asia con los mercados de Latinoamérica y Europa desde 2004.",
    "hero.cta": "Conectar con un Experto",

    // About Section
    "about.title": "Facilitamos el acceso a la tecnología en América Latina",
    "about.description":
      "Con más de 20 años de experiencia, Eurotechnologie Group se ha establecido como un puente confiable entre los fabricantes asiáticos y los mercados globales. Nuestra presencia internacional se extiende desde nuestra sede en Miami hasta operaciones en Hong Kong, Argentina y toda América Latina.",

    // Solutions Section
    "solutions.title": "Un Ecosistema de Soluciones para su Negocio",
    "solutions.private.title": "Desarrollo de Marcas Propias",
    "solutions.private.description": "Desarrollo completo de marca desde el concepto hasta el lanzamiento al mercado",
    "solutions.oem.title": "Personalización OEM/ODM",
    "solutions.oem.description": "Soluciones de fabricación personalizadas para satisfacer sus requisitos específicos",
    "solutions.wholesale.title": "Distribución Mayorista",
    "solutions.wholesale.description": "Red de distribución integral en toda América Latina",

    // Brands Section
    "brands.title": "Nuestro Portfolio de Marcas",
    "brands.tgo": "T-GO: Accesorios móviles premium y soluciones tecnológicas",
    "brands.eurocase": "Eurocase: Estuches protectores profesionales y almacenamiento",
    "brands.datavision": "Datavision: Soluciones avanzadas de gestión de datos",
    "brands.maxima": "Maxima: Electrónicos de consumo de alto rendimiento",

    // Why Choose Us Section
    "why.title": "La Ventaja de un Socio Estratégico",
    "why.experience": "20+ años de experiencia en negocios internacionales",
    "why.quality": "Alto control de calidad con bajas tasas de RMA",
    "why.innovation": "Excelencia en innovación y diseño",
    "why.offering": "Amplia oferta de productos en múltiples categorías",

    // Trusted By Section
    "trusted.title": "Grandes Marcas Confían en Nosotros",

    // Contact Section
    "contact.title": "¿Listo para llevar su negocio al siguiente nivel?",
    "contact.name": "Nombre",
    "contact.company": "Empresa",
    "contact.email": "Correo Electrónico",
    "contact.message": "Mensaje",
    "contact.cta": "Enviar Consulta",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
    "footer.description": "Conectando Asia con mercados globales desde 2004",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
