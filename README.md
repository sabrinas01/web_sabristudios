# Sabri Studios — Landing Page

Landing page de **Sabri Studios**, un estudio que diseña y desarrolla páginas web para pequeños negocios y emprendimientos de San Juan, Argentina. El objetivo de la página es convertir visitantes en consultas por WhatsApp para una demo gratuita.

🔗 Producción: [sabristudios.vercel.app](https://sabristudios.vercel.app/)

## Stack

- **HTML puro** (`index.html`), sin frameworks de JavaScript.
- **Tailwind CSS**, compilado con un build propio (no CDN, no JIT en el navegador).
- **Vercel** para el hosting y el deploy.
- **Vercel Analytics**, Google Analytics y Microsoft Clarity para métricas de uso.

## Estructura del proyecto

```
index.html              → toda la landing (una sola página)
src/input.css           → entrada de Tailwind (@tailwind base/components/utilities)
dist/output.css         → CSS compilado que carga index.html (generado, no se edita a mano)
tailwind.config.js      → paleta de colores, tipografías, espaciados y demás tokens de diseño
imagenes/               → fotos, logos e íconos del sitio
manifest.json           → configuración PWA (ícono, colores, nombre para "instalar" el sitio)
robots.txt / sitemap.xml / llms.txt → archivos para buscadores y crawlers
vercel.json             → configuración de deploy y headers de seguridad en Vercel
documentación/LEAN PRD.md → PRD del producto: alcance, requisitos, historias de usuario y el historial de versiones de cada cambio hecho en la landing
```

## Cómo correrlo en local

Necesitás [Node.js](https://nodejs.org/) instalado.

```bash
# 1. Instalar dependencias
npm install

# 2. Compilar el CSS de Tailwind
npm run build

# 3. Levantar un servidor local para ver la página
python -m http.server 8000
# (o npx serve, o la extensión "Live Server" de VS Code)
```

Después abrís `http://localhost:8000/index.html` en el navegador.

### ⚠️ Importante sobre Tailwind

Este proyecto **no** usa Tailwind por CDN ni compila en tiempo real en el navegador. `index.html` carga `dist/output.css`, que se genera corriendo `npm run build` (definido en `package.json`).

Si agregás o cambiás una clase de Tailwind con **valor arbitrario** (por ejemplo `h-[300px]`, `aspect-[2912/1440]`), esa clase no va a tener ningún efecto hasta que corras `npm run build` de nuevo. El síntoma típico es que el elemento se ve roto (sin alto, colapsado) y no aparece ningún error en la consola — así que ante cualquier cambio de estilos, correr el build es el primer paso antes de dar por terminado el cambio.

## Flujo de trabajo con Git

- **`master`** es la rama de producción: lo que está ahí es lo que ve la gente en `sabristudios.vercel.app`.
- **`develop`** es la rama de trabajo: todos los cambios nuevos se hacen y se prueban acá antes de mergear a `master`.

## Documentación

- [`documentación/LEAN PRD.md`](documentación/LEAN%20PRD.md): el único PRD del proyecto (nació de fusionar el PRD original con el LEAN PRD). Incluye el objetivo de negocio, el user persona, la propuesta de valor, el alcance, los requisitos funcionales y no funcionales, las historias de usuario, y — muy importante — un **historial de versiones** donde queda registrado cada cambio hecho en la landing, con el detalle de qué se hizo y por qué.
