# PRD - Landing Page de Sabri Studios

## Versión

**Versión:** 1.75

**Fecha:** Octubre 2026

**Objetivo:** Mejorar conversión de visitantes → consultas WhatsApp para demo gratuita

> Cada cambio que se haga sobre la landing o sobre este documento se registra en la sección [19. Historial de Versiones](#19-historial-de-versiones) y en la [Tabla de Versiones](#20-tabla-de-versiones) al final del documento.
> **Nota:** este documento nació de fusionar dos PRDs que convivían en el proyecto — el PRD original (`docs/PRD.md`, más formal: alcance, requisitos e historias de usuario) y el LEAN PRD (`documentación/LEAN PRD.md`, más vivo: persona, propuesta de valor, roadmap e historial de cada cambio). A partir de la v1.9 este es el único PRD del proyecto.

---

## 1. Resumen del producto

Sabri Studios necesita una landing page que convierta la falta de presencia digital de pequeños negocios en una oportunidad concreta de contacto. La página debe explicar el problema, presentar un proceso de trabajo simple y llevar a la persona visitante a iniciar una conversación por WhatsApp para reservar su demo gratuita.

---

## 2. Objetivo General

Convertir emprendedores sin web ni presencia en Google en consultantes activos que reserven demo gratuita vía WhatsApp. La landing debe demostrar que Sabri Studios entiende el problema específico del emprendedor pequeño (invisibilidad digital, dependencia de boca a boca) y que el proceso es diferente: diagnóstico primero, diseño después.

### Indicadores de éxito

- La persona visitante entiende en pocos segundos qué problema resuelve Sabri Studios.
- La persona visitante identifica claramente las tres etapas del servicio.
- El botón de WhatsApp es fácil de encontrar y utilizar desde cualquier sección.
- La página funciona correctamente en dispositivos móviles y de escritorio.
- Las animaciones acompañan la lectura sin impedir el acceso al contenido.

---

## 3. Alcance

### Incluido

- Sección principal (Hero) con propuesta de valor y CTA.
- Sección de proceso con tres pasos: Diagnóstico, Diseño y Estrategia, y Resultados.
- Sección "La demo gratuita es así", con el paso a paso del primer contacto.
- Sección "Proyectos desarrollados", con casos reales de clientes.
- Sección "Sobre mí" con presentación de Sabri Studios.
- Sección "Preguntas frecuentes" (FAQ), con schema `FAQPage` (JSON-LD).
- Botón flotante de WhatsApp.
- Navegación interna hacia Proceso, Proyectos, Sobre Mí y Preguntas.
- Diseño responsive.
- Animaciones de entrada al hacer scroll con respeto por `prefers-reduced-motion`.

### Fuera de alcance

- Panel de administración.
- Registro o inicio de sesión.
- Procesamiento de pagos.
- Gestión de leads dentro de la página.
- Blog o sistema de publicación de contenidos.
- Integración automática con un CRM.

---

## 4. Público objetivo / User Persona: El Emprendedor Sin Web

**Quién es:**

- Pequeño negocio o emprendimiento en operación (mínimo 6 meses).
- Vende por WhatsApp, Instagram, boca a boca.
- Nunca tuvo web o la abandonó hace años.
- No aparece en Google Maps ni en búsquedas locales.
- Tiene miedo a la tecnología o la ve como "gasto innecesario".
- Está en San Juan, pero también puede ser de otras provincias (acceso remoto).

**Frustración principal:**

"Mi negocio funciona, pero crece lento porque nadie me encuentra. Pierdo clientes con competencia que tiene web."

**Objetivo:**

Existir donde sus clientes ya lo buscan (Google, Maps) sin perder la cercanía que lo hizo crecer.

**Cómo llega a la landing:**

- Instagram bio (link en bio de @sabristudios).
- Búsqueda Google: "diseño web San Juan", "landing page emprendedores".
- Referencia de conocidos.
- Ads futuros (no activos hoy).

---

## 5. Propuesta de Valor

**Mensaje central:** "No hago páginas web bonitas. Hago herramientas de venta."

**Diferencial:**

- Proceso estructurado: diagnóstico → diseño → resultados (no plantillas).
- Enfoque en conversión: la web debe traer clientes, no solo visitas.
- Trato cercano: WhatsApp, sin intermediarios, sin jerga.
- Accesible: precio fijo, demo gratis, proceso transparente.

**Promesa:**

Después de trabajar con Sabri Studios, tu negocio aparece en Google y Google Maps. La gente que te busca te encuentra primero. Tu web trabaja para vos incluso cuando no estás activa.

---

## 6. Flujo de Conversión (Macro)

```text
Tráfico (IG, Google, referencia)
        ↓
Landing: Leo el problema, veo que entienden mi situación
        ↓
Secciones persuasivas: Proceso, Demo gratuita, Casos, FAQ
        ↓
CTA claro: "Reservá tu demo ¡GRATIS!"
        ↓
WhatsApp: Escribo, Sabri responde, coordinamos diagnóstico
        ↓
Demo (conversación inicial)
        ↓
Cierre o no-cierre (fuera del scope del PRD)
```

---

## 7. Estructura de la Landing (Estado Actual vs. Mejoras)

### 7.1 Hero Section ✅ (Rediseñado en v1.7)

**Estado actual:** Alto según el contenido (desde v1.19 ya no ocupa la pantalla completa), headline con acento naranja, subheadline con dato de urgencia, dos CTAs (WhatsApp directo + "Ver cómo funciona"), imagen del problema y señales de confianza.

**Mejoras pendientes:**

- Considerar A/B test de copy del headline/subheadline (ver Roadmap, Fase 3).

### 7.2 Sección "Antes/Después" ❌ (Eliminada en v1.16)

**Estado actual:** Sacada de la landing en v1.16. El costo de no aparecer en Google ya lo comunican el titular y la imagen del Hero.

**Mejoras que se habían identificado (quedan como referencia si se vuelve a agregar):**

- Agregar métrica concreta: "Clientes perdidos por mes" o "Tiempo de crecimiento".
  - Antes: "No aparecés en Google ni en Maps" + "[X% de búsquedas locales las pierdés]".
  - Después: "Aparecés en las búsquedas" + "[X% de clientes nuevos por mes]".
- Enfatizar confianza: "Generás confianza" es bueno, pero ser más específico.
  - Actual: "Generás confianza antes de que te escriban".
  - Alternativa: "Cuando te googleen, van a encontrar UNA PÁGINA PROFESIONAL (no WhatsApp vacío)".

### 7.3 Sección "Proceso" ✅ (Mantener, detallar más)

**Estado actual:** 3 pasos (Diagnóstico → Diseño → Resultados). Correcto.

**Mejoras identificadas:**

- Cada paso necesita más detalle sin ser abrumador.
  - **Diagnóstico:** "¿Qué hacés, a quién le vendés, por qué no te encuentran?" → Tiempo estimado: 30 min.
  - **Diseño y Estrategia:** "Traducimos eso en una web pensada para vender" → Tiempo: 2-3 semanas.
  - **Resultados:** "Web lista, encontrable, trabajando" → Tiempo: 1 semana post-entrega QA.
- Agregar: "Sin sorpresas. Todo hablado, todo acordado".
- Agregar: Precio aquí o en sección aparte (hoy no aparece en la landing).

### 7.4 Sección "La demo gratuita es así" ✅ (Agregada en v1.1)

**Estado actual:** Sección con los 5 pasos del primer contacto por WhatsApp (te escribo, coordinamos 30 min, te pregunto sobre tu negocio, te digo qué necesitás, si avanzamos hablamos del proceso), más una cita destacada aclarando que no es una venta disfrazada.

**Mejoras pendientes:** ninguna identificada por ahora.

### 7.5 Sección "Proyectos" ⚠️ (Mejorar)

**Estado actual:** 2 casos (AR Estética Vehicular, JL Construcciones), con tarjetas que giran (frente: logo/etiqueta/nombre; dorso: detalle + link al sitio, agregado en v1.5).

**Problemas identificados:**

- Ambos tienen link a sitio web, pero faltan resultados cuantitativos.
- No hay testimonial de cliente (solo el caso visual).
- Falta contexto: "¿Qué vendía antes? ¿Cómo cambió después?".

**Mejoras obligatorias:**

1. Agregar testimonial por cliente (voz del cliente real).
   - Ejemplo: "Antes no aparecía en Google. Ahora recibo 3-4 consultas por semana desde la web" — *Carlos, JL Construcciones*.
2. Agregar métrica: "Resultados después de 2 meses" (consultas, llamadas, visitantes).
3. Agregar 1-2 casos más (mínimo 3 para credibilidad).
4. Considerar video corto: Cliente hablando sobre el resultado (30 segundos max).

### 7.6 Sección "Sobre Mí" ✅ (Mantener, reforzar creencia)

**Estado actual:** Bueno. Foto + descripción + CTA.

**Mejoras identificadas:**

- Agregar credential/experiencia.
  - "No hago páginas web bonitas. Construyo herramientas de venta. [X años de experiencia, Y negocios ayudados]".
- Agregar por qué esto importa.
  - "Trazo formación en [Análisis Funcional, Elicitación de Requisitos] — eso es lo que la mayoría de diseñadores no hace: preguntar antes de diseñar".
- Considerar agregar: "¿Por qué Sabri, y no otro?" (diferencial personal, no solo del servicio).

### 7.7 Sección "FAQs" ✅ (Expandida en v1.8)

**Estado actual:** 6 preguntas que cubren las objeciones más comunes: cuánto tarda el proyecto, qué incluye exactamente, cómo es el proceso de trabajo, qué pasa si no gusta el resultado, si se puede escalar la web después, y si hace falta saber de tecnología. Cierra con una caja de contacto directo por WhatsApp para quien no encuentra su pregunta. Tiene su schema `FAQPage` (JSON-LD) actualizado para SEO/GEO.

**Mejoras pendientes:**

- ~~Agregar objeción de precio ("¿Cuánto cuesta?")~~ Descartado en v1.44: Sabrina decidió no mostrar precio en la web (ver punto 7.8).

### 7.8 Sección NUEVA: "Pricing" ❌ (Descartada en v1.44)

**Estado actual:** No existe, y no se va a agregar: Sabrina decidió no mostrar precio en la web. La inversión se conversa en la demo (paso 3 de "La demo gratuita es así").

**Por qué falta importa:**

- Emprendedor pequeño quiere saber "¿me alcanza?" antes de consultar.
- Transparencia aumenta confianza.
- Evita consultas de gente que no puede pagar.

**Qué agregar:**

```text
LANDING BASE: $80.000 ARS (promo inauguración, primeros 4 proyectos)
→ Incluye: diagnóstico, diseño, dominio 12 meses, hosting 12 meses

SOPORTE POST: $15.000 ARS / 30 días (cambios ilimitados)

"Precio fijo. Sin sorpresas. Hablamos antes."
```

**Consideración:** ¿Mostrar precio aquí o solo en WhatsApp después de demo?

- Recomendación: Mostrar rango (ej: "Desde $80k") en landing, detallar en demo. Así no se filtra gente que podría pagar pero le asusta lo desconocido.

---

## 8. Elementos Visuales

### 8.1 Imágenes/Ilustraciones Faltantes

| Sección | Falta | Sugerencia |
| --- | --- | --- |
| Hero | ~~Imagen/ilustración~~ | Resuelto en v1.3/v1.4: emprendedora buscando su negocio en Google desde el celular. |
| Proceso | Ilustraciones de cada paso | Timeline visual: Diagnóstico (chat) → Diseño (Figma/wireframe) → Go Live. |
| Proyectos | Screenshots de webs | Agrandar, mostrar homepage completa, no solo logo. |

### 8.2 Colores y Tipografía

**Mantener:** Paleta de marca Sabri Studios.

- Azul primario (`azul-primario`): `#1E3A5F`
- Naranja (`naranja`): `#D97A3C`
- Neutro (`gris-neutro`): `#F5F3EF`
- Tipografía: Space Mono en todo el sitio (corregido en v1.34; antes decía Space Grotesk para títulos y cuerpo, pero el sitio nunca la usó).

**Asegurar:** CTAs en naranja (`naranja`), títulos en azul (`azul-primario`).

*Los nombres de las clases cambiaron en la v1.37 (antes `brand-blue`, `brand-orange`, `background`); las entradas anteriores del historial conservan los nombres viejos.*

**Design system:** el sistema completo de la marca está en [`Design System.md`](Design%20System.md). El design system manda en tipografía, color, espaciado y componentes.

---

## 9. Requisitos funcionales

| ID | Requisito | Prioridad |
| --- | --- | --- |
| RF-01 | La landing debe mostrar una propuesta de valor clara en la primera pantalla. | Alta |
| RF-02 | La landing debe incluir un CTA visible hacia WhatsApp. | Alta |
| RF-03 | ~~La landing debe explicar el problema mediante una comparación "Antes / Después".~~ Dado de baja en v1.16: el problema lo explica el Hero. | — |
| RF-04 | La landing debe mostrar el proceso en tres pasos numerados. | Alta |
| RF-05 | La landing debe incluir una presentación de la persona responsable del servicio. | Media |
| RF-06 | La landing debe ofrecer un acceso directo a WhatsApp. | Alta |
| RF-07 | Los enlaces de navegación deben llevar a las secciones correspondientes. | Media |
| RF-08 | Las animaciones deben activarse al entrar el contenido en el viewport. | Media |
| RF-09 | La página debe ofrecer una experiencia usable en móvil y escritorio. | Alta |
| RF-10 | La landing debe explicar el paso a paso de la demo gratuita por WhatsApp. | Media |
| RF-11 | La landing debe mostrar proyectos reales desarrollados, con link al sitio del cliente. | Media |
| RF-12 | La landing debe responder las objeciones más comunes en una sección de preguntas frecuentes, con datos estructurados `FAQPage`. | Alta |

---

## 10. Requisitos no funcionales

- El contenido debe estar redactado en español y usar un tono directo y profesional.
- Los botones y enlaces principales deben tener estados visuales de interacción.
- El contenido debe conservar legibilidad y contraste suficientes.
- La página no debe depender de la animación para comunicar información esencial.
- Las personas que prefieran reducir el movimiento deben recibir una experiencia estática.
- Las imágenes deben tener textos alternativos descriptivos cuando corresponda.
- La página debe poder abrirse como un documento HTML estático.
- Tailwind CSS se compila en build time (`npm run build`); cualquier clase nueva con valor arbitrario (ej. `h-[300px]`, `aspect-[...]`) requiere correr el build de nuevo o el estilo no se aplica, sin tirar ningún error.

---

## 11. CTAs (Call-to-Actions)

**CTA Primario (conversor):**

- Texto: "RESERVÁ TU DEMO ¡GRATIS!" / "RESERVÁ TU DEMO".
- Color: Naranja (`#D97A3C`).
- Ubicación: Hero, Sobre Mí, Footer (botón flotante).
- Acción: Link WhatsApp con prefilled text, ej: "Hola, quiero reservar mi demo gratuita".

**CTA Secundario (engagement):**

- "Ver cómo funciona" (Hero, ancla a `#proceso`).
- "¡Hablemos!" (botón flotante).
- "→ Contactarme por WhatsApp" (cierre de la sección FAQ).

**Posibles CTAs terciarios:**

- "Ver más casos" → Portfolio o casos de estudio (no activo hoy).
- "Leer el blog" → No existe blog, no agregar todavía.

---

## 12. Historias de usuario

### Épica A - Comprender la propuesta

#### HU-01 - Entender el problema

**Como** dueña o dueño de un pequeño negocio,
**quiero** entender cuánto me cuesta no aparecer en Google,
**para** reconocer la necesidad de mejorar mi presencia digital.

##### Criterios de aceptación (BDD) - HU-01

```gherkin
Característica: Comunicar el costo de la invisibilidad digital

Escenario: La persona entra a la landing
  Dado que la persona abre la landing page
  Cuando ve la sección Hero
  Entonces ve un titular que explica el costo de no aparecer en Google
```

#### HU-02 - Comprender la propuesta de valor

**Como** persona que busca conseguir más clientes,
**quiero** entender qué hace Sabri Studios,
**para** decidir si el servicio puede ayudar a mi negocio.

##### Criterios de aceptación (BDD) - HU-02

```gherkin
Característica: Presentar la propuesta de valor

Escenario: La persona llega a la primera pantalla
  Dado que la persona abre la landing page
  Cuando observa la sección principal
  Entonces ve una propuesta de valor relacionada con aparecer en Google
  Y ve una explicación orientada a generar ventas reales
  Y encuentra un CTA para escribir por WhatsApp
```

### Épica B - Conocer el proceso

#### HU-03 - Ver las etapas del servicio

**Como** potencial cliente,
**quiero** conocer los pasos del trabajo,
**para** saber qué puedo esperar antes de contactar.

##### Criterios de aceptación (BDD) - HU-03

```gherkin
Característica: Mostrar el proceso de trabajo

Escenario: La persona consulta el proceso
  Dado que la persona navega a la sección "Proceso"
  Cuando observa el contenido
  Entonces ve exactamente tres pasos numerados
  Y el paso 1 se llama "Diagnóstico"
  Y el paso 2 se llama "Diseño y Estrategia"
  Y el paso 3 se llama "Resultados"
```

#### HU-04 - Recibir una experiencia visual clara

**Como** persona visitante,
**quiero** que los pasos aparezcan de forma progresiva y ordenada,
**para** identificar fácilmente la secuencia del servicio.

##### Criterios de aceptación (BDD) - HU-04

```gherkin
Característica: Animar la sección de proceso

Escenario: Los pasos entran en el viewport
  Dado que la persona llega a la sección "Proceso"
  Cuando los pasos entran en el área visible de la pantalla
  Entonces los pasos aparecen con una animación escalonada
  Y los números reciben un énfasis visual breve
  Y la animación no cambia el texto ni el orden de los pasos

Escenario: La persona tiene activada la reducción de movimiento
  Dado que el dispositivo indica "prefers-reduced-motion: reduce"
  Cuando la persona llega a la sección "Proceso"
  Entonces el contenido se muestra sin desplazamientos ni transiciones
  Y los tres pasos siguen siendo visibles y utilizables
```

#### HU-09 - Entender cómo es la demo gratuita

**Como** potencial cliente que no sabe qué esperar del primer contacto,
**quiero** ver el paso a paso de la demo gratuita,
**para** animarme a escribir sabiendo que no es una venta forzada.

##### Criterios de aceptación (BDD) - HU-09

```gherkin
Característica: Mostrar el paso a paso de la demo gratuita

Escenario: La persona consulta la sección "La demo gratuita es así"
  Dado que la persona navega a la sección "demo-gratuita"
  Cuando observa el contenido
  Entonces ve los 5 pasos numerados del primer contacto por WhatsApp
  Y ve una aclaración de que la conversación no es una venta disfrazada
```

### Épica C - Contactar

#### HU-06 - Contactar por WhatsApp

**Como** potencial cliente que prefiere conversar,
**quiero** tener un botón visible de WhatsApp,
**para** iniciar una consulta sin completar un formulario.

##### Criterios de aceptación (BDD) - HU-06

```gherkin
Característica: Contactar por WhatsApp

Escenario: La persona selecciona el botón flotante
  Dado que la persona está navegando por la landing page
  Cuando selecciona el botón "¡Hablemos!"
  Entonces se abre WhatsApp en una nueva pestaña
  Y el enlace apunta al número de contacto configurado
```

#### HU-10 - Resolver dudas antes de escribir

**Como** potencial cliente con objeciones (tiempo, garantía, conocimientos técnicos),
**quiero** encontrar respuestas a las preguntas más comunes,
**para** decidir si escribir por WhatsApp sin quedarme con dudas.

##### Criterios de aceptación (BDD) - HU-10

```gherkin
Característica: Responder objeciones comunes en la sección FAQ

Escenario: La persona consulta las preguntas frecuentes
  Dado que la persona navega a la sección "preguntas-frecuentes"
  Cuando abre una pregunta
  Entonces ve la respuesta correspondiente desplegada
  Y puede acceder a un link directo de WhatsApp si su pregunta no está en la lista
```

### Épica D - Navegar y visualizar

#### HU-07 - Navegar entre secciones

**Como** persona visitante,
**quiero** acceder a las secciones principales desde la navegación,
**para** encontrar rápidamente la información que necesito.

##### Criterios de aceptación (BDD) - HU-07

```gherkin
Característica: Navegación interna

Escenario: La persona selecciona "Proceso"
  Dado que la navegación está visible
  Cuando la persona selecciona el enlace "Proceso"
  Entonces la página se desplaza hasta la sección identificada como "proceso"

Escenario: La persona selecciona "Sobre Mí"
  Dado que la navegación está visible
  Cuando la persona selecciona el enlace "Sobre Mí"
  Entonces la página se desplaza hasta la sección identificada como "sobre-mi"
```

#### HU-08 - Usar la landing desde un móvil

**Como** persona que visita la página desde un celular,
**quiero** leer y utilizar todos los controles sin hacer zoom,
**para** contactar desde cualquier dispositivo.

##### Criterios de aceptación (BDD) - HU-08

```gherkin
Característica: Experiencia responsive

Escenario: La persona abre la landing desde un celular
  Dado que el ancho de la pantalla es menor al de escritorio
  Cuando la página termina de cargar
  Entonces el contenido se adapta a una sola columna cuando corresponde
  Y los textos no se cortan ni se superponen
  Y el CTA de WhatsApp y el botón flotante siguen siendo utilizables
```

---

## 13. Flujo de Datos / Tracking

**Qué medir (fuentes):**

1. **Google Analytics / Clarity:**
    - Visitantes únicos por mes.
    - Tiempo en página.
    - Bounce rate por sección.
    - Scroll depth (hasta dónde leen).
2. **WhatsApp:**
    - Consultas por mes.
    - Tasa de respuesta (en qué tiempo Sabri contesta).
    - Tasa de demo confirmada (consulta → demo agendada).
    - Tasa de cierre (demo → proyecto).
3. **Fuente del tráfico:**
    - Directo.
    - Instagram (rastrear link en bio).
    - Google Organic.
    - Referencias (preguntar en WhatsApp).

---

## 14. Success Metrics

| Métrica | Target | Frecuencia | Responsable |
| --- | --- | --- | --- |
| Visitantes únicos/mes | 50+ (hoy: desconocido) | Mensual | Sabri + Analytics |
| Tasa de scroll a "Proceso" | >70% | Mensual | Analytics |
| Consultas WhatsApp/mes | 5-10 | Mensual | Sabri |
| Demos confirmadas/consultas | >60% | Mensual | Sabri |
| Cierre (demo → proyecto) | >40% | Mensual | Sabri |

---

## 15. Dependencias y riesgos

- WhatsApp depende de que el número configurado sea correcto y esté activo.
- Las imágenes y recursos alojados externamente pueden afectar la carga si no están disponibles.
- Las animaciones deben mantenerse como mejora progresiva y nunca ocultar información esencial.
- El sitio depende de que `npm run build` se corra después de cambiar clases de Tailwind con valores arbitrarios, o el layout se rompe sin ningún error visible.

---

## 16. Roadmap de Mejoras

### Fase 1 (Inmediata: Octubre 2026)

- [ ]  Agregar pricing visible.
- [ ]  Expandir sección "Proyectos" con testimoniales.
- [x]  Agregar sección "Cómo funciona el diagnóstico" → hecho en v1.1 como "La demo gratuita es así".
- [x]  Mejorar subheadline hero con dato de urgencia → hecho en v1.2.
- [x]  Agregar imagen/ilustración hero → hecho en v1.3 y v1.4.
- [x]  Expandir FAQs con objeciones: tiempo, garantía, escalabilidad, conocimientos técnicos → hecho en v1.8. Falta la objeción de precio (ver punto 7.8).

### Fase 2 (Corto plazo: Noviembre 2026)

- [ ]  Agregar 2-3 casos más (mínimo 3 totales).
- [ ]  Crear video testimonial cliente (30s).
- [ ]  Expandir FAQ con objeción de precio, una vez definido el pricing visible.
- [ ]  Setup de Google Analytics + tracking de WhatsApp.

### Fase 3 (Mediano plazo: Diciembre 2026+)

- [ ]  Agregar blog (si hay tiempo).
- [ ]  A/B test de copy en hero.
- [ ]  Considerar ads (Google Ads, Instagram).
- [ ]  Crear landing secundaria: "Plan de 30 días post-entrega".

---

## 17. Notas Importantes

1. **No sobrecomplicar el proceso:** Hoy está bien. Mantener los 3 pasos claros.
2. **Pricing es sensible:** Mostrar rango, no miedo. Muchos emprendedores pequeños ven "$80k" y piensan "no llego", pero hablando descubren que sí.
3. **Testimoniales > Casos:** Un cliente diciendo "me cambió el negocio" vale más que dos webs bonitas sin contexto.
4. **WhatsApp es tu conversion:** La landing solo lleva a WhatsApp. Todo cierre depende de la demo. Mejora la landing, pero invierte en mejorar cómo respondés en demo.
5. **San Juan + Remoto:** Mantener ambos posicionamientos. "En San Juan, pero trabajo remoto."

---

## 18. Checklist Pre-Launch (Mejoras)

Antes de publicar cambios:

- [ ]  Copy revisado (sin faltas, tono coherente).
- [ ]  Todos los links funcionan (WhatsApp, casos, social).
- [ ]  Imágenes optimizadas (peso <100kb cada una).
- [ ]  Mobile responsive (testear en teléfono real).
- [ ]  CTA visible en cada sección (no scroll infinito sin poder clickear).
- [ ]  FAQs responden objeciones reales (no asumir).
- [ ]  Pricing claro (si se agrega).
- [ ]  Google Analytics + tracking activos.
- [ ]  Testimoniales con permiso de cliente (no inventar).

---

## 19. Historial de Versiones

### v0.1 — 24 de agosto de 2026 (PRD original)

**Qué hice:** Creé el PRD original del producto (`docs/PRD.md`, hoy fusionado en este documento).

**Detalle del cambio:**

- Definí el resumen del producto, objetivo, indicadores de éxito y alcance (incluido / fuera de alcance).
- Documenté el público objetivo y los requisitos funcionales y no funcionales.
- Escribí las historias de usuario con criterios de aceptación en formato Gherkin (BDD), organizadas en épicas.
- Documenté las dependencias y riesgos del proyecto.

**Por qué lo hice:** Necesitábamos un documento formal de requisitos que sirviera de base para las decisiones de alcance de la landing.

---

### v0.2 — 24 de agosto de 2026 (PRD original)

**Qué hice:** Incorporé al PRD original las animaciones de entrada de la sección "Proceso".

**Detalle del cambio:**

- Sumé la historia de usuario HU-04 (recibir una experiencia visual clara) con sus criterios de aceptación.
- Agregué el criterio de accesibilidad para `prefers-reduced-motion`.

**Por qué lo hice:** La landing ya tenía implementada la animación escalonada de los 3 pasos del proceso, y hacía falta documentarla en el PRD.

---

### v1.0 — Septiembre 2026

**Qué hice:** Creé el documento LEAN PRD desde cero.

**Detalle del cambio:**

- Definí el objetivo general de la landing (convertir visitantes en consultas por WhatsApp).
- Armé el user persona "El Emprendedor Sin Web" con su frustración y objetivo principal.
- Escribí la propuesta de valor y el mensaje central del negocio.
- Mapeé el flujo de conversión completo (tráfico → landing → WhatsApp → demo).
- Repasé cada sección actual de la landing (Hero, Antes/Después, Proceso, Proyectos, Sobre Mí, FAQs) y anoté qué mejorar.
- Marqué dos secciones que todavía no existen y habría que sumar: Pricing y Cómo funciona el diagnóstico.
- Dejé la lista de elementos visuales faltantes, colores de marca y CTAs a usar.
- Definí qué datos medir (Analytics + WhatsApp) y las métricas de éxito.
- Armé el roadmap en 3 fases (octubre, noviembre, diciembre 2026 en adelante).
- Sumé notas importantes y un checklist para antes de publicar cambios.

**Por qué lo hice:** Necesitábamos un documento base para no perder de vista las mejoras pendientes de la landing y para que quede registro de por qué se toma cada decisión.

---

### v1.1 — Septiembre 2026

**Qué hice:** Agregué la sección "La demo gratuita es así" a la landing (`index.html`).

**Detalle del cambio:**

- Sumé una sección nueva entre "Proceso" y "Proyectos desarrollados", con id `demo-gratuita`.
- Armé los 5 pasos que ya estaban descriptos en este PRD (sección 7.8 original, "Cómo funciona el diagnóstico"): WhatsApp → coordinar 30 min → preguntas sobre el negocio → diagnóstico → siguiente paso del proceso.
- Cada paso tiene su número en un círculo naranja, igual al estilo que ya usaba la sección "Proceso".
- Agregué una cita destacada al final, con el borde naranja de marca, aclarando que la demo no es una venta disfrazada.
- El contenido me lo pasó Sabrina en JSX/React con clases y colores hardcodeados; lo convertí a HTML plano y reemplacé las clases sueltas (`className`, hex directos) por las clases de diseño que ya usa el resto del sitio (`font-headline-h2`, `text-brand-blue`, `bg-brand-orange`, `py-section`, etc.) para que quede visualmente consistente con el resto de la landing.

**Por qué lo hice:** Esta sección estaba marcada como faltante — generar confianza mostrando que la demo es una conversación, no una venta.

---

### v1.2 — Septiembre 2026

**Qué hice:** Cambié el subheadline del Hero (`index.html`).

**Detalle del cambio:**

- Reemplacé el texto anterior ("Sé que dejarlo para después parece más fácil...") por uno con un dato de urgencia: "Mientras lo pensás, 3 de cada 10 emprendedores pierden clientes porque no aparecen en Google. ¿Vos querés ser uno de ellos?".
- Es el mismo párrafo debajo del H1 del Hero, no toqué el resto de la sección.

**Por qué lo hice:** Era una mejora ya anotada en este PRD: reforzar el subheadline con un número/dato en vez de una frase genérica, para generar más urgencia sin sonar alarmista.

---

### v1.3 — Septiembre 2026

**Qué hice:** Agregué la imagen que faltaba en el Hero (`index.html`).

**Detalle del cambio:**

- El Hero ya tenía título, subheadline y botón de WhatsApp armados; lo único que faltaba era la imagen del lado derecho, que hasta ahora era solo un fondo genérico (`hero-presencia-online-google.jpg`, una foto de laptop con wireframes).
- La reemplacé por `imagenes/sabristudios_subheadline.jpeg`, que ya estaba en la carpeta de imágenes sin usar: muestra justo a una emprendedora buscando su negocio desde el celular y le aparece "business not found" en Google Maps. Es la imagen que describe el problema, tal cual pedía el PRD.
- Cambié la implementación de un `<div>` con `background-image` a una etiqueta `<img>` normal, con `width`/`height` y `alt` descriptivo, siguiendo el mismo patrón que ya se usa en la foto de "Sobre Mí".
- No le puse `loading="lazy"` porque es una imagen que se ve apenas se carga la página (el Hero), así que conviene que cargue de una.

**Por qué lo hice:** Era una mejora pendiente marcada en la tabla de "Imágenes/Ilustraciones Faltantes": el Hero necesitaba una imagen que muestre el problema (emprendedor frustrado que no aparece en Google), no solo un fondo decorativo.

---

### v1.4 — Septiembre 2026

**Qué hice:** Ajusté el marco de la imagen del Hero para que respete la proporción real de la foto (`index.html`).

**Detalle del cambio:**

- El contenedor de la imagen tenía `min-h-[400px]`, una altura mínima fija que no coincidía con la proporción real de la foto (2912x1440 px) y hacía que `object-cover` la recortara de más.
- Reemplacé esa altura fija por `aspect-[2912/1440]`, que es el mismo ancho x alto real del archivo. Así el marco se achica o agranda respetando la forma original de la imagen, sin recortarla de manera rara.
- Saqué también el `flex items-center justify-center` del contenedor, porque ya no hace falta centrar nada: la imagen ahora ocupa todo el marco de punta a punta.

**Por qué lo hice:** Sabrina pidió que el marco se ajuste al tamaño real de la imagen en vez de forzarla a una altura fija que no le correspondía.

---

### v1.5 — Septiembre 2026

**Qué hice:** Convertí las tarjetas de "Proyectos desarrollados" en tarjetas que giran (`index.html`).

**Detalle del cambio:**

- Ahora cada tarjeta tiene dos caras. Adelante solo se ve el logo, la etiqueta (ej. "Estética Vehicular") y el nombre del negocio.
- Al pasar el mouse por encima, la tarjeta gira 180° y atrás aparece el detalle: la descripción del emprendimiento y el link "Visitar sitio web".
- Armé el giro con CSS puro (`transform: rotateY()` + `backface-visibility: hidden`), sin JavaScript. Le agregué `perspective` a la tarjeta y separé el contenido en dos `div` (`project-card-face-front` y `project-card-face-back`) dentro de un contenedor que es el que rota.
- Respeté los efectos que ya tenía la tarjeta (el brillo diagonal al pasar el mouse, el levantamiento con sombra, el subrayado de "Visitar sitio web") y agregué que, si la persona tiene activado "reducir movimiento" en su dispositivo, el giro pase sin animación (para no marearla) pero el contenido de atrás se siga viendo igual.
- Cada tarjeta sigue siendo un solo link a todo lo ancho, como ya estaba.
- **Ojo con esto:** el proyecto compila Tailwind con un build (`npm run build`, que lee `src/input.css` y genera `dist/output.css`). Como usé clases nuevas con valores puntuales (por ejemplo `h-[300px]`), tuve que correr el build de nuevo para que esas clases existan en el CSS final — si no, la tarjeta se ve rota (sin alto, achicada a una línea). Antes de este cambio ya me había pasado lo mismo sin darme cuenta con el ajuste de la imagen del Hero (`aspect-[2912/1440]`), pero no se notó porque la imagen ya tenía su propio ancho/alto como respaldo.
- Probé el resultado abriendo la página en Chrome con un servidor local (`python -m http.server`) antes de dar el cambio por terminado.

**Por qué lo hice:** Sabrina pidió que el frente de la tarjeta muestre solo lo esencial (logo, etiqueta, nombre) y que el detalle del emprendimiento aparezca al girarla, para que la grilla de "Proyectos" se vea más limpia de entrada.

---

### v1.6 — Septiembre 2026

**Qué hice:** Armé el `README.md` del proyecto (no existía).

**Detalle del cambio:**

- Expliqué de qué se trata el proyecto (landing de Sabri Studios) y en qué stack está hecho: HTML puro, Tailwind CSS compilado con build propio, hosting en Vercel, más Vercel Analytics, Google Analytics y Clarity para métricas.
- Documenté la estructura de carpetas y archivos (`index.html`, `src/input.css`, `dist/output.css`, `tailwind.config.js`, `imagenes/`, `documentación/LEAN PRD.md`, etc.).
- Dejé los pasos para correr el proyecto en local: `npm install`, `npm run build`, y levantar un servidor local para abrir `index.html`.
- Sumé una advertencia sobre el build de Tailwind (misma que ya había guardado como lección en la v1.5): si se agrega una clase con valor arbitrario hay que correr `npm run build` de nuevo, si no el cambio no se ve y no tira ningún error.
- Documenté el flujo de Git que ya usamos: `master` es producción, `develop` es la rama de trabajo.
- Enlacé la documentación existente.

**Por qué lo hice:** El proyecto no tenía ningún README — hacía falta un punto de entrada para entender de qué se trata el proyecto, cómo correrlo y dónde está la documentación, sin tener que leer todo el código primero.

---

### v1.7 — Septiembre 2026

**Qué hice:** Rediseñé el Hero completo (`index.html`).

**Detalle del cambio:**

- El Hero ahora ocupa toda la altura de la pantalla (`min-h-screen`) y tiene un degradé de fondo suave (de `background` a blanco), en vez del alto automático que tenía antes.
- El título ahora resalta la frase final ("no existe") en naranja de marca, para que se lea como el golpe de efecto del titular.
- Agregué un segundo botón, "Ver cómo funciona", con estilo outline (borde azul, se rellena de azul al pasar el mouse), que lleva a la sección "Proceso" (`#proceso`). El pedido original apuntaba a un ancla `#como-funciona` que no existe en la página — la enlacé a `#proceso`, que es la sección que ya explica el proceso de trabajo.
- Sumé una línea chica de confianza debajo de los botones: "✓ Demo gratuita • ✓ Sin compromiso • ✓ 30 minutos".
- La foto de la derecha ahora se oculta en celular (`hidden md:block`) para no alargar tanto el Hero en pantallas chicas, algo que antes no pasaba (se mostraba apilada debajo del texto en mobile).
- Los colores y fuentes los mapeé a los tokens de diseño que ya tiene el proyecto (`text-brand-blue`, `text-brand-orange`, `bg-background`, `font-headline-h1`, etc.) en vez de los hex sueltos que traía el diseño original, para mantener todo consistente con el resto del sitio.
- Corrí `npm run build` de nuevo (clases nuevas como `min-h-screen`, `bg-gradient-to-br`, `rounded-xl`) y probé el resultado en Chrome antes de darlo por terminado.

**Por qué lo hice:** Sabrina pidió reemplazar el Hero por un diseño con más impacto visual: pantalla completa, titular con acento de color, dos llamados a la acción (uno directo a WhatsApp y otro para quien todavía quiere entender el proceso antes) y señales de confianza rápidas.

---

### v1.8 — 16 de septiembre de 2026

**Qué hice:** Actualicé el contenido de la sección "Preguntas frecuentes" (`index.html`).

**Detalle del cambio:**

- Reemplacé las 5 preguntas anteriores por 6 nuevas: cuánto tarda el proyecto, qué incluye exactamente (con checklist), cómo es el proceso de trabajo, qué pasa si no gusta el resultado, si se puede escalar la web después, y si hace falta saber de tecnología.
- El contenido me lo pasó Sabrina en JSX/React con clases y colores hardcodeados (`bg-[#F5F3EF]`, `text-[#1E3A5F]`, etc.) que coincidían exactamente con los tokens de diseño ya existentes en el proyecto (`background`, `brand-blue`, `brand-orange`, `text-strong`), así que lo convertí a HTML plano usando esos tokens en vez de hex sueltos, y mantuve el patrón de acordeón (`details`/`summary` + ícono `expand_more`) que ya usaba el resto de la sección.
- Agregué la caja final "¿No encontraste tu pregunta?" con link directo a WhatsApp con mensaje precargado, en vez del placeholder `YOUR_NUMBER` del diseño original.
- Actualicé el schema `FAQPage` (JSON-LD) para que coincida con las preguntas y respuestas nuevas.
- Corrí `npm run build` para recompilar Tailwind (aunque las clases ya existían en el CSS, por los tokens reutilizados).

**Por qué lo hice:** Sabrina quería ampliar las preguntas frecuentes para cubrir más objeciones comunes antes de escribir por WhatsApp (tiempo, contenido del servicio, garantía, escalabilidad, conocimientos técnicos) — mejora que ya estaba anotada en este mismo PRD (punto 7.7).

---

### v1.9 — 16 de septiembre de 2026

**Qué hice:** Fusioné el PRD original (`docs/PRD.md`) con este LEAN PRD en un solo documento, y borré `docs/PRD.md`.

**Detalle del cambio:**

- Incorporé a este documento las secciones que solo existían en el PRD original: resumen del producto, alcance (incluido/fuera de alcance), requisitos funcionales y no funcionales, historias de usuario con criterios de aceptación en Gherkin, y dependencias y riesgos.
- Fusioné las secciones que estaban duplicadas o eran similares en ambos documentos (objetivo, público objetivo/persona).
- Uní los dos historiales de versiones en uno solo, en orden cronológico: las versiones `0.1.0` y `0.2.0` del PRD original pasaron a ser `v0.1` y `v0.2` de este documento, y quedaron antes de la `v1.0` (creación del LEAN PRD).
- Actualicé el `README.md` para que ya no referencie `docs/PRD.md` como documento aparte, y quede un solo link a este archivo.

**Por qué lo hice:** Sabrina pidió fusionar ambos documentos — tener un PRD original y un LEAN PRD por separado generaba trabajo duplicado (como pasó en la v1.8, donde el cambio de FAQ se registró en el PRD original en vez de en este documento) y confusión sobre cuál era la fuente de verdad.

---

### v1.10 — 16 de septiembre de 2026

**Qué hice:** Agregué parámetros UTM a los 4 botones de WhatsApp de la landing (`index.html`).

**Detalle del cambio:**

- Sumé `utm_source=whatsapp`, `utm_campaign=demo` y un `utm_medium` distinto a cada botón, según dónde está ubicado:
  - Hero ("RESERVÁ TU DEMO") → `utm_medium=cta_hero`.
  - Sobre Mí ("¡Reservá tu demo!", el CTA justo antes del footer) → `utm_medium=cta_footer`.
  - Botón flotante ("¡Hablemos!") → `utm_medium=cta_floating`.
  - FAQ ("→ Contactarme por WhatsApp") → `utm_medium=cta_faq`.
- **Ojo con esto:** no hay ningún link de WhatsApp adentro de la etiqueta `<footer>` en sí — el botón que etiqueté como `cta_footer` es el de la sección "Sobre Mí", que es el último CTA de la página antes del footer. Lo mapeé así porque es el único botón que podía corresponder a "Footer" de los cuatro que pidió Sabrina; si en algún momento se agrega un botón de WhatsApp dentro del `<footer>` propiamente dicho, ese `utm_medium` debería reasignarse a ese botón nuevo.
- Mantuve el mensaje precargado (`text=...`) que ya tenía cada botón (el de reserva de demo en Hero y Sobre Mí, el de consulta puntual en FAQ, y ningún mensaje en el flotante), y le agregué los parámetros UTM al final de cada URL.
- El script de tracking de clics de WhatsApp (que dispara el evento `contacto_whatsapp` de Google Analytics) sigue funcionando igual, porque matchea los links por el prefijo `https://wa.me/` y no le importa la query string.

**Por qué lo hice:** Sabrina quería poder distinguir en Google Analytics/Ads desde qué botón de la landing sale cada consulta de WhatsApp, para saber qué CTA convierte más.

---

### v1.11 — 16 de septiembre de 2026

**Qué hice:** Sumé a `index.html` las dos mediciones de Google Analytics que faltaban de la sección 13 (Flujo de Datos/Tracking) y 14 (Success Metrics): scroll depth hasta "Proceso" y fuente de tráfico.

**Detalle del cambio:**

- **Scroll a "Proceso":** agregué un `IntersectionObserver` sobre `<section id="proceso">` que dispara un evento `scroll_proceso` de GA la primera vez que la sección empieza a entrar en pantalla (`threshold: 0`, no 0.5, porque la sección es más alta que el viewport y nunca se vería "la mitad" en pantallas normales). Esto mide la métrica "Tasa de scroll a 'Proceso'" (target >70%) de la sección 14.
- **Fuente de tráfico:** agregué `detectarFuenteTrafico()`, que primero mira si la URL trae `utm_source` (para links de Instagram bio, por ejemplo) y si no lo encuentra, infiere la fuente del `document.referrer` (`google_organic`, `instagram`, `referral_<dominio>` o `direct` si no hay referrer). El resultado se guarda en `sessionStorage` bajo `traffic_source` para que no se pierda si la persona navega por anclas dentro de la misma página.
- Agregué `traffic_source` como parámetro extra al evento `contacto_whatsapp` que ya existía, para poder cruzar en GA qué fuente de tráfico termina generando consultas de WhatsApp (no solo qué botón se usó).
- Probé todo en el preview local: confirmé que `traffic_source` se detecta bien con `?utm_source=instagram`, que persiste en `sessionStorage` entre navegaciones, que el evento `scroll_proceso` se dispara al llegar a la sección, y que `contacto_whatsapp` sale con el nuevo parámetro al hacer clic en el botón flotante.
- **Ojo con esto:** todavía no implementé el resto de la sección 13 (bounce rate por sección, tiempo en página) porque esas dos ya las cubre Google Analytics/Clarity automáticamente sin código adicional — no hacía falta tocar nada.

**Por qué lo hice:** Sabrina pidió avanzar con "lo de GA" que había quedado pendiente de una charla anterior; entre las métricas que el PRD todavía no tenía instrumentadas, priorizamos scroll depth y fuente de tráfico porque son las que permiten saber si la gente lee la propuesta de valor completa y desde dónde viene el tráfico que más convierte.

---

### v1.12 — 16 de septiembre de 2026

**Qué hice:** Reemplacé el evento de GA `contacto_whatsapp` (v1.10) por un evento `whatsapp_click` con nombres de parámetro específicos, según el contexto que Sabrina trajo de otra conversación sobre GA + WhatsApp.

**Detalle del cambio:**

- El evento nuevo, disparado en `index.html` en los 4 botones de WhatsApp (Hero, Sobre Mí, FAQ, flotante), manda:
  - `whatsapp_source`: `hero` | `sobre_mi` | `faq` | `floating`.
  - `button_location`: el id real de la sección en el HTML (`hero`, `sobre-mi`, `preguntas-frecuentes`) o `floating` para el botón que no vive dentro de ninguna sección.
  - `traffic_source`: lo mantuve del cambio anterior (v1.11), no estaba en el spec que trajo Sabrina pero no hay motivo para perderlo — sigue permitiendo cruzar de qué canal vino la visita que terminó escribiendo por WhatsApp.
- El spec original que trajo Sabrina usaba `button_location: window.location.pathname`, pero como esta landing es de una sola página ese valor iba a salir igual en los 4 botones (no serviría para nada en los reportes de GA). Se lo consulté y prefirió que usara el id de sección real en su lugar.
- También le pregunté si dejaba `contacto_whatsapp` conviviendo con el nuevo evento o lo reemplazaba del todo; eligió reemplazarlo en los 4 botones para no tener dos eventos duplicados en el mismo clic.
- Agregué `id="hero"` a la sección de Hero (antes no tenía id) para que el mismo mecanismo que ya usábamos (`closest('section[id]')`) pudiera identificarla.
- Probé en el preview local que los 4 botones disparan `whatsapp_click` con los valores esperados.
- **Ojo con esto:** en GA hay que buscar el evento nuevo como `whatsapp_click`, no `contacto_whatsapp` (que ya no se dispara más).

**Por qué lo hice:** Sabrina quería usar nombres de evento y parámetro específicos (`whatsapp_click`, `whatsapp_source`, `button_location`) que ya había definido en otra conversación sobre GA, en vez de los nombres genéricos (`contacto_whatsapp`, `event_label`) que veníamos usando.

---

### v1.13 — 27 de septiembre de 2026

**Qué hice:** Corregí la etiqueta roja de la esquina de las tarjetas de "Proyectos desarrollados" (`index.html`) para que no parezca un elemento clickeable aparte y no se desborde en celulares angostos.

**Detalle del cambio:**

- Le saqué la clase `shadow-ambient` a las dos etiquetas ("Mantenimiento y Estética Vehicular" y "Construcción en seco"): esa sombra ya la lleva la tarjeta completa (que sí es el `<a>` clickeable), y tenerla también en la etiqueta interna hacía que pareciera un botón separado dentro de la tarjeta.
- En mobile, reemplacé `whitespace-nowrap` por un ancho máximo (`max-w-[55%]`) que permite que el texto haga salto de línea si no entra, así no se corta ni se sale del borde de la tarjeta en pantallas de celular angostas. Desde `md` en adelante mantuve el comportamiento original (una sola línea, sin límite de ancho), porque ahí ya hay espacio de sobra.
- Recompilé `dist/output.css` con `npm run build` para que la clase arbitraria nueva (`max-w-[55%]`) quede incluida.

**Por qué lo hice:** Sabrina pidió sacar los "espacios que parecen clickeables pero no lo son" (mismo criterio que ya habíamos aplicado antes, ver historial de proyecto en memoria) y que el resultado se adapte bien a cualquier pantalla de celular.

---

### v1.14 — 4 de octubre de 2026

**Qué hice:** Le agregué animación a la imagen del Hero (`index.html`).

**Detalle del cambio:**

- Entrada al cargar la página: el marco de la imagen aparece desde la derecha con un leve zoom out (`@keyframes heroImageIn`, 0.9s, con 0.2s de demora para que primero se lea el titular).
- Después, la foto hace un efecto "Ken Burns" dentro del marco: un acercamiento lento de ida y vuelta (18s, `@keyframes heroKenBurns`). Como el contenedor tiene `overflow-hidden`, el zoom no se sale del marco.
- No le agregué efecto al pasar el mouse a propósito: la imagen no es clickeable y un hover invitaría a hacer clics muertos.
- Respeta `prefers-reduced-motion`: si el dispositivo pide reducir movimiento, la imagen se muestra quieta, sin animaciones.
- Es CSS propio dentro del `<style>` de `index.html`, así que no hizo falta recompilar Tailwind.

**Por qué lo hice:** Sabrina pidió darle algún efecto o animación a la imagen del Hero para que la portada tenga más vida.

---

### v1.15 — 4 de octubre de 2026

**Qué hice:** Le sumé a la imagen del Hero (`index.html`) un efecto que no invita al clic, y le saqué lo que sí lo hacía.

**Detalle del cambio:**

- Flotación suave (`@keyframes heroFloat`): el marco sube y baja 10px en un ciclo lento de 7s. Arranca cuando termina la animación de entrada. Es un movimiento automático que no reacciona al mouse, así que no se lee como botón.
- Le saqué la clase `shadow-ambient` al marco de la imagen: esa sombra la reservamos para elementos clickeables, y en una imagen estática la hacía parecer un botón.
- Respeta `prefers-reduced-motion` (ya cubierto por la regla de la v1.14).

**Por qué lo hice:** Sabrina pidió un efecto que no invite al clic, siguiendo el mismo criterio de evitar clics muertos.

---

### v1.16 — 5 de octubre de 2026

**Qué hice:** Saqué la sección "Antes / Después" (`#problema`) de `index.html`.

**Detalle del cambio:**

- Eliminé la sección completa (título "¿Cuánto te está costando no aparecer en Google?" y las tarjetas ANTES y DESPUÉS), que estaba entre "La demo gratuita es así" y "Sobre Mí".
- Borré la animación `.slide-in-left` (CSS, regla de `prefers-reduced-motion` y selector del `IntersectionObserver`), porque solo la usaban esas dos tarjetas.
- Ningún link del menú apuntaba a `#problema`, así que la navegación no cambia.
- En este PRD: saqué la sección del alcance y del flujo de conversión, marqué la 7.2 como eliminada, di de baja el RF-03 y adapté la HU-01 para que el problema lo comunique el Hero.

**Por qué lo hice:** Sabrina pidió quitar la sección.

---

### v1.17 — 5 de octubre de 2026

**Qué hice:** Le agregué una animación de entrada vertical a los 4 pasos de "La demo gratuita es así" (`index.html`).

**Detalle del cambio:**

- Nueva clase `.demo-step` en cada paso: arranca invisible y 40px más abajo, y al entrar en pantalla sube a su lugar con un fundido (0.6s).
- Retraso escalonado (0s, 0.15s, 0.3s, 0.45s) para que, si entran varios pasos juntos, aparezcan en orden de arriba hacia abajo.
- Reutiliza el mismo `IntersectionObserver` que ya animaba Proceso y Proyectos (se suma `.demo-step` al selector).
- Respeta `prefers-reduced-motion`: con esa opción activa, los pasos se muestran directamente sin animación.
- Es CSS propio en el `<style>` de `index.html`, no hizo falta recompilar Tailwind.

**Por qué lo hice:** Sabrina pidió que los pasos de la demo gratuita aparezcan con una animación vertical.

---

### v1.18 — 5 de octubre de 2026

**Qué hice:** Agregué una tercera tarjeta en "Proyectos desarrollados" (`index.html`) para Mombé (textiles artesanales), que está en desarrollo, y su página propia `proyecto-mombe.html`.

**Detalle del cambio:**

- Tarjeta igual a las de AR y JL: link a la página del proyecto, etiqueta roja "Textiles artesanales", círculo de logo, nombre y botón "Ver proyecto".
- Como todavía no tengo el logo, en el círculo (de la tarjeta y de la página) va la inicial "M" en naranja. Para la vista previa al compartir (`og:image`) uso el logotipo de Sabri Studios.
- `proyecto-mombe.html` usa la misma estructura que las otras páginas de proyecto, adaptada a un proyecto en curso:
  - El encabezado aclara que el proyecto está en desarrollo y que estamos en el paso 1.
  - El paso 1 (Diagnóstico) está marcado como actual: número en naranja con halo, etiqueta "Estamos acá" y animación de rebote.
  - Los pasos 2 y 3 aparecen "apagados" (opacidad baja) con la etiqueta "Próximamente".
  - En desktop, la línea que une los pasos está punteada y solo el tramo hasta el paso 1 se dibuja en naranja.
  - Como no hay sitio para visitar, el CTA final no tiene "Ver sitio web": invita directo a la demo por WhatsApp.
  - Mismo tracking (`whatsapp_click`, fuente de tráfico) que las otras páginas.
- Corrí `npm run build` para que se compilen las clases nuevas (`w-[18%]`, `border-dashed`).

**Por qué lo hice:** Sabrina pidió sumar Mombé como proyecto en curso, con el botón "Ver proyecto" y marcando dentro que estamos en el paso 1.

---

### v1.19 — 5 de octubre de 2026

**Qué hice:** Achiqué los espacios en blanco de la landing y de las páginas internas, para que no queden bloques vacíos grandes que den la impresión de ser clickeables.

**Detalle del cambio:**

- Hero (`index.html`): le saqué `md:min-h-screen`. En desktop dejaba unos 206px vacíos arriba y abajo del texto; ahora el alto lo define el contenido (padding de 48px). La separación entre texto e imagen pasó de 80px a 48px.
- Padding vertical de todas las secciones en desktop: de 80px (`md:py-section`) a 48px (`md:py-xl`). Entre una sección y otra pasan de 160px a 96px de aire. En mobile queda igual (32px).
- Separación entre el título de cada sección y su contenido: de 48px (`gap-xl`) a 32px (`gap-lg`) en Proyectos, Proceso, Demo gratuita y Preguntas frecuentes.
- Tarjeta de "Sobre Mí": padding interno en desktop de 48px a 32px.
- Pasos del Proceso en mobile: el margen extra entre pasos pasó de 32px a 8px.
- Footer: padding vertical de 48px a 32px.
- Apliqué el mismo criterio en `proyecto-ar-estetica-vehicular.html`, `proyecto-jl-construcciones-en-seco.html`, `proyecto-mombe.html` y `politica-de-privacidad.html`.
- Medido en el navegador a 1920px: el Hero pasó de 895px a 579px de alto y el resto de las secciones perdió entre 70 y 100px cada una.

**Por qué lo hice:** Sabrina pidió achicar los espacios en blanco para que no den la impresión de ser clickeables (mismo criterio de evitar clics muertos).

---

### v1.20 — 5 de octubre de 2026

**Qué hice:** Diferencié visualmente la sección "Proceso" de "Proyectos desarrollados" (`index.html`).

**Detalle del cambio:**

- "Proceso" ahora es una franja a todo el ancho con fondo azul de marca muy suave (`bg-brand-blue/5`) y bordes arriba y abajo (`border-y border-brand-border`).
- Antes las dos secciones compartían el mismo fondo crema y se leían como un solo bloque. Ahora la secuencia de fondos es: Hero (degradé) → Proyectos (crema) → Proceso (azul suave) → Demo gratuita (blanco).
- Para que el fondo ocupe todo el ancho, el ancho máximo y el padding lateral pasaron a un `<div>` interno; el `id="proceso"` sigue en la `<section>`, así que el menú y el tracking de scroll no cambian.
- Corrí `npm run build` para compilar la clase nueva.

**Por qué lo hice:** Sabrina pidió diferenciar Proyectos y Proceso con otro fondo o un divisor.

---

### v1.21 — 5 de octubre de 2026

**Qué hice:** Cambié el color de las etiquetas de rubro de los proyectos, de rojo (`#A10C10`) al azul de la marca (`bg-brand-blue`).

**Detalle del cambio:**

- Las 3 etiquetas de las tarjetas de "Proyectos desarrollados" en `index.html` ("Mantenimiento y Estética Vehicular", "Construcción en seco", "Textiles artesanales").
- Las etiquetas del encabezado de las 3 páginas de proyecto (`proyecto-ar-estetica-vehicular.html`, `proyecto-jl-construcciones-en-seco.html`, `proyecto-mombe.html`).
- El rojo venía del logo de AR Estética Vehicular y se había copiado a las demás tarjetas, pero no es parte de la paleta de Sabri Studios (azul `#1E3A5F`, naranja `#D97A3C`, neutro `#F5F3EF`) y se leía como alerta.
- Elegí azul y no naranja a propósito: el naranja es el color de los CTAs, y una etiqueta naranja se confundiría con un botón (clic muerto). Así "Ver proyecto" sigue siendo lo único naranja de cada tarjeta.

**Por qué lo hice:** Sabrina notó que las etiquetas rojas no iban con la identidad visual de la marca y pidió cambiarlas en todas las tarjetas de proyectos.

---

### v1.22 — 10 de octubre de 2026

**Qué hice:** Mejoré la experiencia en mobile y saqué espacios vacíos que se prestaban a clics muertos (las 5 páginas del sitio).

**Detalle del cambio:**

- Tarjetas de Proyectos: el alto mínimo del nombre (`min-h-[68px]`) ahora aplica desde `sm:`. En celular las tarjetas van de a una, así que ese alto solo dejaba un hueco vacío dentro de la tarjeta.
- Efectos de hover de las tarjetas (levantarse y brillo diagonal) envueltos en `@media (hover: hover)`. En celular el hover se queda "pegado" después de tocar y la tarjeta quedaba flotando.
- Hero: el espacio entre elementos de la columna de texto pasa de 32px a 24px en mobile (`gap-md md:gap-lg`).
- Proceso (`index.html` y 3 páginas de proyecto): saqué el `mt-2` extra entre pasos en mobile; la grilla ya los separa.
- Sobre Mí: el margen arriba del botón pasa de 32px a 8px en mobile.
- Botón flotante de WhatsApp: en mobile queda más pegado a la esquina (`bottom-4 right-4`) para tapar menos contenido; desde `md:` sigue igual. El footer suma padding abajo en mobile (`pb-20`) para que el botón no tape el link de Política de Privacidad.
- `touch-action: manipulation` en links, botones y preguntas frecuentes, para sacar el retraso del toque y el zoom por doble toque.
- Corrí `npm run build` para compilar las clases nuevas.

**Por qué lo hice:** Sabrina pidió mejorar la experiencia en mobile y eliminar los espacios que dan sensación de ser clickeables cuando no lo son.

---

### v1.23 — 10 de octubre de 2026

**Qué hice:** Apliqué tres mejoras a partir de las conclusiones de Clarity: carga más liviana, menos clics muertos en el menú y enlaces, y menos errores de JavaScript (las 5 páginas).

**Detalle del cambio:**

- **Retención / carga:** la fuente de íconos Material Symbols ahora pide solo los 11 íconos que usa el sitio (`icon_names=...`) en vez de la fuente completa, que pesa cientos de KB y bloquea el render de los íconos.
- **Clics muertos:**
  - El menú mobile se cierra al tocar fuera de él o con Escape; antes, tocar el contenido con el menú abierto no hacía nada.
  - `<html>` suma `scroll-pt-20` para que la barra fija no tape el título de la sección al navegar por anclas, y `motion-safe:scroll-smooth` para que el salto sea suave (respeta "reducir movimiento").
- **Errores de JavaScript:** el tráfico de redes sociales llega desde navegadores internos (Instagram, Facebook) que pueden bloquear `sessionStorage` o ser viejos.
  - `sessionStorage` va dentro de `try/catch`.
  - `catch {` pasó a `catch (e) {` y `?.` a `|| {}` por compatibilidad con navegadores viejos.
  - Si no existe `IntersectionObserver`, un reemplazo mínimo marca todo como visible.
  - Un error en cualquiera de estos puntos cortaba el resto del script (menú, animaciones y tracking de WhatsApp).
- Corrí `npm run build` para compilar las clases nuevas.

**Por qué lo hice:** Sabrina compartió tres conclusiones de Clarity (retención, dead clicks y errores JavaScript en sesiones desde redes sociales) y pidió aplicar mejoras.

---

### v1.24 — 14 de octubre de 2026

**Qué hice:** Sumé un segundo canal de contacto para quien prefiere una reunión: agenda de Google Calendar (citas), con un segundo CTA y la agenda embebida (solo `index.html`).

**Detalle del cambio:**

- **Segundo CTA en el Hero:** "Ver cómo funciona" (que bajaba a `#proceso`) pasó a ser "AGENDÁ UNA REUNIÓN", un botón outline azul que abre la agenda. Proceso sigue accesible desde el menú y el scroll.
- **Más puntos de entrada:** botón outline en "Sobre mí", link "agendar una reunión" junto al de WhatsApp en la caja del FAQ, link bajo el paso 1 de "La demo gratuita es así" y "Agendar reunión" en el footer (ícono `calendar_month`, sumado a `icon_names`).
- **Agenda embebida:** iframe de la página de citas bajo "O elegí tu horario acá mismo" en la sección de la demo, con `loading="lazy"` para no pesar en la carga inicial. Pensado para quien es visual y quiere ver los horarios disponibles.
- **CSP:** agregué `frame-src https://calendar.google.com` en `vercel.json`; sin eso, `default-src 'self'` bloqueaba el iframe.
- **Tracking:** evento `calendar_click` en GA con `calendar_source`, `button_location` y `traffic_source`, equivalente a `whatsapp_click`, para comparar canales.
- Usé el link directo de la agenda y no el script/CSS del widget de Google, para no sumar peso ni otro origen en `script-src`.
- Corrí `npm run build` para compilar las clases nuevas.

**Por qué lo hice:** Sabrina quiso ofrecer la reunión como alternativa al chat, tanto con un CTA como con la agenda visible.

---

### v1.25 — 14 de octubre de 2026

**Qué hice:** Agregué una cuarta tarjeta en "Proyectos desarrollados" (`index.html`), "Servicios AF", y su página propia `proyecto-web-servicios-profesionales.html`.

**Detalle del cambio:**

- La tarjeta repite el patrón de Mombé: etiqueta "Servicios profesionales", foto de portada en el círculo (`imagenes/servicios-af-portada.jpg`, recortada cuadrada y reducida de 10 MB a 23 KB; también es la imagen al compartir el link) y botón "Ver proyecto".
- La página sigue el formato de `proyecto-ar-estetica-vehicular.html` (proyecto terminado): los 3 pasos completos con el texto que dio Sabrina (de una landing en Lovable a una web completa, mejora de diseño respetando su paleta y despliegue en GitHub Pages) y CTA final "Ver sitio web" hacia `https://sabrinas01.github.io/serviciosaf/`, más "Quiero algo así para mi negocio".
- El link del sitio va sin los parámetros de tracking de Instagram (`utm_*`, `fbclid`) que traía la URL pegada.
- Corrí `npm run build`.

**Por qué lo hice:** Sabrina pidió sumar este proyecto como una card más en Proyectos, con el contenido de cada paso.

---

### v1.26 — 14 de octubre de 2026

**Qué hice:** Mejoré el tracking de GA4: una conversión única de contacto (`generate_lead`), medición de la agenda embebida, embudo por secciones y clics en proyectos.

**Detalle del cambio:**

- **`generate_lead`:** cada clic en WhatsApp o en la agenda manda además este evento recomendado de GA4, con `method` (`whatsapp` o `calendar`), `lead_source`, `button_location` y `traffic_source`. Va en `index.html`, las 4 páginas de proyecto y la política de privacidad (en la política y en los proyectos solo para WhatsApp). `whatsapp_click` y `calendar_click` se mantienen.
- **Agenda embebida:** `calendar_embed_view` (el iframe llegó a verse) y `calendar_embed_interaction` (clic dentro del iframe, aproximado: se detecta por la pérdida de foco de la ventana). **No se puede saber si alguien reservó**, porque el iframe es de Google. La interacción no cuenta como lead.
- **Embudo por secciones:** `section_view` con `section_name` (`hero`, `proyectos`, `proceso`, `demo_gratuita`, `sobre_mi`, `preguntas-frecuentes`) la primera vez que cada sección entra en pantalla (con un margen del 30% abajo, para secciones altas). `scroll_proceso` se mantiene por la métrica del PRD.
- **Proyectos:** `project_click` en cada tarjeta de `index.html` y `project_site_click` en "Ver sitio web" de las páginas de proyecto (AR, JL y Servicios AF; Mombé aún no tiene sitio). `project_name` sale del nombre del archivo (`proyecto-mombe.html` → `mombe`) en ambos.
- Unifiqué el envío en `index.html` con una función `enviarEvento` que agrega `traffic_source` y no falla si `gtag` no cargó. Sin clases nuevas, así que no hizo falta `npm run build`.
- **Verificación en navegador** (servidor local con el mismo CSP de `vercel.json`, sin GA/Clarity para no mandar eventos reales): el iframe de la agenda carga con `frame-src https://calendar.google.com`; `calendar_embed_view` y `calendar_embed_interaction` (una sola vez) se disparan; `whatsapp_click`, `calendar_click`, `generate_lead`, `project_click` y `project_site_click` salen con los parámetros esperados; la foto de Servicios AF carga. No se probó contra GA4 real (DebugView).
- Agregué `perfil (1).png` (foto original de 10 MB) al `.gitignore`.
- **Pendiente en GA4 (no se hace desde el código):** registrar las dimensiones personalizadas nuevas y marcar `generate_lead` como evento clave.

**Por qué lo hice:** Sabrina pidió mejorar el tema de GA4 a partir de una revisión del tracking existente.

---

### v1.27 — 14 de octubre de 2026

**Qué hice:** Alineé los botones "Reservá tu demo" y "Agendá una reunión" en el Hero y en Sobre mí (`index.html`).

**Detalle del cambio:**

- Medí los botones con tamaño real de pantalla: el alto ya era igual, pero en desktop el ancho no (en el Hero, 195 px contra 228 px; en Sobre mí, 215 px contra 228 px). En mobile ya estaban idénticos.
- Los contenedores de ambos pares pasaron de `sm:flex-row` a `sm:grid sm:grid-cols-2`: desde `sm` los dos botones comparten dos columnas del mismo ancho. En mobile siguen apilados y a todo el ancho.
- Verificado en 1280, 640 y 390 px de ancho. En Sobre mí los botones ahora ocupan todo el ancho de la columna de texto, por la grilla.
- Corrí `npm run build` para compilar las clases nuevas (`sm:grid`, `sm:grid-cols-2`).

**Por qué lo hice:** Sabrina pidió alinear los dos botones de contacto.

---

### v1.28 — 14 de octubre de 2026

**Qué hice:** Corregí el dominio de producción en todo el sitio y ordené el link de agenda en la caja del FAQ.

**Detalle del cambio:**

- **Dominio:** el `canonical`, `og:url`, `og:image`, `twitter:image`, el JSON-LD de `index.html`, `sitemap.xml`, `robots.txt`, `llms.txt`, el texto de la política de privacidad y el `README.md` apuntaban a `sabristudios.vercel.app`, un dominio que no existe (Vercel responde `DEPLOYMENT_NOT_FOUND`). La producción real es `web-sabristudios.vercel.app`. Reemplacé el dominio en los 10 archivos (0 apariciones del viejo). Antes, Google recibía como canónica una URL inexistente y las vistas previas al compartir el link no encontraban la imagen.
- **FAQ:** los links "Contactarme por WhatsApp" y "Agendar una reunión" quedan apilados en celular (sin la "o" suelta) y en fila con la "o" desde `sm`. El de la agenda ahora va subrayado para que se lea como clickeable (en azul oscuro parecía texto común).
- **Botones de Sobre mí:** se midieron y se sacaron capturas en producción (360 a 1280 px): ambos botones tienen el mismo tamaño. No se cambió nada.
- Corrí `npm run build`.
- **Pendiente:** `sitemap.xml` solo lista la página principal; faltan las 4 páginas de proyecto y la política de privacidad.

**Por qué lo hice:** al verificar el deploy vimos que el dominio del `canonical` no existía; Sabrina pidió corregirlo.

---

### v1.29 — 14 de octubre de 2026

**Qué hice:** Corregí el CSP que impedía que Google Analytics 4 recibiera datos, y alineé el JSON-LD del FAQ con el texto visible.

**Detalle del cambio:**

- **GA4 no recibía datos.** Al verificar Tiempo real (0 usuarios) interceptamos las llamadas de red en producción: gtag envía a `https://analytics.google.com/g/collect` y a `https://www.google.com/g/collect`, y el `connect-src` del CSP de `vercel.json` los bloqueaba (el comodín `*.analytics.google.com` no cubre `analytics.google.com` a secas, y `www.google.com` no estaba). Solo `www.google-analytics.com` estaba permitido. Es un problema anterior a los eventos nuevos: el CSP ya estaba así, así que es probable que GA4 nunca haya recibido datos de producción.
- **Corrección en `vercel.json`:**
  - `connect-src`: se suman `https://analytics.google.com`, `https://www.google.com` y `https://*.g.doubleclick.net`.
  - `img-src`: se suman `https://*.google-analytics.com`, `https://www.google.com` y `https://*.g.doubleclick.net`.
- **Verificación:** servidor local con el CSP exacto de `vercel.json`. Antes del arreglo, las dos llamadas fallaban con violación de `connect-src`. Después, `analytics.google.com/g/collect` responde y no hay violaciones, ni en la carga ni en los clics. Estos envíos de prueba llegaron a GA4 real (con hostname `localhost`).
- **FAQ:** el JSON-LD (`FAQPage`) decía "si estás en Pocito" y el texto visible "Pocito o en el gran San Juan" (cambio hecho por Sabrina en `163f7c5`). Los igualé.
- **Pendiente:** el CSP solo se aplica después de mergear a `master` y desplegar; recién ahí GA4 va a recibir datos de producción.

**Por qué lo hice:** Sabrina pidió seguir con GA4 y corregir el FAQ; el diagnóstico de Tiempo real vacío llevó a encontrar el bloqueo del CSP.

---

### v1.30 — 19 de octubre de 2026

**Qué hice:** Revisé la configuración de GA4 en el código y unifiqué el envío de `scroll_proceso`.

**Detalle del cambio:**

- **Revisión:** el ID `G-HLPQM5HE7G` está en las 6 páginas HTML, el CSP permite los dominios de envío y todas las páginas (incluida la política de privacidad) definen `fuenteTrafico` y mandan `traffic_source`.
- **Cambio en `index.html`:** `scroll_proceso` usaba `gtag` directo; ahora usa `enviarEvento`, igual que los demás eventos. Se manda lo mismo (`event_category` y `traffic_source`). Sin clases nuevas, no hizo falta `npm run build`.
- **Pendiente en el panel de GA4 (no se hace desde el código):** registrar como dimensiones personalizadas de alcance evento `whatsapp_source`, `lead_source`, `traffic_source`, `button_location`, `section_name`, `project_name` y `calendar_source`; marcar `generate_lead` como evento clave; verificar Tiempo real una vez desplegado el CSP de la v1.29.
- **Consentimiento:** no hay Consent Mode ni banner; solo haría falta si hay público de la UE.

**Por qué lo hice:** Sabrina pidió revisar la configuración de GA4.

---

### v1.31 — 19 de octubre de 2026

**Qué hice:** Saqué el link "Agendar reunión" del footer de `index.html`.

**Detalle del cambio:**

- **Footer:** quedan Instagram, LinkedIn y Email. La opción de agendar sigue disponible en la sección de contacto y en el calendario embebido.
- Sin clases nuevas, no hizo falta `npm run build`.

**Por qué lo hice:** Sabrina pidió quitar ese link del footer.

---

### v1.32 — 19 de octubre de 2026

**Qué hice:** Quité la agenda de Google Calendar embebida de `index.html`.

**Detalle del cambio:**

- **`index.html`:** eliminé el bloque "O elegí tu horario acá mismo" (título + iframe) de la sección de demo y el JS de `calendar_embed_view` y `calendar_embed_interaction`.
- **`vercel.json`:** saqué `frame-src https://calendar.google.com` del CSP, ya que no hay iframes.
- Los botones "Agendá una reunión" que abren la agenda en otra pestaña (y `calendar_click`) siguen igual. Sin clases nuevas, no hizo falta `npm run build`.

**Por qué lo hice:** Sabrina pidió quitar la página de citas embebida.

---

### v1.33 — 19 de octubre de 2026

**Qué hice:** Agregué el design system de la marca a la documentación.

**Detalle del cambio:**

- **`documentación/Design System.md` (nuevo):** copia en español del [artifact del design system](https://claude.ai/artifact/RV4FVSzBaZLFuKDNCeRWLc): fundamentos de contenido y visuales, tokens (color con sus contrastes, tipografía, espaciado, radios, sombras), iconografía, logo, componentes y aplicaciones. La fuente de verdad sigue siendo el artifact.
- **Sección 8.2 de este PRD y `README.md`:** agregué el enlace al nuevo documento.
- **Diferencia detectada, sin resolver:** el design system pide todo en Space Mono; la sección 8.2 decía Space Grotesk para títulos y cuerpo. No toqué el sitio: falta decidir cuál manda.
- Sin cambios de código ni clases nuevas, no hizo falta `npm run build`.

**Por qué lo hice:** Sabrina pidió usar este design system y agregarlo a la documentación.

---

### v1.34 — 19 de octubre de 2026

**Qué hice:** Dejé asentado que el design system manda y corregí la tipografía en la documentación.

**Detalle del cambio:**

- **Tipografía:** el design system define todo en Space Mono. El sitio ya lo cumple (`tailwind.config.js` y las 6 páginas cargan solo Space Mono), así que no hubo cambios de código: lo que estaba mal era la sección 8.2 de este PRD, que decía Space Grotesk. Corregida.
- **Pendiente detectado:** el design system admite solo pesos 400 y 500, y el sitio carga `wght@400;500;700` y usa `font-bold` en `index.html`, `politica-de-privacidad.html` y las 4 páginas de proyecto (más un `font-semibold` en `index.html`). Falta decidir si se pasan a `font-medium`.
- `Design System.md`: actualizada la sección "Diferencias con el sitio actual".

**Por qué lo hice:** Sabrina indicó que el design system manda.

---

### v1.35 — 19 de octubre de 2026

**Qué hice:** Pasé los pesos tipográficos al máximo que admite el design system (500).

**Detalle del cambio:**

- **Las 6 páginas HTML:** `font-bold` y `font-semibold` pasan a `font-medium` (logo del header, botones del Hero, badges de proyectos, cita de la demo y aviso del FAQ) y la carga de Space Mono baja de `wght@400;500;700` a `wght@400;500`.
- `npm run build` corrido; `dist/output.css` está ignorado por git, así que no entra al commit.
- Resuelve el pendiente de la v1.34. Cambio visible: títulos y botones que estaban en negrita ahora quedan en peso medio.

**Por qué lo hice:** Sabrina aprobó adoptar los pesos del design system.

---

### v1.36 — 19 de octubre de 2026

**Qué hice:** Alineé los botones y el naranja de hover con el design system.

**Detalle del cambio:**

- **Token de hover:** en `tailwind.config.js`, `brand-orange-hover` valía `#4A90D9` (el azul secundario); ahora vale `#C66A2E`, el naranja de hover del sistema. Los `#C66A2E` y `#D97A3C` escritos a mano en las 6 páginas pasaron a `hover:bg-brand-orange-hover` y `bg-brand-orange`.
- **Texto del botón primario:** de `text-white` a `text-background` (`gris-neutro`, `#F5F3EF`) en los botones naranja (Hero, tarjetas de proyectos y CTA de las páginas de proyecto). Los círculos numerados de pasos no son botones y quedaron igual.
- **Botón secundario ("Agendá una reunión"):** fondo `gris-neutro`, borde de 1px (antes 2px) y hover `gris-claro` (`brand-border`), en lugar de pasar a azul sólido con texto blanco. Ajusté el padding vertical en 1px por lado para que mida lo mismo que el primario.
- Hubo que correr `npm run build` por las clases nuevas.

**Por qué lo hice:** Sabrina pidió aplicar los puntos 1, 2 y 3 de lo pendiente del design system.

---

### v1.37 — 19 de octubre de 2026

**Qué hice:** Pasé los íconos a Tabler Icons y renombré los tokens de color con los nombres del design system.

**Detalle del cambio:**

- **Íconos:** de Material Symbols (fuente de Google) a Tabler Icons en estilo outline. Armé las 11 máscaras SVG que usa el sitio en `src/input.css` (clases `ti ti-nombre`, color con `currentColor`), así que no se carga ninguna fuente ni dominio externo y el CSP no cambia. Equivalencias: `menu`→`menu-2`, `close`→`x`, `arrow_back`→`arrow-left`, `arrow_forward`→`arrow-right`, `open_in_new`→`external-link`, `photo_camera`→`camera`, `work`→`briefcase`, `mail`→`mail`, `construction`→`tools`, `expand_more`→`chevron-down` y `check_circle`→`circle-check`. Salieron el `<link>` de Material Symbols y su bloque de estilos de las 6 páginas. El botón del menú móvil ahora cambia la clase (`ti-menu-2` / `ti-x`) en vez del texto.
- **Tokens:** `brand-blue`→`azul-primario`, `brand-orange`→`naranja`, `brand-orange-hover`→`naranja-hover`, `brand-secondary-blue`→`azul-secundario`, `brand-border`→`gris-claro`, `input-border`→`gris-medio`, `text-strong`→`texto-fuerte`, y `bg-background`/`text-background`→`bg-gris-neutro`/`text-gris-neutro` (se agregó `gris-neutro`; `background` sigue definido). Los tokens tipo Material de la web no se tocaron.
- **Verificación en navegador** (servidor local): las máscaras de los 19 íconos de `index.html` se aplican, el botón primario sale `rgb(217,122,60)` con texto `rgb(245,243,239)`, y el menú móvil alterna entre `menu-2` y `x`. No revisé a ojo cada página de proyecto ni probé con el CSP de Vercel.
- Corrí `npm run build`.

**Por qué lo hice:** Sabrina pidió aplicar los puntos 4 y 2 de lo pendiente del design system.

---

### v1.38 — 19 de octubre de 2026

**Qué hice:** Agregué la sombra `shadow-media` del design system y la apliqué solo en elementos clickeables.

**Detalle del cambio:**

- **Token:** `shadow-media` (`0 4px 12px rgba(30, 58, 95, 0.12)`) en `tailwind.config.js`, junto a `shadow-ambient` (que equivale a `shadow-leve`).
- **Dónde va:** en el hover de los botones primarios y de las tarjetas de proyectos (`hover:shadow-media`, con `transition-all` para que la sombra anime) y fija en el botón flotante de WhatsApp. Reemplaza a `shadow-lg`, que no es del sistema.
- **Dónde no va:** en bloques estáticos, como pide la regla de `shadow-ambient` solo en lo clickeable. Por eso `shadow-leve` no se agregó a cards estáticas.
- **Logo:** Sabrina sube los SVG ella misma, queda fuera de este cambio.
- Corrí `npm run build`. No lo revisé en el navegador.

**Por qué lo hice:** Sabrina pidió aplicar `shadow-media` solo en lo clickeable.

---

### v1.39 — 19 de octubre de 2026

**Qué hice:** Usé los logos SVG del design system, que Sabrina subió a `documentación/`.

**Detalle del cambio:**

- **Archivos:** moví los 9 SVG a `imagenes/` con los nombres del design system (`favicon-web`, `isotipo-full-color`, `isotipo-monocromatico`, `isotipo-negativo`, `isotipo-outline` y `logotipo-horizontal-full-color`, `-monocromatico`, `-negativo`, `-outline`).
- **Uso:** el logotipo horizontal full color reemplaza al JPG en el header y el footer de las 6 páginas. `favicon-web.svg` es el favicon (el JPG queda como respaldo para navegadores sin favicon SVG).
- **Se mantienen en JPG:** `og:image`, `twitter:image` y el `logo` del JSON-LD, porque las redes y los buscadores no siempre aceptan SVG.
- **Ojo:** el texto del SVG pide `Inter` / `Space Grotesk` y, dentro de un `<img>`, se dibuja con la fuente del sistema (no Space Mono). Para respetar la marca, habría que convertir el texto a trazados en el diseño original.
- Revisé el header de `index.html` en el navegador local. Sin clases nuevas, no hizo falta `npm run build`.

**Por qué lo hice:** Sabrina subió los SVG para aplicarlos.

---

### v1.40 — 19 de octubre de 2026

**Qué hice:** Configuré el consentimiento de cookies (Consent Mode v2) solo para visitas del Espacio Económico Europeo, Reino Unido y Suiza.

**Detalle del cambio:**

- **GA4:** en las 6 páginas, antes de `gtag('js')`, `gtag('consent', 'default', …)` deniega `analytics_storage`, `ad_storage`, `ad_user_data` y `ad_personalization` con el parámetro `region` (EEE + GB + CH). Fuera de esos países el comportamiento no cambia y no se pierden datos.
- **`api/region.js` (nuevo):** función de Vercel que lee `x-vercel-ip-country` y devuelve solo `{ pedirConsentimiento: true/false }`, sin cache y sin guardar el país.
- **`consentimiento.js` (nuevo, cargado con `defer` en las 6 páginas):** si no hay elección guardada, consulta `/api/region`; si la visita es de la zona, muestra un aviso con los botones RECHAZAR y ACEPTAR con el mismo peso visual. La elección se guarda en `localStorage` y se manda a GA4 (`consent update`) y a Clarity (`consentv2`). Si no puede saber el país, no muestra nada.
- **Política de privacidad:** la sección 5 explica el aviso e incluye el botón "Cambiar preferencias de cookies"; fecha de actualización al 19 de octubre de 2026.
- **Tailwind:** se sumó `consentimiento.js` a `content`, el token `shadow-fuerte` y se corrió `npm run build`.
- **Verificación local:** el aviso se ve bien, rechazar guarda `denied` y dispara `consent update`, y la función devuelve `true` para DE y GB y `false` para AR y sin país. **No probé `/api/region` desplegada en Vercel** ni con una visita real de la UE.
- **Limitación:** Microsoft Clarity arranca antes de saber el país, así que no se le puede negar el consentimiento desde el primer instante; se le avisa apenas se sabe la región. Para Clarity conviene también revisar su propio panel de consentimiento.

**Por qué lo hice:** Sabrina no sabe si tiene público de la UE y pidió dejarlo configurado por si acaso.

---

### v1.41 — 19 de octubre de 2026

**Qué hice:** Unifiqué el formato de los dos botones de contacto del Hero y de "Sobre mí" ("Reservá tu demo" y "Agendá una reunión").

**Detalle del cambio:**

- **Mismo formato:** los dos son botones de contorno, con borde de 1px, fondo transparente y el mismo alto. Cada uno mantiene su color: "Reservá tu demo" en `naranja` y "Agendá una reunión" en `azul-primario`.
- **Hover:** el botón se rellena con su color sólido y el texto pasa a `gris-neutro`, con `shadow-media`. Se sacó `shadow-ambient` en reposo porque un botón transparente con sombra se ve raro.
- **Alcance:** solo `index.html` (Hero y Sobre mí). Los CTA de las páginas de proyecto y el botón de la política de privacidad no se tocaron.
- **Se aparta del design system:** el sistema define el botón primario con relleno `naranja`. Además, el texto `naranja` sobre `gris-neutro` da 2.79:1, por debajo de 4.5:1 para texto chico.
- Corrí `npm run build` y lo revisé en el navegador local, en reposo y con hover sobre el botón naranja.

**Por qué lo hice:** Sabrina pidió que ambos botones tengan el mismo formato, con fondo transparente y relleno sólido al pasar el cursor.

---

### v1.42 — 19 de octubre de 2026

**Qué hice:** Definí la acción principal y la secundaria, sumé "Reservá tu demo" en la barra de navegación del celular, acorté el recorrido hasta el contacto y revisé ortografía, semántica y sintaxis.

**Detalle del cambio:**

- **Jerarquía de botones:** acción principal "Reservá tu demo" (relleno `naranja`, texto `gris-neutro`, hover `naranja-hover`, como define el design system) y acción secundaria "Agendá una reunión" (contorno `azul-primario`, hover con relleno sólido). Reemplaza a la v1.41, donde los dos eran de contorno. Aplica en Hero, Sobre mí y la nueva fila de la sección de la demo.
- **Barra de navegación (mobile):** botón "Reservá tu demo" junto al menú hamburguesa, en las 6 páginas (`utm_medium=cta_nav`). El seguimiento de GA4 ahora marca esos clics con `whatsapp_source: nav` en vez de `floating`.
- **Recorrido más corto:** en "La demo gratuita es así" se fusionaron los pasos 1 y 2 (de 4 a 3 pasos) y se agregó una fila con los dos botones al final de la sección (`utm_medium=cta_demo`), para contactar justo después de entender qué pasa en la demo.
- **Ortografía y redacción (index):** "Informatica" → "Informática", "páginas webs" → "páginas web", "lista/o" → "querés"; coma en el titular ("…en Google, no existe"); "clientes encontrando" → "clientes que encuentran"; "gran San Juan" → "Gran San Juan"; "1-2 semanas" → "1 y 2 semanas"; "post-entrega" → "después de la entrega"; "GRATIS" → "gratis por 12 meses"; "feedback" → "devolución"; paso 4 de la demo, que era un fragmento, ahora es una oración completa. El JSON-LD del FAQ queda igual al texto visible (se quitó "Transparencia total.").
- **Ortografía y redacción (proyectos):** "que use" → "que uso", "recuperado" → "recuperación", "direccionar a… a que" → "dirigir a… a", "potenciar" → "reforzar" (palabra que el design system evita), "como trabaja" → "cómo trabaja", "landing" → "página" y "desplegar" → "publicar" en Servicios AF, y concordancias en JL.
- **Verificación:** en un servidor local, el botón del menú móvil mide 168×30 px y no desborda a 390 px de ancho; el hero muestra el botón principal relleno. Se corrió `npm run build`. No revisé en el navegador cada página de proyecto.
- **Incidente:** un error de mi script dejó vacío `proyecto-mombe.html`; lo restauré desde git y reapliqué los cambios del día. Verificado: la página tiene su tamaño normal y los 3 cambios presentes.

**Por qué lo hice:** Sabrina aprobó las sugerencias de UX y pidió definir la acción principal y la secundaria, el botón en el celular, acortar el recorrido y revisar el texto.

---

### v1.43 — 19 de octubre de 2026

**Qué hice:** Apliqué las mejoras de UX de la crítica: contraste del texto naranja, etiquetas de 12px, pista de precio, objetivos táctiles de 44px, foco visible y consistencia de colores y botones.

**Detalle del cambio:**

- **Contraste (naranja en texto chico):** el naranja sobre fondo claro da 2.79:1. Los textos chicos pasaron a `azul-primario` y los links, con subrayado y hover `azul-secundario`: etiqueta "El costo de la invisibilidad", links de la demo y del FAQ, links de la política de privacidad y la etiqueta "Estamos acá" de Mombé. El naranja sigue en texto grande (titular, números de pasos, la "M"), relleno de botones e íconos. **Se aparta del design system**, que define los links de texto en `naranja`; el valor de la marca no se tocó.
- **Etiquetas de proyectos:** de `text-[10px]` a `text-xs` (12px).
- **Pista de precio:** nueva pregunta "¿Cuánto cuesta?" en el FAQ (y en el JSON-LD, que sigue igual al texto visible). Dice que el precio depende del negocio, se define juntos después del diagnóstico y que la demo es gratuita y sin compromiso. Texto redactado por mí a partir de lo que ya decía el sitio; Sabrina debe confirmarlo.
- **Objetivos táctiles de 44px (mobile):** botón "Reservá tu demo" de la barra con `min-h-[44px]`, botón de menú con `p-[10px]` (44×46) y links del menú desplegable con `py-[15px]`.
- **Foco visible:** en `src/input.css`, `a`, `button` y `summary` muestran un contorno de 2px `azul-primario` con separación de 2px al navegar con teclado.
- **Consistencia:** el texto sobre fondos `azul-primario` y `naranja` pasó de `text-white` a `gris-neutro` (el botón verde flotante de WhatsApp conserva el blanco), y el botón secundario "Quiero algo así para mi negocio" de las páginas de proyecto pasó a contorno azul con relleno al hover, igual que "Agendá una reunión".
- **Verificación en navegador local:** etiquetas a 12px, botón de la barra de 44px sin desborde a 390 px, FAQ con 7 preguntas, JSON-LD válido con 7 entradas y foco con Tab: `solid 2px rgb(30, 58, 95)` con separación de 2px. Se corrió `npm run build`. No revisé a ojo cada página de proyecto.

**Por qué lo hice:** Sabrina pidió ejecutar los puntos 1, 2, 4, 5, 6 y 7 de las mejoras de UX.

---

### v1.44 — 19 de octubre de 2026

**Qué hice:** Marqué a Mombé como "En desarrollo" y saqué la pregunta de precio del FAQ.

**Detalle del cambio:**

- **Mombé en desarrollo:** la tarjeta de `index.html` muestra la etiqueta "En desarrollo" (contorno naranja, texto `azul-primario`, ícono de herramientas, igual que "Estamos acá" de su página) y el botón dice "Ver avance" en vez de "Ver proyecto". En `proyecto-mombe.html` la etiqueta del encabezado dice "Textiles artesanales · En desarrollo".
- **Sin precio en la web:** se quitó "¿Cuánto cuesta?" del FAQ y del JSON-LD (que vuelve a tener 6 preguntas, iguales al texto visible). Esto revierte esa parte de la v1.43. La sección 7.8 "Pricing" y los pendientes de precio quedan descartados. En la demo se sigue conversando "cómo es el trabajo, los plazos y la inversión" (paso 3), sin mostrar cifras.
- Corrí `npm run build` y lo revisé en el navegador local: la tarjeta se ve bien, el FAQ tiene 6 preguntas y el JSON-LD es válido.

**Por qué lo hice:** Sabrina pidió marcar que Mombé está en desarrollo y no mostrar precio en la web.

---
### v1.45 — 19 de octubre de 2026

**Qué hice:** Reescribí el texto de "Sobre mí" con la opción B, centrada en el diagnóstico.

**Detalle del cambio:**

- Nuevo párrafo: "Hago páginas web con un paso previo que para mí es clave: el diagnóstico. Primero entiendo tu negocio y recién después diseño. Así la web no queda linda y vacía, queda con un objetivo claro. Trabajo online o, si estás en Pocito o en el Gran San Juan, en persona y con cita. Soy estudiante de Informática y trabajo con honestidad: te muestro cada avance y te explico cada decisión."
- Se cambió "que casi nadie hace" por "que para mí es clave", para no afirmar una comparación que no se puede respaldar. El título y la frase de cierre ("Si querés mejorar tu presencia online, hablemos.") y los botones no se tocaron.

**Por qué lo hice:** Sabrina eligió la opción B para "Sobre mí".

---
### v1.46 — 19 de octubre de 2026

**Qué hice:** Quité el botón secundario "Agendá una reunión" de la sección "Sobre mí" y dejé solo el principal.

**Detalle del cambio:**

- En `index.html` queda solo "¡Reservá tu demo!" en "Sobre mí" (el contenedor pasó de grilla de 2 columnas a una fila simple). "Agendá una reunión" sigue en el Hero, en la sección de la demo, en el link del paso 1 y en el FAQ.
- Corrí `npm run build`.

**Por qué lo hice:** Sabrina decidió dejar solo la acción principal en "Sobre mí" para bajar la repetición de botones.

---

### v1.47 — 19 de octubre de 2026

**Qué hice:** Revisé las imágenes nuevas que subió Sabrina a `imagenes/`, conservé la que sirve y eliminé el resto.

**Detalle del cambio:**

- **Subidas:** 10 PNG (`Code_Generated_Image*`) y 4 SVG (`gemini-svg*`).
- **Se usa:** `Code_Generated_Image (9).png` (isotipo de 32×32 con fondo transparente) pasó a `imagenes/favicon-32.png` y es el favicon de respaldo en las 6 páginas, en lugar de `FAVICON WEB.jpg` (que se eliminó). El favicon principal sigue siendo `favicon-web.svg`.
- **Se eliminaron:** los otros 9 PNG, que eran las mismas variantes de logo que ya están en SVG (los dos de "logotipo outline" eran idénticos) y que el sitio no usa, y los 4 `gemini-svg*`: traen una etiqueta `<style>` rota y piden `Space Mono`, que dentro de un `<img>` no se carga y el navegador reemplaza por la monoespaciada del sistema (cambia según el dispositivo).
- **No se tocó:** `LOGOTIPO_HORIZONTAL_FULL_COLOR.jpg` sigue en `og:image`, `twitter:image` y el JSON-LD (los PNG tenían fondo transparente y las redes pueden mostrarlo negro).
- **Archivos viejos sin uso (a decidir):** `imagen mia de frente.png` (4,5 MB) y `hero-presencia-online-google.jpg` no los usa ninguna página.

**Por qué lo hice:** Sabrina pidió subir las imágenes nuevas y eliminar las que no sirven.

---
### v1.48 — 19 de octubre de 2026

**Qué hice:** Eliminé dos imágenes que ninguna página usa.

**Detalle del cambio:**

- Se borraron `imagenes/imagen mia de frente.png` (4,5 MB) e `imagenes/hero-presencia-online-google.jpg` (la foto de laptop que la v1.3 reemplazó). Ninguna página ni el `manifest.json` las referencian; siguen en el historial de git por si hacen falta.

**Por qué lo hice:** Sabrina pidió borrarlas.

---

### v1.49 — 19 de octubre de 2026

**Qué hice:** Reemplacé los 4 logotipos horizontales SVG por los nuevos de Sabrina, con el texto convertido a trazados, y eliminé el resto de lo que subió.

**Detalle del cambio:**

- **Se usan:** los 4 SVG nuevos (full color, monocromático, negativo y outline), copiados a `imagenes/logotipo-horizontal-*.svg` con los mismos nombres que ya tenían, así las 6 páginas los toman sin tocar HTML. El texto "Sabri Studios" ahora es un trazado en Space Mono, por lo que ya no depende de la fuente del dispositivo (resuelve el pendiente de los logos).
- **Limpieza:** a los SVG se les quitó el bloque `<metadata>` (manifiesto de procedencia, unos 7 KB cada uno); pesan ~7 KB en vez de ~14 KB.
- **Se eliminaron:** los 4 PNG de 480×160 (`*_480x160.png`): son los mismos logos con fondo transparente, y el sitio usa los SVG; `og:image` y el JSON-LD siguen con el JPG por el fondo opaco.
- Revisé los 4 SVG en el navegador local (sobre fondo blanco y azul): se ven bien y con la tipografía de la marca.

**Por qué lo hice:** Sabrina subió imágenes nuevas y pidió usar las necesarias y borrar las demás.

---

### v1.50 — 19 de octubre de 2026

**Qué hice:** Agrandé el logo del header y del footer en las 6 páginas.

**Detalle del cambio:**

- **Header:** el logotipo horizontal pasa de 32 px de alto (`h-8`) a 40 px en celular (`h-10`) y 64 px desde `md` (`md:h-16`). En celular no se puede crecer más sin que el logo, el botón "Reservá tu demo" y el menú dejen de entrar en 360 px de ancho; para ganar ese espacio, el padding horizontal del botón de la barra pasa a `px-3` en celular (`sm:px-sm` desde `sm`).
- **Footer:** de `h-8` a `h-14` (56 px).
- Verificado en el navegador local: a 360 px no hay desborde horizontal y el botón de la barra sigue midiendo 44 px de alto; en escritorio el logo se ve claramente más grande. Se corrió `npm run build`.

**Por qué lo hice:** Sabrina pidió que el logo se vea más grande.

---
### v1.51 — 19 de octubre de 2026

**Qué hice:** Activé la protección de la rama `master` en GitHub.

**Detalle del cambio:**

- **Reglas activas:** hay que pasar por pull request para llegar a `master` (con 0 aprobaciones requeridas, porque Sabrina es la única persona que trabaja en el repositorio), y no se permite force push ni borrar la rama.
- **Administradores:** la regla no se les aplica (`enforce_admins` desactivado), así que en una emergencia se puede saltar. Tampoco se exige historial lineal ni commits firmados.
- **Cómo se ve en el flujo:** no cambia. Se sigue trabajando en `develop` y se mergea con PR hacia `master`. Ya no se puede subir directo a `master`.
- **Check de Vercel descartado:** se probó exigir que el check `Vercel` esté en verde, pero los despliegues de prueba de `develop` salen siempre en `CANCELED` (Vercel los cancela antes de construir, sin registros: 7 de 7), así que bloqueaba todos los PR. Se quitó esa exigencia. Si más adelante se cambia el ajuste de Vercel para que `develop` construya, se puede volver a exigir.
- Se hizo desde la API de GitHub (`gh api`); no hay cambios de código ni hizo falta `npm run build`.

**Por qué lo hice:** Sabrina pidió proteger la rama de producción.

---
### v1.52 — 19 de octubre de 2026

**Qué hice:** En celular, la etiqueta de rubro de las tarjetas de "Proyectos desarrollados" ocupa todo el ancho de la tarjeta y ya no tapa el logo.

**Detalle del cambio:**

- **Celular:** la etiqueta pasó de `absolute` en la esquina (con `max-w-[55%]`, que en "Servicios profesionales" se partía en dos líneas y pisaba el círculo del logo) a un bloque en el flujo normal, `w-full` y centrado, arriba de la tarjeta. Como ya no flota, no puede solaparse con el logo.
- **Escritorio (`md`):** queda igual que antes, en la esquina superior derecha (`md:absolute md:top-2 md:right-2 md:w-auto`, texto a la derecha).
- El margen superior del logo (`mt-6`) pasó a aplicar solo desde `md`; en celular lo separa el `gap` de la tarjeta.
- Verificado en el navegador local a 360 px y 320 px, en las 4 tarjetas: la etiqueta ocupa el ancho interno de la tarjeta (236 px y 202 px) y no se solapa con el logo, incluso cuando el texto se parte en dos líneas ("Mantenimiento y Estética Vehicular" a 320 px). Se corrió `npm run build`.
- **Detalle aparte, sin cambiar:** en ventanas de alrededor de 334 px el botón "Reservá tu demo" de la barra se parte en dos líneas.

**Por qué lo hice:** Sabrina pidió que la etiqueta ocupe todo el ancho de la tarjeta y no tape el logo.

---
### v1.53 — 19 de octubre de 2026

**Qué hice:** Ajusté el botón "Reservá tu demo" de la barra de navegación para que no se parta en dos líneas en celulares angostos.

**Detalle del cambio:**

- **Botón:** `whitespace-nowrap` y texto de 12 px (`text-xs`) por debajo de 360 px de ancho; desde 360 px vuelve al tamaño del sistema (`min-[360px]:text-label-cta`). Antes, en ventanas de unos 334 px, el texto se partía en dos líneas.
- **Logo de la barra:** por debajo de 360 px baja de 40 px a 36 px de alto (`h-9 min-[360px]:h-10`), para que logo, botón y menú sigan entrando. Desde `md` sigue en 64 px.
- Aplica en las 6 páginas.
- Verificado en el navegador local en `index.html`, `proyecto-mombe.html` y `politica-de-privacidad.html` a 320, 334, 360, 375, 390 y 412 px: el botón mide 44 px de alto en una sola línea (134 px de ancho por debajo de 360 y 160 px desde 360), sin desborde horizontal y sin que se toquen logo, botón y menú. Se corrió `npm run build`.

**Por qué lo hice:** Sabrina pidió ajustar ese detalle, que se vio al revisar la etiqueta de las tarjetas de proyectos.

---
### v1.54 — 19 de octubre de 2026

**Qué hice:** Agregué el token `naranja-texto` (`#B05218`) y lo apliqué al texto chico en naranja sobre fondo claro.

**Detalle del cambio:**

- **Token:** en `tailwind.config.js`, junto a `naranja` y `naranja-hover`. Sabrina lo pidió como `brand-orange-text`; como esos nombres `brand-*` ya se renombraron a los del design system en la v1.37, lo llamé `naranja-texto`. Contraste: 4.66:1 sobre `gris-neutro` y 5.16:1 sobre blanco (el `naranja` da 2.79:1 y 3.09:1), así que pasa 4.5:1 para texto chico. Sobre `azul-primario` da 2.23:1, por eso no se usa ahí.
- **Dónde se usa (6 lugares):** el link "Más información" del aviso de cookies (`consentimiento.js`, texto chico sobre blanco) y el hover de "Volver a proyectos" / "Volver al inicio" en la política de privacidad y las 4 páginas de proyecto.
- **Dónde no se usa:** donde el naranja es relleno (botones, círculos de pasos con número, `bg-naranja`), sobre azul, en íconos, ni en texto grande: el titular "no existe", la "M" de Mombé, los números de los pasos y el hover de las preguntas del FAQ (24 px). Los textos y links chicos que en la v1.43 pasaron a `azul-primario` se dejaron en azul: no había texto chico en `naranja` en esos lugares.
- `Design System.md`: nueva fila `naranja-texto` en la tabla de colores y su contraste.
- Corrí `npm run build`; la clase compila a `rgb(176 82 24)`.

**Por qué lo hice:** Sabrina pidió sumar ese token y usarlo en el texto naranja chico sobre fondo claro.

---

### v1.55 — 20 de octubre de 2026

**Qué hice:** Corregí la fuente de tráfico (`traffic_source`) en las 6 páginas HTML, a partir de una revisión de GA4 hecha sobre el sitio publicado.

**Detalle del cambio:**

- **Problema:** el valor se guardaba en `sessionStorage` la primera vez y nunca se pisaba. Si la persona ya tenía una visita guardada en la pestaña (por ejemplo `direct`) y entraba de nuevo con un link con `?utm_source=...`, los eventos salían con el valor viejo. Lo reproduje en producción: entré a `?utm_source=revision_ga4` y el evento mandó `direct`.
- **Arreglo:** si la URL trae `utm_source`, ese valor manda y se vuelve a guardar. Si no lo trae, se mantiene el valor guardado (así una visita que pasa de la landing a un proyecto conserva su fuente original); y si no hay ninguno, se detecta por el `referrer`, como antes.
- **Gmail:** el chequeo de `google_organic` aceptaba cualquier subdominio de Google, por lo que un clic desde un mail en Gmail (`mail.google.com`) se contaba como búsqueda orgánica. Ahora solo cuenta `google.*` (con o sin `www`); Gmail queda como `referral_mail.google.com`.
- **Dónde:** `index.html`, las 4 páginas de proyecto y `politica-de-privacidad.html` (el mismo bloque estaba repetido en las seis).
- Probé la lógica aislada: primera visita `direct`, luego `?utm_source=instagram` pasa a `instagram`, y una navegación posterior sin UTM mantiene `instagram`. `google.com` y `google.com.ar` dan `google_organic`, `l.instagram.com` da `instagram` y `mail.google.com` da `referral_mail.google.com`. Sin clases nuevas, así que no hizo falta `npm run build`.
- **Quedó sin tocar de la revisión:** `scroll_proceso` y `section_view` de `proceso` miden lo mismo; y el consentimiento por defecto no tiene `wait_for_update`, de baja prioridad porque el público es de Argentina. Siguen pendientes en el panel de GA4 el registro de las dimensiones personalizadas y marcar solo `generate_lead` como evento clave (ver v1.30).
- **Ojo con esto:** la revisión mandó dos visitas de prueba al GA de producción (una con `utm_source=revision_ga4`); pueden aparecer en Adquisición.

**Por qué lo hice:** Sabrina pidió corregir el punto 1 de la revisión de GA4 y actualizar el PRD.

### v1.56 — 20 de octubre de 2026

**Qué hice:** Sumé la primera página de contenido del sitio, `guia-aparecer-en-google-maps.html`, para aparecer en las búsquedas de IA y de Google.

**Detalle del cambio:**

- **Página nueva:** "Cómo aparecer en Google Maps con tu negocio en San Juan". Arranca con una respuesta corta (así una IA o Google pueden citarla directo), explica los 3 factores que usa Google para ordenar resultados locales (relevancia, distancia y prominencia), da 8 pasos para crear y verificar el Perfil de Negocio, lista errores comunes, explica si hace falta una web además del perfil y cierra con 4 preguntas frecuentes y el CTA de WhatsApp.
- **Datos estructurados:** un solo bloque JSON-LD con `Article` (autora Sabrina Sanso, con su LinkedIn e Instagram), `FAQPage` y `BreadcrumbList`.
- **Sin inventar nada:** no puse precios, plazos garantizados ni números de resultados. Donde hay incertidumbre (cuánto tarda en aparecer) lo digo así: nadie puede garantizar una posición.
- **Conexiones:** link "Guía: aparecer en Google Maps" en el footer de `index.html`, la página sumada a `sitemap.xml` (prioridad 0.8) y a `llms.txt`.
- **Misma base que las páginas de proyecto:** barra de navegación, footer, botón flotante de WhatsApp, consentimiento de cookies, Clarity/GA4 y el mismo evento `whatsapp_click` con `traffic_source`. El texto usa los tokens de color del Design System y el link del texto toma `naranja-texto` al pasar el mouse.
- Corrí `npm run build` y revisé la página en local: sin scroll horizontal y sin errores propios en consola (los 404 de `/api/region` y `/_vercel/insights` son esperables fuera de Vercel).

**Por qué lo hice:** Sabrina preguntó cómo aparecer en las búsquedas de IA. Con una sola página el sitio tenía poco contenido que citar; esta guía responde una pregunta concreta que hacen los negocios locales y es el primer paso de un contenido que pueda crecer.

### v1.57 — 20 de octubre de 2026

**Qué hice:** Alineé el logo de la barra de navegación con el borde izquierdo del contenido (7 páginas).

**Detalle del cambio:**

- **Problema:** el archivo SVG del logo tiene un margen interno a la izquierda, así que el pin quedaba unos 20 px más adentro que el texto de abajo ("EL COSTO DE LA INVISIBILIDAD").
- **Arreglo:** margen izquierdo negativo en la imagen del logo del header, con un valor por tamaño: `-ml-[11.1px]` (logo de 36 px), `min-[360px]:-ml-[12.4px]` (40 px) y `md:-ml-[19.8px]` (64 px). Los valores salen de medir el logo ya renderizado.
- **`shrink-0`:** lo agregué al link y a la imagen del logo, porque el link es un elemento flex y se achicaba, y eso cambiaba cuánto había que correrlo.
- **Dónde:** `index.html`, la guía nueva, la política de privacidad y las 4 páginas de proyecto. El logo del footer no se tocó (en celular va centrado).
- Corrí `npm run build` (son clases arbitrarias nuevas). Medí el borde izquierdo del pin contra el del texto: 32,3 px contra 32 px en escritorio y 14,4 px contra 16 px en celular de 375 px, sin scroll horizontal.

**Por qué lo hice:** Sabrina pidió que el logo quedara a la altura de "EL COSTO DE LA INVISIBILIDAD".

### v1.58 — 20 de octubre de 2026

**Qué hice:** Verifiqué la guía de Google Maps contra la documentación oficial de Google, corregí lo que no estaba respaldado y agregué una sección "Fuentes".

**Detalle del cambio:**

- **Cómo se verificó:** la primera versión la escribí con conocimiento general, sin citar fuentes. Después contrasté cada afirmación con 7 páginas de ayuda de Google Business Profile (ranking local, pautas de representación, verificación, reclamar perfil, área de servicio, reseñas y la página del producto).
- **Corregido:** la prominencia incluye los enlaces desde otros sitios web (no "lo que se encuentra en internet"); la descripción no admite links, promociones ni precios (antes decía "teléfonos"); el área de servicio se define con ciudades o zonas, hasta 20, sin radio; la carta postal tarda unos 14 días y el código vence a los 30; reseñas incentivadas están prohibidas.
- **Sacado por no tener respaldo:** "Google verifica mejor el negocio si hay web", "el negocio se encuentra por su nombre en poco tiempo", "el perfil queda incompleto hasta verificar" y "comprar reseñas te cuesta el perfil".
- **Fuentes:** sección nueva al final de la guía con los 7 links oficiales y la fecha de revisión. Las preguntas frecuentes del JSON-LD quedaron iguales al texto visible.

**Por qué lo hice:** Sabrina preguntó si la información de la guía estaba chequeada y de dónde salía.

### v1.59 — 21 de octubre de 2026

**Qué hice:** Conecté la ficha de Google Maps ya publicada con la web: link de la ficha en los datos estructurados de `index.html` y en `llms.txt`.

**Detalle del cambio:**

- **Cómo se verificó la ficha:** abrí el link que pasó Sabrina (`share.google/...`) en el navegador y llegué al panel de "Sabri Studios" (categoría "Diseñador de sitios web"). Sus datos: teléfono 0264 585-4487 (coincide con el de la web), sitio web `https://web-sabristudios.vercel.app/`, perfiles de Facebook e Instagram, sin opiniones todavía.
- **Link usado:** `https://www.google.com/maps?cid=12366024978632205242`. El CID sale del enlace de la ficha (`0xab9cf23336fae3ba` en hexadecimal; la conversión a decimal la comprobé) y abre la misma ficha en Google Maps.
- **`index.html`:** `hasMap` y un segundo elemento en `sameAs` (junto al Instagram). Los 2 bloques JSON-LD se leen bien.
- **`llms.txt`:** línea "Google Maps" en Contacto.
- **Diferencias detectadas y resueltas con Sabrina:** la ficha mostraba una dirección pública (RP215, Villa Aberastain) aunque Sabrina eligió atender solo en San Juan Capital y alrededores; Sabrina la ocultó en su panel y en el panel de Google ya no aparece la línea "Dirección". El horario real es de 10 a 19 (no de 10 a 13 y 14 a 20 como había dicho antes) y el panel muestra "cierra a las 7 p.m.", que coincide. El perfil de Facebook que figura en la ficha es de Sabrina. La web no publica horarios ni dirección, así que no hubo que cambiarla.
- **Pendiente:** el link del Facebook de Sabrina para sumarlo a `sameAs` (el panel de Google no muestra la URL real).

**Por qué lo hice:** Sabrina avisó que la ficha ya está publicada y pasó el link.

### v1.60 — 29 de octubre de 2026

**Qué hice:** Agregué el link "Dejanos tu reseña" al footer de `index.html`, con el link de reseñas de la ficha de Google.

**Detalle del cambio:**

- **Link usado:** `https://g.page/r/Cbrj-jYz8pyrEBM/review`, que pasó Sabrina desde su panel de Google Business Profile. Lo comprobé: redirige a la solicitud de reseña de la ficha, con el mismo CID hexadecimal (`0xab9cf23336fae3ba`) que ya usa el `hasMap` de la v1.59.
- **`index.html`:** cuarto link en la fila de redes del footer (junto a Instagram, LinkedIn y Email), con ícono de estrella, `target="_blank"` y `rel="noopener noreferrer"`. En celular los 4 links se apilan uno debajo del otro (`flex-col items-center`) porque en una fila se salían de la pantalla; desde `md` vuelven a quedar en fila.
- **`src/input.css`:** ícono nuevo `ti-star` (Tabler, estilo outline) como máscara SVG, igual que el resto. Corrí `npm run build` y el ícono quedó en `dist/output.css`.
- **Alcance:** solo la página principal. Las páginas de proyecto, la política y la guía no cambian.
- **Pendiente:** probar el link en el navegador del sitio desplegado, ver el footer en móvil (4 links en una fila) y evaluar si conviene medir el clic como evento de GA4.

**Por qué lo hice:** Sabrina ya tiene reseñas en la ficha y el pendiente de Notion pedía el botón con el link de reseñas en la web.

### v1.61 — 29 de octubre de 2026

**Qué hice:** Creé una imagen propia de 1200×630 para compartir el sitio en redes (`og:image`) y revisé el pendiente "CTA de contacto más visible en celular".

**Detalle del cambio:**

- **`imagenes/og-sabri-studios.png` (nuevo):** 1200×630 px, 35 KB. Fondo `azul-primario` (`#1E3A5F`), logotipo horizontal negativo (el del design system, con el texto en trazados), barra y frase en `naranja` (`#D97A3C`) y la frase "Páginas web para emprendedores y negocios de San Juan" en Space Mono. Lo armé en HTML con la fuente real y lo exporté con Edge sin interfaz.
- **Por qué hacía falta:** la imagen anterior (`LOGOTIPO_HORIZONTAL_FULL_COLOR.jpg`) mide 480×160, relación 3:1. Las redes piden alrededor de 1,91:1 (1200×630), así que la recortaban o la mostraban chica con bordes.
- **`index.html`, `proyecto-mombe.html`, `politica-de-privacidad.html` y `guia-aparecer-en-google-maps.html`:** `og:image` y `twitter:image` apuntan a la imagen nueva. Se agregaron `og:image:width` (1200), `og:image:height` (630) y `og:image:alt`.
- **No se tocó:** las páginas de AR Estética, JL Construcciones y Servicios AF siguen con el logo de cada cliente. El `logo` del JSON-LD sigue con el JPG, porque es el logo de la marca y no una vista previa.
- **CTA en celular (sin cambios de código):** ya está resuelto desde la v1.42. El header en celular tiene el botón "Reservá tu demo" (`cta_nav`) junto al menú, y hay un botón flotante de WhatsApp. Los datos de Pulsar en que se basaba el pendiente son de la semana del 04/10, anteriores a ese botón. Falta medir con datos posteriores al 19/10.
- **Pendiente:** compartir el link en WhatsApp e Instagram para ver la vista previa real (las redes guardan caché; el Depurador de Facebook permite reforzar la actualización). Los despliegues de develop siguen cancelados por "Require Verified Commits", así que la prueba depende de resolver eso o de publicar en master.

**Por qué lo hice:** Casi todo el tráfico real llega desde Instagram y el link se comparte por chat, así que la vista previa es lo primero que ve la persona.

### v1.62 — 29 de octubre de 2026

**Qué hice:** Sumé la página de Facebook de Sabri Studios al `sameAs` del JSON-LD de `index.html`.

**Detalle del cambio:**

- **`index.html`:** el `sameAs` de la organización pasa de 2 a 3 perfiles: Instagram, Facebook (`https://www.facebook.com/sabristudios`) y la ficha de Google Maps.
- **Verificación:** Sabrina pasó primero el link con el identificador numérico (`profile.php?id=61595375138267`) y después el de usuario. Probé los dos: responden 200 con el título "Sabri Studios" y el numérico redirige a `facebook.com/sabristudios`, así que es la misma página. Quedó el link con el nombre de usuario, que es el definitivo. El JSON-LD sigue siendo JSON válido.
- **No se tocó:** el `sameAs` del autor en la guía de Google Maps (es el de la persona, con LinkedIn e Instagram, no el de la organización).
- **Pendiente:** falta evaluar si se muestra un ícono de Facebook en el footer.

**Por qué lo hice:** era un pendiente de Notion (sumar el Facebook al `sameAs`) para que Google asocie ese perfil con la marca.

### v1.63 — 29 de octubre de 2026

**Qué hice:** Corregí las fallas de accesibilidad que marcó PageSpeed Insights en móvil (Accesibilidad 88): punto de referencia principal, objetivos táctiles y el contraste del botón flotante de WhatsApp.

**Detalle del cambio:**

- **Medición de partida (PageSpeed Insights, Lighthouse 13.6, producción):** móvil con rendimiento 99 en la segunda corrida (la primera dio 66 por un cambio de diseño aislado que no se repitió), escritorio 98 a 100, SEO 100, Prácticas recomendadas 92, Accesibilidad 88 en móvil y 92 en escritorio.
- **Etiqueta `main` (6 páginas):** `index.html`, la política y las 4 páginas de proyecto envuelven su contenido, entre la barra y el footer, en una etiqueta `main`. La guía de Google Maps ya la tenía. Comprobé en el navegador que hay un solo `main` por página y que la barra y el footer quedan afuera.
- **Objetivos táctiles (7 páginas):** los links de redes del footer (Instagram, LinkedIn, Email y, en la home, "Dejanos tu reseña") y los links legales (Política de Privacidad y Guía) pasan a `min-h-[44px]`. En la home también "Contactarme por WhatsApp", "Agendar una reunión" y "Elegir día y horario para una reunión" (`inline-flex items-center min-h-[44px]`). Medí en el navegador: los links del footer de Mombé miden 44 px de alto. Clase ya existente en el CSS compilado, no hizo falta `npm run build` por clases nuevas (igual lo corrí).
- **Botón flotante de WhatsApp (7 páginas):** el texto y el ícono pasan de blanco a `texto-fuerte` (`#12202E`). El contraste sube de 1,98:1 (blanco sobre `#25D366`) a 8,33:1. El verde de WhatsApp no cambia.
- **Footer tapado por el botón flotante (7 páginas):** Sabrina avisó con una captura que, en una pantalla de unos 740 px, el botón "¡Hablemos!" tapaba el link "Guía: aparecer en Google Maps". Desde `md` (768 px) el footer tenía solo 32 px de espacio abajo, menos que el botón (que ocupa unos 84 px desde el borde). El contenedor del footer pasa de `pb-20 md:pb-lg` a `pb-24` en todos los tamaños. Lo comprobé en el navegador con la página en marcos de 360, 740, 780 y 1280 px, llevada al final: con 32 px el contenido más bajo del footer queda 32 px por debajo del tope del botón (se tapan) y con `pb-24` queda por encima en todos los tamaños.
- **No se tocó:** el contraste de los botones naranja (texto `gris-neutro` sobre `naranja`, 2,79:1). Es una decisión de marca ya documentada en el Design System (el naranja es el valor exacto de la marca y no se retoca). Con texto `texto-fuerte` daría 5,35:1. Decisión de Sabrina (30/10): se mantiene lo que diga el manual de marca, así que los botones naranja quedan sin cambios.
- **Pendiente:** volver a pasar PageSpeed Insights cuando esto esté en producción, para ver el puntaje real de accesibilidad. Los elementos táctiles que PageSpeed marcó más allá de los de este cambio no se pudieron listar completos (el informe se truncó); conviene mirar el informe otra vez.

**Por qué lo hice:** eran pendientes abiertos en Notion que salieron de la medición de rendimiento y accesibilidad de la v1.62.

### v1.64 — 29 de octubre de 2026

**Qué hice:** La tarjeta de Mombé en "Proyectos desarrollados" de `index.html` pasa a mostrar el logo de la marca en lugar de la inicial "M".

**Detalle del cambio:**

- **`imagenes/logo-mombe.jpg` (nuevo):** 320×320 px, 9 KB. Lo recorté cuadrado desde el logo que pasó Sabrina (caracol con burbujas y el nombre "MOMBé" sobre fondo crema `#F5F1E8`), centrado para que el nombre entre completo dentro del círculo de la tarjeta. Comprobé el recorte con una máscara circular: no se corta nada.
- **`index.html`:** el círculo de la tarjeta usa la imagen (`width`/`height` 320, `loading="lazy"`, `object-cover`, alt "Logo de Mombé"), con el mismo patrón que las otras tarjetas. Se quita `aria-hidden` del círculo, porque ahora la imagen tiene texto alternativo. Lo vi en el navegador local junto a las otras tres tarjetas.
- **`proyecto-mombe.html`:** el círculo del encabezado también usa `logo-mombe.jpg` (alt "Logo de Mombé"; se quitó `aria-hidden`). Lo vi en el navegador: la imagen carga a 320 px y se muestra en 159 px.
- **`imagenes/og-mombe.jpg` (nuevo):** 1200×630 px, 25 KB, con el logo centrado sobre su fondo crema. `og:image` y `twitter:image` de `proyecto-mombe.html` apuntan a esta imagen (antes usaban la de Sabri Studios), con ancho, alto y alt "Logo de Mombé, textiles artesanales".
- **Permiso:** Sabrina confirmó (30/10) que tiene el permiso de Mombé para publicar su logo en la web.

**Por qué lo hice:** el comentario del código decía que la inicial era provisoria hasta tener el logo; Sabrina pasó el logo y pidió usarlo en la tarjeta.

### v1.65 — 29 de octubre de 2026

**Qué hice:** La página de Mombé (`proyecto-mombe.html`) pasa al paso 2, Diseño y Estrategia: el diagnóstico queda completo.

**Detalle del cambio:**

- **Paso 1 (Diagnóstico):** ahora figura como "Completado" (número en `azul-primario`, sin "Estamos acá") y su texto pasa a pasado: "Conocimos el negocio: qué hace Mombé, a quién le vende, cómo trabaja y cómo la encuentran hoy sus clientes. De ahí salió el brief del proyecto."
- **Paso 2 (Diseño y Estrategia):** es el paso actual, con el número naranja con halo y la etiqueta "Estamos acá". Texto de Sabrina: "Luego del brief resultante del diagnóstico, pasamos a unificar la identidad visual de Mombé y definimos la de sus dos líneas textiles. Comenzamos a bajar la idea en un borrador de diseño y lo seguimos iterando." (corregí tildes y la forma "iterando").
- **Paso 3 (Resultados):** sigue "Próximamente", apagado.
- **Línea de progreso:** el tramo naranja llega ahora hasta el centro del paso 2 (`w-[18%]` pasa a `w-[35%]`). Corrí `npm run build` por la clase nueva.
- **Texto del encabezado y metadescripciones:** `description`, `og:description` y `twitter:description` dicen "Hoy estamos en el paso 2, diseño y estrategia." (antes paso 1, el diagnóstico). Se actualizaron también los comentarios del CSS y el de la tarjeta en `index.html`.
- **Verificación:** lo vi en el navegador local: paso 1 con número azul, paso 2 con halo y la línea naranja llegando hasta él, paso 3 apagado. Después comprobé la vista previa de develop en Vercel (despliegue `dpl_WVM6yx…`, READY): la página trae el paso 2, el logo, `<main>`, el footer con `pb-24` y `og-mombe.jpg`. Se corrigió también un comentario viejo del HTML que decía que todavía no había logo de Mombé.

**Por qué lo hice:** Sabrina avisó que el proyecto de Mombé avanzó a la etapa de diseño.

### v1.66 — 30 de octubre de 2026

**Qué hice:** Resolví que la rama `develop` no desplegaba en Vercel y volví a exigir el check "Vercel" en la protección de `master`.

**Detalle del cambio:**

- **Causa 1 (Settings, Git):** "Require Verified Commits" estaba en "Inherit from Team (Enabled)". Vercel solo desplegaba commits firmados y los de `develop`, hechos en local, no lo estaban; los merges a `master` los hace GitHub y sí van firmados. Se pasó a "Disabled" en el proyecto `web-sabristudios`.
- **Causa 2 (Settings, Environments, Preview):** "Branch Tracking" estaba en "Disabled". Se activó para "All unassigned branches". Desde entonces `develop` despliega: lo comprobé con un commit vacío (`5f1996a`, READY) y con uno con cambios reales (`34fb8db`).
- **Incidente en el medio:** al desconectar y volver a conectar el repositorio se creó un proyecto nuevo (`websabristudios`), que quedó conectado en lugar del viejo. Se borró y se reconectó `web-sabristudios`, que es el dueño del dominio `web-sabristudios.vercel.app` al que apunta todo el sitio.
- **Protección de `master` (GitHub, Settings, Branches):** además de pull request obligatorio sin aprobaciones, sin force push y sin borrado, ahora exige el check de estado "Vercel" (`strict: false`). Los administradores siguen pudiendo saltarla (`enforce_admins: false`). Lo apliqué con la API de GitHub y comprobé el resultado: `contexts: ["Vercel"]`.
- **Efecto:** un pull request de `develop` a `master` necesita que el despliegue de prueba de Vercel termine bien antes de mergear. Esto reemplaza lo anotado en la v1.51, que había descartado el check porque los despliegues de `develop` se cancelaban.
- **Pendiente:** el alias `websabristudios.com` aparece en el entorno Preview de `develop` pero no resuelve (no tiene DNS apuntando); Sabrina pidió dejarlo como está.

**Por qué lo hice:** Sabrina pidió resolver los despliegues de `develop` y, una vez resueltos, volver a exigir el check en `master`.

### v1.67 — 30 de octubre de 2026

**Qué hice:** Apliqué la opción B de contraste a los botones naranja: texto oscuro sobre el naranja de marca y hover más claro.

**Detalle del cambio:**

- **Propuesta y decisión:** el 29/10 Sabrina había pedido mantener lo que dijera el manual de marca; el 30/10 pidió una propuesta de contraste y eligió la opción B, que cambia el color del texto sin tocar el naranja de fondo.
- **Texto de los botones (8 archivos):** todos los elementos con fondo `naranja` pasan de texto `gris-neutro` (2,79:1) a `texto-fuerte` `#12202E` (5,35:1). Son 35 lugares: el botón de la barra, los botones del hero, la demo y "Sobre mí", los botones "Ver proyecto" y "Ver avance" de las tarjetas, los números de los pasos, el CTA final de las 4 páginas de proyecto, "Aceptar" del aviso de cookies (`consentimiento.js`) y el color del texto seleccionado.
- **Token `naranja-hover` (`tailwind.config.js`):** pasa de `#C66A2E` a `#E58F52`. Ahora el hover aclara el botón en lugar de oscurecerlo: con texto oscuro, el hover oscuro daba 4,33:1 y el claro da 6,59:1. Como los botones usan el token, no hizo falta tocar cada hover.
- **`documentación/Design System.md`:** actualicé la tabla de colores, los contrastes, la definición del botón primario y las notas de "Botones y naranja de hover" y "Contraste del naranja".
- **Verificación:** corrí `npm run build` y, en el navegador local, los 11 botones naranja de la home miden 5,35:1 y las reglas de hover compiladas usan `rgb(229 143 82)`. No pude ver el hover real con el cursor: el simulador de la extensión no activa `:hover`. Chrome guardaba el CSS viejo en caché y tuve que forzar la recarga.
- **No se tocó:** el naranja de fondo (`#D97A3C`), el botón secundario ni los textos en `naranja` de 24 px o más.
- **Pendiente:** ver el hover a mano en el sitio desplegado y volver a pasar PageSpeed para confirmar que desaparece el aviso de contraste.

**Por qué lo hice:** PageSpeed marcaba el contraste de los botones naranja como la única falla de accesibilidad que quedaba.

### v1.68 — 30 de octubre de 2026

**Qué hice:** Rediseñé el hero de la home con la skill de diseño: la foto de la derecha se reemplaza por una búsqueda de Google ilustrada donde aparece la competencia y el negocio de quien mira no aparece.

**Detalle del cambio:**

- **Idea:** el titular dice "Si tu negocio no aparece en Google, no existe", así que el hero lo muestra con el propio objeto del problema. Una ventana de búsqueda con "tu rubro en San Juan", tres resultados de otros negocios (barras grises, sin nombres) y un hueco con borde punteado naranja: "Tu negocio / No aparece en los resultados". No se inventó ningún negocio, dato ni cifra.
- **Un solo movimiento:** los tres resultados aparecen uno detrás del otro (0,25 s, 0,47 s y 0,69 s) y el hueco aparece al final (1,3 s). Pasa una vez y queda quieto. Reemplaza los tres movimientos de la foto (entrada, flotación de 7 s y zoom lento de 18 s). Con "reducir movimiento" activado se muestra todo de entrada. Solo cambia la opacidad y 8 px al principio, así que no mueve el resto de la página.
- **Titular y rótulo:** el texto es el mismo. Se quitó el naranja de "no existe" (un acento en una sola frase) y el rótulo "El costo de la invisibilidad" pasa de mayúsculas separadas a minúscula normal. El naranja queda para el botón principal y para el hueco.
- **Celular:** la ilustración se muestra también en celular, debajo de los botones, así que "Reservá tu demo" y "Agendá una reunión" siguen arriba y a la vista. Antes la foto se ocultaba en celular.
- **Accesibilidad:** la ilustración es un `figure` con `role="img"` y un `aria-label` que la describe; su contenido interno queda oculto para lectores de pantalla. No tiene botón ni cursor de texto.
- **Peso:** el hero ya no pide la foto `sabristudios_subheadline.jpeg` (1,9 MB en escritorio). El archivo sigue en `imagenes/` sin usarse; se puede borrar después, queda en el historial de git. Se eliminaron del CSS los `heroImageIn`, `heroKenBurns`, `heroFloat` y las reglas `.hero-image`.
- **Verificación (navegador local):** escritorio y marco de celular de 390 px; las cuatro piezas terminan con opacidad 1; el cambio de diseño de la carga fue 0,0012; no se hace ningún pedido a la foto vieja; el `h1` conserva el texto. Compilé el CSS con `npm run build`.
- **Riesgo a medir:** la ilustración no es clickeable pero parece una ventana de buscador, y puede atraer toques sin respuesta (clics inactivos en Clarity). Hay que mirar esa métrica en las próximas semanas; si sube, se le puede dar un destino (por ejemplo, llevarla al botón de la demo).
- **Pendiente:** ver cómo se ve en el sitio desplegado y en un celular real, y volver a pasar PageSpeed (el LCP ahora es el titular, no la foto).

**Por qué lo hice:** Sabrina pidió ejecutar la skill de diseño y eligió el hero de la home como parte a rediseñar.

### v1.70 — 29 de octubre de 2026

**Qué hice:** Corté la medición de Google Analytics y Clarity cuando la página no se abre desde el sitio real o la abre un navegador automático, para que mis pruebas y los robots no cuenten como visitas.

**Detalle del cambio:**

- **Corte (7 páginas):** antes de cargar GA4 hay un script corto que marca `window.sinMedicion` y `window['ga-disable-G-HLPQM5HE7G']` cuando el `hostname` no es `web-sabristudios.vercel.app`, o cuando `navigator.webdriver` es verdadero, o el user agent contiene HeadlessChrome, Lighthouse, PageSpeed o Googlebot. Clarity solo se inicia si `sinMedicion` no está activo.
- **Qué evita:** visitas de las vistas previas de Vercel (`web-sabristudios-xxxx-sabristudios.vercel.app`), de `localhost` y de PageSpeed/Lighthouse, que explican buena parte del tráfico de centros de datos de EE. UU. (63 de 277 eventos).
- **Qué no cubre:** el tráfico histórico ya registrado y los robots que se hagan pasar por un navegador normal; esos se leen en los informes comparando sin esos países.
- **Hallazgo en Analytics (sin tocar todavía):** la regla de Crear eventos `whatsapp_click` crea un evento por cada `page_view` de la web, así que los `whatsapp_click` de GA4 no son clics reales. La borra Sabrina desde Analytics.
- **Pendiente:** verificar en el sitio desplegado que los eventos siguen llegando desde la web real y no desde las vistas previas.

**Por qué lo hice:** Sabrina pidió corregir lo posible de los bots y del tráfico falso en Analytics.
### v1.69 — 30 de octubre de 2026

**Qué hice:** Seguí con las ideas de la skill de diseño: rediseñé la sección "Proyectos desarrollados" de la home (1), quité el movimiento genérico de la home (3) y pasé los botones y etiquetas de mayúsculas a minúscula normal (5).

**Detalle del cambio:**

- **Tarjetas de proyectos (`index.html`):** cada tarjeta cuenta qué cambió para ese negocio, con una frase tomada de la propia página del proyecto, y en qué paso del proceso está. AR Estética: "Del boca a boca a una web con sus servicios y un camino directo a WhatsApp". JL Construcciones: "De trabajar por recomendación a una web con sus servicios, una galería de trabajos y contacto directo". Servicios AF: "De una página en Lovable a una web completa, con perfil profesional y servicios más claros". Mombé: "En desarrollo: hoy estamos en el paso 2, diseño y estrategia". No se inventó ningún dato.
- **Barra de estado:** 3 tramos que indican el proceso. Llena en los tres proyectos con los 3 pasos completos ("Proceso completo") y con 2 tramos llenos en Mombé ("Paso 2 de 3"). Lleva `role="img"` y `aria-label`. **Cuando Mombé pase de paso hay que actualizar esa barra y el texto de su tarjeta a mano.**
- **Layout:** texto alineado a la izquierda, logo de 64 px al costado del nombre y del rubro, grilla de 2 columnas desde tablet (antes 3 columnas con una tarjeta huérfana abajo). El pie (estado y link) pasa a fila solo si la tarjeta tiene 400 px de contenido o más, y si no se apila en dos líneas. Eso depende del ancho de la tarjeta y no del de la pantalla (container query con `@container` y `@[400px]:`): una primera versión usaba el ancho de la pantalla (420 px) y en tablet, con dos tarjetas de unos 330 px por fila, el link "Ver proyecto" se partía en dos líneas y la flecha se salía; Sabrina lo avisó con una captura. El link lleva `whitespace-nowrap`. Se quitó la etiqueta azul en mayúsculas de la esquina: el rubro pasa a ser texto normal bajo el nombre.
- **"Ver proyecto" / "Ver avance":** pasan de botón naranja a link subrayado con flecha, para dejar el naranja a la acción principal. La tarjeta entera sigue siendo un solo link. El hover es un cambio de borde a `azul-primario`.
- **Seguimiento:** se conserva la clase `project-card` y el `href`: el evento `project_click` de GA4 sigue enviándose con el mismo `project_name`. Lo comprobé disparando un clic en la tarjeta de Mombé.
- **Movimiento (3), solo en la home:** se eliminaron la entrada de las tarjetas (escala, rotación y desplazamiento), el brillo diagonal al pasar el mouse, el levantamiento al hover y las entradas de los pasos del proceso y de la demo, junto con el observador de scroll de `index.html`. El único movimiento que se dispara solo queda en el hero (v1.68). Las páginas de proyecto conservan sus entradas.
- **Minúscula normal (5):** "Reservá tu demo", "Agendá una reunión" y "¡Reservá tu demo!" en la home (5 botones); "Aceptar" y "Rechazar" del aviso de cookies (`consentimiento.js`); "Cambiar preferencias de cookies" en la política; y la etiqueta azul de arriba de las 4 páginas de proyecto y de la guía de Google Maps (se quitó `uppercase`). El texto no cambia, solo las mayúsculas. El estilo de mayúsculas de los botones era parte de la marca; Sabrina pidió probarlo.
- **Verificación (navegador local):** escritorio y marco de celular de 390 px; 4 tarjetas, todas visibles; ningún elemento con `text-transform: uppercase` en la home; sin scroll horizontal; el CSS se compiló con `npm run build` por las clases nuevas (`@container`, `@[400px]:`). Después de la corrección medí el pie en pantallas de 360, 390, 600, 720, 750, 768, 900, 1024 y 1280 px: sin desborde y con el link en una sola línea en todas.
- **Pendiente:** ver el sitio desplegado y medir en Clarity el efecto en los clics a las tarjetas (`project_click`) y en los clics inactivos; si el cambio de botón a link baja los clics, se puede volver al botón.

**Por qué lo hice:** Sabrina eligió probar las ideas 1, 3 y 5 de la skill de diseño.

### v1.71 — 30 de octubre de 2026

**Qué hice:** Corregí el desborde horizontal de la home y las páginas de proyecto en celulares angostos: el fondo no cubría todo el ancho y los títulos se salían de las tarjetas. Sabrina lo avisó con dos capturas.

**Detalle del cambio:**

- **Causa:** en las tarjetas de proyectos, el título (por ejemplo "Servicios AF") no entraba al lado del logo de 64 px y se salía de la tarjeta, lo que ensanchaba la página. Medí con un marco de ancho variable: la página medía 318 px de ancho aunque la pantalla fuera de 285 px.
- **Tarjetas (`index.html`):** el bloque logo + nombre se apila (logo arriba) cuando la tarjeta tiene menos de 260 px de contenido (`@[260px]:flex-row`, container query) y los títulos llevan `break-words`. El título de la sección también.
- **Encabezado (7 páginas):** por debajo de 320 px baja el padding lateral, la altura del logo (`h-7`) y el texto y padding del botón "Reservá tu demo", para que no empuje la página.
- **Pie (6 páginas):** la fila Instagram / Email pasa a `flex-wrap` para que no se salga en pantallas angostas.
- **Verificación (navegador local, marco de ancho variable):** sin desborde horizontal en las 7 páginas a 360, 390 y 768 px, y en la home también a 300 y 320 px. Quedan entre 6 y 25 px de desborde a 280 px en 4 páginas (home, AR, JL y política) y 2 px a 320 px en la de JL (tipo Galaxy Fold plegado); no se corrigió.
- **Pendiente:** mirar la vista previa de Vercel en un celular real.

**Por qué lo hice:** Sabrina mostró dos capturas del celular con el fondo cortado y el título de la tarjeta fuera de su caja.

### v1.72 — 30 de octubre de 2026

**Qué hice:** Los clics de contacto llegan ahora también a Clarity, los links de Instagram pueden llevar UTM completos y la visita queda marcada cuando viene del navegador interno de Instagram o Facebook. Salió de revisar la base "Landing Analytics" de Notion (7 semanas, entre 3 y 24 sesiones reales por semana).

**Detalle del cambio:**

- **Hallazgo:** GA4 ya recibía `whatsapp_click`, `calendar_click`, `project_click`, `project_site_click` y `generate_lead` desde el script de cada página, pero Clarity, de donde salen los datos semanales de Notion, no recibía ninguno. Por eso el export traía 0 clics de salida y ningún clic de contacto. Además, la regla de GA4 que duplica `whatsapp_click` en cada `page_view` (v1.70) hace que esos números de GA4 no sean confiables; los de Clarity sí cuentan clics reales.
- **`medicion.js` (nuevo, cargado con `defer` en las 7 páginas):** no hace nada si `window.sinMedicion` está activo (vistas previas, localhost, navegadores automáticos). Hace tres cosas:
  1. Manda a Clarity (`clarity('event', …)`) los mismos eventos que GA4: `whatsapp_click`, `calendar_click`, `project_click`, `project_site_click` y `generate_lead`, con un solo escuchador de clics en el documento.
  2. Guarda `utm_medium`, `utm_campaign` y `utm_content` en `sessionStorage` (igual que `traffic_source`) para que sobrevivan al pasar de la home a un proyecto, y los manda a Clarity como etiquetas (`clarity('set', …)`) junto con `traffic_source`. Un link nuevo con UTM reemplaza a los anteriores.
  3. Detecta el navegador interno de Instagram o Facebook por el user agent y lo manda como etiqueta `navegador_interno` (`instagram`, `facebook` o `no`) a Clarity y como parámetro a GA4 (`gtag('set')`).
- **Guía de UTM:** `documentación/guia-utm-instagram.md`, con la estructura, las reglas (minúscula, sin tildes, mismo nombre siempre), los links listos para bio, story, reel, carrusel y mensaje directo, y cómo leerlos en Clarity y GA4.
- **Política de privacidad:** la sección de cookies menciona que `sessionStorage` también guarda la campaña y que se detecta el navegador interno de Instagram o Facebook.
- **Qué no cambió:** no toqué el diseño ni los eventos de GA4 existentes. No se agregó ninguna adaptación específica al navegador interno: primero hay que medir cuánto pesa y dónde se traba, ahora que está etiquetado.
- **Verificación:** 19 pruebas con un entorno simulado (UA de Instagram, de Facebook y de Chrome; UTM completos; UTM que se conservan entre páginas; UTM nuevos que reemplazan a los viejos; `sinMedicion`; Clarity ausente; `sessionStorage` bloqueado; clics en WhatsApp, agenda, tarjeta, sitio del proyecto y ancla interna), todas correctas.
- **Pendiente:** (1) con la web publicada, hacer un clic de prueba en WhatsApp y confirmar en Clarity que aparece el evento; (2) ~~registrar `navegador_interno` como dimensión personalizada en GA4~~ hecho el 30/10/2026 (nombre "Navegador interno", alcance Evento, propiedad `sabristudiosdata`; los datos recién aparecen en los informes desde ese día, no es retroactivo); (3) cambiar el link de la bio y los links de las stories por los de la guía; (4) después de 2 a 3 semanas con etiquetas, filtrar en Clarity las grabaciones con `navegador_interno = instagram` y ver dónde se traba la gente.

**Por qué lo hice:** Sabrina pidió implementar los puntos 1, 2 y 3 de las mejoras surgidas de la base de analítica semanal.

### v1.73 — 30 de octubre de 2026

**Qué hice:** Actualicé `sitemap.xml`: la fecha de la home estaba en `2026-09-05` aunque cambió mucho, y las 4 páginas de proyecto no figuraban. Es parte del punto "Traer más tráfico" de las mejoras surgidas de Landing Analytics.

**Detalle del cambio:**

- **Qué mostraba Search Console (revisado el 30/10/2026):** el sitemap estaba enviado desde el 29/10, estado "Correcto", con 2 páginas descubiertas; 3 páginas indexadas y 0 sin indexar; en los últimos 28 días, 0 clics y 21 impresiones (19 de la home y 2 de la guía), posición media 8,2. La propiedad ya existía; la verificación se confirmó automáticamente con la etiqueta de Google Analytics (propiedad de prefijo de URL, `https://web-sabristudios.vercel.app/`).
- **Sitemap:** pasa de 2 a 6 URLs. Se suman `proyecto-ar-estetica-vehicular.html`, `proyecto-jl-construcciones-en-seco.html`, `proyecto-mombe.html` y `proyecto-web-servicios-profesionales.html` (las 4 ya tienen `index, follow` y su canonical).
- **Fechas (`lastmod`):** home `2026-10-30` (hero y proyectos rediseñados); guía de Google Maps `2026-10-20` (última revisión de contenido, v1.58); Mombé `2026-10-29` (pasa al paso 2, v1.65). Las otras 3 páginas de proyecto van **sin `lastmod`** (es opcional): sus últimos cambios en `git` son técnicos (scripts, contraste, logo) y no pude distinguir uno de contenido, así que no puse una fecha que no se pueda respaldar.
- **No incluí** `politica-de-privacidad.html`: no es una página pensada para aparecer en búsquedas.
- **`BingSiteAuth.xml` (nuevo, en la raíz):** archivo de verificación de propiedad que entrega Bing Webmaster Tools al dar de alta el sitio. Contiene el código de usuario de la cuenta de Sabrina, tal como lo generó Bing, sin modificar. No lleva datos sensibles: es el código que Bing pide publicar para comprobar que el sitio es suyo. Tiene que quedar publicado en `https://web-sabristudios.vercel.app/BingSiteAuth.xml` para poder verificar.
- **Verificación:** el XML del sitemap es válido y las 6 URLs existen en el repo y responden 200 en producción.
- **Pendiente:** (1) ~~reenviar el sitemap en Search Console~~ hecho el 30/10; (2) ~~verificar el sitio en Bing Webmaster Tools y enviar el sitemap~~ hecho el 30/10; (3) cuando haya 2 a 3 semanas de datos, mirar en Search Console para qué consultas aparece la home. Una de las consultas visibles de la guía es "aparecer en google maps fuenlabrada" (una ciudad de España), así que la guía aparece en búsquedas de otros lugares.

**Por qué lo hice:** Sabrina eligió los puntos 1 (arreglo del sitemap) y 2 (Bing Webmaster Tools) de las opciones para traer más tráfico.

### v1.74 — 31 de octubre de 2026

**Qué hice:** Limpieza de rendimiento: alojé la tipografía Space Mono en el propio sitio con una fuente de reserva de medidas casi iguales, borré una foto de 1,9 MB que no se usaba y achiqué el logo de JL Construcciones en seco.

**Detalle del cambio:**

- **Tipografía propia (`fuentes/space-mono-latin-400.woff2`, 16 KB):** es el mismo archivo latino que cargaba Google Fonts (Space Mono v17, licencia OFL). Se declara con `@font-face` en `src/input.css` (peso `400 500`, porque Space Mono solo tiene 400 y 700 y el sitio usa 400 y 500, que ya se dibujaban con el 400) y se precarga con `<link rel="preload">` en las 7 páginas. Se sacaron los dos `preconnect` y el `<link>` de Google Fonts: son 2 conexiones y 1 pedido menos que bloqueaban el primer dibujado.
- **Fuente de reserva "Space Mono Fallback":** usa Courier New (o Liberation Mono / Courier) con `size-adjust: 102%`, porque Space Mono mide 0,612 em de ancho por letra y Courier New 0,6. `tailwind.config.js` pasa de `["Space Mono", "monospace"]` a `["Space Mono", "Space Mono Fallback", "monospace"]`. Medí en el navegador una frase de 36 px: Space Mono 1255,8 px, la reserva nueva 1256,0 px y la reserva anterior (`monospace`) 1128,2 px, o sea 10 % más angosta. Ese corrimiento es el mecanismo del CLS intermitente que se había detectado.
- **CSP y caché (`vercel.json`):** se quitan `fonts.googleapis.com` de `style-src` y `fonts.gstatic.com` de `font-src` (ya no se usan). Nueva regla de caché para `/fuentes/*`: un año e `immutable`.
- **Foto sin usar:** se borró `imagenes/sabristudios_subheadline.jpeg` (1,9 MB, 2912×1440). No la referenciaba ningún archivo.
- **Logo de JL Construcciones en seco:** el original (1360×784, 41 KB) se mostraba en un cuadrado de 150 px con `object-cover`. Se creó `imagenes/logo-jl-construcciones-en-seco-cuadrado.jpg` (320×320, 13 KB, recorte centrado, el mismo que hacía `object-cover`) y lo usan la home y la página del proyecto. El original sigue en el repo porque es la imagen `og:image` de la página del proyecto.
- **Verificación:** en local, `document.fonts` muestra "Space Mono 400 500" y "Space Mono Fallback" cargadas, la tipografía se pide solo a `/fuentes/` (ningún pedido a Google), las imágenes cargan y los únicos errores de consola son los 404 de `/api/region` y `/_vercel/insights`, que solo existen en Vercel.
- **Pendiente:** (1) con la v1.74 publicada, volver a pasar PageSpeed y mirar el CLS en varias corridas (el 0,9 a 1 no se pudo reproducir, así que no se puede asegurar que este cambio lo elimine); (2) de los avisos de PageSpeed del 29/10 (JavaScript sin usar 72 KiB, tiempos de caché 28 KiB, solicitudes que bloquean el renderizado) falta ver el informe completo para saber cuánto es de scripts de terceros (Google Tag Manager, Clarity) que no se pueden cambiar desde el sitio; (3) abrir la consola en el sitio desplegado para ver el error que PageSpeed marcó en Prácticas recomendadas.

**Por qué lo hice:** Sabrina pidió hacer la limpieza de rendimiento, que reunía los pendientes de PageSpeed (CLS intermitente, foto sin usar, avisos de imágenes y caché).

---

### v1.75 — 31 de octubre de 2026

**Qué hice:** Agregué `https://*.clarity.ms` a la directiva `img-src` del CSP en `vercel.json`, porque Clarity pide una imagen (`c.clarity.ms/c.gif`) y el navegador la bloqueaba.

**Detalle del cambio:**

- **Cómo lo encontré:** midiendo producción con PageSpeed Insights (31/10/2026, móvil, 10 corridas con la v1.74). En "Prácticas recomendadas" (92 en todas las corridas) figuraba un solo error de consola: `Loading the image 'https://c.clarity.ms/c.gif' violates the following Content Security Policy directive: "img-src 'self' data: https://www.google-analytics.com ..."`. Clarity ya estaba permitido en `script-src` y `connect-src`, pero no en `img-src`.
- **Qué cambia:** `img-src` pasa a `'self' data: https://*.clarity.ms https://www.google-analytics.com ...`. No se tocó ninguna otra directiva.
- **Verificación local:** `vercel.json` sigue siendo un JSON válido y la directiva queda como se espera. El efecto real (que el error desaparezca de la consola y de PageSpeed) solo se puede ver en el sitio publicado.
- **Qué NO sé:** si esta imagen influye en que Clarity no muestre `whatsapp_click` ni las etiquetas (paso B). Puede ser solo un envío de respaldo. Hay que mirar Clarity con sesiones nuevas después de publicar.
- **Pendiente:** (1) con la v1.75 publicada, pasar PageSpeed y confirmar que "Prácticas recomendadas" sube de 92 y que el error de consola desaparece; (2) revisar en Clarity si aparecen `whatsapp_click` y las etiquetas (`traffic_source`, `utm_*`, `navegador_interno`); (3) el CLS intermitente sigue sin causa identificada: en 10 corridas de PageSpeed móvil con la v1.74 hubo 1 con CLS 0,839 (rendimiento 66) y 7 de las 8 que pude leer dieron 99 o 100.

**Por qué lo hice:** Sabrina pidió arreglar el CSP después de ver el error en las corridas de PageSpeed.

---

---

## 20. Tabla de Versiones

| Versión | Fecha | Autor | Resumen de cambios |
| --- | --- | --- | --- |
| 0.1 | 24 de agosto de 2026 | Sabri Studios | Creación inicial del PRD original (alcance, requisitos, historias de usuario) |
| 0.2 | 24 de agosto de 2026 | Sabri Studios | Incorporación de animaciones de entrada accesibles al PRD original |
| 1.0 | Septiembre 2026 | Sabri Studios | Creación inicial del documento LEAN PRD (objetivo, persona, propuesta de valor, estructura de landing, roadmap y checklist) |
| 1.1 | Septiembre 2026 | Sabri Studios | Agregada la sección "La demo gratuita es así" en `index.html`, entre Proceso y Proyectos |
| 1.2 | Septiembre 2026 | Sabri Studios | Actualizado el subheadline del Hero con dato de urgencia (3 de cada 10 emprendedores) |
| 1.3 | Septiembre 2026 | Sabri Studios | Agregada la imagen faltante del Hero (emprendedora buscando su negocio en Google) |
| 1.4 | Septiembre 2026 | Sabri Studios | Ajustado el marco de la imagen del Hero a su proporción real (aspect-ratio en vez de altura fija) |
| 1.5 | Septiembre 2026 | Sabri Studios | Tarjetas de Proyectos ahora giran: frente con logo/etiqueta/nombre, dorso con el detalle del emprendimiento |
| 1.6 | Septiembre 2026 | Sabri Studios | Creado el `README.md` del proyecto (stack, estructura, setup local y flujo de Git) |
| 1.7 | Septiembre 2026 | Sabri Studios | Rediseñado el Hero: pantalla completa, titular con acento naranja, segundo CTA y señales de confianza |
| 1.8 | 16 de septiembre de 2026 | Sabri Studios | Actualizadas las preguntas frecuentes (6 preguntas nuevas + caja de contacto por WhatsApp) y su schema `FAQPage` |
| 1.9 | 16 de septiembre de 2026 | Sabri Studios | Fusionado `docs/PRD.md` con este LEAN PRD en un único documento |
| 1.10 | 16 de septiembre de 2026 | Sabri Studios | Agregados parámetros UTM a los 4 botones de WhatsApp (Hero, Sobre Mí/Footer, flotante, FAQ) |
| 1.11 | 16 de septiembre de 2026 | Sabri Studios | Agregado tracking de GA para scroll a "Proceso" y fuente de tráfico (UTM/referrer), cruzado con el evento de WhatsApp |
| 1.12 | 16 de septiembre de 2026 | Sabri Studios | Reemplazado el evento `contacto_whatsapp` por `whatsapp_click` con parámetros `whatsapp_source` y `button_location` en los 4 botones de WhatsApp |
| 1.13 | 27 de septiembre de 2026 | Sabri Studios | Sacada la sombra `shadow-ambient` de las etiquetas de las tarjetas de Proyectos y hechas responsive para que no se desborden en celulares angostos |
| 1.14 | 4 de octubre de 2026 | Sabri Studios | Agregada animación a la imagen del Hero: entrada desde la derecha al cargar y efecto Ken Burns suave, con soporte para `prefers-reduced-motion` |
| 1.15 | 4 de octubre de 2026 | Sabri Studios | Agregada flotación suave a la imagen del Hero y sacada su `shadow-ambient` para que no parezca clickeable |
| 1.16 | 5 de octubre de 2026 | Sabri Studios | Eliminada la sección "Antes / Después" de la landing y su animación `.slide-in-left` |
| 1.17 | 5 de octubre de 2026 | Sabri Studios | Agregada animación de entrada vertical y escalonada a los pasos de "La demo gratuita es así" |
| 1.18 | 5 de octubre de 2026 | Sabri Studios | Agregada la tarjeta de Mombé (textiles artesanales) en Proyectos, y su página `proyecto-mombe.html`, en desarrollo con el paso 1 (Diagnóstico) marcado como actual |
| 1.19 | 5 de octubre de 2026 | Sabri Studios | Achicados los espacios en blanco: Hero sin pantalla completa, padding de secciones de 80px a 48px y gaps internos de 48px a 32px, también en las páginas internas |
| 1.20 | 5 de octubre de 2026 | Sabri Studios | Sección Proceso con fondo azul suave a todo el ancho y bordes, para separarla de Proyectos |
| 1.21 | 5 de octubre de 2026 | Sabri Studios | Etiquetas de rubro de los proyectos pasadas de rojo `#A10C10` al azul de marca, en las tarjetas y en las páginas de proyecto |
| 1.22 | 10 de octubre de 2026 | Sabri Studios | Mejoras mobile: hover solo con mouse, menos espacios vacíos en tarjetas/Hero/Proceso/Sobre Mí, botón flotante de WhatsApp más chico en esquina y `touch-action: manipulation` |
| 1.23 | 10 de octubre de 2026 | Sabri Studios | Mejoras desde Clarity: íconos Material Symbols solo los usados, menú mobile se cierra al tocar fuera, `scroll-padding` para anclas y JS a prueba de `sessionStorage` bloqueado y navegadores viejos |
| 1.24 | 14 de octubre de 2026 | Sabri Studios | Segundo canal de contacto: CTA "Agendá una reunión" (Hero, Sobre mí, FAQ, demo y footer), agenda de Google Calendar embebida, `frame-src` en el CSP y evento `calendar_click` |
| 1.25 | 14 de octubre de 2026 | Sabri Studios | Cuarta tarjeta en Proyectos, "Servicios AF" (con foto de portada), y su página `proyecto-web-servicios-profesionales.html` con los 3 pasos completos y botón al sitio publicado |
| 1.26 | 14 de octubre de 2026 | Sabri Studios | Tracking GA4: `generate_lead` como conversión única (WhatsApp y reunión), medición de la agenda embebida, `section_view` para embudo, `project_click` y `project_site_click` |
| 1.27 | 14 de octubre de 2026 | Sabri Studios | Botones "Reservá tu demo" y "Agendá una reunión" alineados (mismo ancho desde `sm`, con grilla de 2 columnas) en Hero y Sobre mí |
| 1.28 | 14 de octubre de 2026 | Sabri Studios | Dominio de producción corregido a `web-sabristudios.vercel.app` (canonical, Open Graph, JSON-LD, sitemap, robots, llms.txt, política y README) y links del FAQ ordenados en celular |
| 1.29 | 14 de octubre de 2026 | Sabri Studios | CSP corregido para que GA4 reciba datos (`analytics.google.com` y `www.google.com` en `connect-src`, más `img-src`) y JSON-LD del FAQ igualado al texto visible |
| 1.30 | 19 de octubre de 2026 | Sabri Studios | Revisión de la configuración de GA4: `scroll_proceso` pasa por `enviarEvento` como el resto de los eventos de `index.html` |
| 1.31 | 19 de octubre de 2026 | Sabri Studios | Eliminado el link "Agendar reunión" del footer de `index.html` |
| 1.32 | 19 de octubre de 2026 | Sabri Studios | Eliminada la agenda de Google Calendar embebida (iframe, eventos `calendar_embed_*` y `frame-src` del CSP) |
| 1.33 | 19 de octubre de 2026 | Sabri Studios | Agregado el design system de la marca a la documentación (`Design System.md`), con enlaces desde el PRD y el README |
| 1.34 | 19 de octubre de 2026 | Sabri Studios | El design system manda: corregida la tipografía en el PRD (Space Mono en todo el sitio) y anotado el pendiente de pesos 700 |
| 1.35 | 19 de octubre de 2026 | Sabri Studios | Pesos tipográficos según el design system: `font-bold`/`font-semibold` pasan a `font-medium` y se deja de cargar el peso 700 |
| 1.36 | 19 de octubre de 2026 | Sabri Studios | Botones según el design system: `brand-orange-hover` corregido a `#C66A2E`, texto `gris-neutro` en el botón primario y botón secundario con fondo `gris-neutro` y hover `gris-claro` |
| 1.37 | 19 de octubre de 2026 | Sabri Studios | Íconos de Material Symbols a Tabler Icons outline (máscaras SVG propias, sin fuente externa) y tokens de color renombrados con los nombres del design system |
| 1.38 | 19 de octubre de 2026 | Sabri Studios | Sombra `shadow-media` del design system, aplicada solo en elementos clickeables (hover de botones y tarjetas de proyectos, botón flotante de WhatsApp) |
| 1.39 | 19 de octubre de 2026 | Sabri Studios | Logos SVG del design system en `imagenes/`: logotipo horizontal en header y footer, favicon SVG; `og:image` y JSON-LD siguen en JPG |
| 1.40 | 19 de octubre de 2026 | Sabri Studios | Consent Mode v2 solo para EEE, Reino Unido y Suiza: cookies denegadas por defecto por región, aviso con aceptar/rechazar (`consentimiento.js`), función `api/region.js` y política de privacidad actualizada |
| 1.41 | 19 de octubre de 2026 | Sabri Studios | Botones "Reservá tu demo" y "Agendá una reunión" (Hero y Sobre mí) con el mismo formato: contorno, fondo transparente y relleno sólido al hover |
| 1.42 | 19 de octubre de 2026 | Sabri Studios | Acción principal "Reservá tu demo" (relleno) y secundaria "Agendá una reunión" (contorno), botón de demo en la barra del celular, demo de 4 a 3 pasos con botones al final y revisión de ortografía y redacción |
| 1.43 | 19 de octubre de 2026 | Sabri Studios | Mejoras de UX: texto chico naranja a azul por contraste, etiquetas de 12px, FAQ "¿Cuánto cuesta?", objetivos táctiles de 44px, foco visible con teclado y colores y botones consistentes en las páginas de proyecto |
| 1.44 | 19 de octubre de 2026 | Sabri Studios | Mombé marcado como "En desarrollo" en su tarjeta y su página; se quita el FAQ de precio (sin precio en la web) |
| 1.45 | 19 de octubre de 2026 | Sabri Studios | Texto de "Sobre mí" reescrito (opción B, centrada en el diagnóstico) |
| 1.46 | 19 de octubre de 2026 | Sabri Studios | Se quita "Agendá una reunión" de "Sobre mí": queda solo "Reservá tu demo" |
| 1.47 | 19 de octubre de 2026 | Sabri Studios | Imágenes nuevas revisadas: favicon PNG de 32×32 en uso, el resto eliminado (duplicados de los SVG y SVG con estilos rotos) |
| 1.48 | 19 de octubre de 2026 | Sabri Studios | Se eliminan dos imágenes sin uso (`imagen mia de frente.png` y `hero-presencia-online-google.jpg`) |
| 1.49 | 19 de octubre de 2026 | Sabri Studios | Logotipos horizontales SVG nuevos con el texto en trazados (Space Mono), sin metadatos; se eliminan los PNG subidos |
| 1.50 | 19 de octubre de 2026 | Sabri Studios | Logo del header y del footer más grande (40 px en celular, 64 px en escritorio y 56 px en el footer) |
| 1.51 | 19 de octubre de 2026 | Sabri Studios | Protección de la rama `master`: PR obligatorio, sin force push ni borrado (los administradores pueden saltarla); se descartó exigir el check de Vercel porque los despliegues de `develop` se cancelan |
| 1.52 | 19 de octubre de 2026 | Sabri Studios | En celular, la etiqueta de rubro de las tarjetas de Proyectos ocupa todo el ancho y ya no tapa el logo (en el flujo normal, y en la esquina solo desde `md`) |
| 1.53 | 19 de octubre de 2026 | Sabri Studios | Botón "Reservá tu demo" de la barra sin partirse en dos líneas en celulares angostos (12 px y logo de 36 px por debajo de 360 px) |
| 1.54 | 19 de octubre de 2026 | Sabri Studios | Nuevo token `naranja-texto` (`#B05218`, 4.66:1 sobre `gris-neutro`) para texto chico en naranja sobre fondo claro: link del aviso de cookies y hover de los links de volver |
| 1.55 | 20 de octubre de 2026 | Sabri Studios | Fuente de tráfico: un `utm_source` nuevo en la URL pisa el valor guardado en la pestaña, y los referrers de Gmail ya no cuentan como `google_organic` (6 páginas) |
| 1.56 | 20 de octubre de 2026 | Sabri Studios | Nueva página de contenido `guia-aparecer-en-google-maps.html` (Article + FAQPage + BreadcrumbList), con link en el footer, sitemap y `llms.txt` |
| 1.57 | 20 de octubre de 2026 | Sabri Studios | Logo del header alineado con el borde izquierdo del contenido: margen negativo por tamaño y `shrink-0` (7 páginas) |
| 1.58 | 20 de octubre de 2026 | Sabri Studios | Guía de Google Maps verificada contra la documentación oficial de Google: correcciones, afirmaciones sin respaldo eliminadas y sección "Fuentes" |
| 1.59 | 21 de octubre de 2026 | Sabri Studios | Ficha de Google Maps conectada: `hasMap` y `sameAs` en el JSON-LD de `index.html` y línea en `llms.txt` |
| 1.60 | 29 de octubre de 2026 | Sabri Studios | Link "Dejanos tu reseña" en el footer de `index.html` con el link de reseñas de la ficha de Google; ícono `ti-star` |
| 1.61 | 29 de octubre de 2026 | Sabri Studios | Imagen propia de 1200×630 para compartir en redes (`og:image` y `twitter:image` en 4 páginas) y revisión del CTA en celular (ya resuelto en v1.42) |
| 1.62 | 29 de octubre de 2026 | Sabri Studios | Página de Facebook de Sabri Studios en el `sameAs` del JSON-LD de `index.html` |
| 1.63 | 29 de octubre de 2026 | Sabri Studios | Accesibilidad: etiqueta `main` en 6 páginas, objetivos táctiles de 44 px en links de footer y texto, y contraste del botón flotante de WhatsApp (1,98:1 a 8,33:1); footer con más espacio abajo para que el botón flotante no tape los links |
| 1.64 | 29 de octubre de 2026 | Sabri Studios | Logo de Mombé (`imagenes/logo-mombe.jpg`) en la tarjeta de `index.html` y en el encabezado de `proyecto-mombe.html`, en lugar de la inicial "M"; imagen propia para compartir (`og-mombe.jpg`) |
| 1.65 | 29 de octubre de 2026 | Sabri Studios | Página de Mombé en el paso 2 (Diseño y Estrategia): diagnóstico completado, texto del paso actual, línea de progreso y metadescripciones |
| 1.66 | 30 de octubre de 2026 | Sabri Studios | `develop` vuelve a desplegar en Vercel (Require Verified Commits en Disabled y Branch Tracking de Preview activado) y `master` vuelve a exigir el check "Vercel" |
| 1.67 | 30 de octubre de 2026 | Sabri Studios | Contraste de los botones naranja (opción B): texto `texto-fuerte` (5,35:1) y `naranja-hover` más claro `#E58F52` (6,59:1); Design System actualizado |
| 1.68 | 30 de octubre de 2026 | Sabri Studios | Hero de la home rediseñado: la foto se reemplaza por una búsqueda de Google ilustrada (resultados de la competencia y hueco "Tu negocio / No aparece"), visible también en celular, con un solo movimiento y sin la foto de 1,9 MB |
| 1.69 | 30 de octubre de 2026 | Sabri Studios | Proyectos de la home rediseñados (qué cambió + estado del proceso, 2 columnas), movimiento genérico de la home eliminado y botones y etiquetas en minúscula normal |
| 1.70 | 29 de octubre de 2026 | Sabri Studios | Corte de la medición de GA4 y Clarity fuera del sitio real y en navegadores automáticos |
| 1.71 | 30 de octubre de 2026 | Sabri Studios | Corrección del desborde horizontal en celulares angostos (tarjetas de proyectos, encabezado y pie) |
| 1.72 | 30 de octubre de 2026 | Sabri Studios | Eventos de contacto también en Clarity, UTM completos para Instagram, etiqueta de navegador interno de Instagram/Facebook (`medicion.js`) y guía de UTM |
| 1.73 | 30 de octubre de 2026 | Sabri Studios | Sitemap con las 4 páginas de proyecto y fechas respaldadas (la home figuraba con `2026-09-05`) y archivo de verificación de Bing (`BingSiteAuth.xml`) |
| 1.74 | 31 de octubre de 2026 | Sabri Studios | Limpieza de rendimiento: Space Mono alojada en el sitio con fuente de reserva de medidas parecidas, foto sin usar de 1,9 MB borrada y logo de JL achicado |
| 1.75 | 31 de octubre de 2026 | Sabri Studios | CSP: se permite `https://*.clarity.ms` en `img-src` para que Clarity pueda cargar su imagen de seguimiento (`c.gif`) |
