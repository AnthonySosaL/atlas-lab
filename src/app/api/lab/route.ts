import { NextResponse } from "next/server";
import { spawn } from "child_process";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// El motor vive en tu PC. Esta ruta SOLO actua en desarrollo (localhost);
// en produccion (Vercel) responde 403 y no ejecuta nada.
const PY = "D:/ATLAS/envs/atlas/python.exe";
const CWD = "D:/ATLAS";
const LOG = path.join(process.cwd(), "public", "data", "lab.log");

export async function POST(req: Request) {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "localhost only" }, { status: 403 });
  }
  let action = "";
  try {
    action = (await req.json())?.action ?? "";
  } catch {
    /* sin body */
  }

  if (action === "start") {
    // captura toda la salida (incluido cualquier traceback) a public/data/lab.log
    // -u = sin buffer, para que el log se vea EN VIVO en la mini-consola.
    const out = fs.openSync(LOG, "w");
    const p = spawn(PY, ["-u", "-m", "lab.runner", "run"], {
      cwd: CWD, detached: true, stdio: ["ignore", out, out],
    });
    p.unref();
    return NextResponse.json({ ok: true, state: "running" });
  }
  if (action === "stop") {
    const p = spawn(PY, ["-m", "lab.runner", "stop"], { cwd: CWD, stdio: "ignore" });
    p.unref();
    return NextResponse.json({ ok: true, state: "stopped" });
  }
  return NextResponse.json({ error: "bad action" }, { status: 400 });
}
