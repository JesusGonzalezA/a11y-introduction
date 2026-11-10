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
      Una <strong>barrera</strong> es algo de la página que impide a una persona
      usarla. No es un problema de la persona: nace de una decisión de diseño o
      de código.
    </p>
    <p>En esta lección:</p>
    <ul>
      <li>Conocerás a las cinco personas que nos acompañan en el curso.</li>
      <li>Verás qué barrera encuentra cada tipo de necesidad.</li>
      <li>
        Arreglarás la barrera más básica: un botón que solo funciona con ratón.
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
        <strong>Visual:</strong> un estado que solo se indica con verde o rojo.
        Quien no distingue esos colores no se entera.
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
        Cuesta saber qué hacer.
      </li>
    </ul>
    <p>
      Una necesidad puede ser permanente, temporal (un brazo roto) o de un
      momento (el móvil en una mano).
    </p>
  </Fragment>,
  <Fragment key="2.1-situacion">
    <SlideTitle kind="situacion">Andrés quiere comprar una taza</SlideTitle>
    <PersonaCard
      id="andres"
      task="Está en la ficha de una taza, en una tienda online, y quiere añadirla a la cesta."
    />
  </Fragment>,
  <Fragment key="2.1-error">
    <SlideTitle kind="error">
      El botón «Añadir a la cesta» solo responde al ratón
    </SlideTitle>
    <p>
      Parece un botón, pero es un <code>div</code> con un evento de clic. El
      teclado no llega a él.
    </p>
    <Code tone="error" caption="Así está">
      {'<div class="boton" onclick="anadir()">\n  Añadir a la cesta\n</div>'}
    </Code>
    <p>
      <strong>Qué le pasa a Andrés:</strong> pulsa Tab y el foco se salta el
      botón. Lo ve, pero no puede comprar.
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
      <li>Tab llega a él y el foco se ve.</li>
      <li>Enter y Espacio lo pulsan, sin programar nada más.</li>
      <li>
        El lector de pantalla y el control por voz lo reconocen como botón.
      </li>
    </ul>
    <ExampleLinks slug="tienda-online" task="comprar la taza con teclado" />
  </Fragment>,
]
