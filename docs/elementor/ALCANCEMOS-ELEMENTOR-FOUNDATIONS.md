# ALCANCEMOS — ELEMENTOR DESIGN SYSTEM & FOUNDATIONS (FASE E0)
## Especificación Oficial para la Reconstrucción Pixel-Perfect en WordPress / Elementor Pro

---

## 1. Stack Técnico Detectado y Arquitectura de Migración
* **Framework de Origen:** Next.js 15 (App Router), Tailwind CSS v3, Framer Motion, Lucide React Icons.
* **Plataforma de Destino:** WordPress + Hello Elementor Theme + Elementor Pro (Flexbox & Grid Containers).
* **Filosofía de Implementación:**
  * **75% – 85% Configuración Nativa de Elementor:** Contenedores Flexbox/Grid, Ajustes Globales de Sitio (Global Colors, Global Fonts, Tipografías de Tema).
  * **15% – 25% CSS Personalizado Estructurado:** Variables CSS centralizadas, efectos visuales de alta precisión (degradados táctiles de botones, sombras compuestas, mascarado de imagen con fade progresivo, backdrop-blur).
  * **Prohibición de Plugins Innecesarios:** Cero paquetes de widgets de terceros (Essential Addons, Crocoblock, etc.) para mantener código limpio, rendimiento Core Web Vitals y estabilidad a largo plazo.

---

## 2. Typography Tokens & Sistema Tipográfico

### Tipografía Display: `Bricolage Grotesque`
* **Usos:** Títulos H1, H2, H3, métricas financieras dominantes (`26.35x`), statements y números de principios (`01`, `02`, `03`).
* **Estilo Visual:** Personalidad geométrica moderna, compacta y de alta autoridad técnica.

| Nivel Tipográfico | Elemento HTML / Clase | Tamaño Desktop | Tamaño Tablet | Tamaño Mobile | Peso | Line-Height | Letter-Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display XL** | `H1` (Hero Principal) | `74px` (`4.65rem`) | `52px` | `40px` (`2.5rem`) | 500 (Medium) | `1.04` | `-0.035em` |
| **Display LG** | `H2` (Secciones) | `60px` (`3.8rem`) | `44px` | `35px` (`2.2rem`) | 500 (Medium) | `1.06` | `-0.035em` |
| **Display MD** | `H2` Secundario / Puente | `44px` (`2.75rem`) | `34px` | `28px` (`1.85rem`) | 500 (Medium) | `1.12` | `-0.035em` |
| **Heading MD** | `H3` (Tarjetas / Nodos) | `26px` | `22px` | `20px` | 500 (Medium) | `1.20` | `-0.025em` |
| **Dominant Metric** | Cifra ROAS (Cases) | `110px` (`8.5rem`) | `84px` | `64px` (`4.8rem`) | 500 (Medium) | `1.00` | `-0.035em` |
| **Statement Quote** | Cita Filosofía | `40px` (`2.5rem`) | `30px` | `24px` | 500 (Medium) | `1.18` | `-0.030em` |

### Tipografía UI / Body: `Inter`
* **Usos:** Subtítulos (lead), párrafos generales, navegación, botones, badges, campos de formulario, microcopy y system events.

| Nivel UI | Uso | Tamaño Desktop | Tamaño Mobile | Peso | Line-Height | Letter-Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Lead / Subcopy** | Bajadas de titulares | `18px` (`1.15rem`) | `16px` (`1.02rem`) | 400 (Regular) | `1.65` | `-0.010em` |
| **Body Standard** | Párrafos descriptivos | `16px` | `14.5px` | 400 (Regular) | `1.70` | `normal` |
| **Navigation** | Menú Header / Footer | `14px` | `16px` (Mobile Drawer) | 500 (Medium) | `1.20` | `-0.015em` |
| **Button Label** | Texto de botones | `14px` (Normal) / `15px` (Lg) | `14px` / `15px` | 500 (Medium) | `1.20` | `-0.010em` |
| **Badge / Label** | Eyebrows con dot | `11.5px` – `12px` | `11.5px` | 500 (Medium) | `1.00` | `-0.015em` |
| **System Events** | Microinterfaz Hero | `11px` (Label) / `13.5px` (Data) | `10.5px` / `12.5px` | 500 (Medium) | `1.25` | `normal` |

---

## 3. Color Tokens & Elementor Global Colors

