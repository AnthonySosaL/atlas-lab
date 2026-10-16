// URLs públicas del sitio y de los proyectos hermanos (SEO + enlaces cruzados).
export const SITE_URL = "https://atlas-lab-one.vercel.app";
export const PORTFOLIO_URL = "https://curricula-fawn.vercel.app";
export const CERTIS_URL = "https://english-c1.runasp.net";
export const GITHUB_URL = "https://github.com/AnthonySosaL";
export const LINKEDIN_URL = "https://www.linkedin.com/in/anthony-sosa-942475187/";

/** Añade UTM a un enlace saliente para medir el tráfico entre proyectos. */
export function withUtm(url: string, medium = "footer") {
  return `${url}?utm_source=atlas-lab&utm_medium=${medium}&utm_campaign=otros_proyectos`;
}
