---
name: alcancemos-web-build
description: >-
  Defines the technical implementation standards, architecture, performance, accessibility,
  responsive behavior, motion execution, form handling, Elementor compatibility guidelines,
  and production-readiness protocols for the Alcancemos website. Use whenever building,
  modifying, refactoring, testing, or shipping Alcancemos frontend code.
---

# Alcancemos Web Build & Technical Engineering

Esta Skill es la guía técnica obligatoria para la arquitectura, desarrollo, refactorización, optimización y puesta en producción del sitio web de **Alcancemos**.

> [!IMPORTANT]
> **Jerarquía de Autoridad:**
> * `alcancemos-design-system` = Define **cómo debe verse, sentirse, narrarse y comunicarse** Alcancemos (autoridad visual, marca, tono y copy).
> * `alcancemos-web-build` = Define **cómo debe implementarse técnicamente** el código con excelencia (arquitectura, performance, accesibilidad, estabilidad y calidad).
> 
> En cualquier conflicto o ambigüedad visual, `alcancemos-design-system` prevalece sobre consideraciones de conveniencia técnica.

---

## 1. Stack Tecnológico Real del Proyecto

* **Framework:** Next.js 15.5+ (App Router, directorio `src/app`).
* **Runtime & Render:** React 19.1+ / React DOM 19.1+.
* **Lenguaje:** TypeScript 5.7+ en modo estricto (`"strict": true` en `tsconfig.json`, sin uso de `any`).
* **Estilos:** Tailwind CSS 3.4+ con PostCSS y variables semánticas CSS (`--background`, `--card`, `--heading`, `--accent`, etc.).
* **Motion & Interacciones:** `framer-motion` 11.18+ (con soporte estricto de `prefers-reduced-motion`) + transiciones CSS nativas.
* **Iconografía:** `lucide-react`.
* **Backend & Integraciones:** Next.js Serverless Route Handlers (`src/app/api/contact/route.ts`), SDK de `resend` con rate limiting, honeypot y validación server-side.
* **Paquetes y Dependencias:** `npm` con `package-lock.json`.

---

## 2. Principios Fundamentales de Arquitectura

1. **TypeScript Estricto:**
   * Cero uso de `any`.
   * Tipar interfaces y tipos en `src/data/` o en archivos de definición dedicados.
   * Usar `as const` en datasets estáticos para inferencia literal inmutable.
2. **Componentes Pequeños y Semánticos:**
   * Separar lógica de presentación (`src/components/ui/`), secciones completas (`src/components/sections/`) y layout global (`src/components/layout/`).
   * Evitar componentes gigantescos monolíticos. Si una sección supera ~150-200 líneas, modularizar subcomponentes o tarjetas internas.
   * Evitar abstracciones prematuras o wrappers de una sola línea sin valor real.
3. **Desacoplamiento de Contenido y Datos:**
   * Centralizar textos comerciales, arrays de características, pasos de proceso, casos de estudio y FAQs en `src/data/`.
   * Los componentes deben enfocarse en el renderizado, layout, accesibilidad y microinteracciones.
4. **Respeto a Convenciones del Proyecto:**
   * Utilizar `@/*` como alias absoluto hacia `./src/*`.
   * Utilizar la utilidad compartida `cn()` (`src/lib/utils.ts`) para composición condicional de clases Tailwind.

---

## 3. Responsive y Mobile-First

El diseño móvil no es una simple reducción porcentual del escritorio. Requiere adaptación deliberada:

* **Breakpoints de Validación Obligatorios:**
  * `390px` (Mobile estándar / iPhone)
  * `768px` (Tablet portrait)
  * `1024px` (Tablet landscape / Laptop)
  * `1280px` (Desktop estándar)
  * `1440px` (Desktop amplio / Contenedor máximo)
* **Reglas Críticas de Maquetación Móvil:**
  * **Cero overflow horizontal:** Ningún elemento, tipografía o animación debe causar scroll horizontal (`overflow-x: hidden` a nivel de body y contención en secciones).
  * **Simplificación de conectores:** Las líneas o conectores SVG complejos del escritorio se ocultan en móvil (`hidden md:block` o `hidden lg:block`) o se reemplazan por indicadores secuenciales verticales simples.
  * **Accesibilidad táctil:** Todo botón, enlace o control debe cumplir un área de toque mínima de `44x44px`.
  * **Headings proporcionales:** Usar `clamp()` o clases responsivas (e.g. `text-3xl sm:text-4xl lg:text-6xl`) para evitar saltos de línea antiestéticos o palabras desbordadas.

---

## 4. Performance y Core Web Vitals

* **LCP (Largest Contentful Paint):**
  * Aplicar `priority` únicamente a la imagen crítica del Hero (logo/robot principal).
  * Precargar fuentes esenciales mediante `next/font` (`display: "swap"`).
* **CLS (Cumulative Layout Shift):**
  * Todas las imágenes (`next/image`) deben especificar `width` y `height` o usar `fill` con contenedor de relación de aspecto fija (`aspect-[x/y]`).
  * Reservar espacio para fuentes y elementos asíncronos para evitar saltos visuales durante la hidratación.
* **INP (Interaction to Next Paint) y Peso JS:**
  * No instalar dependencias pesadas innecesarias (no agregar Three.js, GSAP o bibliotecas de gráficos completas para una landing).
  * Limitar `"use client"` a los componentes que realmente requieran estado, hooks de navegador o animaciones de Framer Motion. Los contenedores estáticos deben ser Server Components.

