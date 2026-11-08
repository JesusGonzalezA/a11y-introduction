import { useId, useState } from 'react'
import type { ExamplePageProps } from '../../../../../examples/types'
import './festival-page.css'

const artists = [
  'Las Mareas',
  'Bruma Norte',
  'Coro de Faros',
  'Niebla & Sal',
  'Los Acantilados',
  'Viento Sur',
  'Marea Baja Trío',
]

/** Portada de un festival: animaciones, preferencias del sistema y pausa. */
export function FestivalPage({ fixed }: ExamplePageProps) {
  const id = useId()
  const [paused, setPaused] = useState(false)
  return (
    <div className={`festival${fixed ? '' : ' festival--barrier'}`}>
      <header className="festival__header">
        <p className="festival__brand">Sonidos del Norte</p>
        <nav aria-label="Principal" className="festival__nav">
          <a href={`#${id}-lineup`}>Cartel</a>
          <a href={`#${id}-tickets`}>Abonos</a>
          <a href={`#${id}-info`}>Cómo llegar</a>
        </nav>
      </header>
      <main>
        <section
          aria-labelledby={`${id}-title`}
          className="festival__hero"
          data-fix="reduced-motion"
        >
          <span
            aria-hidden="true"
            className="festival__wave festival__wave--1"
          />
          <span
            aria-hidden="true"
            className="festival__wave festival__wave--2"
          />
          <span
            aria-hidden="true"
            className="festival__wave festival__wave--3"
          />
          <div className="festival__hero-content">
            <p className="festival__dates">12, 13 y 14 de junio · Gijón</p>
            <h1 id={`${id}-title`} className="festival__title">
              Sonidos del Norte 2027
            </h1>
            <p className="festival__lead">
              Tres días de música frente al mar, con conciertos al atardecer y
              actividades para toda la familia.
            </p>
            <a
              className="festival__cta"
              href={`#${id}-tickets`}
              data-fix="reduced-motion"
            >
              Comprar abono
            </a>
          </div>
        </section>

        <section
          id={`${id}-lineup`}
          aria-labelledby={`${id}-lineup-title`}
          className="festival__lineup"
          data-fix="pause"
        >
          <div className="festival__lineup-header">
            <h2 id={`${id}-lineup-title`}>Cartel</h2>
            {fixed && (
              <button
                type="button"
                className="festival__pause"
                onClick={() => setPaused((value) => !value)}
              >
                {paused ? 'Reanudar el cartel' : 'Pausar el cartel'}
              </button>
            )}
          </div>
          <div
            className={`festival__ticker${fixed && paused ? ' festival__ticker--paused' : ''}`}
          >
            <div className="festival__ticker-track">
              <ul className="festival__artists">
                {artists.map((artist) => (
                  <li key={artist}>{artist}</li>
                ))}
              </ul>
              <ul aria-hidden="true" className="festival__artists">
                {artists.map((artist) => (
                  <li key={artist}>{artist}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id={`${id}-tickets`}
          aria-labelledby={`${id}-tickets-title`}
          className="festival__section"
        >
          <h2 id={`${id}-tickets-title`}>Abonos</h2>
          <ul className="festival__passes">
            <li>
              <p className="festival__pass-name">Abono 3 días</p>
              <p className="festival__pass-price">75 €</p>
            </li>
            <li>
              <p className="festival__pass-name">Entrada de un día</p>
              <p className="festival__pass-price">32 €</p>
            </li>
          </ul>
        </section>

        <section
          id={`${id}-info`}
          aria-labelledby={`${id}-info-title`}
          className="festival__section"
        >
          <h2 id={`${id}-info-title`}>Cómo llegar</h2>
          <p>
            Recinto del puerto deportivo. Autobuses lanzadera cada 15 minutos
            desde la estación.
          </p>
        </section>
      </main>
      <footer className="festival__footer">
        <p>Sonidos del Norte · Información de demostración</p>
      </footer>
    </div>
  )
}
