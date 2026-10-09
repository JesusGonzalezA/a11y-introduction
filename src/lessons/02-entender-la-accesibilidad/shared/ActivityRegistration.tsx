import { useId } from 'react'
import { activity } from '../../shared/activity'
import { RegistrationAction } from '../../shared/RegistrationAction'
import '../../shared/activity-registration.css'

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

  return (
    <article className="activity-registration">
      <p className="activity-registration__variant">
        {barrier
          ? 'Contraejemplo deliberado: acción solo con puntero'
          : 'Solución: acción con botón HTML'}
      </p>
      <h3>{activity.title}</h3>
      <p>{activity.description}</p>
      <a href={`#${id}-information`}>Consultar información práctica</a>
      <p id={`${id}-information`}>{activity.details}</p>
      <p>Demostración: prueba la inscripción sin introducir ni enviar datos.</p>
      <RegistrationAction
        barrier={barrier}
        unavailable={unavailable}
        onRegister={onRegister}
      />
      <a href={`#${id}-help`}>Consultar ayuda para la inscripción</a>
      <p id={`${id}-help`}>
        En esta demo basta con activar «Inscribirme». El formulario se
        desarrollará más adelante.
      </p>
    </article>
  )
}
