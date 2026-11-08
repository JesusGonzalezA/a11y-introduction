import { useId } from 'react'
import type { ExamplePageProps } from '../../../../../examples/types'
import tapestry from './tapestry.svg'
import './museum-exhibition.css'

export const tapestryAlt =
  'Tapiz de lana con olas azules y barcas rojas sobre fondo arena.'

/** Exposición de un museo: niveles de encabezado y alternativa de la imagen. */
export function MuseumExhibition({ fixed }: ExamplePageProps) {
  const id = useId()
  // Barrera deliberada: las secciones usan h3 y sus subsecciones h2.
  const Section = fixed ? 'h2' : 'h3'
  const Subsection = fixed ? 'h3' : 'h2'

  return (
    <div className="museum-exhibition">
      <header className="museum-exhibition__header">
        <p className="museum-exhibition__brand">Museo de Arte Textil</p>
        <nav aria-label="Principal" className="museum-exhibition__nav">
          <a href={`#${id}-about`}>Exposiciones</a>
          <a href={`#${id}-visit`}>Visita</a>
        </nav>
      </header>
      <main className="museum-exhibition__main">
        <p className="museum-exhibition__kicker">Exposición temporal</p>
        <h1>Hilos del Mediterráneo</h1>
        <img
          className="museum-exhibition__image"
          src={tapestry}
          width="720"
          height="360"
          alt={fixed ? tapestryAlt : 'sala3_IMG_0412.jpg'}
          data-fix="alt"
        />
        <Section
          id={`${id}-about`}
          className="museum-exhibition__section"
          data-fix="headings"
        >
          Sobre la exposición
        </Section>
        <p>
          Cuarenta tapices tejidos entre 1950 y 1990 en talleres de la costa. La
          obra central, «Mar de fondo», recibe a quienes entran en la sala 3.
        </p>
        <Section
          id={`${id}-visit`}
          className="museum-exhibition__section"
          data-fix="headings"
        >
          Información práctica
        </Section>
        <Subsection
          className="museum-exhibition__subsection"
          data-fix="headings"
        >
          Horarios
        </Subsection>
        <p>De martes a domingo, de 10:00 a 19:00.</p>
        <Subsection
          className="museum-exhibition__subsection"
          data-fix="headings"
        >
          Entradas
        </Subsection>
        <p>General, 6 €. Gratis los domingos por la tarde.</p>
      </main>
      <footer className="museum-exhibition__footer">
        <p>Museo de Arte Textil · Sitio de demostración</p>
      </footer>
    </div>
  )
}
