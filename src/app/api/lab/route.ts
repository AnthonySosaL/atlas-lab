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

// ejecuta python y captura stdout (para parse/test, que devuelven un JSON)
function runPy(args: string[]): Promise<string> {
  return new Promise((resolve) => {
    const p = spawn(PY, args, { cwd: CWD });
    let out = "";
    p.stdout.on("data", (d) => (out += d));
    p.on("close", () => resolve(out));
    p.on("error", () => resolve(""));
  });
}

function lastJson(out: string): unknown {
  const line = out.trim().split("\n").filter(Boolean).pop() || "{}";
  try {
    return JSON.parse(line);
  } catch {
    return { error: "salida no valida del motor" };
  }
}

export async function POST(req: Request) {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "localhost only" }, { status: 403 });
  }
  let body: { action?: string; text?: string; spec?: unknown } = {};
  try {
    body = await req.json();
  } catch {
    /* sin body */
  }
  const action = body.action ?? "";

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
  if (action === "parse") {
    // interpreta texto -> spec (sin probar)
    const out = await runPy(["-m", "lab.runner", "parse", body.text ?? ""]);
    return NextResponse.json(lastJson(out));
  }
  if (action === "test") {
    // prueba UN spec por el triple test
    const out = await runPy(["-m", "lab.runner", "test", JSON.stringify(body.spec ?? {})]);
    return NextResponse.json(lastJson(out));
  }
  return NextResponse.json({ error: "bad action" }, { status: 400 });
}
