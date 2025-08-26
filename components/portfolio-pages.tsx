import Head from "next/head"
import Image, { type ImageProps } from "next/image"
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
  "https://res.cloudinary.com/dakxjcdyp/image/upload/PAGE_10.png"
const page11 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/PAGE_11.png"
const page12 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/PAGE_12.png"
const page13 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/PAGE_13.png"
const page14 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/PAGE_14.png"
const page15 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/PAGE_15.png"
const page16 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/PAGE_16.png"
const page17 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/PAGE_17.png"

const bjornChapterPages = [
  {
    id: 10,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage
          src={page10}
          alt="Page 10"
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
          alt="Page 11"
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
          alt="Page 12"
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
          alt="Page 13"
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
          alt="Page 14"
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
          alt="Page 15"
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
          alt="Page 16"
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
          alt="Page 17"
          fill
          className="object-cover"
          unoptimized
        />
      </div>
    ),
  },
  { id: 18, content: <div className="w-full h-full bg-white" /> },
  { id: 19, content: <div className="w-full h-full bg-white" /> },
]

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
