---
name: alcancemos-design-system
description: >-
  Fuente oficial de verdad para branding, dirección de arte, diseño UX/UI, sistema visual,
  copywriting, motion, responsive, robot oficial y criterios de calidad de Alcancemos.
  Usar siempre que se diseñe, construya, refactorice o revise cualquier página, sección,
  componente, interacción, activo visual o copy en el proyecto Alcancemos.
---

# Alcancemos Design System

Esta Skill es la fuente oficial de verdad y el manual de referencia para el diseño, desarrollo, redacción y evaluación de calidad de la web de **Alcancemos**.

El objetivo es crear una **experiencia de marca digital y producto tecnológico premium** para una firma que instala sistemas integrados de crecimiento comercial de alto valor.

---

## 1. Posicionamiento de Marca

Alcancemos **no** es una agencia tradicional ni un proveedor de tareas aisladas. Alcancemos diseña e instala **ecosistemas comerciales integrados**.

### Capacidades del Ecosistema
1. **Ingeniería Comercial**
2. **Performance Marketing (Meta Ads)**
3. **Embudos y Conversión**
4. **Agentes de Inteligencia Artificial**
5. **Automatización y Seguimiento de Leads**
6. **Medición y Optimización Continua**

> **Idea central:**
> *"No te faltan leads. Te falta un sistema."*

---

## 2. Identidad Visual y Paleta de Color

| Rol | Valor Hex / Token | Uso y Aplicación |
| :--- | :--- | :--- |
| **Fondo Principal** | `#F8F8F6` | Base cálida, limpia y tecnológica. Aporta amplitud y confort visual. |
| **Superficies / Cards** | `#FFFFFF` | Fondos de tarjetas, paneles flotantes, modales y microinterfaces. |
| **Texto Principal** | `#111111` / `#040112` | Títulos, cuerpo de texto y elementos de alta legibilidad. |
| **Texto Secundario** | `#666470` | Subtítulos, descripciones y microcopy auxiliar. |
| **Bordes** | `rgba(4, 1, 18, 0.06)` | Líneas estructurales ultra sutiles (`1px`). |
| **Acento de Marca** | `#FF0769` | **Uso restringido y medido.** Puntos de interacción, badges activos, highlights concretos, estados y métricas clave. **NO es el fondo de los botones primarios.** |

---

## 3. Sistema Global de Botones y CTAs

### Botón Primario (Primary Button)
* **Estilo:** Grafito / negro sofisticado con gradiente sutil.
* **Fondo:** `linear-gradient(180deg, #242424 0%, #141414 50%, #080808 100%)`.
* **Borde:** `1px solid rgba(255, 255, 255, 0.08)`.
* **Texto:** `#FFFFFF` en Inter Medium.
* **Radio:** Contenido tecnológico `rounded-[12px]` a `rounded-[14px]` (no pill extremo).
* **Sombra:** `0 1px 2px rgba(0,0,0,0.16), 0 6px 16px rgba(0,0,0,0.08)`.
* **Hover:** `-translate-y-0.5` con sombra exterior elegante `0 8px 24px rgba(0,0,0,0.16)`.
* **Active:** `translate-y-0`, `scale-[0.985]`.

### Botón Secundario (Secondary Button)
* **Fondo:** `#FFFFFF` blanco limpio.
* **Borde:** `1px solid rgba(4, 1, 18, 0.08)`.
* **Texto:** `#111111` en Inter Medium.
* **Hover:** Leve oscurecimiento de borde (`border-heading/20`).

---

## 4. Tipografía y Jerarquía

### Tipografía Display / Titulares: `Bricolage Grotesque`
* **Aplicación:** `h1`, `h2`, `h3`, números destacados y titulares de tarjetas.
* **Pesos recomendados:** `font-normal (400)`, `font-medium (500)` y `font-semibold (600)`.
* **Estilo:** Limpio, contemporáneo, con personalidad geométrica y tracking ajustado (`tracking-[-0.035em]`).

### Tipografía UI / Cuerpo: `Inter`
* **Aplicación:** Body copy, navegación, labels, botones, formularios, microinterfaces y tablas de datos.
* **Tratamiento:** Sentence case natural en todos los eyebrows y labels (sin uppercase sistemático).

---

## 5. Robot Oficial y Escena Visual

* **Escena Unificada:** El robot 3D y los System Events flotantes forman una sola escena espacial coherente.
* **Fade Inferior:** `mask-image: linear-gradient(...)` fundiendo suavemente la base del robot con `#F8F8F6`.
* **System Events:** Paneles flotantes translúcidos (`bg-white/90 backdrop-blur-md border border-[rgba(4,1,18,0.06)] rounded-[16px]`) con 2 líneas: label auxiliar e indicador + resultado en negrita.
* **Mobile:** Robot centrado a escala amplia (280–320px ancho) con exactamente 2 eventos flotantes a los costados sin obstruir visor, tablet ni manos.
