# Favicon — 1UP Complexo Esportivo

Pacote completo de favicons gerado a partir da logo oficial da 1UP, alinhado ao brand book (preto `#0D0D0D`, laranja `#FF6200`).

## Arquivos

| Arquivo | Tamanho | Uso |
|---------|---------|-----|
| `favicon.ico` | 16/32/48 (multi-res) | Browsers legacy, bookmark padrão |
| `favicon.svg` | vetorial | Browsers modernos, escala perfeita |
| `favicon-16x16.png` | 16×16 | Aba do browser |
| `favicon-32x32.png` | 32×32 | Aba do browser (Retina) |
| `favicon-48x48.png` | 48×48 | Desktop shortcut |
| `apple-touch-icon.png` | 180×180 | iOS home screen |
| `android-chrome-192x192.png` | 192×192 | Android/PWA |
| `android-chrome-512x512.png` | 512×512 | Android/PWA (splash) |
| `mstile-150x150.png` | 150×150 | Windows tile |
| `site.webmanifest` | — | PWA metadata |
| `browserconfig.xml` | — | Windows tile config |
| `favicon-master-1024.png` | 1024×1024 | Master de referência, não publicar |

## Instalação no site Next.js 15 (App Router)

### 1. Copiar os arquivos

Copie todos os arquivos (exceto `favicon-master-1024.png` e este README) para `/public/` na raiz do projeto:

```
public/
├── favicon.ico
├── favicon.svg
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon-48x48.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── mstile-150x150.png
├── site.webmanifest
└── browserconfig.xml
```

### 2. Declarar no metadata do app/layout.tsx

```ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.siga1up.com.br"),
  title: "1UP Complexo Esportivo — CrossFit, HYROX, Natação e Pilates em Natal/RN",
  description: "Complexo esportivo de 2.000 m² em Capim Macio, Natal/RN.",
  themeColor: "#0D0D0D",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      { rel: "mask-icon", url: "/favicon.svg", color: "#FF6200" },
    ],
  },
};
```

### 3. Alternativa: HTML puro (para qualquer stack)

Se não estiver usando Next.js metadata, adicione isto dentro do `<head>`:

```html
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="msapplication-config" content="/browserconfig.xml">
<meta name="theme-color" content="#0D0D0D">
```

## Validação

Depois de publicar:

1. Abra o site no browser → olhe a aba (deve aparecer o "1UP" em fundo preto).
2. Hard refresh (Ctrl+Shift+R ou Cmd+Shift+R) — browsers cacheiam favicon agressivamente.
3. Teste no mobile: iOS Safari → "Adicionar à Tela de Início" deve mostrar o apple-touch-icon.
4. Ferramenta online pra validar: https://realfavicongenerator.net/favicon_checker

## Notas de design

- **Canvas quadrado preto `#0D0D0D`** com a logo centralizada em ~95% da largura.
- **Texto "COMPLEXO ESPORTIVO" foi removido** do favicon — em tamanhos ≤ 48×48 ele vira linha borrada ilegível e atrapalha o reconhecimento da marca principal.
- Em 16×16 a logo fica compacta mas reconhecível. Em 32×32+ a leitura é clara.
- Cor de fundo idêntica à do site garante continuidade visual entre aba e conteúdo.
