# Guion · 5.1 Inspeccionar el contenido con bookmarklets

## 1. Inspeccionar el contenido con bookmarklets · 20 s

Ya sabemos qué deberían comunicar los encabezados y las imágenes. Ahora vamos a hacer visible esa información para revisar una página. Usaremos dos bookmarklets: marcadores que ejecutan un pequeño programa sobre la página abierta. Añaden anotaciones que nos ayudan a inspeccionar el contenido.

## 2. Guardar y ejecutar un bookmarklet · 45 s

Los enlaces de esta slide llevan a las fichas de Headings e Images, de Paul Adam. En cada ficha arrastramos el enlace de instalación a la barra de marcadores del navegador. También se puede copiar el código que ofrece el autor y editar la dirección de un marcador. Guardar solo la dirección de la ficha no instala la herramienta.

Después abrimos la página que queremos revisar y activamos el marcador guardado. La herramienta trabaja sobre esa página. Para limpiar sus anotaciones, recargamos antes de usar la siguiente. Como ejecuta código externo, utilizamos una fuente conocida. Una política del navegador o del sitio puede impedir la carga; no desactivamos las protecciones para forzarla.

## 3. Leer niveles y relaciones · 60 s, incluida demo

Headings muestra etiquetas de encabezado junto al contenido. No decide por nosotros qué debería ser una sección. Miramos los niveles y los comparamos con el significado.

[Ejemplo: abrir «Inspeccionar niveles incoherentes», cerrar el panel y activar el marcador Headings guardado.]

Es la página de una exposición en un museo. El título principal es h1. Sobre la exposición e Información práctica aparecen como h3; dentro de Información práctica, Horarios y Entradas aparecen como h2. Eso no expresa la relación que queremos: una subsección está marcada como más general que la sección que la contiene. En este caso usaremos h2 para las secciones y h3 para sus subsecciones.

No estamos contando saltos para emitir un veredicto universal. Volver de h3 a h2 al comenzar otra sección puede ser correcto. Nos interesa que los niveles describan la organización; la tipografía por sí sola no lo demuestra.

## 4. Valorar la alternativa en contexto · 80 s, incluida demo

[Ejemplo: abrir «Inspeccionar una alternativa poco útil», recargar y activar Images.]

Leemos el valor mostrado sobre la imagen: sala3_IMG_0412 punto jpg. El atributo existe y puede aparecer marcado en verde, pero es el nombre de un archivo. No comunica qué obra vemos. Para juzgarlo miramos también el texto cercano y el propósito de esa imagen en la página.

[Ejemplo: abrir «Revisar jerarquía y alternativa corregidas», que carga la página con el arreglo, y activar Images.]

La alternativa describe el tapiz: las olas azules y las barcas rojas sobre fondo arena. Ahora aporta información reconocible de la imagen. Si esa información ya estuviera completa en un párrafo cercano, podríamos optar por alt vacío para evitar repetirla, como vimos antes. Un alt vacío no es lo mismo que un atributo omitido.

Recargamos y activamos Headings sobre la solución: título h1, secciones h2 y subsección h3. La revisión combina lo que revela la herramienta con lo que sabemos del contenido. Su color o sus iconos no sustituyen esa decisión.

## 5. Interpretar y volver a comprobar · 35 s

Nos quedamos con un ciclo breve: revelar la información, interpretarla en contexto, corregir el HTML y volver a comprobar. Las anotaciones no reproducen la experiencia de un lector de pantalla ni revisan todos los criterios de accesibilidad.

Si un marcador no llega a ejecutarse, anotamos qué ocurrió y dejamos la comprobación pendiente. No lo convertimos en un resultado favorable. La siguiente herramienta nos ayudará a localizar algunos fallos automáticamente y a observar el recorrido del teclado.
