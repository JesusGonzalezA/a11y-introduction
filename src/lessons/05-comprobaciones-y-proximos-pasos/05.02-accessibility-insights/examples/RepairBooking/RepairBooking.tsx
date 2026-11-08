import { type FormEvent, useId, useState } from 'react'
import type { ExamplePageProps } from '../../../../../examples/types'
import './repair-booking.css'

/** Pedir cita en un taller: un campo sin nombre accesible que detecta FastPass. */
export function RepairBooking({ fixed }: ExamplePageProps) {
  const id = useId()
  const [sent, setSent] = useState(false)
  const submit = (event: FormEvent) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div className="repair-booking">
      <header className="repair-booking__header">
        <p className="repair-booking__brand">Taller La Cadena</p>
        <nav aria-label="Principal" className="repair-booking__nav">
          <a href={`#${id}-services`}>Servicios</a>
          <a href={`#${id}-booking`}>Pedir cita</a>
        </nav>
      </header>
      <main className="repair-booking__main">
        <h1>Pide cita para tu bicicleta</h1>
        <p>
          Te llamamos en el día para confirmar la hora. La revisión básica
          cuesta 25 €.
        </p>
        <form
          id={`${id}-booking`}
          className="repair-booking__form"
          onSubmit={submit}
        >
          <div className="repair-booking__field">
            <label htmlFor={`${id}-name`}>Nombre</label>
            <input id={`${id}-name`} name="name" autoComplete="name" />
          </div>
          <div className="repair-booking__field" data-fix="label">
            {fixed ? (
              <label htmlFor={`${id}-phone`}>Teléfono</label>
            ) : (
              // Barrera deliberada: el texto se ve, pero no está asociado al campo.
              <span className="repair-booking__fake-label">Teléfono</span>
            )}
            <input
              id={`${id}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
            />
          </div>
          <div className="repair-booking__field">
            <label htmlFor={`${id}-issue`}>¿Qué le pasa a la bicicleta?</label>
            <textarea id={`${id}-issue`} name="issue" rows={3} />
          </div>
          <button type="submit" className="repair-booking__submit">
            Pedir cita
          </button>
        </form>
        <p className="repair-booking__result" role="status">
          {sent ? 'Solicitud de prueba: no se ha enviado ningún dato.' : ''}
        </p>
        <section id={`${id}-services`} aria-labelledby={`${id}-services-title`}>
          <h2 id={`${id}-services-title`}>Servicios</h2>
          <ul>
            <li>Revisión básica: frenos, cambios y presión.</li>
            <li>Cambio de cámara o cubierta.</li>
            <li>Ajuste de bicicletas eléctricas.</li>
          </ul>
        </section>
      </main>
      <footer className="repair-booking__footer">
        <p>Taller La Cadena · Calle del Puerto 8 · Sitio de demostración</p>
      </footer>
    </div>
  )
}
