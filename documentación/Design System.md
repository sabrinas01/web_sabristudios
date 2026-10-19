# Design System de Sabri Studios

**Fuente de verdad:** <https://claude.ai/artifact/RV4FVSzBaZLFuKDNCeRWLc> (artifact tipo Design System, mantenido por Sabri; su índice cita la Guía de Marca v1.5 de Notion).

Este documento es una copia de lo que dice ese artifact al 19 de octubre de 2026, para tenerlo a mano en el repo. Si hay diferencias, manda el artifact: actualizá este archivo cuando cambie.

Sabri Studios hace páginas web para emprendedores chicos que hoy venden solo por WhatsApp y redes, y antes hace un diagnóstico de qué necesita el negocio. Todo lo que se construya con este sistema tiene que verse profesional y sentirse cercano.

---

## 1. Fundamentos de contenido

- Escribir como un amigo que sabe del tema: cercano, directo, sin jerga corporativa. "Te ayudo a…" o "Te cuento cómo…", nunca "Le proporcionamos…".
- Voseo rioplatense, nunca "usted". Decir "página web", no "landing page".
- Estructura de los mensajes: el problema que resolvés, por qué vos y no otro, cómo lo hacés, qué consigue la persona.
- Mostrar el proceso y explicar el porqué de cada decisión. Admitir limitaciones y no vender humo.
- Copy validado: "Vamos a diagnosticar qué necesita tu negocio", "No hacemos plantillas, hacemos soluciones", "Tu página web va a traer clientes, no solo visitas".
- Evitar frases que huelen a IA: "sumergite", "potenciá", "blueprint", "revolucionario", "soluciones digitales integrales", "transformamos tu presencia online", "potenciamos tu marca en el ecosistema digital".
- No mencionar desarrollo de software ni tiendas online en comunicación pública ni en precios: son oportunidades todavía sin alcance definido, no servicios que se ofrezcan.
- El diferencial es página web + diagnóstico previo. No competir por precio ni por velocidad.

## 2. Fundamentos visuales

- **Color:** `azul-primario` para logo y headings, `naranja` para CTAs y énfasis, `gris-neutro` de fondo y `texto-fuerte` para el cuerpo. `azul-secundario` solo para elementos interactivos y hover. Máximo 3 colores principales.
- **Tipografía:** todo en Space Mono (monospace, Google Fonts). Máximo 2 pesos por proyecto (400 y 500), nunca 700 o más. Line-height mínimo 1.5 en `body`; `letter-spacing` 0.5px en labels y CTAs.
- **Espaciado:** múltiplos de 8px. Priorizar el aire; evitar layouts cargados de texto.
- **Bordes:** `radius-sm` (4px) es el radio por defecto de la web; `radius-md` (8px) en cards, botones e inputs; `radius-lg` (12px) en elementos destacados; `radius-none` en componentes tech. Nada de pills salvo que sea intencional.
- **Sombras:** sutiles, sin gradientes ni sombras excesivas. Si se ve muy clara, es demasiada.
- **Fotografía:** minimalista y limpia, con personas reales (emprendedores, no modelos) sobre fondo neutro.
- **Ilustración y gráficos:** formas geométricas simples, flat, máximo 3 colores. Azul para datos principales y naranja para destacados.

## 3. Tokens

### Color de marca

| Token | Valor | Uso |
| --- | --- | --- |
| `azul-primario` | `#1E3A5F` | Logo, headings y elementos clave. Fondo de la versión negativa del logo. |
| `naranja` | `#D97A3C` | Acentos, CTAs, links y énfasis. |
| `naranja-hover` | `#C66A2E` | Hover del botón primario. |
| `naranja-texto` | `#B05218` | Naranja para texto chico sobre fondo claro (links y hovers): 5.16:1 sobre blanco y 4.66:1 sobre `gris-neutro`. No es parte de la guía original de la marca; es una variante más oscura solo para texto. No usar como relleno ni sobre `azul-primario` (2.23:1). |
| `azul-secundario` | `#4A90D9` | Elementos interactivos y hover. |
| `gris-neutro` | `#F5F3EF` | Fondo de página, cards, inputs y botón secundario. |
| `blanco` | `#FFFFFF` | Fondo alternativo de cards. |
| `texto-fuerte` | `#12202E` | Cuerpo de texto principal. |
| `gris-claro` | `#E8E4D8` | Borde de cards y hover del botón secundario (decorativo). |
| `gris-medio` | `#D0CCC0` | Borde de inputs. |
| `gris-oscuro` | `#CCCCCC` | Íconos deshabilitados. |
| `placeholder` | `#999999` | Placeholder de inputs. |

**Contraste (ojo con el naranja):**

