import Head from "next/head"
import Image, { type ImageProps } from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import fs from "fs"
import path from "path"
import { useEffect, useId, type ComponentProps } from "react"

const readDataUri = (file: string) =>
  fs.readFileSync(path.join(process.cwd(), "public/images", file), "utf8")

const portfolioCover = readDataUri("portfolio-cover.txt")
const page6 = readDataUri("page-6.txt")
const page7 = readDataUri("page-7.txt")
const page8 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1756123459/PAGE_8_kvkts2.png"
const page9 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1756123454/PAGE_9_ywcjcm.png"
const page16 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1756230040/PORTFOLIO_PAGE_16_nodtmh.png"
const page17 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1756230034/PORTFOLIO_PAGE_17_tedncj.png"

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

const BookPageButton = ({
  className,
  ...props
}: ComponentProps<typeof Button>) => {
  const id = useId()

  useEffect(() => {
    const el = document.getElementById(id)
    if (!el) return
    el.classList.add("book-button-highlight")
    const remove = () => el.classList.remove("book-button-highlight")
    el.addEventListener("animationend", remove, { once: true })
  }, [id])

  return <Button id={id} className={className} {...props} />
}

const bjornChapterPages = [
  { id: 10, content: <div className="w-full h-full bg-white" /> },
  { id: 11, content: <div className="w-full h-full bg-white" /> },
  { id: 12, content: <div className="w-full h-full bg-white" /> },
  { id: 13, content: <div className="w-full h-full bg-white" /> },
  { id: 14, content: <div className="w-full h-full bg-white" /> },
  { id: 15, content: <div className="w-full h-full bg-white" /> },
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
          <BookPageButton
            variant="outline"
            className="absolute bottom-30 left-[51%] z-10 -translate-x-1/2 rounded-none border border-[#1C1C1C] bg-white px-8 py-3 font-sora text-xs text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white"
          >
            visiter le site
          </BookPageButton>
        </Link>
      </div>
    ),
  },
  { id: 18, content: <div className="w-full h-full bg-white" /> },
  { id: 19, content: <div className="w-full h-full bg-white" /> },
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

  ...bjornChapterPages,

  // Contact Page (Single - Last page)
  {
    id: 20,
    content: <div className="w-full h-full bg-white" />,
  },
]
