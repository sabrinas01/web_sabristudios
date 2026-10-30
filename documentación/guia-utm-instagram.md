# Guía de links con UTM para Instagram

Cada link que ponga hacia la web lleva etiquetas al final para saber **qué pieza trajo la visita**. Sin eso, todo llega como `l.instagram.com` y no se distingue la bio de una story o un reel.

La web ya las lee y las guarda mientras dura la visita (`medicion.js` y los scripts de cada página). Se ven en:

- **Clarity:** filtros de grabaciones y mapas de calor por `utm_medium`, `utm_campaign`, `utm_content`, `traffic_source` y `navegador_interno`.
- **Google Analytics 4:** Adquisición de tráfico (fuente / medio / campaña) y el parámetro `traffic_source` de cada evento de contacto.

## Estructura

```
https://web-sabristudios.vercel.app/?utm_source=instagram&utm_medium=MEDIO&utm_campaign=CAMPAÑA&utm_content=PIEZA
```

| Parámetro | Qué es | Valores a usar |
|---|---|---|
| `utm_source` | Siempre el canal | `instagram` |
| `utm_medium` | Dónde está el link | `bio`, `story`, `reel`, `carrusel`, `dm` |
| `utm_campaign` | El tema o la serie | `demo_gratuita`, `proyectos`, `proceso` |
| `utm_content` | La pieza puntual (opcional) | `2026_11_05_mombe`, `carrusel_errores_web` |

## Reglas

1. Todo en **minúscula**, sin espacios, sin tildes ni eñes. Separar con guion bajo. GA4 distingue mayúsculas: `Story` y `story` cuentan como medios distintos.
2. El mismo nombre siempre para lo mismo. Si hoy es `demo_gratuita`, no escribir después `demo-gratis`.
3. `utm_content` lleva la fecha y el tema de la pieza, así se cruza con la base "Contenido bitacorait" de Notion.
4. No usar UTM en links internos de la web, solo en links que apuntan a la web desde afuera.

## Links listos para copiar

| Dónde | Link |
|---|---|
| Link en la bio | `https://web-sabristudios.vercel.app/?utm_source=instagram&utm_medium=bio&utm_campaign=perfil` |
| Sticker de link en una story | `https://web-sabristudios.vercel.app/?utm_source=instagram&utm_medium=story&utm_campaign=demo_gratuita&utm_content=AAAA_MM_DD_tema` |
| Reel con link en la descripción o comentario fijado | `https://web-sabristudios.vercel.app/?utm_source=instagram&utm_medium=reel&utm_campaign=proyectos&utm_content=AAAA_MM_DD_tema` |
| Carrusel con link en el último slide | `https://web-sabristudios.vercel.app/?utm_source=instagram&utm_medium=carrusel&utm_campaign=proceso&utm_content=AAAA_MM_DD_tema` |
| Respuesta por mensaje directo | `https://web-sabristudios.vercel.app/?utm_source=instagram&utm_medium=dm&utm_campaign=demo_gratuita` |

Cambiar `AAAA_MM_DD_tema` por la fecha y el tema reales (por ejemplo `2026_11_05_mombe`).

## Para apuntar a una página de proyecto

Se usa el mismo formato después del nombre del archivo:

```
https://web-sabristudios.vercel.app/proyecto-mombe.html?utm_source=instagram&utm_medium=story&utm_campaign=proyectos&utm_content=2026_11_05_mombe
```

## Cómo leer los resultados

- **Clarity:** Grabaciones → Filtros → Etiquetas personalizadas → `utm_medium` o `utm_content`. Los eventos `whatsapp_click`, `calendar_click`, `project_click` y `project_site_click` aparecen en Eventos inteligentes / Eventos personalizados.
- **GA4:** Informes → Adquisición → Adquisición de tráfico. Para ver `navegador_interno` hay que registrarlo una vez como dimensión personalizada de evento (Administrar → Definiciones personalizadas → Crear dimensión personalizada, alcance "Evento").

## Qué no cubre

- Una visita sin UTM sigue llegando como `l.instagram.com` (por ejemplo, alguien que copia el link de otra persona).
- Con muy pocas visitas por semana, un solo medio puede dar 1 o 2 sesiones: leer tendencias de varias semanas, no semana a semana.
