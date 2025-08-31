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

export const portfolioPages = [
  portfolioCover,
  page6,
  page7,
  page8,
  page9,
  page10,
  page11,
  page12,
  page13,
  page14,
  page15,
  page16,
  page17,
  page18,
  page19,
  page20,
  page21,
]
