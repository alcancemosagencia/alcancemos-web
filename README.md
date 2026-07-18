# Alcancemos Web

Base técnica, visual y estructural del sitio corporativo de Alcancemos, agencia de performance marketing. Esta primera versión no incluye la landing final, casos de éxito, métricas, formularios, CMS, analytics ni integraciones de terceros.

## Stack

- Next.js con App Router y carpeta `src`
- TypeScript estricto
- Tailwind CSS
- Framer Motion
- Lucide React
- ESLint
- npm
- Preparado para Vercel

## Requisitos

- Node.js 20+
- npm 10+

## Instalación

```bash
npm install
```

## Comandos

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Estructura

```text
src/app              Rutas, layout global y estilos base
src/components       Componentes reutilizables de layout y UI
src/data             Datos provisionales no comerciales
src/lib              Utilidades compartidas
src/assets/fonts     Ubicación prevista para fuentes locales de Satoshi
public/images        Imágenes públicas futuras
public/icons         Iconos públicos futuros
```

## Fuentes Satoshi

Satoshi no se carga desde Google Fonts. Agrega los archivos locales dentro de `src/assets/fonts/` y declara las variantes necesarias con `next/font/local` en `src/app/layout.tsx`. Mientras no existan esos archivos, el proyecto usa la cadena segura:

```css
"Satoshi", "Inter", Arial, sans-serif
```

Playfair Display se carga mediante `next/font/google` únicamente para palabras destacadas en cursiva.

## Ejecución local

1. Instala dependencias con `npm install`.
2. Inicia el servidor con `npm run dev`.
3. Abre `http://localhost:3000`.

## Despliegue en Vercel

Importa el repositorio en Vercel, conserva la configuración por defecto de Next.js y ejecuta el build con `npm run build`. No configurar todavía el dominio `alcancemos.com`.
