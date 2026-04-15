/**
 * Cliente server-side da EVO APP API.
 * Este módulo NUNCA é importado no frontend — usa variáveis de ambiente sem NEXT_PUBLIC_.
 */

const EVO_API_URL = process.env.EVO_API_URL;
const EVO_API_TOKEN = process.env.EVO_API_TOKEN;

// Basic Auth: slug:apikey em Base64
function getHeaders(): HeadersInit {
  const credentials = Buffer.from(`1upcomplexoesportivo:${EVO_API_TOKEN ?? ""}`).toString("base64");
  return {
    Authorization: `Basic ${credentials}`,
    "Content-Type": "application/json",
  };
}

export interface EvoMembership {
  id: number;
  name: string;
  value: number;            // valor total do contrato
  duration: number;         // duração em meses
  description?: string;
  activityGroups: string[]; // nomes dos grupos de atividade (ex: ["CROSSFIT"])
  differentials: string[];  // diferenciais de marketing
}

export interface EvoActivitySchedule {
  activityId: number;
  name: string;
  weekDay: string;
  startTime: string;
  endTime?: string;
  instructor?: string;
}

// Normaliza o objeto bruto da API para nossa interface
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeMembership(p: any): EvoMembership {
  return {
    id: p.idMembership ?? p.serviceId ?? 0,
    name: p.nameMembership ?? p.name ?? "",
    value: p.value ?? 0,
    duration: p.duration ?? 1,
    description: p.description ?? undefined,
    activityGroups: Array.isArray(p.activitiesGroups)
      ? p.activitiesGroups.map((g: any) => g?.name).filter(Boolean)
      : [],
    differentials: Array.isArray(p.differentials)
      ? p.differentials.map((d: any) => d?.title).filter(Boolean)
      : [],
  };
}

async function fetchMembershipPage(skip: number): Promise<unknown[]> {
  const res = await fetch(
    `${EVO_API_URL}/api/v1/membership?take=50&skip=${skip}`,
    { headers: getHeaders(), cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error(`EVO API /v1/membership (skip=${skip}): ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.memberships)) return data.memberships;
  if (Array.isArray(data?.services)) return data.services;
  if (Array.isArray(data?.items)) return data.items;
  return [];
}

export async function getMemberships(): Promise<EvoMembership[]> {
  const [page1, page2, page3] = await Promise.all([
    fetchMembershipPage(0),
    fetchMembershipPage(50),
    fetchMembershipPage(100),
  ]);

  const seen = new Set<number>();
  const combined = [...page1, ...page2, ...page3].filter((p: any) => {
    const id = p?.idMembership;
    if (id == null || seen.has(id)) return false;
    seen.add(id);
    return true;
  });

  return combined.map(normalizeMembership);
}

export async function getActivitiesSchedule(): Promise<EvoActivitySchedule[]> {
  const res = await fetch(`${EVO_API_URL}/api/v1/activities/schedule`, {
    headers: getHeaders(),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`EVO API /activities/schedule: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.schedules)) return data.schedules;
  if (Array.isArray(data?.activities)) return data.activities;
  if (Array.isArray(data?.items)) return data.items;
  return [];
}
