import { useId, useState } from 'react'
import type { ExamplePageProps } from '../../../../../examples/types'
import './cinema-booking.css'

const sessions = [
  { time: '16:30', soldOut: false },
  { time: '19:00', soldOut: true },
  { time: '21:45', soldOut: false },
]

/** Elegir sesión en un cine: el navegador debe conocer rol, nombre y estado. */
export function CinemaBooking({ fixed }: ExamplePageProps) {
  const id = useId()
  const [chosen, setChosen] = useState<string>()
  const message = chosen
    ? `Has elegido la sesión de las ${chosen}. Ahora puedes escoger butacas.`
    : ''

  return (
    <div className="cinema-booking">
      <header className="cinema-booking__header">
        <p className="cinema-booking__brand">Cine Alameda</p>
        <nav aria-label="Principal" className="cinema-booking__nav">
          <a href={`#${id}-film`}>Cartelera</a>
          <a href={`#${id}-sessions`}>Entradas</a>
          <a href={`#${id}-info`}>Cómo llegar</a>
        </nav>
      </header>
      <main id={`${id}-film`} className="cinema-booking__main">
        <p className="cinema-booking__meta">Drama · 1 h 52 min · VOSE</p>
        <h1>La ola tranquila</h1>
        <p>
          Una farera jubilada vuelve a la isla donde creció para cuidar de su
          hermano. Estreno esta semana en la sala 2.
        </p>
        <section
          id={`${id}-sessions`}
          aria-labelledby={`${id}-sessions-title`}
          className="cinema-booking__sessions"
        >
          <h2 id={`${id}-sessions-title`}>Elige una sesión · Hoy</h2>
          <ul className="cinema-booking__list" data-fix="role">
            {sessions.map(({ time, soldOut }) => (
              <li key={time}>
                {fixed ? (
                  <button
                    type="button"
                    className="cinema-booking__session"
                    disabled={soldOut}
                    data-fix={soldOut ? 'state' : undefined}
                    onClick={() => setChosen(time)}
                  >
                    {time}
                    {soldOut && (
                      <span className="cinema-booking__sold-out">
                        {' '}
                        · Agotada
                      </span>
                    )}
                  </button>
                ) : (
                  // Barrera deliberada: aspecto de botón sin rol, teclado ni estado.
                  // biome-ignore lint/a11y/useKeyWithClickEvents: Barrera de semántica que enseña el ejemplo.
                  // biome-ignore lint/a11y/noStaticElementInteractions: El div conserva la barrera que se demuestra.
                  <div
                    className={`cinema-booking__session${soldOut ? ' cinema-booking__session--sold-out' : ''}`}
                    data-fix={soldOut ? 'state' : undefined}
                    onClick={soldOut ? undefined : () => setChosen(time)}
                  >
                    {time}
                  </div>
                )}
              </li>
            ))}
          </ul>
          {fixed ? (
            <p
              className="cinema-booking__result"
              role="status"
              aria-atomic="true"
              data-fix="status"
            >
              {message}
            </p>
          ) : (
            <p className="cinema-booking__result" data-fix="status">
              {message}
            </p>
          )}
        </section>
      </main>
      <footer id={`${id}-info`} className="cinema-booking__footer">
        <p>Cine Alameda · Paseo de la Alameda 12 · Sala adaptada</p>
        <p>Venta de demostración: no se reservan entradas.</p>
      </footer>
    </div>
  )
}
