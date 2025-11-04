import Link from "next/link"
import { Button } from "@/components/ui/button"
import { VideoModal } from "@/components/video-modal"
import { cn } from "@/lib/utils"

const BlankPage = () => (
  <div className="relative w-full h-full bg-white" aria-hidden="true" />
)
const page5 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121114/PORTFOLIO_ELIOTT_PAGE5_hpcppj.jpg"
const page6 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121114/PORTFOLIO_ELIOTT_PAGE6_glyfju.jpg"
const page7 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121117/PORTFOLIO_ELIOTT_PAGE7_doaio9.jpg"
const page1 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121113/PORTFOLIO_ELIOTT_PAGE_orgdtc.jpg"
const page2 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121113/PORTFOLIO_ELIOTT_PAGE2_m0epcf.jpg"
const page3 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121114/PORTFOLIO_ELIOTT_PAGE3_fllnvf.jpg"
const page4 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121115/PORTFOLIO_ELIOTT_PAGE4_cmtqjo.jpg"
const page8 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121115/PORTFOLIO_ELIOTT_PAGE8_lcmzov.jpg"
const page9 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121115/PORTFOLIO_ELIOTT_PAGE9_qpox4s.jpg"
const page10 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121115/PORTFOLIO_ELIOTT_PAGE10_sety7l.jpg"
const page11 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121115/PORTFOLIO_ELIOTT_PAGE11_zdaq27.jpg"
const page12 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121115/PORTFOLIO_ELIOTT_PAGE12_cf0jaz.jpg"
const page13 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121116/PORTFOLIO_ELIOTT_PAGE13_o025gn.jpg"
const page14 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121116/PORTFOLIO_ELIOTT_PAGE14_ylc4ux.jpg"
const page15 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121116/PORTFOLIO_ELIOTT_PAGE15_tfenhx.jpg"
const page16 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121116/PORTFOLIO_ELIOTT_PAGE16_xjau5o.jpg"
const page17 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121117/PORTFOLIO_ELIOTT_PAGE17_zxf4bn.jpg"
const page18 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121117/PORTFOLIO_ELIOTT_PAGE18_gkwhqa.jpg"
const page19 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121117/PORTFOLIO_ELIOTT_PAGE19_oirtwc.jpg"
const page20 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121117/PORTFOLIO_ELIOTT_PAGE20_tdtejc.jpg"
const page21 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121118/PORTFOLIO_ELIOTT_PAGE21_pwz9cn.jpg"
const page22 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121118/PORTFOLIO_ELIOTT_PAGE22_maeuzq.jpg"
const page23 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121118/PORTFOLIO_ELIOTT_PAGE23_gehd0h.jpg"
const page24 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121120/PORTFOLIO_ELIOTT_PAGE24_ndgv7k.jpg"
const page25 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121120/PORTFOLIO_ELIOTT_PAGE25_xdlqbh.jpg"
const page26 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121120/PORTFOLIO_ELIOTT_PAGE26_cg7cvu.jpg"
const page27 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121121/PORTFOLIO_ELIOTT_PAGE27_yelvjn.jpg"
const page28 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121121/PORTFOLIO_ELIOTT_PAGE28_qhlkjk.jpg"
const page29 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121121/PORTFOLIO_ELIOTT_PAGE29_k8lrok.jpg"
const page30 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121121/PORTFOLIO_ELIOTT_PAGE30_egq01k.jpg"
const page31 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121121/PORTFOLIO_ELIOTT_PAGE31_vmnhqo.jpg"
const page32 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121121/PORTFOLIO_ELIOTT_PAGE32_acapqd.jpg"
const page33 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121122/PORTFOLIO_ELIOTT_PAGE33_nk9wry.jpg"
const page34 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121122/PORTFOLIO_ELIOTT_PAGE34_czowab.jpg"
const page35 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121125/PORTFOLIO_ELIOTT_PAGE35_r5p6hc.jpg"
const page36 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121125/PORTFOLIO_ELIOTT_PAGE36_snmora.jpg"
const page37 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121126/PORTFOLIO_ELIOTT_PAGE37_d0dps7.jpg"
const page38 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121127/PORTFOLIO_ELIOTT_PAGE38_ct44ct.jpg"
const page39 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121127/PORTFOLIO_ELIOTT_PAGE39_tnwldk.jpg"
const page40 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121127/PORTFOLIO_ELIOTT_PAGE40_ekxqig.jpg"
const page41 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121128/PORTFOLIO_ELIOTT_PAGE41_n75rq3.jpg"
const page42 =
  "https://res.cloudinary.com/dakxjcdyp/image/upload/v1762121127/PORTFOLIO_ELIOTT_PAGE42_aevjhy.jpg"

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