| Elementor Global Color | Token CSS | Valor HEX / RGBA | Uso Obligatorio | Dónde NO Utilizar |
| :--- | :--- | :--- | :--- | :--- |
| **alc-heading** | `--alc-heading` | `#040112` | Títulos principales, textos de alta jerarquía, bordes oscuros sutiles. | No usar como fondo general de página. |
| **alc-text** | `--alc-text` | `#111111` | Cuerpo general de texto, etiquetas estándar. | No usar en textos secundarios con baja jerarquía. |
| **alc-muted** | `--alc-muted` | `#666470` | Subtítulos, párrafos explicativos, microcopy y metadatos. | No usar en titulares principales ni botones. |
| **alc-accent** | `--alc-accent` | `#FF0769` | Señales luminosas, beacons activos, acento en 1 palabra clave de titulares. | **NUNCA usar como fondo de botones primarios ni fondos de cards grandes.** |
| **alc-bg** | `--alc-bg` | `#F8F8F6` | Fondo tecnológico del Body, secciones alternas (Hero, Filosofía). | No usar cuando se requiera contraste puro de tarjeta. |
| **alc-surface** | `--alc-surface` | `#FFFFFF` | Fondo de cards, paneles de navegación flotante, formularios y modales. | No usar para texto. |
| **alc-surface-soft** | `--alc-surface-subtle` | `#FAF9F6` | Fondo suave del Hero Case (Casa & Telas) y lienzos de arquitectura. | No usar en botones. |
| **alc-border** | `--alc-border` | `rgba(4, 1, 18, 0.06)` | Reglas estructurales de 1px, bordes de tarjetas, divisores. | No usar bordes gruesos ni sombras sólidas. |

### Estrategia de Fondos de Página (Page Rhythm)
* **`#F8F8F6` (Base Cálida Tecnológica):** Fondo global del `body`, HeroSection, ProcessSection (Lienzo), PhilosophySection.
* **`#FFFFFF` (Superficie / Pausa de Alto Contraste):** EcosystemSection, ProblemsSection, CasesSection, ContactSection.
* **`#040112` (Grafito Profundo / Cierre):** FooterSection.

---

## 4. Container System & Layout Architecture

* **Ancho Máximo Global:** `1320px` (Contenedor estándar del proyecto).
* **Ancho Estrecho (Narrow):** `1200px` (Usado en Filosofía y Hero Case).
* **Ancho de Lectura (Reading/Subcopys):** `540px` a `840px`.

### Padding Horizontal Responsivo
* **Desktop (`> 1024px`):** `padding-inline: 32px` (`px-8`).
* **Tablet (`768px – 1024px`):** `padding-inline: 24px` (`px-6`).
* **Mobile (`< 768px`):** `padding-inline: 20px` (`px-5`).

### Clase Utilitaria Elementor
```css
.alc-container {
  width: 100%;
  max-width: 1320px;
  margin-inline: auto;
  padding-inline: 32px;
  box-sizing: border-box;
}
@media (max-width: 1024px) { .alc-container { padding-inline: 24px; } }
@media (max-width: 767px) { .alc-container { padding-inline: 20px; } }
```

---

## 5. Ritmo Vertical de Secciones (Section Rhythm)

| Nivel de Ritmo | Padding Vertical Desktop | Padding Vertical Tablet | Padding Vertical Mobile | Clases CSS | Secciones Asignadas |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Section XXL** | `176px` (`py-44`) | `144px` (`py-36`) | `112px` (`py-28`) | `.alc-section-xxl` | Ecosystem, Cases, Philosophy, Contact |
| **Section XL** | `144px` (`py-36`) | `112px` (`py-28`) | `80px` (`py-20`) | `.alc-section-xl` | Hero (Bottom), Problems, Process |
| **Section LG** | `112px` (`py-28`) | `88px` (`py-22`) | `64px` (`py-16`) | `.alc-section-lg` | Transiciones editoriales intermedias |
| **Section MD** | `80px` (`py-20`) | `64px` (`py-16`) | `48px` (`py-12`) | `.alc-section-md` | Footer top / subbloques |

---

## 6. Sistema de Bordes y Radios (Border Radius System)

* **Controles / Botones / Inputs:** `12px` a `14px` (`rounded-[12px]`, `rounded-[14px]`).
* **System Events & Badges:** `14px` a `16px` (`rounded-[14px]`, `rounded-[16px]`).
* **Tarjetas Estándar:** `20px` a `24px` (`rounded-2xl`, `rounded-3xl`).
* **Lienzos de Gran Escala / Hero Case:** `32px` (`rounded-[32px]`).
* **Píldoras / Eyebrows:** `9999px` (`rounded-full`).

---

## 7. Sistema de Sombras Compuestas (Shadow System)

