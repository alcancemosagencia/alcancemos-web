# ALCANCEMOS — ELEMENTOR E1 IMPORT GUIDE
## Protocolo Seguro de Importación y Verificación en WordPress

Este documento establece el procedimiento paso a paso para importar y validar la plantilla `Alcancemos-2026-Elementor.json` sin alterar la web en producción.

---

### Paso 1: Respaldo Preventivo
- Generar un backup completo de la base de datos de WordPress y de la carpeta `wp-content/uploads/` (mediante UpdraftPlus, All-in-One WP Migration o el panel del hosting).

### Paso 2: Creación de Página de Staging / Prueba
- Ir a `WordPress Admin > Páginas > Añadir nueva`.
- Título: **Home Staging 2026**.
- Plantilla de página (Atributos de página): **Elementor Ancho Completo** (*Elementor Full Width*) o **Elementor Canvas**.
- Guardar como **Borrador** (*Draft*). **NO publicar**.

### Paso 3: Subida de Activos Multimedia Previos
- Ir a `Medios > Añadir nuevo`.
- Subir los archivos descritos en `E1-MEDIA-MAP.md`:
  - `public/robot/robot-hero.png`
  - `public/cases/casa-telas-dark.png`
  - `public/brand/alcancemos-logo-dark.png`

### Paso 4: Inserción de Tokens y Estilos CSS
- Ir a `Elementor > Ajustes del Sitio > CSS Personalizado` (o en el archivo `style.css` del tema Hello Elementor Child).
- Copiar y pegar el contenido combinado de:
  1. `docs/elementor/elementor-tokens.css` (Foundations de E0)
  2. `docs/elementor/generated/Alcancemos-2026.css` (Estilos específicos de sección de E1)
- Guardar cambios en Ajustes del Sitio.

### Paso 5: Importación de la Plantilla JSON
1. Abrir la página de prueba **Home Staging 2026** con el editor de Elementor.
2. Hacer clic en el icono de carpeta gris (**Añadir plantilla** / *Add Template*).
3. En la pestaña **Mis plantillas**, hacer clic en el icono de flecha hacia arriba (**Importar plantilla** / *Import Template*).
4. Seleccionar el archivo `docs/elementor/generated/Alcancemos-2026-Elementor.json`.
5. Una vez cargado en la lista, hacer clic en **Insertar**.
6. Si Elementor pregunta *"¿Deseas aplicar también los ajustes de este documento?"*, seleccionar **No / Descartar** para preservar los Ajustes de Sitio previamente configurados.

### Paso 6: Verificación y Reemplazo de Imágenes
- Localizar el contenedor del Hero y confirmar que el Robot Hero se renderice con la máscara de desvanecimiento inferior. Si la imagen aparece vacía, asignarla directamente desde la Biblioteca de Medios.
- Localizar la sección de Evidencia y verificar el logo de Casa & Telas.

### Paso 7: Verificación Responsiva (QA Visual)
- **Desktop (1440px / 1280px):** Verificar que los System Events floten sobre el robot, que las 5 capacidades del Ecosistema se muestren en grid simétrico y que el ROAS de 26.35x domine con jerarquía nítida.
- **Tablet (1024px / 768px):** Comprobar que los textos se adapten sin desbordes horizontales y que los espaciados verticales mantengan aire.
- **Mobile (390px):** Verificar la alineación vertical de cada sección, los botones táctiles y la legibilidad de los textos de ingeniería.

### Paso 8: Estado de Entrega
- Mantener la página en estado **Borrador / Privada** hasta la aprobación final mediante capturas de pantalla reales en la siguiente iteración.
