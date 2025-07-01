import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Eurotechnologie Group - Your Strategic Link Between China and the World",
  description:
    "We simplify international business. Leaders in manufacturing and distributing technology and consumer solutions, connecting Asia with Latin American and European markets since 2004.",
  keywords: "OEM, ODM, private label, technology solutions, international business, Latin America, Asia",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
