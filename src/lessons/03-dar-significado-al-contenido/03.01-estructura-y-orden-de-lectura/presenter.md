# Guion · 3.1 Estructura de página y orden de lectura

## 1. Estructura de página y orden de lectura · 45 s

Antes de actuar necesitamos entender qué se ofrece, localizar la información que nos permite decidir y encontrar dónde actuar. Algunas personas recorren toda la página; otras buscan directamente una sección. Una estructura clara ayuda en ambos casos.

Vamos a organizar el contenido para que esas relaciones no dependan solo de lo que vemos. Primero reconoceremos las secciones, después las grandes áreas de la página y por último la secuencia de lectura. Usaremos como ejemplo una receta, pero estas decisiones sirven también para un artículo, una ficha de producto o un trámite.

## 2. Los encabezados permiten localizar secciones · 75 s

Cuando abrimos una página larga no siempre queremos leerla desde el principio. Buscamos un apartado que responda a nuestra pregunta. Los encabezados permiten reconocer esos apartados y anticipar el contenido que viene después. Por eso conviene que sus textos describan el tema, en vez de utilizar títulos vagos que solo se entiendan después de leer todo.

En HTML usamos elementos de encabezado. Aquí Ingredientes introduce la lista de lo que necesitamos. Si escribiéramos un párrafo con letra grande, el resultado podría parecer similar, pero no estaríamos expresando la misma relación.

Un lector de pantalla puede ofrecer una lista de encabezados o comandos para recorrerlos. Esa navegación permite examinar la organización antes de leer en detalle. No exige convertir los títulos en botones ni añadirlos al recorrido de Tab. Estamos proporcionando estructura para leer, no una acción que haya que activar.

## 3. El nivel expresa una relación entre secciones · 75 s

Los niveles expresan cómo se relacionan las partes. En esta página elegimos un h1 para identificar la receta. Ingredientes y Preparación son secciones del mismo nivel, por eso ambas usan h2. Para el sofrito desarrolla una parte de los ingredientes y usa h3.

No elegimos un h3 porque nos guste su tamaño. Elegimos la relación y después ajustamos el aspecto con CSS. Al abrir una subsección conviene avanzar de forma coherente, sin saltar de h2 a h4 solo para reducir la letra.

Cuando terminamos Para el sofrito podemos volver a h2 para comenzar Preparación. Ese regreso no es un error: estamos cerrando la subsección anterior. El objetivo es que la estructura exprese las relaciones del contenido. Un título principal claro es la convención de nuestro ejemplo; no estamos convirtiendo una cantidad exacta de h1 en una regla universal de WCAG.

## 4. Las regiones identifican grandes áreas · 75 s

Los encabezados organizan temas. Las regiones permiten reconocer grandes áreas de la página, como la navegación y el contenido principal. Son dos maneras complementarias de orientarse.

HTML nos ofrece header, nav, main y footer. En este ejemplo la cabecera y el pie están a nivel de página, fuera del contenido principal. Si ponemos un header dentro de una sección, describe la cabecera de esa sección; no debemos asumir que es la cabecera global.

Main identifica el contenido propio de este documento. Usamos un main visible y no anidamos uno dentro de otro. Nav reúne los enlaces de navegación; no necesita convertirse en un menú de aplicación con ARIA. Tampoco cada párrafo necesita una región. Seleccionamos unas pocas áreas que ayuden a orientarse. Las regiones permiten a un lector ofrecer saltos a esas áreas; los encabezados siguen siendo necesarios para entender los temas dentro de ellas.

## 5. El documento debe conservar una secuencia con sentido · 60 s

Una página puede parecer bien ordenada en pantalla y tener sus elementos escritos en otra secuencia. Si el significado depende del orden, necesitamos que el documento conserve una secuencia correcta.

Por ejemplo, en una receta primero se pica la verdura y después se cuece. Si el código presenta los pasos al revés y CSS los recoloca visualmente, hemos dejado dos recorridos diferentes. La solución empieza por ordenar el HTML; no por añadir números de tabulación ni atributos que intenten reconstruir la lectura.

Para revisar el contenido leemos títulos, párrafos e instrucciones. Tab nos ayuda a recorrer controles y enlaces, pero no visita todos esos textos. Ambas revisiones aportan información distinta. Puede haber varias secuencias válidas; buscamos que la elegida permita comprender y completar la tarea.

## 6. Recorrer encabezados y leer las instrucciones · 165 s, incluida demo

Vamos a comparar las dos versiones con el lector de pantalla. La página de ejemplo solo contiene la receta; la herramienta flotante del curso no añade encabezados ni regiones.

[Ejemplo: abrir «Examinar estructura con barreras».]

Los títulos parecen secciones. Abrimos la lista de encabezados del lector y comprobamos qué estructura está realmente disponible. Buscamos también el contenido principal entre las regiones. A continuación leemos los pasos de la preparación en secuencia, sin guiarnos por su posición visual. El código de esta versión coloca el último paso en primer lugar y CSS invierte su presentación. Observamos el resultado real de esa diferencia; no lo confundimos con pulsar Tab.

[Ejemplo: pulsar «Aplicar arreglo» y abrir «Ver cambios».]

El panel resalta los encabezados, las regiones y la lista de pasos. Abrimos de nuevo la lista de encabezados. Buscamos el título de la receta, las secciones y las subsecciones de los ingredientes. Saltamos a Preparación y comprobamos que podemos continuar leyendo su contenido. Después buscamos la región principal y leemos los pasos. Picar precede a sofreír tanto en el documento como en pantalla.

Lo que queremos verificar es que la persona puede localizar contenido y comprender la secuencia. La frase exacta que pronuncie el lector depende del entorno. Si no podemos ejecutar el lector en esta sesión, dejamos la demostración auditiva pendiente y mostramos únicamente la estructura del documento, sin presentarla como evidencia de lectura real.

## 7. Comprobar estructura y secuencia · 45 s

Podemos repetir estas preguntas con cualquier página. Los títulos deben describir secciones reconocibles y sus niveles deben reflejar relaciones. El contenido principal debe poder distinguirse de la navegación y de otras áreas.

Después leemos en secuencia. No buscamos que cada disposición visual tenga un único orden posible; buscamos que la secuencia no pierda información ni invierta instrucciones necesarias. Finalmente comprobamos con un lector real que esa estructura permite orientarse. Hemos trabajado cómo encontrar el contenido; ahora veremos qué información necesita cada imagen, enlace y control para entenderse.
