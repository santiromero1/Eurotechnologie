"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es" | "pt" | "it" | "fr"

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
  pt: {
    // Navegación
    "nav.home": "Início",
    "nav.about": "Sobre nós",
    "nav.solutions": "Soluções",
    "nav.contact": "Contato",

    // Sección Hero
    "hero.title": "Seu Elo Estratégico entre a China e o Mundo",
    "hero.subtitle":
      "Simplificamos os negócios internacionais. Somos líderes em fabricação e distribuição de soluções tecnológicas e de consumo, conectando a Ásia aos mercados da América Latina e Europa desde 2004.",
    "hero.cta": "Conectar com um Especialista",

    // Sección About
    "about.title": "Facilitamos o acesso à tecnologia na América Latina",
    "about.description":
      "Com mais de 20 anos de experiência, o Grupo Eurotechnologie se consolidou como uma ponte confiável entre fabricantes asiáticos e mercados globais. Nossa presença internacional vai desde a sede em Miami até operações em Hong Kong, Argentina e toda a América Latina.",

    // Sección Solutions
    "solutions.title": "Um Ecossistema de Soluções para o seu Negócio",
    "solutions.private.title": "Desenvolvimento de Marcas Próprias",
    "solutions.private.description": "Desenvolvimento completo de marca, do conceito ao lançamento no mercado",
    "solutions.oem.title": "Personalização OEM/ODM",
    "solutions.oem.description": "Soluções de fabricação personalizadas para atender às suas necessidades específicas",
    "solutions.wholesale.title": "Distribuição Atacadista",
    "solutions.wholesale.description": "Rede de distribuição abrangente em toda a América Latina",

    // Sección Brands
    "brands.title": "Nosso Portfólio de Marcas",
    "brands.tgo": "T-GO: Acessórios móveis premium e soluções tecnológicas",
    "brands.eurocase": "Eurocase: Estojos protetores profissionais e armazenamento",
    "brands.datavision": "Datavision: Soluções avançadas de gestão de dados",
    "brands.maxima": "Maxima: Eletrônicos de consumo de alto desempenho",

    // Sección Why Choose Us
    "why.title": "A Vantagem de um Parceiro Estratégico",
    "why.experience": "Mais de 20 anos de experiência em negócios internacionais",
    "why.quality": "Alto controle de qualidade com baixas taxas de RMA",
    "why.innovation": "Excelência em inovação e design",
    "why.offering": "Ampla oferta de produtos em várias categorias",

    // Sección Trusted By
    "trusted.title": "Grandes Marcas Confiam em Nós",

    // Sección Contact
    "contact.title": "Pronto para levar seu negócio ao próximo nível?",
    "contact.name": "Nome",
    "contact.company": "Empresa",
    "contact.email": "E-mail",
    "contact.message": "Mensagem",
    "contact.cta": "Enviar Consulta",

    // Footer
    "footer.rights": "Todos os direitos reservados.",
    "footer.description": "Conectando a Ásia com mercados globais desde 2004",
  },
  it: {
    // Navigazione
    "nav.home": "Home",
    "nav.about": "Chi siamo",
    "nav.solutions": "Soluzioni",
    "nav.contact": "Contatto",

    // Sezione Hero
    "hero.title": "Il tuo collegamento strategico tra la Cina e il mondo",
    "hero.subtitle":
      "Semplifichiamo il business internazionale. Siamo leader nella produzione e distribuzione di soluzioni tecnologiche e di consumo, collegando l'Asia ai mercati dell'America Latina e dell'Europa dal 2004.",
    "hero.cta": "Contatta un Esperto",

    // Sezione About
    "about.title": "Facilitiamo l'accesso alla tecnologia in America Latina",
    "about.description":
      "Con oltre 20 anni di esperienza, Eurotechnologie Group si è affermato come un ponte affidabile tra i produttori asiatici e i mercati globali. La nostra presenza internazionale si estende dalla sede di Miami alle operazioni a Hong Kong, Argentina e in tutta l'America Latina.",

    // Sezione Solutions
    "solutions.title": "Un Ecosistema di Soluzioni per la tua Azienda",
    "solutions.private.title": "Sviluppo di Marchi Privati",
    "solutions.private.description": "Sviluppo completo del marchio, dal concetto al lancio sul mercato",
    "solutions.oem.title": "Personalizzazione OEM/ODM",
    "solutions.oem.description": "Soluzioni di produzione su misura per soddisfare le tue esigenze specifiche",
    "solutions.wholesale.title": "Distribuzione all'Ingrosso",
    "solutions.wholesale.description": "Rete di distribuzione completa in tutta l'America Latina",

    // Sezione Brands
    "brands.title": "Il Nostro Portfolio di Marchi",
    "brands.tgo": "T-GO: Accessori mobili premium e soluzioni tecnologiche",
    "brands.eurocase": "Eurocase: Custodie protettive professionali e archiviazione",
    "brands.datavision": "Datavision: Soluzioni avanzate di gestione dei dati",
    "brands.maxima": "Maxima: Elettronica di consumo ad alte prestazioni",

    // Sezione Why Choose Us
    "why.title": "Il Vantaggio di un Partner Strategico",
    "why.experience": "Oltre 20 anni di esperienza nel business internazionale",
    "why.quality": "Alto controllo qualità con bassi tassi di RMA",
    "why.innovation": "Eccellenza in innovazione e design",
    "why.offering": "Ampia offerta di prodotti in più categorie",

    // Sezione Trusted By
    "trusted.title": "Grandi Marchi si Fidano di Noi",

    // Sezione Contact
    "contact.title": "Pronto a portare la tua azienda al livello successivo?",
    "contact.name": "Nome",
    "contact.company": "Azienda",
    "contact.email": "E-mail",
    "contact.message": "Messaggio",
    "contact.cta": "Invia Richiesta",

    // Footer
    "footer.rights": "Tutti i diritti riservati.",
    "footer.description": "Colleghiamo l'Asia ai mercati globali dal 2004",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.solutions": "Solutions",
    "nav.contact": "Contact",

    // Section Hero
    "hero.title": "Votre lien stratégique entre la Chine et le monde",
    "hero.subtitle":
      "Nous simplifions les affaires internationales. Nous sommes leaders dans la fabrication et la distribution de solutions technologiques et de consommation, reliant l'Asie aux marchés d'Amérique latine et d'Europe depuis 2004.",
    "hero.cta": "Contacter un Expert",

    // Section About
    "about.title": "Faciliter l'accès à la technologie en Amérique latine",
    "about.description":
      "Avec plus de 20 ans d'expérience, Eurotechnologie Group s'est imposé comme un pont de confiance entre les fabricants asiatiques et les marchés mondiaux. Notre présence internationale s'étend du siège de Miami aux opérations à Hong Kong, en Argentine et dans toute l'Amérique latine.",

    // Section Solutions
    "solutions.title": "Un Écosystème de Solutions pour Votre Entreprise",
    "solutions.private.title": "Développement de Marques Privées",
    "solutions.private.description": "Développement complet de la marque, du concept au lancement sur le marché",
    "solutions.oem.title": "Personnalisation OEM/ODM",
    "solutions.oem.description": "Solutions de fabrication sur mesure pour répondre à vos besoins spécifiques",
    "solutions.wholesale.title": "Distribution en Gros",
    "solutions.wholesale.description": "Réseau de distribution complet dans toute l'Amérique latine",

    // Section Brands
    "brands.title": "Notre Portefeuille de Marques",
    "brands.tgo": "T-GO : Accessoires mobiles premium et solutions technologiques",
    "brands.eurocase": "Eurocase : Étuis de protection professionnels et stockage",
    "brands.datavision": "Datavision : Solutions avancées de gestion des données",
    "brands.maxima": "Maxima : Électronique grand public haute performance",

    // Section Why Choose Us
    "why.title": "L'Avantage d'un Partenaire Stratégique",
    "why.experience": "Plus de 20 ans d'expérience en affaires internationales",
    "why.quality": "Contrôle de qualité élevé avec de faibles taux de RMA",
    "why.innovation": "Excellence en innovation et en design",
    "why.offering": "Large offre de produits dans plusieurs catégories",

    // Section Trusted By
    "trusted.title": "De Grandes Marques Nous Font Confiance",

    // Section Contact
    "contact.title": "Prêt à faire passer votre entreprise au niveau supérieur ?",
    "contact.name": "Nom",
    "contact.company": "Entreprise",
    "contact.email": "E-mail",
    "contact.message": "Message",
    "contact.cta": "Envoyer la Demande",

    // Footer
    "footer.rights": "Tous droits réservés.",
    "footer.description": "Relier l'Asie aux marchés mondiaux depuis 2004",
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
