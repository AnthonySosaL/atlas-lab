import Link from "next/link";
import { Mail, FlaskConical } from "lucide-react";

const GITHUB = "https://github.com/AnthonySosaL";
const EMAIL = "anthonysosa44@gmail.com";
// LinkedIn pendiente: cuando Anthony pase su URL, ponerla aqui y aparece como primer link.
const LINKEDIN = ""; // p.ej. "https://www.linkedin.com/in/tu-usuario"

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
  ...(LINKEDIN ? [{ href: LINKEDIN, label: "LinkedIn", Icon: LinkedinIcon }] : []),
  { href: GITHUB, label: "GitHub", Icon: GithubIcon },
  { href: `mailto:${EMAIL}`, label: "Email", Icon: Mail },
];

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground">
              <FlaskConical className="size-4" />
            </span>
            ATLAS <span className="text-primary">Lab</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Construido por <span className="font-medium text-foreground">Anthony Sosa</span> —
            ingeniero de sistemas · Python · full-stack · IA.
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            ¿Un proyecto en mente? Escríbeme y conversamos.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-muted"
            >
              <l.Icon className="size-4" />
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Anthony Sosa · ATLAS Lab · datos generados desde el laboratorio
      </div>
    </footer>
  );
}
