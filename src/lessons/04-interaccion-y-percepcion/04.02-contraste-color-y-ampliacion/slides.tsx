import { Fragment } from 'react'
import {
  Code,
  ExampleLinks,
  PersonaCard,
  SlideTitle,
} from '../../../slides/parts'

export const slides = [
  <Fragment key="4.2-leccion">
    <SlideTitle kind="leccion">Contraste, color y tamaño del texto</SlideTitle>
    <p>
      Para leer una página no basta con que el texto esté ahí: hay que poder
      verlo.
    </p>
    <p>En esta lección:</p>
    <ul>
      <li>Información que no dependa solo del color.</li>
      <li>Contraste suficiente entre texto y fondo.</li>
      <li>
        Letra que crece con el tamaño que la persona ha elegido:{' '}
        <code>rem</code> y <code>clamp()</code>.
      </li>
      <li>Contenido que se adapta al ampliar, sin recortes.</li>
    </ul>
  </Fragment>,
  <Fragment key="4.2-situacion">
    <SlideTitle kind="situacion">Manuel consulta su autobús</SlideTitle>
    <PersonaCard
      id="manuel"
      task="Quiere saber si su autobús de las 09:05 sale a tiempo y leer el aviso de obras de su parada."
    />
  </Fragment>,
  <Fragment key="4.2-error-color">
    <SlideTitle kind="error">
      El estado solo se ve por color y el texto gris apenas se lee
    </SlideTitle>
    <Code tone="error" caption="Así está">
      {
        '<li><span class="punto punto--cancelado"></span> 09:05</li>\n\n.parada { color: #b4b4b4; } /* contraste 2,07:1 */'
      }
    </Code>
    <p>
      <strong>Qué le pasa a Manuel:</strong> no distingue el punto rojo del
      verde, así que no sabe que su autobús está cancelado. El gris claro sobre
      blanco se le confunde con el fondo.
    </p>
  </Fragment>,
  <Fragment key="4.2-solucion-color">
    <SlideTitle kind="solucion">
      Escribir el estado y subir el contraste
    </SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<li><span class="punto punto--cancelado"></span> 09:05\n  <span>Cancelado</span></li>\n\n.parada { color: #52525b; } /* contraste 7,73:1 */'
      }
    </Code>
    <ul>
      <li>
        El color puede reforzar, pero siempre acompañado de texto o forma.
      </li>
      <li>
        Contraste mínimo: <strong>4,5:1</strong> para texto normal,{' '}
        <strong>3:1</strong> para texto grande e iconos necesarios.
      </li>
    </ul>
  </Fragment>,
  <Fragment key="4.2-error-letra">
    <SlideTitle kind="error">
      La letra no crece aunque Manuel la agrande
    </SlideTitle>
    <p>
      Manuel ha subido el tamaño de letra en su navegador (Ajustes → Aspecto →
      Tamaño de fuente) y en su móvil.
    </p>
    <Code tone="error" caption="Así está">
      {'.horarios { font-size: 15px; }\n.horarios h1 { font-size: 4vw; }'}
    </Code>
    <ul>
      <li>
        <code>px</code> fija el tamaño e ignora la preferencia de Manuel.
      </li>
      <li>
        <code>vw</code> depende solo del ancho de la ventana: al hacer zoom, el
        título no crece, incluso encoge.
      </li>
    </ul>
  </Fragment>,
  <Fragment key="4.2-solucion-letra">
    <SlideTitle kind="solucion">
      Letra responsive en rem, con clamp()
    </SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '.horarios { font-size: 1rem; }\n.horarios h1 {\n  font-size: clamp(1.5rem, 1rem + 2vw, 2.25rem);\n}'
      }
    </Code>
    <ul>
      <li>
        <code>1rem</code> = el tamaño de letra que eligió la persona (16 px si
        no cambió nada).
      </li>
      <li>
        <code>clamp(mínimo, ideal, máximo)</code>: el título se adapta a la
        pantalla, pero siempre parte de <code>rem</code> y crece con el zoom.
      </li>
      <li>Objetivo: texto legible al 200 % sin perder contenido.</li>
    </ul>
  </Fragment>,
  <Fragment key="4.2-error-recorte">
    <SlideTitle kind="error">El aviso se corta al ampliar</SlideTitle>
    <Code tone="error" caption="Así está">
      {'.aviso {\n  width: 40rem;\n  height: 9.5rem;\n  overflow: hidden;\n}'}
    </Code>
    <p>
      <strong>Qué le pasa a Manuel:</strong> con la letra grande o en el móvil,
      el texto no cabe en la caja y se esconde. Nunca lee dónde está la parada
      provisional.
    </p>
  </Fragment>,
  <Fragment key="4.2-solucion-recorte">
    <SlideTitle kind="solucion">
      Cajas flexibles que crecen con el contenido
    </SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '.aviso {\n  max-inline-size: 100%;\n  overflow-wrap: anywhere;\n  /* Sin altura fija ni recorte */\n}'
      }
    </Code>
    <p>
      Compruébalo: zoom al 200 % y ventana de 320 px de ancho. Todo se lee con
      scroll solo vertical.
    </p>
    <ExampleLinks
      slug="horarios"
      barrier="Consultar los horarios con barreras"
      fixed="Consultar los horarios corregidos"
    />
  </Fragment>,
]
