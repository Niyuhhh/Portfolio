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
  createTextPage(10, "Introduction du projet", [
    "Le chapitre qui suit retrace la genèse du projet Björn. Après une première série d'expérimentations, l'équipe a ressenti le besoin de formaliser une vision plus complète, capable de porter l'identité de la marque au-delà de ses esquisses initiales. Nous avons alors entrepris une analyse approfondie du marché et des attentes des consommateurs pour construire un récit cohérent.",
    "Ces pages supplémentaires offrent une plongée méthodique dans le processus créatif. Elles exposent les choix fondamentaux, les hésitations qui ont jalonné le parcours et les solutions retenues. En prenant le temps de détailler chaque étape, notre objectif est de partager une méthodologie reproductible, mais aussi de révéler la part d'intuition qui fait la singularité de ce projet.",
    "Cette introduction sert de guide pour la suite du chapitre. Elle présente les axes principaux abordés et explique la logique des transitions. Le lecteur peut ainsi comprendre comment les décisions conceptuelles se transforment progressivement en éléments graphiques concrets.",
  ]),
  createTextPage(11, "Contexte et objectifs", [
    "Björn est né de l'envie d'apporter une touche contemporaine au marché de la crème glacée artisanale. Les marques historiques misent souvent sur la nostalgie, alors que les nouveaux acteurs privilégient une approche minimaliste. Nous avons choisi d'assumer un positionnement intermédiaire, mêlant chaleur humaine et modernité visuelle.",
    "L'objectif principal était de créer une identité modulable, capable de s'adapter à différents formats d'emballage tout en conservant une forte reconnaissabilité. Nous voulions également que le design évoque la fraîcheur des ingrédients et la convivialité des moments partagés autour du produit.",
    "En arrière-plan, l'équipe devait composer avec des contraintes de production strictes. Les délais serrés et les exigences budgétaires nous ont poussé à optimiser chaque étape, depuis la recherche graphique jusqu'à l'industrialisation. Ce contexte a orienté plusieurs décisions clés, que nous détaillerons plus loin.",
  ]),
  createTextPage(12, "Recherche et inspiration", [
    "Notre phase de recherche a commencé par une collecte visuelle étendue. Nous avons exploré des tendances issues du design scandinave, des motifs géométriques présents dans l'architecture nordique et des palettes chromatiques observées dans la nature hivernale. Cette démarche nous a permis de dégager des lignes directrices claires.",
    "Parallèlement, nous avons analysé des campagnes de communication réussies dans des secteurs voisins, comme la confiserie ou les boissons artisanales. L'étude de ces cas nous a aidés à identifier les codes graphiques capables de susciter la confiance tout en surprenant le consommateur.",
    "Enfin, des entretiens qualitatifs menés auprès d'utilisateurs potentiels ont mis en évidence un désir d'évasion. Les clients veulent que le produit raconte une histoire. Cette envie d'imaginaire a fortement influencé le choix des textures et des illustrations que nous présentons dans les pages suivantes.",
  ]),
  createTextPage(13, "Concept créatif", [
    "Le concept retenu s'articule autour de l'idée de voyage intérieur. Chaque parfum renvoie à une destination imaginaire, évoquée par des lignes fluides et des couleurs vibrantes. Ce fil conducteur permet de décliner l'identité sur plusieurs supports sans perdre la cohésion globale.",
    "Pour matérialiser cette vision, nous avons développé un système d'illustrations modulaires. Les formes abstraites peuvent se combiner pour créer des paysages stylisés, tandis que la typographie choisie apporte une touche d'élégance. L'ensemble offre un équilibre entre rigueur structurelle et liberté d'interprétation.",
    "Les maquettes réalisées durant cette phase ont validé la pertinence du concept. Elles montrent comment la marque peut se déployer en boutiques, sur le web ou dans des campagnes événementielles, tout en conservant une forte identité narrative.",
  ]),
  createTextPage(14, "Palette de couleurs et typographie", [
    "La palette chromatique repose sur un contraste entre tonalités pastel et accents saturés. Les teintes douces évoquent la crème glacée, tandis que les couleurs vives dynamisent l'ensemble et attirent l'œil sur les informations essentielles. Chaque saveur possède ainsi son propre duo de couleurs.",
    "La typographie principale, aux formes légèrement arrondies, renforce la dimension gourmande du produit. Associée à une police secondaire plus neutre, elle garantit une lecture confortable sur tous les supports. Ce couple typographique assure une hiérarchie visuelle efficace.",
    "Des tests d'impression ont été réalisés pour vérifier la fidélité des couleurs sur différents papiers et supports numériques. Ils ont confirmé que le contraste reste lisible et harmonieux, même dans des conditions d'éclairage variables, ce qui était une priorité pour les points de vente.",
  ]),
  createTextPage(15, "Maquettes et prototypes", [
    "La conception des maquettes a été l'occasion de vérifier l'adéquation entre le concept et les réalités matérielles. Nous avons produit plusieurs séries de prototypes, explorant des formats variés, du pot individuel au bac destiné aux glaciers partenaires.",
    "Chaque maquette a été évaluée en interne selon des critères d'ergonomie, de coût de production et de cohérence graphique. Les versions les plus convaincantes ont ensuite été soumises à un panel restreint de consommateurs afin de recueillir des avis qualitatifs.",
    "Cette étape a révélé l'importance d'un couvercle facilement refermable et d'une surface suffisante pour les mentions légales. Les ajustements réalisés ont amélioré la prise en main du produit tout en préservant l'esthétique générale.",
  ]),
  createTextPage(16, "Tests utilisateurs et retours", [
    "Les tests utilisateurs ont constitué une phase cruciale. Nous avons mis en place des sessions d'observation où les participants manipulaient les emballages et donnaient leurs impressions en temps réel. Les commentaires ont confirmé l'attrait visuel de la marque.",
    "Cependant, plusieurs utilisateurs ont exprimé des réserves sur la lisibilité de certaines informations nutritionnelles. Nous avons donc revu la hiérarchie typographique et augmenté le contraste des textes secondaires pour assurer une compréhension immédiate.",
    "Les retours ont également mis en évidence l'importance d'une communication transparente sur l'origine des ingrédients. En intégrant un pictogramme dédié, nous avons renforcé la confiance du consommateur sans alourdir la mise en page.",
  ]),
  createTextPage(17, "Durabilité et matériaux", [
    "La dimension écologique a été abordée dès le départ. Nous avons opté pour des matériaux recyclables et privilégié des fournisseurs locaux afin de réduire l'empreinte carbone. Cette décision s'inscrit dans une démarche globale de responsabilité.",
    "Des tests de résistance ont été menés pour s'assurer que les emballages supportent les variations de température et d'humidité propres à la chaîne du froid. Les résultats ont orienté le choix d'un carton renforcé, certifié FSC.",
    "Enfin, une réflexion sur la fin de vie du produit a abouti à l'ajout d'indications claires de tri sélectif. Cette initiative vise à encourager les consommateurs à adopter des gestes simples mais essentiels pour limiter les déchets.",
  ]),
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
