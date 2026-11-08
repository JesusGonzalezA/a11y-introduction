import { useId } from 'react'
import type { ExamplePageProps } from '../../../../../examples/types'
import './bus-timetable.css'

const departures = [
  { time: '08:15', state: 'on-time', label: 'A tiempo' },
  { time: '08:40', state: 'delayed', label: 'Retraso de 10 minutos' },
  { time: '09:05', state: 'cancelled', label: 'Cancelado' },
  { time: '09:30', state: 'on-time', label: 'A tiempo' },
] as const

/** Próximas salidas de una línea: estado sin color, contraste y reflujo. */
export function BusTimetable({ fixed }: ExamplePageProps) {
  const id = useId()
  return (
    <div className={`bus-timetable${fixed ? '' : ' bus-timetable--barrier'}`}>
      <header className="bus-timetable__header">
        <p className="bus-timetable__brand">Autobuses Ría</p>
        <nav aria-label="Principal" className="bus-timetable__nav">
          <a href={`#${id}-line`}>Líneas</a>
          <a href={`#${id}-notice`}>Avisos</a>
          <a href={`#${id}-tickets`}>Billetes</a>
        </nav>
      </header>
      <main id={`${id}-line`} className="bus-timetable__main">
        <p className="bus-timetable__line" aria-hidden="true">
          7
        </p>
        <h1>Línea 7 · Estación – Hospital</h1>
        <p className="bus-timetable__stop" data-fix="contrast">
          Parada Plaza Mayor · actualizado hace 1 minuto
        </p>
        <h2 id={`${id}-departures`}>Próximas salidas</h2>
        <ul
          aria-labelledby={`${id}-departures`}
          className="bus-timetable__departures"
          data-fix="color"
        >
          {departures.map(({ time, state, label }) => (
            <li key={time} className="bus-timetable__departure">
              <span
                aria-hidden="true"
                className={`bus-timetable__dot bus-timetable__dot--${state}`}
              />
              <span className="bus-timetable__time">{time}</span>
              {fixed && <span className="bus-timetable__state">{label}</span>}
            </li>
          ))}
        </ul>
        <section
          id={`${id}-notice`}
          aria-labelledby={`${id}-notice-title`}
          className="bus-timetable__notice"
          data-fix="reflow"
        >
          <h2 id={`${id}-notice-title`}>Aviso por obras</h2>
          <p className="bus-timetable__notice-text" data-fix="contrast">
            Del 10 al 21 de noviembre la parada Plaza Mayor se traslada a la
            calle Real, número 14. Las salidas de las 09:05 se recuperan con un
            refuerzo a las 09:15 desde la parada provisional. Consulta los
            cambios antes de salir.
          </p>
        </section>
        <section id={`${id}-tickets`} aria-labelledby={`${id}-tickets-title`}>
          <h2 id={`${id}-tickets-title`}>Billetes</h2>
          <p>Billete sencillo: 1,40 €. Con tarjeta de transporte: 0,85 €.</p>
          <a className="bus-timetable__buy" href={`#${id}-tickets`}>
            Recargar la tarjeta de transporte
          </a>
        </section>
      </main>
      <footer className="bus-timetable__footer">
        <p>Autobuses Ría · Información de demostración</p>
      </footer>
    </div>
  )
}
