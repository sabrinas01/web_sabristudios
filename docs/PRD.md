# PRD - Landing Page de Sabri Studios

## 1. Resumen del producto

Sabri Studios necesita una landing page que convierta la falta de presencia digital de pequeños negocios en una oportunidad concreta de contacto. La página debe explicar el problema, presentar un proceso de trabajo simple y llevar a la persona visitante a completar un formulario o iniciar una conversación por WhatsApp.

## 2. Objetivo

Generar contactos calificados de personas que necesitan crear o mejorar la presencia online de su negocio.

### Indicadores de éxito

- La persona visitante entiende en pocos segundos qué problema resuelve Sabri Studios.
- La persona visitante identifica claramente las tres etapas del servicio.
- El formulario de contacto y WhatsApp son fáciles de encontrar y utilizar.
- La página funciona correctamente en dispositivos móviles y de escritorio.
- Las animaciones acompañan la lectura sin impedir el acceso al contenido.

## 3. Alcance

### Incluido

- Sección principal con propuesta de valor y CTA.
- Sección “Antes / Después” para explicar el costo de no aparecer en Google.
- Sección de proceso con tres pasos: Diagnóstico, Diseño y Estrategia, y Resultados.
- Sección “Sobre mí” con presentación de Sabri Studios.
- CTA hacia el formulario de Google.
- Botón flotante de WhatsApp.
- Navegación interna hacia Proceso y Sobre mí.
- Diseño responsive.
- Animaciones de entrada al hacer scroll con respeto por `prefers-reduced-motion`.

### Fuera de alcance

- Panel de administración.
- Registro o inicio de sesión.
- Procesamiento de pagos.
- Gestión de leads dentro de la página.
- Blog o sistema de publicación de contenidos.
- Integración automática con un CRM.

### Nuevo en v0.5.0

- Página de detalle propia por cada proyecto ("caso de estudio"), con los 3 pasos del proceso aplicados a ese proyecto puntual y un botón final para visitar el sitio real del cliente.

## 4. Público objetivo

Personas dueñas de pequeños negocios o emprendimientos que:

- No aparecen en Google o Google Maps.
- Dependen principalmente del boca a boca.
- Necesitan una presencia digital profesional.
- Buscan una solución clara, directa y orientada a conseguir clientes.

## 5. Requisitos funcionales

| ID | Requisito | Prioridad |
| --- | --- | --- |
| RF-01 | La landing debe mostrar una propuesta de valor clara en la primera pantalla. | Alta |
| RF-02 | La landing debe incluir un CTA visible hacia el formulario de contacto. | Alta |
| RF-03 | La landing debe explicar el problema mediante una comparación “Antes / Después”. | Alta |
| RF-04 | La landing debe mostrar el proceso en tres pasos numerados. | Alta |
| RF-05 | La landing debe incluir una presentación de la persona responsable del servicio. | Media |
| RF-06 | La landing debe ofrecer un acceso directo a WhatsApp. | Alta |
| RF-07 | Los enlaces de navegación deben llevar a las secciones correspondientes. | Media |
| RF-08 | Las animaciones deben activarse al entrar el contenido en el viewport. | Media |
| RF-09 | La página debe ofrecer una experiencia usable en móvil y escritorio. | Alta |
| RF-10 | Cada tarjeta de la sección "Proyectos desarrollados" debe llevar a una página propia con los 3 pasos del proceso aplicados a ese proyecto, y esa página debe terminar con un botón para visitar el sitio real del cliente. | Alta |

## 6. Requisitos no funcionales

- El contenido debe estar redactado en español y usar un tono directo y profesional.
- Los botones y enlaces principales deben tener estados visuales de interacción.
- El contenido debe conservar legibilidad y contraste suficientes.
- La página no debe depender de la animación para comunicar información esencial.
- Las personas que prefieran reducir el movimiento deben recibir una experiencia estática.
- Las imágenes deben tener textos alternativos descriptivos cuando corresponda.
- La página debe poder abrirse como un documento HTML estático.

