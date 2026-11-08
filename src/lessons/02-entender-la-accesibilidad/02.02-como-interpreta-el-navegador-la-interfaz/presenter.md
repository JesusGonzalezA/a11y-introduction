# Guion · 2.2 Cómo interpreta el navegador nuestra interfaz

## 1. Cómo interpreta el navegador nuestra interfaz · 35 s

Para utilizar un control necesitamos saber qué hace, qué clase de control es y
si está disponible. Su color y su forma pueden orientarnos visualmente, pero
esa información también tiene que estar disponible más allá del aspecto.

Vamos a ver cómo el navegador interpreta los elementos que escribimos y qué
información ofrece para reconocerlos y utilizarlos mediante tecnologías de apoyo.
La comparación continuará con la misma acción de inscripción.

## 2. Del HTML al árbol de accesibilidad · 45 s

Partimos del HTML: elementos y contenido. El navegador utiliza esa información
para construir una representación de la estructura, los controles y sus
propiedades. La llamamos árbol de accesibilidad. Las tecnologías de apoyo
acceden a ella mediante las interfaces de accesibilidad del navegador.

Un lector de pantalla puede utilizar esa estructura para presentar contenido y
ayudar a recorrerlo. El árbol no es una captura de los píxeles ni una copia literal
de cada nodo del documento. Lo que nos interesa es qué significado queda
representado para que una persona pueda orientarse y actuar.

## 3. Nombre, rol y estado · 50 s

Hay tres preguntas útiles. El nombre permite identificar la acción concreta;
el rol indica qué tipo de control es; el estado informa de su situación.

En este fragmento, el texto «19:00 · Agotada» proporciona el nombre. El elemento
button aporta el rol de botón. El atributo disabled indica que la acción no
está disponible. No tenemos que escribir atributos ARIA para repetir esa
información: ya procede del HTML.

Un botón deshabilitado no se activa ni forma parte del recorrido habitual de Tab.
Esto no significa que desaparezca necesariamente al recorrer el contenido con
un lector. El estado ayuda a comprender por qué una acción no está disponible.

## 4. El aspecto no define el control · 90 s, incluida demo

Estos dos elementos pueden recibir el mismo estilo. El botón aporta semántica e
interacción nativas. El div aporta texto, pero darle un manejador de clic no
lo convierte en botón ni incorpora su teclado.

[Ejemplo: abrir «Comparar nombre y rol».]

Es la página de una película en un cine, con la barrera activada. En la
información de accesibilidad del navegador inspeccionamos la sesión de las
16:30: es un elemento genérico. Su texto puede seguir siendo legible, pero no
ofrece el rol de botón. No diremos que no comunica nada. La sesión de las 19:00
solo parece apagada: el navegador no expone ningún estado.

[Ejemplo: pulsar «Aplicar arreglo» y abrir «Ver cambios».]

El panel señala tres cambios. Inspeccionamos de nuevo la sesión de las 16:30:
nombre «16:30» y rol de botón. La de las 19:00 conserva el botón nativo con
disabled y el texto «Agotada». Inspeccionamos su estado no disponible. Al
elegir otra sesión, la confirmación aparece en un mensaje de estado.
La representación exacta de estas propiedades puede variar según el navegador;
lo que comprobamos es su significado, no una frase fija de un lector.

## 5. HTML primero; ARIA completa información · 50 s

La primera decisión es utilizar el elemento HTML que resuelve la tarea. No
necesitamos reconstruir un botón a partir de un elemento genérico.

ARIA puede completar información que falta. Por ejemplo, después de una acción
podemos mostrar una confirmación sin cambiar el foco. El rol status identifica
ese mensaje como información no urgente. Creamos el contenedor antes de la
actualización y después insertamos la confirmación. aria-atomic indica que se
presente el mensaje completo.

Estos atributos describen información para las tecnologías de apoyo. No ejecutan
la acción ni añaden comportamiento de teclado. Y escribirlos no demuestra que
un lector anuncie el resultado como esperamos: eso requiere probarlo realmente.

## 6. Comprobar significado y comportamiento · 30 s

Comprobamos que el nombre identifica la acción, que el rol corresponde al control
y que se representa su estado. Después probamos que un control disponible se
puede alcanzar y activar con teclado y que la persona puede percibir el resultado.

Inspeccionar el árbol ayuda a encontrar qué información expone el navegador.
La prueba con tecnologías de apoyo sigue siendo necesaria. HTML nos proporciona
el punto de partida para construir esa información y ese comportamiento.
