import { BotContent } from "@/components/bot-content";
import { getBotForward } from "@/lib/data";

export const metadata = {
  title: "Bot en vivo — ATLAS Lab",
  description: "Forward test en cuenta demo — resultados reales de un bot automatizado.",
};

export default async function BotPage() {
  const data = await getBotForward();
  return <BotContent data={data} />;
}