## 7. Historias de usuario

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
  Y encuentra un CTA para completar el formulario
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

### Épica C - Contactar

#### HU-05 - Completar el formulario

**Como** potencial cliente interesado,  
**quiero** acceder rápidamente al formulario,  
**para** enviar la información de mi negocio y solicitar ayuda.

**Criterios de aceptación (BDD)**

```gherkin
Característica: Acceder al formulario de contacto

Escenario: La persona selecciona el CTA principal
  Dado que la persona está en la landing page
  Cuando selecciona "COMPLETAR FORMULARIO"
  Entonces se abre el enlace configurado del formulario de Google
  Y la persona puede continuar con el envío de su consulta
```

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
  Y el CTA del formulario y el botón de WhatsApp siguen siendo utilizables
```

### Épica E - Ver el caso de estudio de un proyecto

#### HU-09 - Conocer el proceso de un proyecto puntual

**Como** persona interesada en contratar el servicio,  
**quiero** ver cómo fue el proceso de un proyecto ya hecho,  
**para** confiar en que el mismo proceso puede aplicarse a mi negocio.

**Criterios de aceptación (BDD)**

```gherkin
Característica: Ver el caso de estudio de un proyecto

Escenario: La persona presiona "Ver proyecto"
  Dado que la persona está en la sección "Proyectos desarrollados"
  Cuando presiona el botón "Ver proyecto" de una tarjeta
  Entonces se abre una página propia de ese proyecto
  Y esa página muestra los 3 pasos del proceso (Diagnóstico, Diseño y Estrategia, Resultados) aplicados a ese proyecto puntual

Escenario: La persona quiere visitar el sitio real
  Dado que la persona está en la página de detalle de un proyecto
  Cuando llega al final del contenido
  Entonces encuentra un botón "Ver sitio web"
  Y ese botón abre el sitio real del cliente en una pestaña nueva
```

## 8. Dependencias y riesgos

- El formulario depende de la disponibilidad del enlace externo de Google Forms.
- WhatsApp depende de que el número configurado sea correcto y esté activo.
- Las imágenes y recursos alojados externamente pueden afectar la carga si no están disponibles.
- Las animaciones deben mantenerse como mejora progresiva y nunca ocultar información esencial.

## 9. Historial de versiones

| Versión | Fecha | Responsable | Cambios |
| --- | --- | --- | --- |
| 0.1.0 | 2026-08-24 | Sabri Studios | Creación inicial del PRD, alcance, requisitos e historias de usuario. |
| 0.2.0 | 2026-08-24 | Sabri Studios | Incorporación de animaciones de entrada para los pasos 1, 2 y 3 y criterios de accesibilidad para reducción de movimiento. |
| 0.3.0 | 2026-09-16 | Sabri Studios | Reordené la sección "Proyectos desarrollados" por encima de la sección "Proceso", y actualicé el orden de los enlaces del menú de navegación (Proyectos antes de Proceso) para que coincida. |
| 0.4.0 | 2026-09-19 | Sabri Studios | Optimización basada en datos de Clarity y mapas de calor: reduje el alto del hero y el padding de todas las secciones en mobile para que se vea más contenido sin scroll inicial; agregué microcopy "Mirá proyectos que ya hice" debajo del CTA principal; agrandé las tarjetas de proyecto, acorté sus descripciones y reemplacé el link de texto por un botón explícito "Ver proyecto"; sumé estados hover al botón de menú mobile y a las preguntas frecuentes para reforzar qué elementos son clickeables. |
| 0.5.0 | 2026-09-19 | Sabri Studios | Creé una página de detalle propia por proyecto (`proyecto-ar-estetica-vehicular.html` y `proyecto-jl-construcciones-en-seco.html`) usando los colores y tipografías del sistema de diseño (`tailwind.config.js`). El botón "Ver proyecto" de cada tarjeta ahora lleva a esa página, que muestra los 3 pasos del proceso aplicados a ese proyecto puntual y termina con un botón "Ver sitio web" que abre el sitio real del cliente en una pestaña nueva. |
