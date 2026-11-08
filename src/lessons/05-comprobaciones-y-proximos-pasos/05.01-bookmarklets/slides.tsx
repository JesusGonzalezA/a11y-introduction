import { Fragment } from 'react'
import {
  Code,
  ExampleLinks,
  PersonaCard,
  SlideTitle,
} from '../../../slides/parts'

export const slides = [
  <Fragment key="5.1-leccion">
    <SlideTitle kind="leccion">
      Inspeccionar el contenido con bookmarklets
    </SlideTitle>
    <p>
      Un <strong>bookmarklet</strong> es un marcador del navegador que, al
      pulsarlo, ejecuta un pequeño script sobre la página abierta.
    </p>
    <ol>
      <li>
        Abre la página del bookmarklet y arrastra su enlace a la barra de
        marcadores.
      </li>
      <li>Abre la página que quieres revisar y pulsa el marcador.</li>
      <li>Recarga la página para quitar las anotaciones.</li>
    </ol>
    <p>
      <a
        className="lesson-slide__example-link"
        href="https://pauljadam.com/bookmarklets/headings.html"
      >
        Instalar Headings (encabezados)
      </a>
      <a
        className="lesson-slide__example-link"
        href="https://pauljadam.com/bookmarklets/images.html"
      >
        Instalar Images (imágenes)
      </a>
    </p>
  </Fragment>,
  <Fragment key="5.1-situacion">
    <SlideTitle kind="situacion">
      Ver la página como la recorre Elena
    </SlideTitle>
    <PersonaCard
      id="elena"
      task="Visita la web de una exposición: salta por encabezados hasta los horarios y quiere saber qué muestra la imagen principal."
    />
    <p>
      Sin lector de pantalla, los bookmarklets nos enseñan esa misma
      información: encabezados con su nivel y el <code>alt</code> de cada
      imagen.
    </p>
  </Fragment>,
  <Fragment key="5.1-error-niveles">
    <SlideTitle kind="error">Niveles de encabezado desordenados</SlideTitle>
    <p>Headings muestra la etiqueta de cada encabezado sobre la página:</p>
    <Code tone="error" caption="Así está">
      {
        '<h1>Hilos del Mediterráneo</h1>\n<h3>Información práctica</h3>  ← es una sección\n<h2>Horarios</h2>              ← es una subsección'
      }
    </Code>
    <p>
      <strong>Qué le pasa a Elena:</strong> oye «Horarios, nivel 2» como si
      fuera una sección nueva, y no entiende que pertenece a la información
      práctica.
    </p>
  </Fragment>,
  <Fragment key="5.1-error-alt">
    <SlideTitle kind="error">Un alt que no describe nada</SlideTitle>
    <p>
      Images muestra el <code>alt</code> de cada imagen junto a ella:
    </p>
    <Code tone="error" caption="Así está">
      {'<img src="tapiz.jpg" alt="sala3_IMG_0412.jpg">'}
    </Code>
    <p>
      <strong>Qué le pasa a Elena:</strong> oye un nombre de archivo en lugar de
      la obra principal de la exposición.
    </p>
    <p>
      Ojo: el bookmarklet marca que el <code>alt</code> existe. Si sirve o no,
      lo decides tú.
    </p>
  </Fragment>,
  <Fragment key="5.1-solucion">
    <SlideTitle kind="solucion">Corregir, recargar y volver a mirar</SlideTitle>
    <Code tone="solucion" caption="Así se arregla">
      {
        '<h2>Información práctica</h2>\n<h3>Horarios</h3>\n\n<img src="tapiz.jpg"\n  alt="Tapiz de lana con olas azules y\n       barcas rojas sobre fondo arena.">'
      }
    </Code>
    <p>
      Los bookmarklets muestran datos, no deciden. No sustituyen a probar con un
      lector de pantalla.
    </p>
    <ExampleLinks
      slug="museo"
      barrier="Inspeccionar la exposición con barreras"
      fixed="Inspeccionar la exposición corregida"
    />
  </Fragment>,
]
