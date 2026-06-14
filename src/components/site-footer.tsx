import Link from "next/link";
import { Mail, Phone, MapPin, FileText, FlaskConical } from "lucide-react";

const EMAIL = "anthonysosa44@gmail.com";
const PHONE = "+593 099 582 2812";
const GITHUB = "https://github.com/AnthonySosaL";
const LINKEDIN = "https://www.linkedin.com/in/anthony-sosa-942475187/";
const CV = "https://curricula-fawn.vercel.app/";
const LOCATION = "Pichincha, Ecuador";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.6 18 4.9 18 4.9c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  );
}
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3v9zM6.5 8.3a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zM19 19h-3v-4.7c0-1.1 0-2.5-1.5-2.5S13 13 13 14.2V19h-3v-9h2.9v1.2h.04a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.7V19z" />
    </svg>
  );
}

const links = [
  { href: `mailto:${EMAIL}`, label: EMAIL, sub: "Email", Icon: Mail },
  { href: `tel:${PHONE.replace(/\s/g, "")}`, label: PHONE, sub: "Teléfono", Icon: Phone },
  { href: GITHUB, label: "github.com/AnthonySosaL", sub: "GitHub", Icon: GithubIcon },
  { href: LINKEDIN, label: "anthony-sosa", sub: "LinkedIn", Icon: LinkedinIcon },
  { href: CV, label: "curricula-fawn.vercel.app", sub: "Currículum", Icon: FileText },
];

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1fr_1.3fr]">
        {/* Marca */}
        <div>
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground">
              <FlaskConical className="size-4" />
            </span>
            ATLAS <span className="text-primary">Lab</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Construido por <span className="font-medium text-foreground">Anthony Sosa</span> —
            ingeniero de sistemas · Python · full-stack · IA.
          </p>
          <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="size-3.5" /> {LOCATION}
          </p>
        </div>

        {/* Hablemos */}
        <div>
          <h3 className="text-lg font-semibold tracking-tight">Hablemos</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            ¿Tienes un proyecto en mente o quieres trabajar juntos? Contáctame.
          </p>
          <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {links.map((l) => (
              <Link
                key={l.sub}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border bg-card p-3 transition-colors hover:border-primary/40"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                  <l.Icon className="size-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">{l.sub}</span>
                  <span className="block truncate text-sm font-medium group-hover:text-primary">
                    {l.label}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Anthony Sosa · ATLAS Lab
      </div>
    </footer>
  );
}
