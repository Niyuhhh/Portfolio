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

const createTextPage = (id: number, title: string, paragraphs: string[]) => ({
  id,
  content: (
    <div className="p-12 h-full overflow-y-auto bg-white">
      <article className="prose prose-lg mx-auto">
        <h2>{title}</h2>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </article>
    </div>
  ),
})
const bjornChapterPages = [
  { id: 10,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage src={page10} alt="Page 10" fill className="object-cover" unoptimized />
      </div>
    ),
  },
  { id: 11,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage src={page11} alt="Page 11" fill className="object-cover" unoptimized />
      </div>
    ),
  },
  { id: 12,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage src={page12} alt="Page 12" fill className="object-cover" unoptimized />
      </div>
    ),
  },
  { id: 13,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage src={page13} alt="Page 13" fill className="object-cover" unoptimized />
      </div>
    ),
  },
  { id: 14,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage src={page14} alt="Page 14" fill className="object-cover" unoptimized />
      </div>
    ),
  },
  { id: 15,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage src={page15} alt="Page 15" fill className="object-cover" unoptimized />
      </div>
    ),
  },
  { id: 16,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage src={page16} alt="Page 16" fill className="object-cover" unoptimized />
      </div>
    ),
  },
  { id: 17,
    content: (
      <div className="relative w-full h-full">
        <PreloadImage src={page17} alt="Page 17" fill className="object-cover" unoptimized />
      </div>
    ),
  },
  createTextPage(18, "Déploiement final", [
    "La phase de déploiement a consisté à adapter l'identité visuelle aux différents supports de communication. Les affiches, le site web et les réseaux sociaux ont été harmonisés afin de raconter une histoire cohérente autour de la marque Björn.",
    "Nous avons travaillé en étroite collaboration avec les équipes marketing pour planifier un lancement progressif. Des visuels teasers ont été diffusés en amont, suivis de campagnes ciblées mettant en avant les valeurs de fraîcheur et de durabilité.",
    "Les premiers retours du marché ont été encourageants, avec un taux d'engagement supérieur aux prévisions. Cette dynamique confirme la pertinence des choix graphiques opérés tout au long du projet.",
  ]),
  createTextPage(19, "Bilan et perspectives", [
    "Ce chapitre supplémentaire nous a permis de consolider l'ensemble de la démarche. Chaque page témoigne de la rigueur apportée à la conception de l'identité Björn et de la volonté de créer un produit singulier sur un marché saturé.",
    "Les enseignements tirés serviront de base pour les futures évolutions de la marque. Nous envisageons déjà de décliner la gamme sur de nouveaux parfums et d'explorer des collaborations avec des producteurs locaux afin d'enrichir le récit.",
    "En conclusion, l'expérience acquise au fil de ces étapes illustre l'importance d'un dialogue constant entre créativité et contraintes techniques. C'est dans cet équilibre que se dessine l'identité authentique de Björn.",
  ]),
];

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
    content: (
      <div className="p-12 h-full flex justify-center items-center bg-white">
        <div className="prose">
          <h2>Table des matières</h2>
          <ol className="list-decimal pl-4 space-y-2">
            <li className="flex justify-between">
              <span>Couverture</span>
              <span>1</span>
            </li>
            <li className="flex justify-between">
              <span>Table des matières</span>
              <span>2</span>
            </li>
            <li className="flex justify-between">
              <span>Pages blanches</span>
              <span>3–5</span>
            </li>
            <li className="flex justify-between">
              <span>Projet BJÖRN</span>
              <span>6–9</span>
            </li>
            <li className="flex justify-between">
              <span>Chapitre – L'évolution du design Björn</span>
              <span>10–19</span>
            </li>
            <li className="flex justify-between">
              <span>Contact</span>
              <span>20</span>
            </li>
          </ol>
        </div>
      </div>
    ),
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