---

## 5. Gestión de Imágenes y Assets

* **Uso de `next/image`:**
  * Usar componentes `Image` de Next.js para optimización automática a formatos WebP/AVIF.
  * Atributo `alt` obligatorio y descriptivo para imágenes informativas; `alt=""` y `aria-hidden="true"` para elementos puramente decorativos.
* **Asset del Robot Alcancemos:**
  * El robot es un activo visual premium central de la marca.
  * Alojar los renders de alta calidad en `public/brand/` o `public/robot/`.
  * Mantener proporciones nítidas sin distorsión ni compresión destructiva.
* **Microinterfaces Flotantes del Robot:**
  * Implementar las notificaciones flotantes (e.g. `Lead calificado`, `Seguimiento enviado`) como **UI real en HTML/CSS/Tailwind**, no como texto quemado dentro de la imagen del robot.
  * Esto garantiza perfecta nitidez, accesibilidad, animación desacoplada, responsividad y facilidad de edición de copy.

---

## 6. Motion, Animaciones y Scroll

* **Implementación con `framer-motion` y CSS:**
  * Utilizar componentes reutilizables como `<Reveal>` (`src/components/ui/Reveal.tsx`).
  * Entrada suave con `opacity: 0, y: 16` a `opacity: 1, y: 0` con curvas suaves como `ease: [0.22, 1, 0.36, 1]`.
  * Duraciones breves (`0.35s` a `0.6s`), retrasos escalonados (*stagger*) discretos.
* **Soporte Estricto a `prefers-reduced-motion`:**
  * Consultar siempre `useReducedMotion()` en componentes animados con Framer Motion.
  * Incluir la regla global en `globals.css` que neutraliza animaciones si el usuario tiene activada la preferencia de accesibilidad.
* **Control de Scroll:**
  * Prohibido el *scroll-jacking* o interferir artificialmente con la velocidad de desplazamiento del usuario.
  * Utilizar `scroll-mt-24` o `scroll-mt-28` en secciones con IDs para evitar que el Header fijo cubra los títulos al navegar por anclas.

---

## 7. Accesibilidad (A11y) y Semántica HTML

* **Estructura de Encabezados:**
  * Exactamente un solo `<h1>` por página (ubicado en el Hero).
  * Jerarquía lógica descendente (`h2` para secciones, `h3` para tarjetas/módulos).
* **Navegación por Teclado y Focus:**
  * Estados `:focus-visible` claros con anillo de acento (`focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-4`).
  * El menú móvil debe poder cerrarse con la tecla `Escape` y atrapar o controlar el foco adecuadamente.
* **Formularios Accesibles:**
  * Toda etiqueta `<label>` debe estar explícitamente vinculada a su `<input>` / `<select>` / `<textarea>` mediante `htmlFor` e `id`.
  * Mensajes de ayuda y errores asociados con `aria-describedby` y `role="alert"`.

---

## 8. Formularios, API y Seguridad

* **Endpoint de Contacto (`src/app/api/contact/route.ts`):**
  * Preservar la arquitectura robusta existente con Resend.
  * Mantener la validación estricta en servidor (no confiar solo en el cliente).
  * Mantener la protección antispam por Honeypot (`payload.website`).
  * Mantener el Rate Limiting por IP para prevenir abusos.
  * Sanitizar strings y escapar contenido antes de generar emails HTML (`escapeHtml`).
* **Seguridad de Variables de Entorno:**
  * Nunca incluir `RESEND_API_KEY` ni secretos en el código cliente ni en repositorios Git.
  * Utilizar `.env.local` para desarrollo y documentar variables en `.env.example`.

---

## 9. Compatibilidad y Filosofía "Elementor-Friendly"

Aunque el sitio se desarrolle a medida en código (Next.js + Tailwind), la arquitectura visual debe concebirse de modo que sus conceptos puedan ser replicados o trasladados posteriormente a entornos CMS como Elementor:

* **Estructuras Basadas en Flexbox y CSS Grid:**
  * Diseñar mediante contenedores, filas y columnas estándar.
* **Evitar Dependencias Imposibles de Replicar:**
  * No depender de shaders WebGL personalizados, Three.js 3D en tiempo real o motores de scroll complejos de canvas.
  * Lograr el efecto premium mediante composición, espaciado generoso, microinterfaces flotantes limpias, tarjetas bien estructuradas y tipografía impecable.

---

## 10. Protocolo de Verificación y Testing (QA)

Antes de dar por concluida cualquier tarea o fase de implementación:

1. **Validación de Linter:**
   ```bash
   npm run lint
   ```
2. **Validación de Tipos de TypeScript:**
   ```bash
   npx tsc --noEmit
   ```
3. **Build de Producción:**
   ```bash
   npm run build
   ```
4. **Inspección Visual en Múltiples Viewports:**
   * Verificar en 390px, 768px, 1024px, 1280px y 1440px.
   * Comprobar ausencia de desbordamientos, consistencia de espaciados, nitidez del robot y comportamiento del Header fijo.
5. **Revisión de Git:**
   * Ejecutar `git status` y `git diff` para asegurar que solo se tocan los archivos requeridos.
   * No realizar `commit` ni `push` a menos que sea explícitamente solicitado.
