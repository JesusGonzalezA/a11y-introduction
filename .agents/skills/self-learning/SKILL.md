---
name: self-learning
description: Use when the user gives feedback, correction, preference, criticism, or a new working convention about the agent, its skills, its documentation, or its implementation choices.
---

# Learn from feedback

Trata cada feedback como una señal sobre la forma de trabajar, no como una orden para
acumular texto. Extrae la regla que el usuario quiere hacer persistente y decide
dónde debe vivir.

## Pasos

1. **Interpreta la señal.** Resume mentalmente qué resultado, criterio o decisión
   esperaba el usuario y sepárala de la solución concreta que provocó el feedback.
   Distingue una preferencia duradera de una corrección puntual, una decisión de
   producto y un cambio de dominio.
   **Completado cuando:** puedes expresar la expectativa como una regla observable
   con un ejemplo de cuándo se activa.

2. **Elige el hogar de la regla.** Aplica este orden:

   | Señal | Hogar |
   | --- | --- |
   | Flujo reutilizable que se activa por una clase de petición | una skill |
   | Convención estable que afecta a todo el repositorio | `AGENTS.md` o documentación para agentes |
   | Conocimiento de dominio, explicación o referencia consultable | documento de referencia |
   | Comportamiento del producto, API o código | implementación y sus tests |
   | Preferencia única o contexto temporal | no persistir |

   Antes de crear un archivo, busca una fuente de verdad existente. Amplía la skill
   o el documento que ya gobierna la decisión cuando el feedback pertenece a su
   mismo flujo; crea una pieza nueva solo si tiene un disparador y un alcance
   distintos.
   **Completado cuando:** existe una única ubicación autorizada para la regla y la
   decisión no duplica otra instrucción.

3. **Actualiza con precisión.** Cambia la fuente elegida y escribe la regla como un
   comportamiento positivo, con un disparador claro, pasos ordenados y un criterio
   de finalización verificable. Conserva las convenciones y el idioma del archivo.
   Si la regla solo afecta a este turno, aplícala sin convertirla en memoria
   permanente.
   **Completado cuando:** la fuente de verdad expresa la expectativa sin depender de
   la conversación que la originó.

4. **Revisa las interacciones.** Comprueba si la modificación contradice otra skill,
   un `AGENTS.md`, la estructura del repositorio o una regla de producto. Elimina
   instrucciones duplicadas o debilitadas por el cambio y actualiza referencias que
   hayan quedado obsoletas.
   **Completado cuando:** las fuentes relacionadas tienen una sola interpretación y
   los disparadores siguen siendo distinguibles.

5. **Valida y aplica.** Revisa el diff y ejecuta la comprobación adecuada: lectura
   estructural para documentación o skills, tests para comportamiento de código y
   la validación del repositorio cuando la modificación la requiera. Expón cualquier
   incertidumbre en vez de presentar una persistencia parcial como terminada.
   **Completado cuando:** la regla está en su hogar correcto, la validación pasa o su
   bloqueo queda explicado, y el cambio no contiene sedimentación ni contenido
   especulativo.

## Preguntas internas obligatorias

Antes de persistir feedback, responde:

- ¿Esto se repetirá y tiene un disparador reconocible?
- ¿Cambia el proceso del agente o solo el resultado de una tarea?
- ¿Ya existe una skill o documento que sea la fuente de verdad?
- ¿Qué evidencia permitirá comprobar que la nueva regla se aplicó?

Prioriza una modificación pequeña en una fuente existente. El objetivo no es que las
skills crezcan con cada comentario, sino que cada feedback útil reduzca la variación
de futuras decisiones.
