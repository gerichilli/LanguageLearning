// src/app/api/book-detail/[slug]/route.ts

import fs from "fs/promises";
import path from "path";

import { NextRequest } from "next/server";

export async function GET(
  _req: NextRequest,
  ctx: { params: Promise<{ slug: string }> } // 👈 params là Promise
) {
  const { slug } = await ctx.params; // 👈 await params

  try {
    const filePath = path.join(process.cwd(), "public", "data", `${slug}.json`);
    const json = await fs.readFile(filePath, "utf8");

    return new Response(json, {
      headers: {
        "content-type": "application/json",
        "cache-control": "no-store",
      },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Not Found" }), {
      status: 404,
      headers: { "content-type": "application/json" },
    });
  }
}
