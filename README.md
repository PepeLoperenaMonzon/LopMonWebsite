# LopMon Website

Landing page de **LopMon Soluciones Tecnológicas** — Astro + Tailwind, lista para desplegar.

## Requisitos

- Node.js ≥ 22.12

## Desarrollo

```bash
cp .env.example .env
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321).

## Antes de publicar

1. **Dominio** — Actualiza `site` en `astro.config.mjs`, `SITE.url` en `src/consts.ts` y la URL del sitemap en `public/robots.txt`.
2. **Email** — Cambia `SITE.email` en `src/consts.ts`.
3. **Formulario** — Crea un formulario en [Formspree](https://formspree.io), copia el ID (`f/xxxxxx`) a `.env`:

   ```bash
   PUBLIC_FORMSPREE_ID=xxxxxx
   ```

4. **Legal** — Completa los campos entre corchetes en `/aviso-legal` y `/privacidad` (titular, NIF/CIF, domicilio).

## Build y preview

```bash
npm run build
npm run preview
```

La salida estática queda en `dist/`.

## Deploy

Compatible con cualquier hosting estático:

- **Cloudflare Pages / Netlify / Vercel**: conecta el repo, build command `npm run build`, output `dist`.
- Añade `PUBLIC_FORMSPREE_ID` como variable de entorno en el panel del hosting.

## Estructura

```
src/
  components/   # Header, Hero, Services, ContactForm, Footer
  layouts/      # BaseLayout (SEO + JSON-LD)
  pages/        # index, aviso-legal, privacidad
  consts.ts     # Datos del negocio
public/         # favicon, robots.txt, og-image
```