* **`--alc-shadow-xs`:** `0 1px 2px rgba(4, 1, 18, 0.02)` (Badges y etiquetas pequeñas).
* **`--alc-shadow-subtle`:** `0 1px 3px rgba(4, 1, 18, 0.02), 0 6px 16px rgba(4, 1, 18, 0.03)` (Tarjetas y formularios estándar).
* **`--alc-shadow-float`:** `0 10px 30px rgba(4, 1, 18, 0.045), 0 2px 8px rgba(4, 1, 18, 0.025)` (System Events flotantes sobre robot).
* **`--alc-shadow-header`:** `0 12px 40px rgba(4, 1, 18, 0.04)` (Header en estado scrolled).
* **`--alc-shadow-btn-primary`:** `0 1px 2px rgba(0, 0, 0, 0.16), 0 6px 16px rgba(0, 0, 0, 0.08)` (Botón primario).
* **`--alc-shadow-btn-primary-hover`:** `0 8px 24px rgba(0, 0, 0, 0.16), 0 2px 6px rgba(0, 0, 0, 0.12)` (Botón primario hover).

---

## 8. Sistema de Botones Oficiales (Button Architecture)

### Botón Primario (`.alc-btn .alc-btn-primary`)
* **Fondo:** `linear-gradient(180deg, #242424 0%, #141414 50%, #080808 100%)`.
* **Borde:** `1px solid rgba(255, 255, 255, 0.08)`.
* **Color de Texto:** `#FFFFFF` (Inter Medium).
* **Dimensiones:** Altura mínima `42px` (Normal, `px-5 py-2.5`) o `50px` (Large, `px-7 py-3`).
* **Hover:** `transform: translateY(-2px)` con sombra exterior de alta gama.
* **Active:** `transform: scale(0.985) translateY(0)`.

### Botón Secundario (`.alc-btn .alc-btn-secondary`)
* **Fondo:** `#FFFFFF` sólido.
* **Borde:** `1px solid rgba(4, 1, 18, 0.08)`.
* **Color de Texto:** `#040112` (Inter Medium).
* **Hover:** `transform: translateY(-2px)` con borde oscurecido `rgba(4, 1, 18, 0.20)`.

---

## 9. Header Architecture & Navegación Flotante

* **Contenedor Externo:** `position: fixed; inset-inline: 0; top: 0; z-index: 50; padding: 10px 16px;`.
* **Contenedor Interno (`max-width: 1400px`):**
  * Estado Reposo: Fondo transparente, altura `84px` – `92px`.
  * Estado Scrolled: Altura `68px`, fondo `rgba(248, 248, 248, 0.88)`, `backdrop-filter: blur(20px)`, borde `1px solid rgba(4,1,18,0.06)`, sombra `--alc-shadow-header`, radio `16px`.
* **Logo:** Ancho `160px` (Mobile) / `185px` (Desktop).
* **Menu Drawer Mobile:** Desplegable vertical integrado con fondo blanco/blur, padding `16px`, botón CTA full-width.

---

## 10. System Events & Escena Visual del Hero

* **Robot Oficial:** Imagen en alta resolución (`/robot/robot-hero.png`), renderizada a un ancho máximo de `440px` (Desktop) / `280px` – `320px` (Mobile).
* **Fade Inferior:** Aplicado vía CSS `mask-image: linear-gradient(to bottom, black 0%, black 72%, rgba(0,0,0,0.65) 84%, transparent 98%)`.
* **System Event Cards:** Microinterfaces flotantes semitransparentes (`bg-white/90 backdrop-blur-md border border-[rgba(4,1,18,0.06)] rounded-[16px] shadow-float`).
  * Evento 1: Lead Calificado • Distribuidora B2B (Dot verde).
  * Evento 2: Respuesta IA • En 8 segundos (Dot rosa).
  * Evento 3: Reunión agendada • Martes 10:30 (Dot oscuro, visible en desktop).

---

## 11. Mapeo de Breakpoints & Estrategia Responsiva

| Breakpoint Elementor | Rango de Resolución | Comportamiento del Diseño Alcancemos |
| :--- | :--- | :--- |
| **Desktop** | `> 1024px` | Grids de 2 a 12 columnas, espaciados generosos, animaciones completas. |
| **Tablet** | `768px – 1024px` | Grids de 2 columnas, reducción de paddings a escala XL/LG, menú hamburguesa. |
| **Mobile** | `< 767px` (`390px` base) | Flujo vertical en 1 columna, tipografía recalculada, botones full-width táctiles. |

