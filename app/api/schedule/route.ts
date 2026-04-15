import { getActivitiesSchedule } from "@/app/lib/evo";

export async function GET() {
  try {
    const data = await getActivitiesSchedule();
    return Response.json(data);
  } catch (error) {
    console.error("[/api/schedule]", error);
    return Response.json({ error: "Falha ao buscar horários" }, { status: 500 });
  }
}
