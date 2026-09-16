# PRD - Landing Page de Sabri Studios

## Versión

**Versión:** 1.12

**Fecha:** Septiembre 2026

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
- Sección "Antes / Después" para explicar el costo de no aparecer en Google.
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

```
Tráfico (IG, Google, referencia)
        ↓
Landing: Leo el problema, veo que entienden mi situación
        ↓
Secciones persuasivas: Antes/Después, Proceso, Demo gratuita, Casos, FAQ
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

**Estado actual:** Pantalla completa, headline con acento naranja, subheadline con dato de urgencia, dos CTAs (WhatsApp directo + "Ver cómo funciona"), imagen del problema y señales de confianza.

**Mejoras pendientes:**

- Considerar A/B test de copy del headline/subheadline (ver Roadmap, Fase 3).

### 7.2 Sección "Antes/Después" ✅ (Mantener, expandir)

**Estado actual:** Bien estructurada con iconos. Muestra el problema vs. la solución.

**Mejoras identificadas:**

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

- Agregar objeción de precio ("¿Cuánto cuesta?") cuando se defina si el pricing va visible en la landing (ver punto 7.8).

### 7.8 Sección NUEVA: "Pricing" ❌ (Falta)

**Estado actual:** No existe.

**Por qué falta importa:**

- Emprendedor pequeño quiere saber "¿me alcanza?" antes de consultar.
- Transparencia aumenta confianza.
- Evita consultas de gente que no puede pagar.

**Qué agregar:**

```
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
| Antes/Después | Iconografía | Mantener, son claras. |
| Proceso | Ilustraciones de cada paso | Timeline visual: Diagnóstico (chat) → Diseño (Figma/wireframe) → Go Live. |
| Proyectos | Screenshots de webs | Agrandar, mostrar homepage completa, no solo logo. |

### 8.2 Colores y Tipografía

**Mantener:** Paleta de marca Sabri Studios.

- Azul primario (`brand-blue`): `#1E3A5F`
- Naranja (`brand-orange`): `#D97A3C`
- Neutro (`background`): `#F5F3EF`
- Tipografía de títulos y cuerpo: Space Grotesk. CTA de WhatsApp: Space Mono.

**Asegurar:** CTAs en naranja (`brand-orange`), títulos en azul (`brand-blue`).

---

## 9. Requisitos funcionales

| ID | Requisito | Prioridad |
| --- | --- | --- |
| RF-01 | La landing debe mostrar una propuesta de valor clara en la primera pantalla. | Alta |
| RF-02 | La landing debe incluir un CTA visible hacia WhatsApp. | Alta |
| RF-03 | La landing debe explicar el problema mediante una comparación "Antes / Después". | Alta |
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

**Criterios de aceptación (BDD)**

```gherkin
Característica: Comunicar el costo de la invisibilidad digital

Escenario: La persona visita la sección del problema
  Dado que la persona está recorriendo la landing page
  Cuando llega a la sección "Antes / Después"
  Entonces ve un título que explica el costo de no aparecer en Google
  Y puede comparar las consecuencias de no tener presencia digital con los beneficios de tenerla
```

#### HU-02 - Comprender la propuesta de valor

**Como** persona que busca conseguir más clientes,
**quiero** entender qué hace Sabri Studios,
**para** decidir si el servicio puede ayudar a mi negocio.

**Criterios de aceptación (BDD)**

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

**Criterios de aceptación (BDD)**

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

**Criterios de aceptación (BDD)**

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

**Criterios de aceptación (BDD)**

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

**Criterios de aceptación (BDD)**

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

**Criterios de aceptación (BDD)**

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

**Criterios de aceptación (BDD)**

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

**Criterios de aceptación (BDD)**

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
