"use client"

import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Eurotechnologie Group</h3>
            <p className="text-gray-400 mb-4">{t("footer.description")}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Locations</h4>
            <div className="space-y-2 text-gray-400">
              <p>Eurotechnologie Co. Limited</p>
              <p>Room 409, Beverly Commercial Center</p>
              <p>Chatham South Road 87–105</p>
              <p>Tsim Sha Tsui, Kowloon, Hong Kong</p>
              <p>Eurotechnologie Group HQ</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>info@eurotechnologie.co</p>
              <p>+1 786 782-3579</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Eurotechnologie Group. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
