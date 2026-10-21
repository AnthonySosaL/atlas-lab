import { BotContent } from "@/components/bot-content";
import { getBotForward } from "@/lib/data";

export const metadata = {
  title: "Bot (experimento 1) — ATLAS Lab",
  description: "Forward test en cuenta demo, cerrado el 2026-08-10 — resultados finales de un bot automatizado.",
};

export default async function BotPage() {
  const data = await getBotForward();
  return <BotContent data={data} />;
}
