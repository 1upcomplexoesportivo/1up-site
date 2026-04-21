export const WA_NUMBER = "5584981827107";
export const WA_BASE = `https://wa.me/${WA_NUMBER}`;

export const WA_MESSAGES = {
  experimental:
    "Olá! Gostaria de agendar uma aula experimental na 1UP Complexo Esportivo.",
  recepcao:
    "Olá! Gostaria de falar com a recepção sobre os planos da 1UP.",
  visita:
    "Olá! Gostaria de agendar uma visita à 1UP Complexo Esportivo.",
  contato:
    "Olá! Tenho interesse em conhecer a 1UP Complexo Esportivo.",
} as const;

export type WaMessageKey = keyof typeof WA_MESSAGES;

export function waLink(key: WaMessageKey = "experimental"): string {
  return `${WA_BASE}?text=${encodeURIComponent(WA_MESSAGES[key])}`;
}
