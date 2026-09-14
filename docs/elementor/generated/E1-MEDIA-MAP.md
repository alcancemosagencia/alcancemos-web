# ALCANCEMOS — ELEMENTOR E1 MEDIA MAP
## Mapeo de Activos Multimedia para WordPress / Elementor

Este documento detalla todos los activos requeridos para la plantilla `Alcancemos-2026-Elementor.json`, su origen en el repositorio, el nombre de archivo destino en la Biblioteca de Medios de WordPress y el estado de carga necesario.

---

### Tabla Maestra de Mapeo de Medios

| Activo | Ruta Origen en Repositorio | Nombre de Archivo Destino en WordPress | Uso en la Plantilla | URL de Referencia en JSON | ¿Requiere Subida? |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Logo Alcancemos Dark** | `/public/brand/alcancemos-logo-dark.png` | `alcancemos-logo-dark.png` | Header (Fondo claro) | `https://alcancemos.com/wp-content/uploads/2026/01/alcancemos-logo-dark.png` | **SÍ** |
| **Logo Alcancemos Light** | `/public/brand/alcancemos-logo-light.png` | `alcancemos-logo-light.png` | Footer (Fondo oscuro) | `https://alcancemos.com/wp-content/uploads/2026/01/alcancemos-logo-light.png` | **SÍ** |
| **Robot Hero 3D** | `/public/robot/robot-hero.png` | `robot-hero.png` | HeroSection (Composición 3D) | `https://alcancemos.com/wp-content/uploads/2026/01/robot-hero.png` | **SÍ** |
| **Logo Casa & Telas** | `/public/cases/casa-telas-dark.png` | `casa-telas-dark.png` | EvidenceSection (Hero Case) | `https://alcancemos.com/wp-content/uploads/2026/01/casa-telas-dark.png` | **SÍ** |
| **Favicon de Sitio** | `/public/brand/alcancemos-favicon.png` | `alcancemos-favicon.png` | Identidad de Sitio (Ajustes de WP) | `https://alcancemos.com/wp-content/uploads/2026/01/alcancemos-favicon.png` | **SÍ** |

---

### Instrucciones de Reemplazo en Elementor tras la Importación

1. **Subida de Archivos:**
   - Ir a `WordPress Admin > Medios > Añadir nuevo`.
   - Subir los archivos PNG desde la carpeta `public/` del repositorio local.
2. **Asignación en Widgets:**
   - En **Hero Section**: Seleccionar el widget de imagen del Robot y elegir el archivo recién subido desde la biblioteca.
   - En **Evidence Section**: Seleccionar la imagen del logo de Casa & Telas y confirmar que se cargue con transparencia alfa intacta.
3. **Persistencia:**
   - Al seleccionar la imagen directamente desde la Biblioteca de Medios de WordPress, Elementor asignará automáticamente el `id` numérico interno del attachment, garantizando compatibilidad con plugins de optimización y CDN (como Smush, WebP Express o Cloudflare).
