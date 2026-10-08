# 2.1 Activar una acción

Ejemplo breve para comprobar la infraestructura y servir de referencia de autoría.

## Slide 1 · Activar una acción

Una persona necesita reconocer qué puede hacer y activar esa acción. En HTML
utilizamos un botón. Su texto visible explica la acción y proporciona su nombre
accesible. El elemento button ya aporta su rol y el comportamiento de interacción.

Aquí utilizamos type button porque queremos ejecutar una acción sin enviar un
formulario. El envío de formularios tiene un propósito distinto y utiliza submit.

## Slide 2 · Teclado y estado deshabilitado

Primero alcanzamos el botón con Tab. El indicador de foco nos muestra dónde
estamos. Una vez allí podemos activarlo con Enter o con la barra espaciadora.

[Storybook: mostrar «Probar la activación del botón» y abrir el panel Actions.]

Cada activación queda registrada en Actions. El ejemplo no cambia de pantalla;
por eso conserva el foco en el botón.

[Storybook: mostrar «Revisar el estado deshabilitado».]

El atributo disabled indica que la acción no está disponible. El botón deja de
recibir foco al tabular y no ejecuta su acción. HTML proporciona estas conductas
sin añadir roles ni estados ARIA.
