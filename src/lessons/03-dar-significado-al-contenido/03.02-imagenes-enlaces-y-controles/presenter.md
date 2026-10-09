# Guion · 3.2 Imágenes, enlaces y controles comprensibles

## 1. Imágenes, enlaces y controles comprensibles · 40 s

Una vez localizada una sección, todavía necesitamos entender lo que contiene. Una imagen puede aportar información; un enlace propone ir a algún lugar; un botón realiza una acción; un campo pide un dato.

En esta lección vamos a dar a cada elemento la información adecuada para su propósito. Continuamos la página de actividad, pero las decisiones se aplican a cualquier interfaz. No hace falta describir todo con ARIA: empezaremos por el texto visible y las relaciones que ya ofrece HTML.

## 2. La alternativa textual depende del propósito · 75 s

El texto alternativo no es una etiqueta que añadimos para pasar una comprobación. Su contenido depende de la razón por la que la imagen está en la página. Antes de escribirlo preguntamos qué información se perdería si no pudiéramos percibirla.

En el fragmento la ilustración ayuda a reconocer el entorno de la actividad: el sendero, los parterres y el pabellón junto al árbol. El alt comunica esos elementos relevantes. Un nombre como actividad.svg solo identifica el archivo. Tampoco necesitamos enumerar cada color y cada forma si esos detalles no ayudan a comprender el propósito.

El mismo archivo puede requerir otro texto en otro contexto. Si la imagen fuera el único contenido de un enlace o un botón, habría que comunicar su función. Aquí trabajamos una imagen informativa estática, sin convertirla en un control. La calidad de la alternativa se decide mirando la imagen y leyendo el contexto; la mera presencia del atributo no basta.

## 3. Una imagen decorativa no necesita narración · 50 s

A veces la imagen solo acompaña el contenido. Otras veces toda su información ya está expresada en el texto que la rodea. En esos casos repetirla puede añadir ruido a la lectura. Con una imagen img usamos alt vacío de forma explícita.

Eso no significa borrar el atributo. Un archivo sin alt puede terminar anunciado de otra manera por el navegador o el lector, y no expresa nuestra intención de que sea decorativo. Tampoco significa que cualquier imagen bonita sea decoración. Si comunica algo necesario que no aparece en otra parte, hay que conservar esa información. Vamos a ver la misma ilustración en un contexto donde el texto ya contiene su aportación.

## 4. El enlace permite anticipar el destino · 65 s

El enlace propone una navegación. Puede conducir a otra página, a un documento o a una sección de la misma página. En HTML usamos a con href, que proporciona el destino y el comportamiento nativo.

Antes de activarlo la persona necesita anticipar adónde va. Consultar información práctica aporta más orientación que Ver más. Esto es especialmente útil al consultar una lista de enlaces, donde puede faltar el párrafo que los rodeaba.

No vamos a decir que cualquier Ver más incumple automáticamente WCAG: el propósito también puede obtenerse de un contexto identificable por software. En nuestro ejemplo preferimos que el propio texto describa el destino. Mejoramos el texto visible para todas las personas; no añadimos un nombre oculto distinto que obligue a adivinar qué decir al usar control por voz.

## 5. El botón nombra la acción · 55 s

Un botón realiza una acción. En un formulario, el botón de envío puede llamarse Inscribirme para indicar qué estamos a punto de hacer. Aceptar es un texto válido en algunos contextos, pero aquí no explica tan bien la consecuencia.

El texto visible del button ya proporciona su nombre accesible. No hace falta añadir aria-label con el mismo contenido, y un nombre oculto diferente puede dificultar la relación entre lo que se ve y lo que se anuncia o se dice por voz.

Recuperamos la distinción: un enlace conduce a un destino; un botón ejecuta una acción. Elegimos el elemento por lo que hace, no por si el diseño lo muestra con borde o subrayado. La demo conserva la acción simulada de inscripción y su confirmación visible: no envía datos reales.

## 6. La etiqueta permanece al escribir · 70 s

Un campo que solo muestra Nombre como placeholder pierde esa pista visual cuando empezamos a escribir. La persona puede necesitar recordar qué se le pedía, revisar una respuesta o volver al formulario después de una interrupción.

Una etiqueta visible permanece junto al campo. El atributo for del label debe coincidir con el id del input. Así el navegador relaciona el texto con el control; hacer clic en la etiqueta también permite enfocar el campo. En React escribimos htmlFor, que genera ese for en HTML.

El placeholder puede aportar un ejemplo breve, como Ana, pero no sustituye esa relación ni la etiqueta persistente. Algunos navegadores pueden usarlo como nombre de respaldo: no afirmamos que el campo vaya a quedar siempre en silencio. El problema que corregimos es concreto: falta una etiqueta visible y asociada que siga ayudando durante la edición. Indicamos además que el nombre es opcional y usamos autocomplete para su propósito.

## 7. Corregir la información de cada elemento · 145 s, incluida demo

Vamos a aplicar estas decisiones a la página que ya tiene estructura.

[Storybook: abrir «Examinar información con barreras».]

La imagen tiene como alternativa el nombre del archivo, el enlace dice Ver más y el botón dice Aceptar. En el campo solo encontramos un placeholder. Escribimos un nombre de prueba y observamos que falta una etiqueta visible persistente. Esta versión es un contraejemplo deliberado; sus controles siguen siendo nativos para concentrarnos en la información que proporcionan.

[Storybook: abrir «Comprobar nombres y etiqueta».]

La imagen aporta ahora una alternativa que describe lo relevante de la ilustración. El enlace anuncia que lleva a información práctica y el botón nombra la inscripción. Hacemos clic en la etiqueta del campo: el foco llega al control. Escribimos Ana y comprobamos que la etiqueta sigue visible. Recorremos campo y botón con teclado y activamos la inscripción de prueba para reconocer su confirmación.

[Storybook: abrir «Comparar imagen redundante».]

Aquí el texto visible ya expresa la información de la ilustración. El alt está vacío. Al preparar la grabación comprobaremos con lector que se conserva la información del texto y que la imagen no añade una narración repetida. El DOM permite comprobar lo que hemos escrito; la lectura real y la pertinencia del texto requieren su propia revisión.

## 8. Comprobar propósito y persistencia · 40 s

La revisión empieza por el propósito: qué aporta cada elemento y qué necesita saber la persona. Una alternativa puede existir y ser inútil. Un enlace o un botón pueden tener texto y seguir siendo ambiguos. Un campo puede ser editable y carecer de una etiqueta que permanezca.

Comprobamos las relaciones en el código, pero también leemos los mensajes en contexto y probamos con tecnologías de apoyo. Las comprobaciones automáticas ayudan a encontrar ciertos errores; no deciden por sí solas si la información permite comprender y completar la tarea.
