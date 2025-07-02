"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Send } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus("idle")

    try {
      // Configuración de EmailJS
      const serviceId = "service_rer9n2i" // Reemplaza con tu Service ID real
      const templateId = "template_m88yydp" // Reemplaza con tu Template ID real
      const publicKey = "rYVX1OIhG2wrpYJfl" // Reemplaza con tu Public Key real

      const templateParams = {
        to_email: "info@eurotechnologie.co",
        from_name: formData.name,
        from_company: formData.company,
        from_email: formData.email,
        message: formData.message,
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setSubmitStatus("success")
      setFormData({
        name: "",
        company: "",
        email: "",
        message: "",
      })
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("contact.title")}</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  {t("contact.company")}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {t("contact.email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white resize-none"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    {t("contact.cta")}
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
              
              {submitStatus === "success" && (
                <div className="mt-4 p-4 bg-green-600 text-white rounded-lg">
                  ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                </div>
              )}
              
              {submitStatus === "error" && (
                <div className="mt-4 p-4 bg-red-600 text-white rounded-lg">
                  Error al enviar el mensaje. Por favor, intenta nuevamente.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
