# Guia de imagens — 1UP Complexo Esportivo

Fotos reais da estrutura da 1UP já estão conectadas aos componentes. Este documento lista o mapeamento atual e serve de referência caso novas fotos substituam as existentes.

## Mapeamento atual

| Slot no site | Arquivo em `public/` | Origem (pasta Editadas/) |
|---|---|---|
| Hero (fundo full-bleed) | `hero/hero-main.png` | `1.png` — fachada ao entardecer |
| Modalidade: CrossFit | `modalidades/crossfit.png` | `7.png` — box com logo 1UP no chão |
| Modalidade: HYROX | `modalidades/hyrox.png` | `40.png` — box de CrossFit amplo |
| Modalidade: Natação Adulto | `modalidades/natacao-adulto.png` | `59.png` — piscina em plano frontal |
| Modalidade: Natação Infantil | `modalidades/natacao-infantil.png` | `32.png` — piscina vista de cima |
| Modalidade: Hidroginástica | `modalidades/hidroginastica.png` | `59.png` *(reuso do pool)* |
| Modalidade: Pilates | `modalidades/pilates.png` | `8.png` — reformer em close |
| Galeria 01 — Box CrossFit | `gallery/01-box-crossfit.png` | `40.png` *(reuso da box)* |
| Galeria 02 — Piscina | `gallery/02-piscina.png` | `32.png` *(reuso do pool)* |
| Galeria 03 — Estúdio Pilates | `gallery/03-estudio-pilates.png` | `11.png` — estúdio wide |
| Galeria 04 — Ambiente 1UP | `gallery/04-area-hyrox.png` | `38.png` — entrada com grafite e plantas |
| História | `historia/equipe.png` | `2.png` — recepção com escadas laranja |

> **Reuso**: três ativos aparecem em mais de um slot — `59.png` (piscina), `32.png` (piscina) e `40.png` (box). Para remover redundância, enviar fotos específicas para:
> - Hidroginástica com contexto de aula em grupo na piscina;
> - HYROX com estações (skierg, sled, wallball) se houver;
> - Uma segunda angulação da piscina (underwater ou bordas).

## Requisitos gerais para novas fotos

- **Formato:** `.jpg` (preferencialmente) ou `.webp`. `.png` funciona mas é mais pesado — o Next/Image otimiza automaticamente no runtime, então na prática vale a pena.
- **Qualidade:** 80-85.
- **Peso alvo:** até ~400KB por imagem grande. Use `squoosh.app` ou `tinypng.com`.
- **Modalidades:** vertical (aspect 4:5), ~800×1000.
- **Galeria:** horizontal (aspect 4:3), ~1600×1200.
- **Hero:** horizontal, 1920×1080 ou maior.
- **História:** vertical (aspect 4:5), ~1200×1500.

## Como substituir

1. Coloque o arquivo novo em `public/<slot>/<nome-exato>`.
2. Se mudar o nome ou extensão, edite a constante correspondente no componente:
   - `app/components/Hero.tsx` → `HERO_IMAGE`
   - `app/components/Diferenciais.tsx` → array `MODALIDADES`
   - `app/components/Historia.tsx` → `HISTORIA_IMAGE`
   - `app/components/Gallery.tsx` → array `PHOTOS`
3. O `next/image` detecta e reotimiza no próximo `npm run dev`.
