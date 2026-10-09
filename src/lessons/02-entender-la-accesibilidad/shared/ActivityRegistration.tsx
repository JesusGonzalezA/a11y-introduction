import { useId, useState } from 'react'
import './activity-registration.css'

export interface ActivityRegistrationProps {
  barrier?: boolean
  unavailable?: boolean
  onRegister?: () => void
}

/** Escenario compartido por 2.1 y 2.2; nunca envía datos ni representa un formulario completo. */
export function ActivityRegistration({
  barrier = false,
  unavailable = false,
  onRegister,
}: ActivityRegistrationProps) {
  const id = useId()
  const [registered, setRegistered] = useState(false)
  const register = () => {
    setRegistered(true)
    onRegister?.()
  }

  return (
    <article className="activity-registration">
      <p className="activity-registration__variant">
        {barrier
          ? 'Contraejemplo deliberado: acción solo con puntero'
          : 'Solución: acción con botón HTML'}
      </p>
      <h3>Paseo por el jardín botánico</h3>
      <p>Una visita guiada para conocer las plantas del entorno.</p>
      <a href={`#${id}-information`}>Consultar información práctica</a>
      <p id={`${id}-information`}>
        Sábado · 10:00 · 60 minutos · Entrada gratuita
      </p>
      <p>Demostración: prueba la inscripción sin introducir ni enviar datos.</p>
      {unavailable && (
        <p id={`${id}-unavailable`}>Inscripción cerrada: no quedan plazas.</p>
      )}
      {barrier ? (
        // Excepción didáctica intencional: sin rol ni teclado. La solución es el button de abajo.
        // biome-ignore lint/a11y/useKeyWithClickEvents: Contraejemplo deliberado de la barrera de teclado.
        // biome-ignore lint/a11y/noStaticElementInteractions: El span debe conservar la barrera que se demuestra.
        <span className="activity-registration__action" onClick={register}>
          Inscribirme
        </span>
      ) : (
        <button
          className="activity-registration__action"
          type="button"
          disabled={unavailable}
          aria-describedby={unavailable ? `${id}-unavailable` : undefined}
          aria-controls={`${id}-result`}
          onClick={register}
        >
          Inscribirme
        </button>
      )}
      <p
        className="activity-registration__result"
        id={`${id}-result`}
        role="status"
        aria-atomic="true"
      >
        {registered
          ? 'Inscripción de prueba registrada. No se han enviado datos.'
          : ''}
      </p>
      <a href={`#${id}-help`}>Consultar ayuda para la inscripción</a>
      <p id={`${id}-help`}>
        En esta demo basta con activar «Inscribirme». El formulario se
        desarrollará más adelante.
      </p>
    </article>
  )
}
