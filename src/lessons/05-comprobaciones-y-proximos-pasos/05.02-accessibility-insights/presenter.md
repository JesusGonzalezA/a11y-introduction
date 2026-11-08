# Guion · 5.2 Detectar problemas con Accessibility Insights

## 1. Detectar problemas con Accessibility Insights · 20 s

Queremos encontrar un problema, entender a qué elemento afecta, corregirlo y comprobar el cambio. Accessibility Insights for Web ofrece FastPass: una revisión breve que combina reglas automáticas con ayuda visual para recorrer la página con teclado. Necesitamos ambas partes.

## 2. Ejecutar y abrir un resultado · 40 s

Instalamos la extensión desde su página oficial para Chrome o Edge antes de la sesión. Abrimos la página que queremos revisar, lanzamos la extensión y elegimos FastPass. Automated checks analiza esa página y muestra los fallos detectados.

Al expandir una regla vemos sus instancias. Seleccionar una permite localizar el elemento resaltado en la página. Leemos la explicación y la propuesta de corrección, en lugar de limitarnos al número de errores. La guía enlazada describe el proceso; la demo siguiente lo aplica a un campo concreto.

## 3. Corregir el nombre de un campo · 90 s, incluida demo

[Ejemplo: abrir «Detectar el campo sin etiqueta», cerrar el panel y lanzar FastPass en la extensión.]

Es el formulario para pedir cita en un taller de bicicletas. El texto Teléfono se ve encima del campo, pero no está asociado: el campo no tiene nombre. En Automated checks buscamos la regla relacionada con el nombre del campo, la expandimos y seleccionamos la instancia. El resaltado permite reconocer el input afectado; leemos cómo corregirlo.

La solución es HTML nativo: un label visible cuyo for coincide con el id del input. La etiqueta permanece cuando escribimos. El fragmento de la slide muestra esa relación; no necesitamos añadir un rol al campo.

[Ejemplo: pulsar «Aplicar arreglo» y abrir «Ver cambios».]

El panel señala el cambio: el span pasa a ser un label. Ejecutamos de nuevo FastPass sobre la página corregida, asegurándonos de que la extensión analiza el estado actual. Comprobamos que el fallo del campo ya no aparece. No basta conservar los resultados del análisis anterior. Si aparece otro resultado, lo revisamos; no lo ocultamos para conseguir el número que esperábamos.

La comparación termina cuando hemos localizado el elemento, entendido el cambio y repetido la comprobación sobre la versión correcta.

## 4. Recorrer la interfaz con Tab stops · 65 s, incluida demo

[Ejemplo: mostrar «Revisar el recorrido del formulario» con Tab stops de la extensión.]

Seleccionamos Tab stops, recargamos la página objetivo y activamos Show tab stops. Volvemos a la página y avanzamos con Tab por los enlaces hasta los campos. Las marcas numeradas van mostrando el recorrido que realizamos. Escribimos en cada campo, avanzamos al botón, volvemos con Shift más Tab y regresamos al botón para activarlo con Espacio. Comprobamos la confirmación y continuamos con Tab para salir.

Observamos si podemos alcanzar las acciones, si el orden tiene sentido y si el foco se reconoce en cada paso. Los números son una ayuda; no deciden si la tarea es utilizable. Revisamos las posibles incidencias y registramos nuestro juicio en la herramienta.

## 5. Cero errores no garantiza accesibilidad · 25 s

Las reglas automáticas son útiles, pero no pueden resolver todas las preguntas. Que exista un nombre no demuestra que se entienda, como acabamos de ver con el alt. También debemos revisar los casos Needs review, recorrer la tarea y añadir comprobaciones con tecnologías de apoyo y personas usuarias.

Conservamos los pasos, la página, la versión y el resultado. Una prueba que no hemos podido ejecutar sigue pendiente: no es un aprobado.
