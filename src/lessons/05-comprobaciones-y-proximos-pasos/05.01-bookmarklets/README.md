# 5.1 Inspeccionar el contenido con bookmarklets

**4 minutos**. Objetivo: reconocer la organización y la información de una imagen
sin adivinar a partir de su aspecto. Secuencia: necesidad → anotaciones visibles →
marcador ejecutable → interpretar → corregir y repetir. Fuera de alcance: auditoría
completa, implementación de bookmarklets y equivalencia con lector de pantalla.

## Instalar y ejecutar

Instalación/servidores del curso en el [mapa del módulo](../README.md#ejecutar-y-revisar).
Herramientas seleccionadas del autor:
[Headings](https://pauljadam.com/bookmarklets/headings.html) e
[Images](https://pauljadam.com/bookmarklets/images.html).

1. Mostrar la barra de marcadores. En cada ficha, arrastrar **Headings Bookmarklet**
   o **Images Bookmarklet** a la barra. Alternativa: copiar el código URL que ofrece
   la ficha y editar la dirección de un marcador, conservando `javascript:`.
2. Comprobar que se guardó el enlace ejecutable, no la URL de la ficha. Preparar
   ambos marcadores antes de grabar; mostrar el mecanismo al explicar la slide 2.
3. Abrir `/ejemplos/museo` (exposición temporal de un museo) con el panel «Ver
   cambios» cerrado. Activar Headings: h1/h3/h3/h2/h2. Información práctica es
   sección h3 y Horarios y Entradas subsecciones h2, relación incoherente.
4. Recargar y activar Images. Leer `alt="sala3_IMG_0412.jpg"`: existe, pero no
   comunica qué obra se ve. Su marca de presencia no resuelve la calidad.
5. Abrir `/ejemplos/museo?arreglo=1` (las anotaciones no se actualizan al alternar
   sin recargar). Activar Images y comparar alternativa con imagen/contexto.
   Recargar y activar Headings: h1/h2/h2/h3/h3.
6. Recargar para limpiar la página. Registrar resultados, no solo colores/iconos.

El código externo puede cambiar o ser bloqueado por CSP, conectividad o políticas
del navegador. No desactivar protecciones ni interpretar ausencia de anotaciones
como aprobación. La herramienta flotante del curso no añade encabezados ni
imágenes, así que no altera las anotaciones.

## Ejemplo y accesibilidad

`MuseumExhibition` (escenario de página completa) recibe `fixed: boolean`; su
definición está en `MuseumExhibition.example.ts`. El tamaño de los títulos lo fija
una clase, de modo que ambas versiones se ven igual y solo la inspección revela los
niveles. El arreglo usa h2/h3 e img con alt contextual; no añade ARIA. El alt vacío
corresponde a imágenes decorativas/redundantes (ver 3.2) y no equivale a omitirlo.

## Pruebas y evidencia

`MuseumExhibition.test.tsx`: comprueba las jerarquías concretas y el alt en ambos
estados, y axe sin infracciones detectables con el arreglo.
No se exige a axe que juzgue la utilidad del alt ni se convierte cada salto en un
incumplimiento WCAG. Contrato y clasificación completa en [audit.md](../audit.md).

El 2026-10-09 se ejecutaron ambos enlaces oficiales en sus propias páginas con el
navegador integrado: Headings insertó etiquetas y Images mostró valores, vacío y
NO ALT. El botón Show Headings de la ficha no añadió etiquetas; cargaba una URL
HTTP. El enlace de instalación HTTPS sí funcionó. **Guardar en barra y ejecutar
sobre la página de ejemplo siguen pendientes**; esta evidencia no afirma lo contrario.

Referencias normativas y código fijado del autor en la
[investigación](../../../../docs/research/05-comprobaciones-y-proximos-pasos.md).
Juicio de utilidad, AT, voz, móvil, zoom, percepción del foco, revisión visual humana
y ensayo: pendientes según [matriz del módulo](../README.md#evidencia-y-límites).
