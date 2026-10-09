# Guion · 4.1 Navegación por teclado y foco visible

## 1. Navegación por teclado y foco visible · 40 s

Ya sabemos qué información presenta una página y cómo dar nombre a sus controles. Ahora necesitamos poder usarlos. Una persona puede trabajar con teclado porque no maneja bien un ratón, porque usa una tecnología de apoyo o porque esa es su forma habitual de navegar.

Vamos a completar una tarea sin ratón. Necesitamos alcanzar cada control, saber dónde estamos, activarlo y poder continuar. Son preguntas distintas: que el botón tenga buen texto no garantiza que lleguemos a él, y que reciba foco no garantiza que lo veamos.

## 2. Tab avanza y Shift + Tab retrocede · 70 s

El foco es el punto de la interfaz que recibirá nuestra próxima interacción. Al pulsar Tab avanzamos entre enlaces y controles; con Shift y Tab retrocedemos. No esperamos que cada título o párrafo se detenga en ese recorrido. Leer contenido y mover el foco son operaciones diferentes.

En un formulario breve, la secuencia sigue la tarea: llegar al campo, introducir el dato, revisar y activar el botón. Volver atrás debe resultar igual de comprensible. El orden del documento es el punto de partida; una posición visual distinta puede hacer que el foco parezca saltar inesperadamente.

No hay una única geometría correcta para toda interfaz. Lo que necesitamos es conservar el significado y permitir operar. Si Tab omite enlaces en un Mac, antes de atribuirlo a la página revisamos la configuración de navegación por teclado del sistema y del navegador. Una vez preparada, hacemos el recorrido completo.

## 3. Activar enlaces y botones nativos · 65 s

Mover el foco no ejecuta la acción. En un enlace pulsamos Enter para seguir su destino. En un botón podemos pulsar Enter o Espacio. Dentro del campo, las teclas permiten escribir y editar el contenido. La misma tecla puede tener un propósito distinto según dónde estemos.

El fragmento usa un enlace con href y un botón de envío. El navegador ya proporciona su comportamiento de teclado. Por eso elegimos esos elementos por su función y evitamos sustituirlos por un elemento genérico al que solo añadimos un clic.

No necesitamos añadir role igual al rol nativo ni un manejador para repetir la activación del botón. Hacerlo puede acabar ejecutando la acción dos veces. En nuestra inscripción la confirmación cambia el texto de resultado, pero conserva el contexto y no desplaza el foco a otro lugar.

## 4. El foco debe poder verse · 65 s

Antes de activar algo necesitamos saber dónde estamos. El indicador de foco hace visible ese punto. Podemos conservar el del navegador o definir otro que destaque sobre sus fondos. El ejemplo dibuja un contorno azul separado del control: es una decisión de diseño, no una medida universal obligatoria.

La regla focus-visible permite aplicar el indicador cuando el navegador considera que debe mostrarlo, por ejemplo al navegar con teclado. Eliminar outline sin otra señal deja el control funcionando, pero nos obliga a adivinar cuál responderá.

También miramos alrededor. Un indicador dibujado no basta si una cabecera u otro contenido tapa el control. Revisamos cada parada y repetimos al ampliar. Comprobar en código qué elemento tiene foco es útil; para saber si la persona puede localizarlo necesitamos observar la interfaz.

## 5. Reconocer tres barreras de teclado · 80 s

La primera barrera aparece cuando una acción solo responde al puntero y no tiene alternativa de teclado. Podemos ver algo con aspecto de botón y no alcanzarlo con Tab. Recuperamos la idea del botón nativo: aporta una interacción ya conocida.

La segunda es un recorrido incoherente. Si el orden obliga a saltar entre lugares sin relación, cuesta entender qué dato completar o qué acción viene después. Primero corregimos el orden del documento; dar prioridades con tabindex positivo puede separar aún más la lectura del recorrido.

La tercera es quedarse sin salida. El fragmento de la slide cancela Tab. Solo lo leemos: no está conectado a la demo. Si un componente retiene el foco y no ofrece una forma de continuar con teclado, interrumpe toda la tarea. Un diálogo que puede cerrarse con teclado no es por sí mismo una trampa. Si salir exige un método distinto de los habituales, debe explicarse. En nuestros ejemplos Tab y Shift más Tab siguen funcionando y permiten abandonar el formulario.

## 6. Completar el recorrido y comparar el foco · 180 s, incluida demo

Vamos a completar la inscripción de prueba desde el primer campo hasta la confirmación.

[Storybook: abrir «Completar inscripción con foco visible».]

Con la página aislada preparada, avanzamos con Tab por los enlaces hasta el campo Nombre. Observamos cada indicador antes de pulsar de nuevo. Escribimos Ana. La etiqueta sigue junto al dato. Pulsamos Tab: el botón Inscribirme recibe el foco. Usamos Shift más Tab para volver al campo y Tab para regresar al botón. Activamos con Espacio. Aparece la confirmación de prueba y el botón conserva el foco. No se envían datos reales.

Continuamos con Tab para salir del formulario y volvemos con Shift más Tab. En el documento aislado el siguiente destino puede ser la interfaz del navegador. También volvemos al enlace de información práctica y lo activamos con Enter: ahora estamos navegando a un destino, no enviando el formulario.

[Storybook: abrir «Comparar recorrido sin foco visible».]

Repetimos el recorrido. El campo todavía permite escribir y el botón todavía se activa; no hemos deshabilitado nada. Sin embargo, fuera del cursor de edición cuesta saber qué control recibirá la próxima tecla. Contar pulsaciones no es una solución para la persona que usa la página.

[Storybook: volver a «Completar inscripción con foco visible».]

Confirmamos que cada parada se puede reconocer, que se puede volver atrás y que la acción produce un resultado. Esta comparación aísla el dibujo del foco: no incluye una trampa activa. Si preparamos la grabación, practicamos ambos recorridos y dejamos las dos pestañas listas para no invertir la demostración en buscarlas.

## 7. Comprobar el recorrido completo · 40 s

Una primera revisión de teclado consiste en intentar terminar la tarea. Avanzamos, retrocedemos, seguimos enlaces, activamos botones y salimos. No nos quedamos en comprobar que Tab llega al primer elemento.

En cada paso preguntamos dónde está el foco y si el orden tiene sentido. Si una acción no está disponible, investigamos su alternativa de teclado. Si no podemos salir, la barrera afecta también al resto de la página. La siguiente lección añade otra pregunta: aunque podamos llegar, ¿podemos leer la información y conservarla al ampliar?
