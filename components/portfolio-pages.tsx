import Image from "next/image"
import { Mail, Linkedin, Instagram, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export const portfolioPages = [
  // Cover Page (Single)
  {
    id: 1,
    content: (
      <div className="relative w-full h-full opacity-100">
        <Image
          src="/images/portfolio-cover.png"
          alt="Portfolio Cover - COFFRE Elliott 2025"
          fill
          className="object-cover"
          priority
        />
      </div>
    ),
  },

  {
    id: 2,
    content: <div className="w-full h-full bg-white">{/* Empty page */}</div>,
  },

  {
    id: 3,
    content: <div className="w-full h-full bg-white">{/* Empty page */}</div>,
  },

  {
    id: 4,
    content: <div className="w-full h-full bg-white">{/* Empty page */}</div>,
  },

  {
    id: 5,
    content: <div className="w-full h-full bg-white">{/* Empty page */}</div>,
  },

  {
    id: 6,
    content: (
      <div className="relative w-full h-full">
        <Image src="/images/page-6.png" alt="BJÖRN Project - Page 6" fill className="object-cover" />
      </div>
    ),
  },

  {
    id: 7,
    content: (
      <div className="relative w-full h-full">
        <Image src="/images/page-7.png" alt="BJÖRN Ice Cream Packaging - Page 7" fill className="object-cover" />
      </div>
    ),
  },

  {
    id: 8,
    content: <div className="w-full h-full bg-white">{/* Empty page */}</div>,
  },

  {
    id: 9,
    content: <div className="w-full h-full bg-white">{/* Empty page */}</div>,
  },

  // Contact Page (Single - Last page)
  {
    id: 10,
    content: (
      <div className="p-12 h-full flex flex-col justify-center bg-gradient-to-br from-orange-500/10 to-red-500/10">
        <div className="max-w-md mx-auto text-center">
          <h2 className="font-serif font-black text-4xl mb-8 text-gray-900">Let's Work Together</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Ready to bring your vision to life? Get in touch to discuss your next project.
          </p>

          <div className="space-y-4 mb-8">
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium" size="lg">
              <Mail className="w-4 h-4 mr-2" />
              elliott.coffre@brassart.fr
            </Button>

            <div className="flex gap-4 justify-center">
              <Button variant="outline" size="icon">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Globe className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <p className="text-sm text-gray-500">Based in France • Available worldwide</p>
        </div>
      </div>
    ),
  },
]
