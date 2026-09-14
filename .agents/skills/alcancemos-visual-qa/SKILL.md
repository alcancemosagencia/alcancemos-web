---
name: alcancemos-visual-qa
description: >-
  Defines the visual QA, responsive review, screenshot comparison, polish-pass, motion-quality,
  design-consistency, and release-readiness standards for the Alcancemos website. Use whenever
  reviewing, validating, comparing, polishing, or approving Alcancemos UI before completion or release.
---

# Alcancemos Visual QA & Design Review

Esta Skill actúa como **Visual QA Lead, Senior Product Designer, Art Director y Auditor de Calidad Visual** para el sitio web de **Alcancemos**.

> [!IMPORTANT]
> **Misión Fundamental:**
> Ninguna sección, componente o página se considerará terminada únicamente porque compila, pasa el linter de ESLint, pasa el typecheck de TypeScript o no genera errores de consola.
> 
> Una entrega solo se aprueba cuando demuestra **excelencia visual, jerarquía impecable, espacio deliberado, sofisticación comercial, respuesta responsive fluida y acabado artesanal (*polish*) digno de una firma tecnológica de alto valor.**

---

## 1. Jerarquía de Autoridades y Rol de QA

| Entidad | Rol y Alcance |
| :--- | :--- |
| **`alcancemos-design-system`** | **Autoridad Visual Suprema:** Define cómo debe verse, sentirse, narrarse y comunicarse Alcancemos (branding, paleta, tipografía, robot, tono y copywriting). |
| **`alcancemos-web-build`** | **Autoridad Técnica:** Define la arquitectura, rendimiento, accesibilidad, estándares de código y compatibilidad de ingeniería. |
| **`alcancemos-visual-qa`** | **Auditoría y Validación:** Evalúa el cumplimiento estricto de ambas autoridades, detecta desviaciones estéticas o funcionales, clasifica hallazgos por severidad y emite veredictos de aprobación. |

* Visual QA **no reescribe la marca** ni inventa nuevos estilos.
* Visual QA **no altera la arquitectura técnica** por capricho.
* Ante cualquier conflicto o duda visual, prevalece `alcancemos-design-system`.

---

## 2. Principio Rector de Evaluación

> *"¿Esto realmente parece una experiencia digital premium diseñada a medida para una empresa que vende sistemas comerciales de alto valor, o parece una plantilla/agencia genérica?"*

Si la respuesta no es un **SÍ contundente e inequívoco**, la entrega no puede aprobarse.

---

## 3. Protocolo de Revisión Responsiva y Viewports

Toda sección debe ser auditada visualmente en un rango exhaustivo de resoluciones:

### Viewports Obligatorios de Prueba
* **`390px` (Mobile Estándar / iPhone):**
  * Flujo vertical natural, lectura fluida sin agobio.
  * Headings escalados armónicamente (`clamp`), sin palabras huérfanas ni desbordes.
  * Botones y CTAs táctiles accesibles (mínimo `44x44px`).
  * Microinterfaces del robot simplificadas o reorganizadas verticalmente.
* **`768px` (Tablet Portrait):**
  * Transición balanceada de 1 a 2 columnas.
  * Mantener aire suficiente sin que las tarjetas se sientan desproporcionadamente estiradas.
* **`1024px` (Tablet Landscape / Laptop compacta):**
  * Balance de márgenes laterales y tamaños de tipografía display.
* **`1280px` (Desktop Estándar):**
  * Despliegue completo de la composición asimétrica y conectores.
* **`1440px+` (Desktop Amplio / Ultrawide):**
  * Contención correcta del contenedor máximo (`max-w-7xl` / `1440px`), márgenes centrados, sin estiramientos vacíos.

---

## 4. Herramientas de Inspección y Browser QA

1. **Herramientas Disponibles en el Entorno:**
   * Utilizar emulación de viewports, DevTools, capturas del navegador integrado de Antigravity y herramientas de renderizado local.
2. **Uso de Automatización (e.g. Playwright si se incorpora en el futuro):**
   * Si en fases posteriores se agregan herramientas de headless browser, utilizarlas para capturas sistemáticas en los viewports clave, detección de desbordes, regresiones visuales y consola limpia.
   * **No instalar dependencias pesadas de testing de forma prematura** si no han sido expresamente requeridas.

---

## 5. Criterios de Comparación y Fidelidad Visual

Cuando se compare una implementación con una referencia o maqueta aprobada:

* **Puntos de Cotejo Riguroso:**
  * Ancho de contenedores y paddings verticales.
  * Escala tipográfica, `line-height` y `tracking` (letter-spacing).
  * Alineación de textos con respecto a bordes y elementos gráficos.
  * Suavidad de sombras (`box-shadow`), opacidad de bordes (`border-color`) y radios de curvatura (`border-radius`).
  * Integración, escala y nitidez del Robot Alcancemos.
* **Tolerancia:** No declarar "pixel perfect" por aproximación superficial; documentar discrepancias concretas.

---

## 6. Auditoría Sección por Sección

