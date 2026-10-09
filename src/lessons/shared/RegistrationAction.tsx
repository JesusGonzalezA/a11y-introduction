import { useId, useState } from 'react'
import './activity-registration.css'

export interface RegistrationActionProps {
  barrier?: boolean
  unavailable?: boolean
  onRegister?: () => void
  type?: 'button' | 'submit'
  actionLabel?: string
}

/** Acción simulada compartida: no recibe ni envía datos del formulario. */
export function RegistrationAction({
  barrier = false,
  unavailable = false,
  onRegister,
  type = 'button',
  actionLabel = 'Inscribirme',
}: RegistrationActionProps) {
  const id = useId()
  const [registered, setRegistered] = useState(false)
  const register = () => {
    setRegistered(true)
    onRegister?.()
  }
  return (
    <>
      {unavailable && (
        <p id={`${id}-unavailable`}>Inscripción cerrada: no quedan plazas.</p>
      )}
      {barrier ? (
        // Excepción didáctica intencional: sin rol ni teclado. La solución es el button de abajo.
        // biome-ignore lint/a11y/useKeyWithClickEvents: Contraejemplo deliberado de la barrera de teclado.
        // biome-ignore lint/a11y/noStaticElementInteractions: El span debe conservar la barrera que se demuestra.
        <span className="activity-registration__action" onClick={register}>
          {actionLabel}
        </span>
      ) : (
        <button
          className="activity-registration__action"
          type={type}
          disabled={unavailable}
          aria-describedby={unavailable ? `${id}-unavailable` : undefined}
          aria-controls={`${id}-result`}
          onClick={register}
        >
          {actionLabel}
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
    </>
  )
}
