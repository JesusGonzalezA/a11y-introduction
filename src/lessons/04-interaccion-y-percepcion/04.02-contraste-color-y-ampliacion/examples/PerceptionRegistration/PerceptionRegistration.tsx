import { useId } from 'react'
import { ActivityPage } from '../../../../shared/ActivityPage'
import './perception-registration.css'

interface PerceptionRegistrationProps {
  barrier?: boolean
  onRegister?: () => void
}

export function PerceptionRegistration({
  barrier = false,
  onRegister,
}: PerceptionRegistrationProps) {
  const id = useId()
  return (
    <ActivityPage
      stage="content"
      onRegister={onRegister}
      variantLabel={
        barrier
          ? 'Contraejemplo deliberado: color, contraste y recorte'
          : 'Solución: estados con texto y contenido flexible'
      }
      notice={
        <section
          className={`perception-registration${barrier ? ' perception-registration--barrier' : ''}`}
        >
          <h2 id={`${id}-availability`} className="activity-page__heading">
            Disponibilidad por turno
          </h2>
          <div className="perception-registration__viewport">
            <div className="perception-registration__notice">
              <ul
                aria-labelledby={`${id}-availability`}
                className="perception-registration__slots"
              >
                <li>
                  <span
                    aria-hidden="true"
                    className="perception-registration__dot perception-registration__dot--available"
                  />
                  10:00{!barrier && ' · Plazas disponibles'}
                </li>
                <li>
                  <span
                    aria-hidden="true"
                    className="perception-registration__dot perception-registration__dot--full"
                  />
                  12:00{!barrier && ' · Completo'}
                </li>
              </ul>
              <p className="perception-registration__instruction">
                El formulario permite inscribirse en el turno de las 10:00.
                Conserva la confirmación para consultarla antes de acudir al
                punto de encuentro.
              </p>
            </div>
          </div>
        </section>
      }
    />
  )
}
