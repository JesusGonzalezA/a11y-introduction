import { Fragment } from 'react'
import {
  Code,
  ExampleLinks,
  PersonaCard,
  SlideTitle,
} from '../../../slides/parts'

export const slides = [
  <Fragment key="3.2-leccion">
    <SlideTitle kind="leccion">
      Imágenes, enlaces y controles comprensibles
    </SlideTitle>
    <p>Cada elemento necesita un texto que diga qué es o qué hace.</p>
    <p>En esta lección:</p>
    <ul>
      <li>
        Imágenes: qué escribir en el <code>alt</code> y cuándo dejarlo vacío.
      </li>
      <li>Enlaces: un texto que diga adónde llevan.</li>
      <li>
        Botones y campos: una acción clara y una etiqueta que no desaparece.
      </li>
    </ul>
  </Fragment>,
  <Fragment key="3.2-situacion-elena">
    <SlideTitle kind="situacion">Elena lee una noticia de su barrio</SlideTitle>
    <PersonaCard
      id="elena"
      task="Quiere entender el gráfico de la noticia y abrir el informe completo."
    />
  </Fragment>,
  <Fragment key="3.2-error-imagenes">
    <SlideTitle kind="error">
      Imágenes con el nombre del archivo como texto
    </SlideTitle>
    <Code tone="error" caption="Así está">
      {
        '<img src="grafico.svg" alt="grafico_final_v2.png">\n<img src="icono-sobre.svg" alt="icono-sobre.svg">'
      }
    </Code>
    <p>
      <strong>Qué le pasa a Elena:</strong> oye «grafico final v2 punto png» y
      se queda sin los datos. Después oye el nombre de un icono que no aporta
      nada.
    </p>
  </Fragment>,
  <Fragment key="3.2-solucion-imagenes">
    <SlideTitle kind="solucion">
      El alt depende de para qué sirve la imagen
    </SlideTitle>
    <Code tone="solucion" caption="Informa: el alt cuenta lo que aporta">
      {
        '<img src="grafico.svg"\n  alt="Gráfico de barras: 1.200 viajes diarios\n       en marzo de 2025 y 2.450 en marzo de 2026.">'
      }
    </Code>
    <Code tone="solucion" caption="Solo decora: alt vacío para que se ignore">
      {'<img src="icono-sobre.svg" alt="">'}
    </Code>
    <p>
      Pregúntate: ¿qué se perdería si no se viera la imagen? Y no quites el{' '}
      <code>alt</code>: sin él, el lector lee el nombre del archivo.
    </p>
  </Fragment>,
  <Fragment key="3.2-error-enlace">
    <SlideTitle kind="error">Enlaces que dicen «Leer más»</SlideTitle>
    <Code tone="error" caption="Así está">
      {'<a href="#informe">Leer más</a>'}
    </Code>
    <p>
      <strong>Qué le pasa a Elena:</strong> pide a su lector la lista de enlaces
      y oye «Leer más», sin nada alrededor. ¿Más de qué?
    </p>
  </Fragment>,
  <Fragment key="3.2-solucion-enlace">
    <SlideTitle kind="solucion">
      El texto del enlace dice adónde lleva
    </SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {'<a href="#informe">\n  Consultar el informe de movilidad 2026\n</a>'}
    </Code>
    <p>
      Se entiende solo: en una lista de enlaces o al decir por voz «pulsa
      consultar el informe».
    </p>
  </Fragment>,
  <Fragment key="3.2-situacion-lucia">
    <SlideTitle kind="situacion">Lucía se suscribe al boletín</SlideTitle>
    <PersonaCard
      id="lucia"
      task="Quiere recibir las noticias del barrio por correo: escribir su dirección y suscribirse."
    />
  </Fragment>,
  <Fragment key="3.2-error-campo">
    <SlideTitle kind="error">
      Un campo sin etiqueta y un botón que dice «Aceptar»
    </SlideTitle>
    <Code tone="error" caption="Así está">
      {
        '<input type="email" placeholder="Tu correo">\n<button type="submit">Aceptar</button>'
      }
    </Code>
    <p>
      <strong>Qué le pasa a Lucía:</strong> al empezar a escribir, el
      placeholder desaparece y ya no recuerda qué pedía el campo. «Aceptar»
      tampoco dice qué va a pasar.
    </p>
    <p>A Elena, su lector solo le dice «campo de edición».</p>
  </Fragment>,
  <Fragment key="3.2-solucion-campo">
    <SlideTitle kind="solucion">
      Etiqueta visible y botón que nombra la acción
    </SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<label for="correo">Correo electrónico</label>\n<input id="correo" type="email"\n  autocomplete="email"\n  placeholder="nombre@ejemplo.com">\n<button type="submit">Suscribirme</button>'
      }
    </Code>
    <ul>
      <li>
        <code>for</code> e <code>id</code> unen la etiqueta y el campo: le dan
        nombre y amplían la zona de clic.
      </li>
      <li>El placeholder es una pista, nunca la etiqueta.</li>
    </ul>
    <ExampleLinks slug="noticia" task="leer la noticia y suscribirse" />
  </Fragment>,
]
