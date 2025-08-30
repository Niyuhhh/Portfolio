const BASE_URL = "https://res.cloudinary.com/dakxjcdyp/image/upload/";

export const WIDTHS = [480, 768, 1080, 1920];

export const cloudinaryUrl = (path: string) => {
  const src = `${BASE_URL}f_auto,q_auto/${path}`;
  const srcSet = WIDTHS.map(
    (w) => `${BASE_URL}f_auto,q_auto,w_${w}/${path} ${w}w`
  ).join(", ");
  return { src, srcSet };
};