> **Recomendación:** No es necesario activar breakpoints adicionales (Mobile Extra / Tablet Extra) en Elementor; la adaptabilidad se garantiza mediante variables CSS fluidas (`clamp()`) y flexbox wrap.

---

## 12. Mapeo de Motion y Animaciones

| Interacción en Next.js | Clasificación | Solución Recomendada en Elementor |
| :--- | :--- | :--- |
| **Aparición suave en scroll (`Reveal`)** | A (Nativo) | Efectos de movimiento de Elementor (*Fade In Up*, duración `600ms`, retardo en cascada `100ms`). |
| **Hover en Botones (-2px + Sombra)** | B (CSS) | Clase `.alc-btn-primary:hover` y `.alc-btn-secondary:hover` vía tokens CSS. |
| **Fade Inferior del Robot** | B (CSS) | Propiedad `mask-image` aplicada al contenedor de la imagen en Custom CSS. |
| **Header Scrolled (Sticky Blur)** | C (JS Ligero) | Script ligero de scroll toggle en Elementor Custom Code (detecta `window.scrollY > 16`). |
| **Interactive Assembly Circuit (Process)** | C (JS / CSS) | SVG integrado con transiciones CSS de stroke y opacidad al cambiar de estado. |

---

## 13. Form Controls & Integración de Formularios

* **Campos Textuales / Selects / Textareas:**
  * Altura mínima: `48px`.
  * Radio de borde: `12px`.
  * Borde: `1px solid rgba(4, 1, 18, 0.06)`.
  * Fondo: `#FFFFFF`.
  * Focus: Borde `#FF0769` con anillo sutil `box-shadow: 0 0 0 1px #FF0769`.
* **Mensajes de Estado:**
  * Éxito: Fondo `#ECFDF5`, borde `#A7F3D0`, texto `#065F46`.
  * Error: Fondo `#FEF2F2`, borde `#FECACA`, texto `#991B1B`.

---

## 14. Inventario Oficial de Activos (Asset Inventory)

| Activo | Ruta en Repositorio | Formato | Resolución | Transparencia | Uso Principal |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Logo Dark** | `/public/brand/alcancemos-logo-dark.png` | PNG | 2757 × 500 | Sí (Alfa) | Header principal sobre fondo claro. |
| **Logo Light** | `/public/brand/alcancemos-logo-light.png` | PNG | 2757 × 500 | Sí (Alfa) | Footer sobre fondo oscuro `#040112`. |
| **Favicon** | `/public/brand/alcancemos-favicon.png` | PNG | 500 × 500 | Sí (Alfa) | Icono de pestaña e identidad de sitio. |
| **Robot Hero** | `/public/robot/robot-hero.png` | PNG | 900 × 900 | Sí (Alfa) | HeroSection (Composición central). |
| **Robot Laptop** | `/public/robot/robot-laptop.png` | PNG | 900 × 900 | Sí (Alfa) | Activo de reserva para landings específicas. |
| **Robot Pointing**| `/public/robot/robot-pointing.png` | PNG | 900 × 900 | Sí (Alfa) | Activo de reserva para soporte/contacto. |
| **Casa & Telas** | `/public/cases/casa-telas-dark.png` | PNG | 1536 × 1024| Sí (Alfa) | Logo oficial en Hero Case de Evidencia. |

---

## 15. Reglas de Construcción DOM en Elementor (DOM Best Practices)

1. **Flexbox & Grid Containers Exclusivos:** Prohibido el uso de secciones internas y columnas legacy.
2. **Prohibición del Widget Espaciador (*Spacer*):** Todo el espaciado vertical debe resolverse mediante `padding` de contenedor o `gap` flexbox.
3. **Anidación Controlada:** Máximo 3 niveles de profundidad de contenedores para mantener un DOM ligero y tiempos de carga óptimos.
4. **Convención de Nomenclatura de Clases:**
   * Secciones: `alc-section-hero`, `alc-section-ecosystem`, `alc-section-problems`, `alc-section-process`, `alc-section-cases`, `alc-section-philosophy`, `alc-section-contact`.
   * Primitivas: `alc-container`, `alc-btn-primary`, `alc-btn-secondary`, `alc-surface`, `alc-label`, `alc-system-event`.

---

## 16. Estrategia de Exportación y Despliegue

* **Recomendación Oficial:** Exportar el sitio reconstruido como un **Elementor Kit (.zip)** utilizando la herramienta nativa *Herramientas > Importar / Exportar Kit*.
* **Ventaja:** Preserva íntegramente los Colores Globales, Fuentes Globales, Ajustes de Sitio, plantillas de Header/Footer y páginas maquetadas con exactitud pixel-perfect.
