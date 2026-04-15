import { getMemberships } from "@/app/lib/evo";

export async function GET() {
  try {
    const data = await getMemberships();
    return Response.json(data);
  } catch (error) {
    console.error("[/api/plans]", error);
    return Response.json({ error: "Falha ao buscar planos" }, { status: 500 });
  }
}
