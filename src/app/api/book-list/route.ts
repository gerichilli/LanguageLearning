import fs from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const json = await fs.readFile(path.join(process.cwd(), "public", "data", "book-list.json"), "utf8");
    return new Response(json, {
      headers: { "content-type": "application/json", "cache-control": "no-store" },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Not Found" }), {
      status: 404,
      headers: { "content-type": "application/json" },
    });
  }
}
