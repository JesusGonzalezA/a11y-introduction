# Guion · 2.1 Personas, formas de interacción y barreras

## 1. Personas, formas de interacción y barreras · 35 s

Queremos que una persona conozca una actividad y pueda inscribirse. Para ello
necesita percibir la información, entender qué hacer y completar la acción.
Vamos a reconocer barreras que pueden interrumpir ese recorrido.

La barrera no se explica diciendo que una persona no sabe utilizar nuestra web.
Aparece cuando la interfaz exige una forma de uso que esa persona no puede
realizar. Podemos cambiar las decisiones de contenido y código que la producen.

## 2. Distintas formas de recorrer y activar · 55 s

Con ratón podemos señalar un control y activarlo. Con teclado recorremos los
controles y utilizamos teclas para actuar. Una persona también puede dar órdenes
por voz; reconocer el nombre de la acción le ayuda a indicar qué quiere activar.

Otras herramientas ayudan a percibir y explorar la página. La ampliación aumenta
el contenido para facilitar su lectura. Un lector de pantalla utiliza información
de la interfaz para presentar contenido mediante voz sintetizada o braille y
permitir recorrer su estructura.

Estas formas se combinan. Una persona puede ampliar la página y usar el teclado,
o alternar entre ratón y voz. No debemos suponer que todas las personas con una
misma necesidad utilizan la misma herramienta. Lo que vamos a revisar es si
nuestra interfaz permite completar la tarea mediante esas distintas formas.

## 3. Necesidades y barreras concretas · 65 s

Pensemos en cuatro ejemplos. Si la disponibilidad aparece únicamente en verde o
rojo, una persona que no distingue esos colores pierde información. Un texto que
indique su significado evita depender solo del color.

Si un vídeo explica la actividad hablando y no tiene subtítulos, quien no puede
oírlo pierde esa explicación. Los subtítulos deben recoger el habla y también los
sonidos relevantes para entenderla.

Si una acción solo responde al clic, puede quedar fuera del alcance de quien
utiliza teclado por una necesidad motora. El problema está en cómo se ha construido
la acción, no en que falte un ratón.

Y si las instrucciones son confusas, comprender los pasos exige un esfuerzo que
podemos evitar con orden y lenguaje claro. Esto importa especialmente para
necesidades cognitivas, aunque ayuda a muchas personas. Son ejemplos para
reconocer barreras, no una lista completa ni una solución universal.

## 4. Alcanzar una acción con teclado · 90 s, incluida demo

Tab nos permite avanzar entre controles y Shift más Tab retroceder. El foco
indica cuál recibirá la acción. En este recorrido consultamos información,
alcanzamos la acción y después encontramos ayuda. Veamos qué sucede si falta
la parada que permite actuar.

[Storybook: abrir «Observar una acción inalcanzable».]

Esta variante está rotulada como contraejemplo deliberado. Sin utilizar el ratón,
avanzo desde el enlace de información. El siguiente Tab llega a la ayuda: se ha
saltado la acción. El texto está visible, pero no podemos alcanzarlo para completar
la tarea desde el teclado.

[Storybook: abrir «Completar la acción con teclado».]

Aquí usamos el botón HTML que aparece en la slide. Ahora el recorrido pasa de
información a la acción y después a ayuda. Retrocedo con Shift más Tab al botón.
Lo activo con Enter y aparece la confirmación de prueba; no se envían datos.
El botón también admite Espacio. Conservamos el foco para poder continuar.

## 5. Comprobar que la tarea se puede completar · 55 s

Podemos organizar la comprobación en tres preguntas. ¿Alcanzamos el control y
vemos dónde está el foco? ¿Entendemos qué hace y podemos activarlo? ¿Percibimos
el resultado y podemos seguir?

La variante que solo respondía al ratón podía parecer terminada si la probábamos
únicamente de esa manera. La comprobación con teclado ha revelado una barrera
concreta y el botón nativo nos ha dado una solución directa.

No hemos probado aquí todas las formas de utilizar la web. Hemos aprendido a
observar una tarea desde otra forma de interacción. Ahora vamos a mirar qué
información comunica el navegador sobre esos controles, para entender por qué
el aspecto visual no basta.
