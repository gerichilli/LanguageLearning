import fs from "fs/promises";
import path from "path";

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const slug = await params.slug;
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
