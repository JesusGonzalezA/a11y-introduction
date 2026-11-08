# 5.1 Inspeccionar el contenido con bookmarklets

> Módulo 5 · Primeras comprobaciones y próximos pasos · ejemplo: `/ejemplos/museo`

## Objetivo

- Instalar y ejecutar un bookmarklet.
- Revisar niveles de encabezado con **Headings**.
- Revisar el `alt` de las imágenes con **Images** y valorar si sirve en contexto.

## Situación

- **Persona:** Elena — ciega; salta por encabezados y escucha el `alt`.
- **Tarea:** llegar a los horarios de una exposición y saber qué muestra la imagen principal.
- Los bookmarklets nos enseñan, sin lector de pantalla, la misma información que ella recibe.

## Errores comunes → solución

| Error | Qué revela el bookmarklet | Solución |
| --- | --- | --- |
| `h3` para una sección y `h2` para su subsección | Headings muestra niveles desordenados | `h2` sección, `h3` subsección |
| `alt="sala3_IMG_0412.jpg"` | Images muestra un nombre de archivo | `alt` que describe la obra |

## Ejemplo

- Página: exposición «Hilos del Mediterráneo» del Museo de Arte Textil.
- Demo: instalar [Headings](https://pauljadam.com/bookmarklets/headings.html) e [Images](https://pauljadam.com/bookmarklets/images.html) de Paul J. Adam → ejecutarlos con la barrera → **Aplicar arreglo**, recargar si hace falta y repetir.
- Cerrar el panel «Ver cambios» antes de ejecutar los bookmarklets.
- Código: `examples/MuseumExhibition/`.

## Conceptos clave

- Bookmarklet = marcador que ejecuta JavaScript en la página abierta.
- Muestra datos; la persona decide si tienen sentido.
- Algunas políticas de seguridad (CSP) bloquean los bookmarklets: si no se ejecuta, no significa que la página esté bien.

## Pruebas

- Automatizadas (`MuseumExhibition.test.tsx`): niveles y `alt` con y sin arreglo; axe sin infracciones con el arreglo.
- Manuales pendientes: ejecución real de los bookmarklets en el navegador de la grabación.
- Detalle de evidencia: [auditoría del módulo](../audit.md).

## Fuentes

- [Bookmarklets de Paul J. Adam](https://pauljadam.com/bookmarklets/)
- [Encabezados, W3C WAI](https://www.w3.org/WAI/tutorials/page-structure/headings/) · [Árbol de decisión del alt, W3C WAI](https://www.w3.org/WAI/tutorials/images/decision-tree/)
