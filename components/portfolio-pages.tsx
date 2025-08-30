import Image, { type ImageProps } from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { VideoModal } from "@/components/video-modal"
import fs from "fs"
import path from "path"
import { cloudinaryUrl } from "@/lib/cloudinary"

const readDataUri = (file: string) =>
  fs.readFileSync(path.join(process.cwd(), "public/images", file), "utf8")

const portfolioCover = readDataUri("portfolio-cover.txt")
const page6 = readDataUri("page-6.txt")
const page7 = readDataUri("page-7.txt")
const page8 = cloudinaryUrl("v1756123459/PAGE_8_kvkts2.png")
const page9 = cloudinaryUrl("v1756123454/PAGE_9_ywcjcm.png")
const page10 = cloudinaryUrl("v1756230026/PORTFOLIO_PAGE_10_fzdgem.png")
const page11 = cloudinaryUrl("v1756230030/PORTFOLIO_PAGE_11_hrn5b0.png")
const page12 = cloudinaryUrl("v1756230036/PORTFOLIO_PAGE_12_yre8mu.png")
const page13 = cloudinaryUrl("v1756230035/PORTFOLIO_PAGE_13_ddicyv.png")
const page14 = cloudinaryUrl("v1756230036/PORTFOLIO_PAGE_14_jh7zws.png")
const page15 = cloudinaryUrl("v1756230040/PORTFOLIO_PAGE_15_tairwx.png")
const page16 = cloudinaryUrl("v1756230040/PORTFOLIO_PAGE_16_nodtmh.png")
const page17 = cloudinaryUrl("v1756230034/PORTFOLIO_PAGE_17_tedncj.png")
const page18 = cloudinaryUrl("v1756396329/PORTFOLIO_PAGE_18_upooms.png")
const page19 = cloudinaryUrl("v1756396488/PORTFOLIO_PAGE_19_jjlnpi.png")
const page20 = cloudinaryUrl("v1756396332/PORTFOLIO_PAGE_20_sxhnkd.png")
const page21 = cloudinaryUrl("v1756396488/PORTFOLIO_PAGE_21_r9mzqz.png")

interface PreloadImageProps extends Omit<ImageProps, "src"> {
  src: string
  srcSet?: string
  sizes?: string
}

const PreloadImage = ({ src, srcSet, sizes = "100vw", ...props }: PreloadImageProps) => (
  <Image src={src} srcSet={srcSet} sizes={sizes} {...props} />
)

const bjornChapterPages = [
  {
    id: 10,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage
          {...page10}
          alt="Portfolio Page 10"
          fill
          className="object-cover"

        />
      </div>
    ),
  },
  {
    id: 11,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage
          {...page11}
          alt="Portfolio Page 11"
          fill
          className="object-cover"

        />
      </div>
    ),
  },
  {
    id: 12,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage
          {...page12}
          alt="Portfolio Page 12"
          fill
          className="object-cover"

        />
      </div>
    ),
  },
  {
    id: 13,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage
          {...page13}
          alt="Portfolio Page 13"
          fill
          className="object-cover"

        />
      </div>
    ),
  },
  {
    id: 14,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage
          {...page14}
          alt="Portfolio Page 14"
          fill
          className="object-cover"

        />
      </div>
    ),
  },
  {
    id: 15,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage
          {...page15}
          alt="Portfolio Page 15"
          fill
          className="object-cover"

        />
      </div>
    ),
  },
  {
    id: 16,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage
          {...page16}
          alt="Portfolio Page 16"
          fill
          className="object-cover"

        />
      </div>
    ),
  },
  {
    id: 17,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage
          {...page17}
          alt="Portfolio Page 17"
          fill
          className="object-cover"

        />
        <Link
          href="https://www.figma.com/proto/NITAGZXbWhIXvS86y4oytS/Site-Web-MBAT?page-id=0%3A1&node-id=176-9725&viewport=777%2C-291%2C0.31&t=QTx62eY5jD6B6o68-8&scaling=scale-down-width&content-scaling=fixed&hide-ui=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            highlight
            className="absolute bottom-30 left-[51%] z-10 -translate-x-1/2 rounded-none border border-[#1C1C1C] bg-white px-8 py-3 font-sora text-xs text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white"
          >
            visiter le site
          </Button>
        </Link>
      </div>
    ),
  },
  {
    id: 18,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage
          {...page18}
          alt="Portfolio Page 18"
          fill
          className="object-cover"

        />
      </div>
    ),
  },
  {
    id: 19,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage
          {...page19}
          alt="Portfolio Page 19"
          fill
          className="object-cover"

        />
      </div>
    ),
  },
]

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

        />
      </div>
    ),
  },

  {
    id: 2,
    content: <div className="w-full h-full bg-white" />,
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

          priority
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

          priority
        />
      </div>
    ),
  },

  {
    id: 8,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage {...page8} alt="Page 8" fill className="object-cover" priority />
      </div>
    ),
  },

  {
    id: 9,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage {...page9} alt="Page 9" fill className="object-cover" priority />
      </div>
    ),
  },

  ...bjornChapterPages,

  // Contact Page (Single)
  {
    id: 20,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage
          {...page20}
          alt="Portfolio Page 20"
          fill
          className="object-cover"

        />
      </div>
    ),
  },
  {
    id: 21,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage
          {...page21}
          alt="Portfolio Page 21"
          fill
          className="object-cover"

        />
        <VideoModal
          trigger={
            <button
              className="absolute left-[11%] bottom-[6.7%] w-[39.9%] h-[42.5%] flex items-center justify-center bg-transparent hover:bg-black/20 transition-colors"
              aria-label="Play video"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-12 h-12 text-white"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <polygon points="10,8 16,12 10,16" fill="currentColor" />
              </svg>
            </button>
          }
        />
      </div>
    ),
  },
  { id: 22, content: <div className="w-full h-full bg-white" /> },
  { id: 23, content: <div className="w-full h-full bg-white" /> },
  { id: 24, content: <div className="w-full h-full bg-white" /> },
  { id: 25, content: <div className="w-full h-full bg-white" /> },
  { id: 26, content: <div className="w-full h-full bg-white" /> },
  { id: 27, content: <div className="w-full h-full bg-white" /> },
  { id: 28, content: <div className="w-full h-full bg-white" /> },
  { id: 29, content: <div className="w-full h-full bg-white" /> },
  { id: 30, content: <div className="w-full h-full bg-white" /> },
]
