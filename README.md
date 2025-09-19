# Dobleg Premoldeados — Pro Landing (Next.js 14)

Nueva landing profesional con Next.js (App Router), TypeScript y Tailwind.

## Stack
- Next.js 14 (App Router, Metadata API)
- TypeScript
- Tailwind CSS
- SEO: metadata + OpenGraph/Twitter + JSON-LD
- Sitemap y robots dinámicos

## Assets
Copia tus imágenes al directorio público:

```
pro-landing/public/img/
```

Puedes copiar desde el proyecto original:
- Origen: `../img/*`
- Destino: `pro-landing/public/img/*`

## Scripts
- `npm install`
- `npm run dev` (http://localhost:3000)
- `npm run build` / `npm start`

## SEO/Perf
- `next/image` con `priority` para LCP (hero)
- Fuente Inter con `display=swap`
- Metadata canónica y hreflang
- JSON-LD LocalBusiness
- Sitemap/robots automáticos

## Deploy
- Vercel o Netlify (recomendado Vercel para Next.js)
- Dominio: configura `metadataBase` en `app/layout.tsx` si cambia

## Notas
- El sitio actual queda intacto en la raíz. Esta nueva app vive en `pro-landing/`.
- Si deseas migrar textos/estilos adicionales, indícame y los integro.