const bjornChapterPages = [
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page10} alt="Portfolio Page 10" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page11} alt="Portfolio Page 11" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page12} alt="Portfolio Page 12" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page13} alt="Portfolio Page 13" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page14} alt="Portfolio Page 14" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page15} alt="Portfolio Page 15" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page16} alt="Portfolio Page 16" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page17} alt="Portfolio Page 17" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page18} alt="Portfolio Page 18" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page19} alt="Portfolio Page 19" />
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
]

const rawPortfolioPages = [
  // Cover Page (Single)
  {
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
    content: <BlankPage />,
  },

  {
    content: <BlankPage />,
  },

  {
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
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page3} alt="Portfolio Page 3" loading="eager" />
      </div>
    ),
  },

  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page4} alt="Portfolio Page 4" loading="eager" />
      </div>
    ),
  },

  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page5} alt="Portfolio Page 5" loading="eager" />
      </div>
    ),
  },

  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page6} alt="Portfolio Page 6" loading="eager" />
      </div>
    ),
  },

  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page7} alt="Portfolio Page 7" loading="eager" />
      </div>
    ),
  },

  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page8} alt="Page 8" loading="eager" />
      </div>
    ),
  },

  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page9} alt="Page 9" loading="eager" />
      </div>
    ),
  },

  ...bjornChapterPages,

  // Contact Page (Single)
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page20} alt="Portfolio Page 20" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page21} alt="Portfolio Page 21" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page22} alt="Portfolio Page 22" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page23} alt="Portfolio Page 23" />
        <VideoModal
          trigger={
            <button
              className="absolute left-[11%] bottom-[6.7%] w-[39.9%] h-[42.5%] flex items-center justify-center bg-transparent hover:bg-black/20 transition-colors"
              aria-label="Play video"
            >
              <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" aria-hidden="true">
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
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page24} alt="Portfolio Page 24" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page25} alt="Portfolio Page 25" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page26} alt="Portfolio Page 26" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page27} alt="Portfolio Page 27" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page28} alt="Portfolio Page 28" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page29} alt="Portfolio Page 29" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page30} alt="Portfolio Page 30" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page31} alt="Portfolio Page 31" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page32} alt="Portfolio Page 32" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page33} alt="Portfolio Page 33" />
        <VideoModal
          videoUrl="https://youtu.be/-C9GxSxPXzQ"
          trigger={
            <button
              className="absolute inset-0 flex items-center justify-center bg-transparent hover:bg-black/20 transition-colors"
              aria-label="Play video"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-16 h-16 text-white"
                aria-hidden="true"
              >
                <defs>
                  <filter
                    id="playButtonShadow"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity="0.55" />
                    <feDropShadow dx="0" dy="0" stdDeviation="4" floodOpacity="0.4" />
                  </filter>
                </defs>
                <g filter="url(#playButtonShadow)">
                  <circle
                    cx="12"
                    cy="12"
                    r="11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polygon points="10,8 16,12 10,16" fill="currentColor" />
                </g>
              </svg>
            </button>
          }
        />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page34} alt="Portfolio Page 34" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page35} alt="Portfolio Page 35" />
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDN6ZXp1OXZtaW5sMXg1eTRzMXdkc242NHVobmh6Z2ljNmtkdjJkYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L6J78MhsbfUmPdRl3N/giphy.gif"
          alt="Animated scene for portfolio page 35"
          className="absolute object-cover"
          style={{
            left: "10.8%",
            bottom: "23.94%",
            width: "82.66%",
            height: "33.37%",
          }}
        />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page36} alt="Portfolio Page 36" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page37} alt="Portfolio Page 37" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page38} alt="Portfolio Page 38" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page39} alt="Portfolio Page 39" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page40} alt="Portfolio Page 40" />
      </div>
    ),
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page41} alt="Portfolio Page 41" />
      </div>
    ),
  },
  {
    content: <BlankPage />,
  },
  {
    content: <BlankPage />,
  },
  {
    content: (
      <div className="relative w-full h-full">
        <CloudinaryImage src={page42} alt="Portfolio Page 42" />
      </div>
    ),
  },
]

export const portfolioPages = rawPortfolioPages.map((page, index) => ({
  ...page,
  id: index + 1,
}))
