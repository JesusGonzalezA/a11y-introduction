import { Fragment } from 'react'
import { personaList } from '../../../personas'
import {
  Code,
  ExampleLinks,
  PersonaCard,
  SlideTitle,
} from '../../../slides/parts'

export const slides = [
  <Fragment key="2.1-leccion">
    <SlideTitle kind="leccion">
      Personas, formas de interacción y barreras
    </SlideTitle>
    <p>
      Una <strong>barrera</strong> aparece cuando la página exige una forma de
      uso que la persona no puede realizar. No es un problema de la persona: es
      una decisión de diseño o de código.
    </p>
    <p>En esta lección:</p>
    <ul>
      <li>Conocerás a las cinco personas que nos acompañan en el curso.</li>
      <li>Relacionarás cada tipo de necesidad con una barrera típica.</li>
      <li>
        Verás la barrera más básica: una acción que solo funciona con ratón.
      </li>
    </ul>
  </Fragment>,
  <Fragment key="2.1-personas">
    <SlideTitle kind="situacion">
      Cinco personas, cinco formas de usar la web
    </SlideTitle>
    <ul className="persona-list">
      {personaList.map((persona) => (
        <li key={persona.id}>
          <strong>{persona.name}.</strong> {persona.who} {persona.how}
        </li>
      ))}
    </ul>
  </Fragment>,
  <Fragment key="2.1-necesidades">
    <SlideTitle kind="leccion">Cada necesidad, una barrera típica</SlideTitle>
    <ul>
      <li>
        <strong>Visual:</strong> un estado que solo se muestra en verde o rojo.
        Quien no distingue esos colores pierde la información.
      </li>
      <li>
        <strong>Auditiva:</strong> un vídeo sin subtítulos. Quien no oye se
        pierde lo que se dice.
      </li>
      <li>
        <strong>Motora:</strong> un botón que solo responde al clic. Quien usa
        teclado no puede pulsarlo.
      </li>
      <li>
        <strong>Cognitiva:</strong> instrucciones confusas o que desaparecen.
        Cuesta entender qué hacer.
      </li>
    </ul>
    <p>
      Las necesidades pueden ser permanentes, temporales (un brazo roto) o de
      situación (el móvil en una mano).
    </p>
  </Fragment>,
  <Fragment key="2.1-situacion">
    <SlideTitle kind="situacion">Andrés quiere comprar una taza</SlideTitle>
    <PersonaCard
      id="andres"
      task="Está en la ficha de una taza de una tienda online y quiere añadirla a la cesta."
    />
  </Fragment>,
  <Fragment key="2.1-error">
    <SlideTitle kind="error">
      El botón «Añadir a la cesta» solo responde al ratón
    </SlideTitle>
    <p>
      Parece un botón, pero es un <code>div</code> con un evento de clic. El
      teclado no puede llegar a él.
    </p>
    <Code tone="error" caption="Así está">
      {'<div class="boton" onclick="anadir()">\n  Añadir a la cesta\n</div>'}
    </Code>
    <p>
      <strong>Qué le pasa a Andrés:</strong> pulsa Tab y el foco salta del
      enlace de envíos al de dudas. Ve el botón, pero no puede comprar.
    </p>
  </Fragment>,
  <Fragment key="2.1-solucion">
    <SlideTitle kind="solucion">Usar un botón HTML de verdad</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<button type="button" onclick="anadir()">\n  Añadir a la cesta\n</button>'
      }
    </Code>
    <ul>
      <li>Tab lo alcanza y el foco se ve.</li>
      <li>Enter y Espacio lo activan, sin programar nada más.</li>
      <li>
        El control por voz y el lector de pantalla lo reconocen como botón.
      </li>
    </ul>
    <ExampleLinks
      slug="tienda-online"
      barrier="Intentar comprar solo con teclado"
      fixed="Comprar con el botón corregido"
    />
  </Fragment>,
]
