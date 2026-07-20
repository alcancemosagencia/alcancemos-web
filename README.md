# Alcancemos Web

Sitio corporativo de Alcancemos, agencia de performance marketing, construido con Next.js y preparado para producción en Vercel.

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

Importa el repositorio en Vercel, conserva la configuración por defecto de Next.js y ejecuta el build con `npm run build`.

## Formulario de contacto con Resend

El formulario envía las solicitudes a `contacto@alcancemos.com` mediante la API de Resend desde `src/app/api/contact/route.ts`.

1. Crea una cuenta en [Resend](https://resend.com/).
2. Agrega y verifica el dominio `alcancemos.com` en Resend, incluyendo los registros DNS solicitados.
3. Crea una API key con permiso para enviar correos.
4. Copia `.env.example` como `.env.local` y agrega la clave:

```bash
RESEND_API_KEY=re_xxxxxxxxx
```

Nunca confirmes `.env.local` ni una API key real en Git.

### Configuración en Vercel

En el proyecto de Vercel abre **Settings → Environment Variables**, crea `RESEND_API_KEY` y habilítala para Production, Preview y Development según corresponda. Después realiza un nuevo despliegue para que la función `/api/contact` reciba la variable.

El remitente configurado es `Alcancemos Web <contacto@alcancemos.com>`, por lo que el dominio debe estar verificado en Resend antes de realizar el primer envío de producción.
