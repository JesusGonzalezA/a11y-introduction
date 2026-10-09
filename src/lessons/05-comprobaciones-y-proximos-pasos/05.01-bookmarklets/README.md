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
3. Abrir [contraejemplo aislado](http://localhost:6010/iframe.html?id=m5-content-inspection--contraejemplo&viewMode=story).
   Activar Headings. Dentro de la actividad, esperar h1/h3/h3/h2/h3: Información
   práctica es sección h3 y Punto de encuentro subsección h2, relación incoherente.
4. Recargar y activar Images. Leer `alt="actividad.svg"`: existe, pero no comunica
   la información de la ilustración. Su marca de presencia no resuelve la calidad.
5. Abrir [solución](http://localhost:6010/iframe.html?id=m5-content-inspection--solucion&viewMode=story).
   Activar Images y comparar alternativa con imagen/contexto. Recargar y activar
   Headings: h1/h2/h2/h3/h2. La vuelta h3→h2 abre otra sección y tiene sentido.
6. Recargar para limpiar la página. Registrar resultados, no solo colores/iconos.

El código externo puede cambiar o ser bloqueado por CSP, conectividad o políticas
del navegador. No desactivar protecciones ni interpretar ausencia de anotaciones
como aprobación. La revisión usa la actividad dentro de `.activity-page`; cualquier
nodo de diagnóstico ajeno que Storybook inserte no es contenido de la actividad.

## Ejemplo y accesibilidad

`ContentInspection` compone ActivityPage con `inspectionBarrier='headings-and-alt'`
solo en el contraejemplo rotulado. No implementa una herramienta. Mantiene formulario
etiquetado y enlaces descriptivos para aislar las dos barreras. La solución reutiliza
h1/h2/h3 e img con alt contextual; no añade ARIA. El alt vacío corresponde a imágenes
decorativas/redundantes y no equivale a omitir el atributo (variante heredada de 3.2).

## Pruebas y evidencia

`ContentInspection.test.tsx`: comprueba jerarquías concretas, nombre de imagen,
rotulado y campo correcto; solución con un main y axe sin infracciones detectables.
No se exige a axe que juzgue la utilidad del alt ni se convierte cada salto en un
incumplimiento WCAG. Contrato y clasificación completa en [audit.md](../audit.md).

El 2026-10-09 se ejecutaron ambos enlaces oficiales en sus propias páginas con el
navegador integrado: Headings insertó etiquetas y Images mostró valores, vacío y
NO ALT. El botón Show Headings de la ficha no añadió etiquetas; cargaba una URL
HTTP. El enlace de instalación HTTPS sí funcionó. **Guardar en barra y ejecutar
sobre nuestra actividad siguen pendientes**; esta evidencia no afirma lo contrario.

Referencias normativas y código fijado del autor en la
[investigación](../../../../docs/research/05-comprobaciones-y-proximos-pasos.md).
Juicio de utilidad, AT, voz, móvil, zoom, percepción del foco, revisión visual humana
y ensayo: pendientes según [matriz del módulo](../README.md#evidencia-y-límites).
