import Image, { type ImageProps } from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { VideoModal } from "@/components/video-modal"
import { PlayIcon } from "lucide-react"
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
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1756230026/PORTFOLIO_PAGE_10_fzdgem.png"
const page11 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1756230030/PORTFOLIO_PAGE_11_hrn5b0.png"
const page12 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1756230036/PORTFOLIO_PAGE_12_yre8mu.png"
const page13 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1756230035/PORTFOLIO_PAGE_13_ddicyv.png"
const page14 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1756230036/PORTFOLIO_PAGE_14_jh7zws.png"
const page15 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1756230040/PORTFOLIO_PAGE_15_tairwx.png"
const page16 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1756230040/PORTFOLIO_PAGE_16_nodtmh.png"
const page17 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1756230034/PORTFOLIO_PAGE_17_tedncj.png"
const page18 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1756396329/PORTFOLIO_PAGE_18_upooms.png"
const page19 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1756396488/PORTFOLIO_PAGE_19_jjlnpi.png"
const page20 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1756396332/PORTFOLIO_PAGE_20_sxhnkd.png"
const page21 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1756396488/PORTFOLIO_PAGE_21_r9mzqz.png"

interface PreloadImageProps extends Omit<ImageProps, "src"> {
  src: string
}

const PreloadImage = ({ src, ...props }: PreloadImageProps) => (
  <Image src={src} {...props} />
)

const bjornChapterPages = [
  {
    id: 10,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage
          src={page10}
          alt="Portfolio Page 10"
          fill
          className="object-cover"
          unoptimized
        />
      </div>
    ),
  },
  {
    id: 11,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage
          src={page11}
          alt="Portfolio Page 11"
          fill
          className="object-cover"
          unoptimized
        />
      </div>
    ),
  },
  {
    id: 12,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage
          src={page12}
          alt="Portfolio Page 12"
          fill
          className="object-cover"
          unoptimized
        />
      </div>
    ),
  },
  {
    id: 13,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage
          src={page13}
          alt="Portfolio Page 13"
          fill
          className="object-cover"
          unoptimized
        />
      </div>
    ),
  },
  {
    id: 14,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage
          src={page14}
          alt="Portfolio Page 14"
          fill
          className="object-cover"
          unoptimized
        />
      </div>
    ),
  },
  {
    id: 15,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage
          src={page15}
          alt="Portfolio Page 15"
          fill
          className="object-cover"
          unoptimized
        />
      </div>
    ),
  },
  {
    id: 16,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage
          src={page16}
          alt="Portfolio Page 16"
          fill
          className="object-cover"
          unoptimized
        />
      </div>
    ),
  },
  {
    id: 17,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage
          src={page17}
          alt="Portfolio Page 17"
          fill
          className="object-cover"
          unoptimized
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
          src={page18}
          alt="Portfolio Page 18"
          fill
          className="object-cover"
          unoptimized
        />
      </div>
    ),
  },
  {
    id: 19,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage
          src={page19}
          alt="Portfolio Page 19"
          fill
          className="object-cover"
          unoptimized
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
          unoptimized
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
          unoptimized
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
          unoptimized
          priority
        />
      </div>
    ),
  },

  {
    id: 8,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage src={page8} alt="Page 8" fill className="object-cover" unoptimized priority />
      </div>
    ),
  },

  {
    id: 9,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage src={page9} alt="Page 9" fill className="object-cover" unoptimized priority />
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
          src={page20}
          alt="Portfolio Page 20"
          fill
          className="object-cover"
          unoptimized
        />
      </div>
    ),
  },
  {
    id: 21,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage
          src={page21}
          alt="Portfolio Page 21"
          fill
          className="object-cover"
          unoptimized
        />
        <VideoModal
          trigger={
            <button
              className="absolute left-[11%] bottom-[6.7%] w-[39.9%] h-[42.5%] flex items-center justify-center bg-transparent"
              aria-label="Play video"
            >
              <PlayIcon className="w-12 h-12 text-white stroke-[1.5]" />
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