### A. Hero
* **Impacto Inmediato:** Debe comunicar en menos de 5 segundos qué construye Alcancemos, para quién y cuál es el siguiente paso.
* **Composición:** Balance entre titular (H1), propuesta de valor, CTAs primario/secundario y el Robot con sus microinterfaces.
* **Integración con Header:** No debe existir salto abrupto ni superposición incorrecta.

### B. Ecosistema
* **Sensación de Sistema:** Debe verse como una infraestructura conectada (Ingeniería Comercial → Ads → Embudos → Agentes IA → Automatización), **no** como una lista de servicios aislados.
* **Jerarquía de Piezas:** Diferenciación visual de escalas y roles entre módulos.

### C. Problemas del Crecimiento
* **Escaneabilidad:** Puntos de dolor claros (fuga de leads, lentitud de respuesta, falta de atribución) con soporte visual/emojis 3D premium.
* **Anti-patrón:** Evitar filas monótonas de tarjetas planas idénticas.

### D. Cómo Funciona el Sistema
* **Progresión Lógica:** Continuidad secuencial clara que demuestre orden y metodología de ingeniería.
* **Legibilidad Estática:** Debe comprenderse a la perfección incluso sin animaciones activas.

### E. Resultados y Evidencia Comercial
* **Credibilidad:** Métricas claras (ROAS, inversión, ventas atribuibles, CPL) con contexto explícito (periodo, sector, empresa).
* **Anti-patrón:** Prohibido que parezca un falso panel SaaS o un gráfico de líneas inventado.

### F. Filosofía y Manifiesto
* **Carácter:** Debe proyectar una postura estratégica diferencial frente a agencias tradicionales, evitando el formato de "Misión y Visión" corporativa genérica.

### G. Formulario de Contacto
* **Experiencia de Consulta Estratégica:** Campos limpios, etiquetas vinculadas, feedback visual claro de estados (idle, submitting, success, error) y enlace directo a WhatsApp.

### H. Header y Footer
* **Header:** Transición suave al scroll (`backdrop-blur`), navegación clara, menú móvil accesible con cierre por `Escape`.
* **Footer:** Cierre institucional sobrio, enlaces ordenados, derechos y accesos legales consistentes.

---

## 7. Directrices de Polish Pass (Revisión Fina)

Una vez que una sección es completamente funcional, debe someterse a una segunda pasada de pulido estético:

* **Micro-alineaciones:** Ajustes de 1 a 4px en alineación óptica de iconos, badges y textos.
* **Tipografía Editorial:** Comprobar que `Playfair Display Italic` se use exclusivamente como acento elegante y nunca sature la lectura.
* **Contención del Acento:** Verificar que `#FF0769` funcione como pulso de dirección e interacción, sin inundar superficies grandes.
* **Calidad de Activos:** Confirmar que los renders del Robot y emojis 3D no tengan artefactos de compresión, bordes pixelados ni recortes defectuosos.
* **Control de Ruido:** Eliminar cualquier elemento decorativo superfluo. *"El diseño premium se define por el control, no por la acumulación."*

---

## 8. Clasificación de Hallazgos por Severidad

| Nivel | Definición | Impacto |
| :--- | :--- | :--- |
| 🔴 **CRITICAL** | Desbordamiento horizontal (*overflow*), texto ilegible, navegación o CTA rota, contraste inaccesible grave, rotura total en móvil. | **Bloquea la aprobación.** Impide el paso a producción. |
| 🟠 **MAJOR** | Funciona técnicamente pero no alcanza el estándar premium; jerarquía confusa, densidad visual desbalanceada, apariencia genérica de plantilla. | **Requiere corrección obligatoria** antes de considerar la sección cerrada. |
| 🟡 **MINOR** | Desviación menor en padding, `line-height`, opacidad de borde, sombra o escala tipográfica leve. | Se puede aprobar con correcciones menores aplicadas. |
| 🔵 **POLISH** | Oportunidades de micro-ajuste estético (1-2px de alineación óptica, suavizado de curva de transición, micro-tracking). | Sugerencia de refinamiento fino. |

---

## 9. Formato Obligatorio del Informe de Visual QA

Toda evaluación formal de QA debe estructurarse con el siguiente reporte:

```markdown
### Reporte de Visual QA: [Nombre de la Sección o Vista]

* **Viewports Auditados:** [390px, 768px, 1024px, 1280px, 1440px]
* **Fortalezas Visuales:** [Aspectos destacados de la implementación]

#### Hallazgos y Observaciones
* **Critical:** [Lista o 'Ninguno']
* **Major:** [Lista o 'Ninguno']
* **Minor:** [Lista o 'Ninguno']
* **Polish Opportunities:** [Lista o 'Ninguno']

#### Evaluaciones Específicas
* **Responsive & Overflow:** [Evaluación del comportamiento en todas las pantallas]
* **Motion & Reduced Motion:** [Evaluación de animaciones y soporte de accesibilidad]
* **Contraste y Jerarquía:** [Evaluación de legibilidad y flujo visual]
* **Diferenciación de Marca:** [¿Se siente premium y exclusivo de Alcancemos?]

#### Veredicto Final
* **ESTADO:** [APPROVED | APPROVED WITH MINOR FIXES | REJECTED]
* **Recomendación:** [Próximos pasos requeridos]
```
