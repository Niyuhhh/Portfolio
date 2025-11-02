import Image, { type ImageProps } from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { VideoModal } from "@/components/video-modal"
import fs from "fs"
import path from "path"
import { cn } from "@/lib/utils"

const readDataUri = (file: string) =>
  fs.readFileSync(path.join(process.cwd(), "public/images", file), "utf8")

const page6 = readDataUri("page-6.txt")
const page7 = readDataUri("page-7.txt")
const page1 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762114210/PORTFOLIO_ELIOTT_PAGE1_jfwhuh.jpg"
const page2 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762114210/PORTFOLIO_ELIOTT_PAGE2_d6xams.jpg"
const page3 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762114210/PORTFOLIO_ELIOTT_PAGE3_wemejk.jpg"
const page4 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762114210/PORTFOLIO_ELIOTT_PAGE4_tirycd.jpg"
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

const buildSrc = (baseUrl: string, width: number) =>
  baseUrl.replace("/upload/", `/upload/w_${width}/`)

interface CloudinaryImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
}

const CloudinaryImage = ({ src, alt, className, ...props }: CloudinaryImageProps) => {
  const src1600 = buildSrc(src, 1600)
  const srcset = [
    `${buildSrc(src, 800)} 800w`,
    `${src1600} 1600w`,
    `${buildSrc(src, 2400)} 2400w`,
  ].join(", ")

  return (
    <img
      src={src1600}
      srcSet={srcset}
      sizes="(max-width: 768px) 100vw, (max-width: 1920px) 50vw, 1200px"
      alt={alt}
      className={cn("absolute inset-0 h-full w-full object-cover", className)}
      {...props}
    />
  )
}

interface PreloadImageProps extends Omit<ImageProps, "src"> {
  src: string
}

const PreloadImage = ({ src, ...props }: PreloadImageProps) => (
  <Image src={src} {...props} quality={90} sizes="100vw" />
)

const bjornChapterPages = [
  {
    id: 10,
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page10} alt="Portfolio Page 10" />
      </div>
    ),
  },
  {
    id: 11,
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page11} alt="Portfolio Page 11" />
      </div>
    ),
  },
  {
    id: 12,
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page12} alt="Portfolio Page 12" />
      </div>
    ),
  },
  {
    id: 13,
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page13} alt="Portfolio Page 13" />
      </div>
    ),
  },
  {
    id: 14,
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page14} alt="Portfolio Page 14" />
      </div>
    ),
  },
  {
    id: 15,
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page15} alt="Portfolio Page 15" />
      </div>
    ),
  },
  {
    id: 16,
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page16} alt="Portfolio Page 16" />
      </div>
    ),
  },
  {
    id: 17,
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page17} alt="Portfolio Page 17" />
        <Link
          href="https://www.figma.com/proto/NITAGZXbWhIXvS86y4oytS/Site-Web-MBAT?page-id=0%3A1&node-id=176-9725&viewport=777%2C-291%2C0.31&t=QTx62eY5jD6B6o68-8&scaling=scale-down-width&content-scaling=fixed&hide-ui=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            highlight
            className="absolute left-[37%] bottom-[17%] z-10 rounded-none border border-[#1C1C1C] bg-white px-8 py-3 font-sora text-xs text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white"
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
        <CloudinaryImage src={page18} alt="Portfolio Page 18" />
      </div>
    ),
  },
  {
    id: 19,
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page19} alt="Portfolio Page 19" />
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
        <CloudinaryImage
          src={page1}
          alt="Portfolio Cover - COFFRE Elliott 2025"
          loading="eager"
        />
      </div>
    ),
  },

  {
    id: 2,
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage
          src={page2}
          alt="Portfolio Page 2"
          loading="eager"
        />
      </div>
    ),
  },

  {
    id: 3,
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page3} alt="Portfolio Page 3" loading="eager" />
      </div>
    ),
  },

  {
    id: 4,
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page4} alt="Portfolio Page 4" loading="eager" />
      </div>
    ),
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
        <CloudinaryImage src={page8} alt="Page 8" loading="eager" />
      </div>
    ),
  },

  {
    id: 9,
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page9} alt="Page 9" loading="eager" />
      </div>
    ),
  },

  ...bjornChapterPages,

  // Contact Page (Single)
  {
    id: 20,
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page20} alt="Portfolio Page 20" />
      </div>
    ),
  },
  {
    id: 21,
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page21} alt="Portfolio Page 21" />
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
