import { GITHUB_URL, LINKEDIN_URL, PORTFOLIO_URL, SITE_URL } from "@/lib/site";

// Datos estructurados (schema.org) del sitio y su autor, para buscadores.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ATLAS Lab",
  url: SITE_URL,
  inLanguage: ["es", "en", "pt"],
  description:
    "Laboratorio cuantitativo que prueba estrategias de trading con out-of-sample, Deflated Sharpe y Monte Carlo, y publica todos los resultados.",
  author: {
    "@type": "Person",
    name: "Anthony Sosa",
    url: PORTFOLIO_URL,
    sameAs: [GITHUB_URL, LINKEDIN_URL],
  },
};

export function SiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
