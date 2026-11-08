# Guion · 4.2 Contraste, color y ampliación del contenido

## 1. Contraste, color y ampliación del contenido · 35 s

Poder llegar al control no resuelve por sí solo la lectura. Una persona necesita reconocer qué significa un estado, distinguir el texto del fondo y aumentar su tamaño si lo necesita.

Vamos a revisar esas tres necesidades por separado. Continuamos la página de inscripción con un aviso de disponibilidad. Después ampliaremos para comprobar que la información y los controles siguen disponibles. Una mejora en una de estas áreas no garantiza las otras.

## 2. El color necesita otra señal visible · 55 s

Si solo mostramos un punto verde o rojo, obligamos a distinguir el tono y conocer su significado. Una persona puede ver la página y no distinguir esos colores. Necesita otra señal que también esté a la vista.

En el fragmento conservamos el color y añadimos las palabras A tiempo y Cancelado. Podemos entender cada estado leyendo el texto, aunque no interpretemos el punto. El color refuerza la información.

Añadir solamente un nombre oculto para lectores de pantalla no resuelve esa necesidad visual. Tampoco debemos asumir que una imagen en gris representa cómo ven todas las personas con dificultades de percepción del color. La pregunta práctica es si el significado sigue siendo comprensible sin identificar el tono. En el ejemplo los estados son información estática, no botones nuevos.

## 3. Medir el contraste contra el fondo · 80 s

El contraste compara cuánto se diferencian texto y fondo en luminancia. Para texto normal, el mínimo de nivel AA es cuatro coma cinco a uno. Para texto grande baja a tres a uno: hablamos de al menos dieciocho puntos, o catorce puntos en negrita. Un título no entra en esa categoría solo por llamarse título.

Tomamos los colores usados en la interfaz y su fondo efectivo. No redondeamos un resultado inferior para declararlo aprobado. Un texto secundario sigue necesitando poder leerse; no queda exento por ser menos destacado.

Las señales visuales necesarias para identificar controles y estados tienen su propia comprobación: tres a uno contra los colores adyacentes. Incluye el foco que diseñamos nosotros. No significa que todo borde decorativo deba cumplir ese ratio. Tampoco basta con medir rojo contra verde: necesitamos distinguir el texto de su fondo y comunicar el estado sin depender del color. En la demo compararemos una pareja gris claro sobre blanco con texto oscuro sobre blanco.

## 4. Ampliar sin perder contenido ni controles · 70 s

Ampliar ayuda cuando el tamaño habitual no permite leer con comodidad. Hasta el doscientos por ciento, el texto debe poder crecer sin perder contenido o funcionalidad. Eso incluye etiquetas y controles, no solo párrafos.

Además comprobamos el reflujo: cómo se reorganiza la página cuando queda menos ancho disponible. Para contenido que se lee verticalmente, la referencia es un ancho equivalente a trescientos veinte píxeles CSS. Podemos comprobarlo con ese ancho o con una ventana de mil doscientos ochenta al cuatrocientos por ciento de zoom.

Son pruebas relacionadas, pero distintas. Una ventana estrecha comprueba reorganización; no prueba por sí sola el mecanismo de ampliación. Desplazarse verticalmente es normal. Tener que movernos también de lado para leer líneas de esta página, o perder parte del aviso, indica un problema. Esta página no necesita conservar una disposición bidimensional como un mapa.

## 5. Dejar que el contenido crezca · 60 s

Un bloque que cabe con una fuente pequeña puede quedarse corto cuando el texto crece o hay menos espacio horizontal. Si además ocultamos lo que sobresale, el contenido sigue en el documento, pero deja de estar disponible visualmente.

La solución permite que el texto salte de línea y que el bloque gane altura. El fragmento muestra un ancho limitado al espacio disponible y la posibilidad de partir texto cuando hace falta. No fija una altura para un contenido cuya longitud puede variar.

Este CSS es un punto de partida, no una garantía automática. Revisamos cómo se comporta dentro de la página: el aviso, las salidas y los enlaces deben seguir siendo legibles y alcanzables. Ocultar una barra de desplazamiento sin recuperar la información solo esconde el síntoma.

## 6. Revisar estados, contraste y recortes · 140 s, incluida demo

[Ejemplo: abrir «Examinar color y recortes».]

Son las próximas salidas de una línea de autobús. Sus puntos tienen colores distintos, pero no hay texto que explique cuál está cancelada. Leemos el texto gris de la parada. En las herramientas del navegador consultamos sus colores computados: gris b4b4b4 sobre blanco. El cálculo para esta pareja da dos coma cero siete a uno; está por debajo de cuatro coma cinco para este texto normal.

Usamos la ampliación real del navegador hasta doscientos por ciento, revisando también los pasos intermedios. Después comprobamos reflujo a trescientos veinte píxeles CSS, o a mil doscientos ochenta al cuatrocientos por ciento. Intentamos leer el aviso por obras hasta el final. El aviso rígido queda recortado cuando el espacio se estrecha, aunque no aparezca una barra horizontal. Bajamos hasta los billetes y comprobamos qué permanece disponible.

[Ejemplo: pulsar «Aplicar arreglo» y abrir «Ver cambios».]

El panel resalta tres cambios. Ahora las palabras explican que la salida de las nueve y cinco está cancelada y la de las ocho y cuarenta lleva retraso. El texto de la parada, gris 52525b sobre blanco, alcanza siete coma setenta y tres a uno. Repetimos la ampliación y el ancho estrecho: las líneas se reorganizan y el aviso puede crecer. Leemos el aviso completo y llegamos al enlace de recarga.

Devolvemos el navegador al cien por cien. Para la grabación, estas acciones deben ensayarse en el navegador elegido. Si el entorno de revisión no permite ampliar de verdad, queda pendiente esa parte; cambiar solo el ancho no la sustituye.

## 7. Separar las comprobaciones · 40 s

Hemos revisado tres cosas. El texto visible permite entender el estado sin reconocer el color. El contraste ayuda a distinguir lo que se lee. El tamaño flexible permite conservar información y controles al ampliar o reducir el ancho disponible.

Conviene comprobarlas de forma independiente: una página puede tener buen contraste y recortar texto, o reorganizarse bien y seguir comunicando solo con color. Las herramientas ayudan a medir ciertas propiedades; un resultado automático limpio no demuestra por sí solo que podamos leer y completar la tarea. En el siguiente módulo comenzaremos esas comprobaciones con herramientas sencillas.
