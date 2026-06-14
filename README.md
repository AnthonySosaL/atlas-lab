# ATLAS Lab — Web

Frontend del laboratorio cuantitativo **ATLAS**: 57 experimentos honestos buscando alpha de
trading retail, con validación rigurosa (out-of-sample temporal, señales ejecutables, Deflated
Sharpe). Pieza de portafolio que acompaña a [atlas-quant-lab](https://github.com/AnthonySosaL/atlas-quant-lab).

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** + componentes estilo **shadcn/ui**
- **lightweight-charts** (TradingView) para las curvas de equity
- **Framer Motion** para animaciones · **next-themes** (tema claro/oscuro)

## Cómo funciona (datos)

El laboratorio es Python. Un script local exporta los experimentos a JSON estático que este
frontend renderiza — encaja perfecto con el hosting estático de Vercel:

```
experiments/ + ROADMAP.md  ──►  src/export_web.py  ──►  web/public/data/*.json  ──►  Next.js
```

Para regenerar los datos (desde el repo del laboratorio):

```bash
python src/export_web.py
```

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Deploy en Vercel

Importar este repo en Vercel (framework Next.js, detección automática). El contenido de
`public/data/` se sirve estático; no requiere base de datos.

---

Diseño y arquitectura: tema rojo claro/oscuro, navegación responsive, gráficos centralizados en
un único componente reutilizable (`EquityChart`) para mejorarlos como en TradingView.
