# LopMon Website

Landing page de **LopMon Soluciones Tecnológicas** — Astro + Tailwind, lista para desplegar.

## Requisitos

- Node.js ≥ 22.12

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321).

## Antes de publicar

1. **Dominio** — Actualiza `site` en `astro.config.mjs`, `SITE.url` en `src/consts.ts` y la URL del sitemap en `public/robots.txt`.
2. **Contacto** — En `src/consts.ts`: `email` y, cuando lo tengas, `whatsapp` (formato internacional sin `+`, p. ej. `34612345678`).
3. **Legal** — Completa los campos entre corchetes en `/aviso-legal` y `/privacidad` (titular, NIF/CIF, domicilio).

## Build y preview

```bash
npm run build
npm run preview
```

La salida estática queda en `dist/`.

## Deploy

Compatible con cualquier hosting estático (Cloudflare Pages, Netlify, Vercel…): build `npm run build`, output `dist/`.

## Estructura

```
src/
  components/   # Header, Hero, Services, ContactForm, Footer
  layouts/      # BaseLayout (SEO + JSON-LD)
  pages/        # index, aviso-legal, privacidad
  consts.ts     # Datos del negocio
public/         # favicon, robots.txt, og-image
```
