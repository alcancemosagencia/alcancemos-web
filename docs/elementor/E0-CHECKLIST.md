# ALCANCEMOS — ELEMENTOR E0 CHECKLIST
## Guía de Configuración Paso a Paso de Foundations en WordPress / Elementor Pro

Este documento es la lista de verificación paso a paso para configurar el entorno base de Elementor antes de iniciar la maquetación de cualquier sección individual (E1+).

---

## 1. Ajustes Previos de WordPress y Tema
- [ ] **Tema Activo:** Instalar y activar **Hello Elementor** (Tema ligero oficial sin estilos intrusivos).
- [ ] **Desactivar Estilos de Tema Predeterminados:**
  - Ir a `Elementor > Ajustes > General`.
  - Marcar: *Desactivar colores predeterminados*.
  - Marcar: *Desactivar fuentes predeterminadas*.
- [ ] **Configurar Experimentos / Características de Elementor:**
  - Ir a `Elementor > Ajustes > Características`.
  - Asegurar activo: **Contenedor Flexbox** (*Flexbox Container*) = Activo / Por defecto.
  - Asegurar activo: **Contenedor Grid** (*Grid Container*) = Activo.
  - Asegurar activo: **Generador de páginas anidadas** (*Nested Elements*) = Activo.

---

## 2. Configuración del Sitio (Site Settings) — Colores Globales
*Ruta: Editor de Elementor > Menú hamburguesa (esquina superior izquierda) > Ajustes del sitio > Colores globales.*

Configurar exactamente los siguientes 8 colores:

| Nombre en Elementor | Variable CSS | Valor HEX / RGBA | Uso |
| :--- | :--- | :--- | :--- |
| **alc-heading** | `--alc-heading` | `#040112` | Títulos H1-H6, textos primarios, elementos de alto contraste. |
| **alc-text** | `--alc-text` | `#111111` | Cuerpo general de texto, etiquetas estándar. |
| **alc-muted** | `--alc-muted` | `#666470` | Subtítulos, descripciones secundarias, microcopy. |
| **alc-accent** | `--alc-accent` | `#FF0769` | Señales, indicadores activos, highlights tipográficos restringidos. |
| **alc-bg** | `--alc-bg` | `#F8F8F6` | Fondo general de la página (Body) y secciones alternas. |
| **alc-surface** | `--alc-surface` | `#FFFFFF` | Fondo de tarjetas, paneles flotantes, modales y header. |
| **alc-surface-soft** | `--alc-surface-subtle` | `#FAF9F6` | Lienzos suaves de arquitectura y Hero Case. |
| **alc-border** | `--alc-border` | `rgba(4, 1, 18, 0.06)` | Bordes sutiles de 1px en tarjetas, contenedores y divisores. |

---

## 3. Configuración del Sitio (Site Settings) — Fuentes Globales
*Ruta: Ajustes del sitio > Fuentes globales.*

Crear y configurar los siguientes estilos de tipografía:

### A. Tipografías de Sistema (Bricolage Grotesque)
- [ ] **Display XL (Hero H1):**
  - Familia: `Bricolage Grotesque`
  - Tamaño: Desktop `74px` / Tablet `52px` / Mobile `40px`
  - Peso: `500 (Medium)`
  - Altura de línea: `1.04`
  - Espaciado entre letras (Tracking): `-0.035em`
- [ ] **Display LG (Section H2):**
  - Familia: `Bricolage Grotesque`
  - Tamaño: Desktop `60px` / Tablet `44px` / Mobile `36px`
  - Peso: `500 (Medium)`
  - Altura de línea: `1.06`
  - Espaciado entre letras: `-0.035em`
- [ ] **Heading MD (H3 / Tarjetas):**
  - Familia: `Bricolage Grotesque`
  - Tamaño: Desktop `26px` / Tablet `22px` / Mobile `20px`
  - Peso: `500 (Medium)`
  - Altura de línea: `1.2`
  - Espaciado entre letras: `-0.025em`
- [ ] **Dominant Metric (ROAS / Cifras):**
  - Familia: `Bricolage Grotesque`
  - Tamaño: Desktop `110px` / Tablet `84px` / Mobile `64px`
  - Peso: `500 (Medium)`
  - Altura de línea: `1`
  - Espaciado entre letras: `-0.035em`

### B. Tipografías de Interfaz y Lectura (Inter)
- [ ] **Body Large (Lead / Subcopys):**
  - Familia: `Inter`
  - Tamaño: Desktop `18px` / Tablet `17px` / Mobile `16px`
  - Peso: `400 (Regular)`
  - Altura de línea: `1.65`
  - Espaciado entre letras: `-0.01em`
- [ ] **Body Standard (Párrafos):**
  - Familia: `Inter`
  - Tamaño: `15px` (Mobile `14px`)
  - Peso: `400 (Regular)`
  - Altura de línea: `1.7`
  - Espaciado entre letras: `normal`
- [ ] **Button / Navigation (Inter Medium):**
  - Familia: `Inter`
  - Tamaño: `14px` (Large `15px`)
  - Peso: `500 (Medium)`
  - Altura de línea: `1.2`
  - Espaciado entre letras: `-0.01em`
- [ ] **Badge / Label (Microcopy):**
  - Familia: `Inter`
  - Tamaño: `11.5px`
  - Peso: `500 (Medium)`
  - Altura de línea: `1`
  - Espaciado entre letras: `-0.015em`

---

## 4. Configuración de Disposición y Contenedores (Layout Settings)
*Ruta: Ajustes del sitio > Disposición (Layout).*

- [ ] **Ancho de contenido predeterminado:** `1320px`.
- [ ] **Espaciado de widgets (Widget Space / Gap):** `0px` (Controlado deliberadamente por cada contenedor flexbox).
- [ ] **Puntos de ruptura (Breakpoints):**
  - Mobile: `767px`
  - Tablet: `1024px`
  - Desktop: `1025px+`

---

## 5. Inserción de Tokens CSS Centralizados
*Ruta: Ajustes del sitio > CSS personalizado (Custom CSS) o Archivo `style.css` de Hello Elementor Child.*

- [ ] Copiar íntegramente el contenido de `docs/elementor/elementor-tokens.css`.
- [ ] Pegar en el editor de CSS personalizado global.
- [ ] Guardar cambios en Ajustes del Sitio.

---

## 6. Carga de Biblioteca de Medios (Asset Pre-loading)
Cargar en la biblioteca de WordPress los siguientes archivos oficiales ubicados en `public/`:

- [ ] `public/brand/alcancemos-logo-dark.png` (Logo principal oscuro para Header).
- [ ] `public/brand/alcancemos-logo-light.png` (Logo claro para Footer).
- [ ] `public/brand/alcancemos-favicon.png` (Icono de sitio 500x500).
- [ ] `public/robot/robot-hero.png` (Robot 3D con tablet para Hero).
- [ ] `public/cases/casa-telas-dark.png` (Logo de Casa & Telas para Hero Case).

---

## 7. Verificación de Foundations
- [ ] Crear una página de prueba en blanco ("Design System Test").
- [ ] Añadir un Contenedor con clase `.alc-container`.
- [ ] Insertar un botón con clase `.alc-btn .alc-btn-primary` y verificar degradado grafito y sombra hover.
- [ ] Insertar un botón con clase `.alc-btn .alc-btn-secondary` y verificar borde blanco táctil.
- [ ] Insertar un badge con clase `.alc-label` y punto `.alc-label-dot`.
- [ ] Comprobar que en 1440px, 1024px y 390px los contenedores y tipografías responden fluidamente.
