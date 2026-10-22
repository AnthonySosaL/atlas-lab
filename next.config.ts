import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";

/** Enlaces cortos /e/<número> → /exp/<id> (para decirlos en los videos). La query (utm_*) se conserva. */
function experimentShortLinks() {
  const file = path.join(process.cwd(), "public", "data", "experiments.json");
  const rows = JSON.parse(fs.readFileSync(file, "utf8")) as { id: string; v: number | null }[];
  return rows
    .filter((r) => r.v !== null)
    .map((r) => ({ source: `/e/${r.v}`, destination: `/exp/${r.id}`, permanent: false }));
}

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return experimentShortLinks();
  },
};

export default nextConfig;
