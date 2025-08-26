import Head from "next/head"
import Image, { type ImageProps } from "next/image"
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
const page10 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1756225922/PAGE_10_hcfyj9.png"
const page11 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1756225929/PAGE_11_wyfldo.png"
const page12 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1756225927/PAGE_12_czkwry.png"
const page13 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1756225924/PAGE_13_iy5ov3.png"
const page14 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1756225928/PAGE_14_rbvkav.png"
const page15 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1756225927/PAGE_15_oxmgmm.png"
const page16 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1756225929/PAGE_16_dktuv7.png"
const page17 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1756225926/PAGE_17_kx4ihz.png"

interface PreloadImageProps extends Omit<ImageProps, "src"> {
  src: string
}

const PreloadImage = ({ src, ...props }: PreloadImageProps) => (
  <>
    <Head>
      <link rel="preload" as="image" href={src} />
    </Head>
    <Image src={src} {...props} />
  </>
)

export const portfolioPages = [
  // Cover Page (Single)
  {
    id: 1,
    content: (
      <div className="relative w-full h-full opacity-100">
        <PreloadImage
          src={portfolioCover}
          alt="Portfolio Cover - COFFRE Elliott 2025"
          fill
          className="object-cover"
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
        <PreloadImage
          src={page6}
          alt="BJÖRN Project - Page 6"
          fill
          className="object-cover"
          unoptimized
          loading="eager"
        />
      </div>
    ),
  },

  {
    id: 7,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage
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
        <PreloadImage src={page8} alt="Page 8" fill className="object-cover" unoptimized />
      </div>
    ),
  },

  {
    id: 9,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage src={page9} alt="Page 9" fill className="object-cover" unoptimized />
      </div>
    ),
  },

  {
    id: 10,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage src={page10} alt="Page 10" fill className="object-cover" unoptimized />
      </div>
    ),
  },

  {
    id: 11,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage src={page11} alt="Page 11" fill className="object-cover" unoptimized />
      </div>
    ),
  },

  {
    id: 12,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage src={page12} alt="Page 12" fill className="object-cover" unoptimized />
      </div>
    ),
  },

  {
    id: 13,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage src={page13} alt="Page 13" fill className="object-cover" unoptimized />
      </div>
    ),
  },

  {
    id: 14,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage src={page14} alt="Page 14" fill className="object-cover" unoptimized />
      </div>
    ),
  },

  {
    id: 15,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage src={page15} alt="Page 15" fill className="object-cover" unoptimized />
      </div>
    ),
  },

  {
    id: 16,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage src={page16} alt="Page 16" fill className="object-cover" unoptimized />
      </div>
    ),
  },

  {
    id: 17,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage src={page17} alt="Page 17" fill className="object-cover" unoptimized />
      </div>
    ),
  },

  // Contact Page (Single - Last page)
  {
    id: 18,
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