- `azul-primario` sobre `gris-neutro`: 10.4:1. `texto-fuerte` sobre `gris-neutro`: 14.9:1.
- `naranja` sobre `gris-neutro`: 2.79:1; sobre blanco: 3.09:1; sobre `azul-primario`: 3.72:1. Está por debajo de 4.5:1, así que sirve para rellenos y texto de 24px o más, no para texto chico. Es el valor exacto de la marca y no se retoca.
- Texto `gris-neutro` sobre `naranja-hover`: 3.44:1.
- `naranja-texto` (`#B05218`) sobre `gris-neutro`: 4.66:1 y sobre blanco: 5.16:1. Es la opción para texto chico en naranja.
- `azul-secundario` sobre `gris-neutro`: 3.02:1. Usarlo en bordes, íconos y rellenos, no en texto chico.
- `gris-medio` sobre `gris-neutro`: 1.45:1 y `placeholder`: 2.57:1. Son valores exactos de la marca; el estado focus del input lo marca el naranja.

### Tokens de la web (`tailwind.config.js`)

El design system también incluye la paleta tipo Material que ya está en `tailwind.config.js` (`surface`, `on-surface`, `primary`, `secondary`, `tertiary`, `outline`, `error`, etc.), con nombres y valores tal cual están en el repo. Sirven para respetar lo que ya hay en el sitio; **para diseño nuevo, preferir los tokens de marca de arriba**. La lista completa está en el artifact (`project/tokens.json`).

### Tipografía (Space Mono)

| Estilo | Tamaño | Peso | Line-height | Uso |
| --- | --- | --- | --- | --- |
| `h1` | 48px | 500 | 1.2 (letter-spacing -0.02em) | Hero y títulos principales. Color `azul-primario`. |
| `h1-mobile` | 36px | 500 | 1.2 | Ídem en mobile. |
| `h2` | 32px | 500 | 1.3 | Títulos de sección. Color `azul-primario`. |
| `h3` | 24px | 500 | 1.4 | Subtítulos y apartados. |
| `body` | 16px | 400 | 1.5 | Párrafos. Color `texto-fuerte`. |
| `small` | 14px | 400 | — | Labels y texto chico. |
| `caption` | 12px | 400 | 1.4 | Textos auxiliares y aclaraciones. |
| `label-cta` | 14px | 500 | 1 (letter-spacing 0.5px) | Botones y llamados a la acción. |

### Espaciado

| Token | Valor | Uso |
| --- | --- | --- |
| `space-1` | 8px | Micro, entre línea y texto. |
| `space-2` | 16px | Padding dentro de componentes. |
| `space-3` | 24px | Padding de cards y márgenes entre secciones chicas. |
| `space-4` | 32px | Márgenes entre secciones medianas. |
| `space-5` | 40px | Márgenes entre secciones. |
| `space-6` | 48px | Márgenes entre secciones grandes. |
| `space-7` | 56px | Márgenes entre secciones grandes. |
| `space-8` | 64px | Márgenes entre secciones grandes. |
| `space-section` | 80px | Espaciado `section` de la web. |

### Radios

| Token | Valor | Uso |
| --- | --- | --- |
| `radius-none` | 0 | Componentes tech o contrastes nítidos. |
| `radius-sm` | 4px | Radio por defecto de la web. |
| `radius-md` | 8px | Cards, botones e inputs. |
| `radius-lg` | 12px | Elementos destacados. |

### Sombras

| Token | Valor | Uso |
| --- | --- | --- |
| `shadow-leve` | `0 2px 8px rgba(30, 58, 95, 0.08)` | Cards. |
| `shadow-media` | `0 4px 12px rgba(30, 58, 95, 0.12)` | Hover de botones. |
| `shadow-fuerte` | `0 8px 24px rgba(30, 58, 95, 0.16)` | Dropdowns y modals. |

## 4. Iconografía

- Tabler Icons, estilo outline.
- Colores: `azul-primario` (principal), `naranja` (acento), `azul-secundario` (secundario) y `gris-oscuro` (deshabilitado).

## 5. Logo

- **Isotipo:** un cursor naranja apuntando a un pin azul (círculo + triángulo). Tamaño mínimo 32×32px. Va en favicon, avatar, app icon y marca de agua.
- **Logotipo horizontal:** isotipo + "Sabri Studios", ratio ~3:1. Tamaño mínimo 120×40px. Va en header, hero, documentos y portadas de redes.
- **Variantes autorizadas:** Full Color (web, redes), Monocromática (impresión en blanco y negro, documentos formales), Negativa (sobre fondo `azul-primario`) y Outline (bordes y patrones).
- Dejar alrededor un espacio libre de al menos el 20% de su ancho.
- No estirar, deformar, rotar ni recolorear fuera de las variantes. Sin sombras, gradientes ni efectos. No combinar con otras marcas sin aprobación.
- Los SVG están en el grupo Logos del artifact: `favicon-web`, `isotipo-*` y `logotipo-horizontal-*` en las cuatro variantes.

## 6. Componentes

