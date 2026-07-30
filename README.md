# Consorcio D.C. — Sitio web

Web estática, organizada y fácil de mantener. **No necesita servidor**: puedes abrir `index.html` con doble clic.

## Estructura de archivos

```
consorcio-dc-website/
├── index.html            → Estructura y textos principales
├── css/
│   └── style.css         → Colores, estilos y diseño responsive
├── js/
│   ├── content.js        → CONTENIDO editable (proyectos, próximos, fotos familia)
│   └── app.js            → Lógica (tabs, menú móvil, slider) — no suele tocarse
├── assets/
│   ├── logo-consorcio-dc.png
│   ├── projects/         → Imágenes del portafolio (proyecto-XX.jpg)
│   └── familia/          → 📸 AQUÍ pones las fotos del equipo (familia-1.jpg, ...)
└── README.md
```

## Cómo editar en el futuro

- **Cambiar colores:** abre `css/style.css` y edita las variables dentro de `:root` (arriba del todo).
- **Agregar / editar / borrar proyectos:** abre `js/content.js` y edita la lista `projects`.
  - `category` debe ser: `Ejecutados`, `En desarrollo` o `Por iniciar` (así funcionan las pestañas).
- **Próximos proyectos:** edita la lista `upcoming` en `js/content.js`.
- **Fotos del equipo (sección "Parte de la familia"):**
  1. Copia tus fotos en `assets/familia/`.
  2. Nómbralas `familia-1.jpg`, `familia-2.jpg`, etc.
  3. Ajusta la lista `familia` en `js/content.js` para que coincida.
  4. El contador (1 | 4) y las flechas se actualizan solos.
- **Textos principales (hero, empresa, servicios, contacto):** edita `index.html`.

> ⚠️ Actualmente `assets/familia/` tiene imágenes de relleno (verde). Sustitúyelas por tus fotos reales.

## Datos de contacto configurados

- Dirección: C.C. Otama, piso 1, oficina 15
- Teléfono / WhatsApp: +58 424 4100346
- Tu Casa Bienes Raíces (WhatsApp): +58 424 4588557

## Colores del tema

- Verde principal: `#12382b`
- Verde oscuro: `#09231a`
- Dorado (acento): `#c9a227`
- Beige claro: `#f4f0e8`

## Cómo verla

- **Fácil:** doble clic en `index.html`.
- **Con recarga automática (recomendado para editar):** en VS Code instala la extensión *Live Server*, clic derecho sobre `index.html` → *Open with Live Server*.
