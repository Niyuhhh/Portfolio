import Image from "next/image"
import { Mail, Linkedin, Instagram, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import fs from "fs"
import path from "path"

const readDataUri = (file: string) =>
  fs.readFileSync(path.join(process.cwd(), "public/images", file), "utf8")

const portfolioCover = readDataUri("portfolio-cover.txt")
const page6 = readDataUri("page-6.txt")
const page7 = readDataUri("page-7.txt")
const page8 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1756123459/PAGE_8_kvkts2.png"
const page9 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1756123454/PAGE_9_ywcjcm.png"

export const portfolioPages = [
  // Cover Page (Single)
  {
    id: 1,
    content: (
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={portfolioCover}
          alt="Portfolio Cover - COFFRE Elliott 2025"
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          priority
          unoptimized
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
        <Image src={page6} alt="BJÖRN Project - Page 6" fill className="object-cover" unoptimized />
      </div>
    ),
  },

  {
    id: 7,
    content: (
      <div className="relative w-full h-full">
        <Image
          src={page7}
          alt="BJÖRN Ice Cream Packaging - Page 7"
          fill
          className="object-cover"
          unoptimized
        />
      </div>
    ),
  },

  {
    id: 8,
    content: (
      <div className="relative w-full h-full">
        <Image src={page8} alt="Page 8" fill className="object-cover" unoptimized />
      </div>
    ),
  },

  {
    id: 9,
    content: (
      <div className="relative w-full h-full">
        <Image src={page9} alt="Page 9" fill className="object-cover" unoptimized />
      </div>
    ),
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