- **Botón primario:** fondo `naranja`, texto `gris-neutro`, padding 12px 24px, `radius-md`, peso 500, hover `naranja-hover`.
- **Botón secundario:** fondo `gris-neutro`, texto `azul-primario`, borde 1px `azul-primario`, `radius-md`, hover con fondo `gris-claro`.
- **Botón terciario (link):** sin fondo ni borde, texto `naranja`, peso 500, subrayado solo en hover.
- **Card:** fondo `gris-neutro` o `blanco`, borde 1px `gris-claro`, `radius-md`, padding `space-3`, `shadow-leve`.
- **Input:** fondo `gris-neutro`, borde 1px `gris-medio`, `radius-md`, padding 12px 16px, placeholder `placeholder`. En focus el borde pasa a `naranja`, con una sombra azul suave.
- **Links en texto:** `naranja`, y en hover `azul-primario`.

## 7. Aplicaciones

- **Sitio web:** el hero lleva el logotipo horizontal, la propuesta de valor y el CTA primario. El footer lleva el logo chico, links y redes. Las secciones son proceso (diagnóstico → página), casos y sobre mí.
- **Instagram (@sabristudios):** posts con fondo `azul-primario` y acentos `naranja`, mostrando el detrás de escena del proceso. En las stories, el isotipo como marca de agua sutil. Bio: "Desarrollo web para emprendedores, profesionales y negocios / Diagnóstico + web | Online o presencial con cita en Pocito SJ".
- **Stories destacadas:** fondo `azul-primario`, títulos en `naranja`, línea divisoria blanca y texto blanco. Las de FAQ van sobre `gris-neutro`, con la pregunta en `naranja` y la respuesta en `azul-primario`. Tipografía Space Mono.
- **LinkedIn:** banner con el logotipo horizontal sobre fondo azul. Posts educativos que muestren el proceso de diagnóstico, con azul y naranja en lo visual.
- **Reels:** el cursor apuntando al pin como hook visual, mucho `naranja` para destacar, formato vertical con captions sobre fondo de marca.
- **Email:** header con logo chico y "Sabri Studios", botones primarios naranjas, firma con isotipo, nombre y redes.
- **Presentaciones:** la slide de título lleva el logotipo horizontal sobre `azul-primario`. Las de contenido van sobre blanco con acentos azul y naranja, máximo 5 bullets.
- **Documentos:** header con logo chico y nombre del documento, títulos en `azul-primario` a 24px, `naranja` para puntos clave, footer con isotipo y número de página.
- **Tarjetas de presentación:** frente con logo, nombre y "Página Web + Diagnóstico"; reverso con mail, teléfono y sitio. Cardstock 300gsm, full color.

---

## 8. Diferencias con el sitio actual

Revisado el 19 de octubre de 2026 (actualizado en la v1.36 del LEAN PRD).

- **Tipografía:** resuelta. El design system manda: todo en Space Mono. El sitio ya cumple (`tailwind.config.js` y las 6 páginas cargan solo Space Mono). La mención anterior de Space Grotesk en el LEAN PRD estaba desactualizada y se corrigió.
- **Pesos:** resuelto en v1.35. El sistema admite solo 400 y 500, nunca 700 o más; el sitio ya no usa `font-bold` ni `font-semibold` y carga `wght@400;500`.
- **Botones y naranja de hover:** resuelto en v1.36. `naranja-hover` vale `#C66A2E`, el botón primario lleva texto `gris-neutro` y el secundario fondo `gris-neutro`, borde de 1px y hover `gris-claro`.
- **Links de texto (v1.43):** el sistema los define en `naranja`, pero con 2.79:1 no pasan para texto chico. El sitio usa `azul-primario` subrayado, con hover `azul-secundario`. El `naranja` queda para texto de 24px o más, rellenos e íconos.
- **Contraste del naranja:** el botón primario (texto `gris-neutro` sobre `naranja`) no llega a 4.5:1. Es valor de marca, pero conviene saberlo para el texto chico.

**Pendiente de aplicar:**

1. **Sombras:** `shadow-media` ya está (v1.38), solo en lo clickeable. Falta `shadow-fuerte`, que el sitio todavía no necesita porque no tiene dropdowns ni modals.
2. **Logo:** resuelto en v1.49. Los SVG están en `imagenes/` y el sitio usa `logotipo-horizontal-full-color.svg` en header y footer, y `favicon-web.svg` como favicon (con `favicon-32.png` de respaldo). El texto "Sabri Studios" de los logotipos está convertido a trazados en Space Mono, así que se ve igual en todos los dispositivos. Quedan en JPG a propósito `og:image`, `twitter:image` y el `logo` del JSON-LD, porque redes y buscadores no siempre aceptan SVG.

**Resuelto en v1.37:**

- **Íconos:** el sitio usa Tabler Icons outline, como máscaras SVG propias en `src/input.css` (clases `ti ti-nombre`), sin fuente externa. Si hace falta un ícono nuevo, hay que sumar su máscara ahí.
- **Nombres de tokens:** las clases usan `azul-primario`, `naranja`, `naranja-hover`, `azul-secundario`, `gris-neutro`, `gris-claro`, `gris-medio` y `texto-fuerte`. Los tokens tipo Material de la web quedaron como estaban.
