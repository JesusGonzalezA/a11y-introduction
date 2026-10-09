import { useId } from 'react'
import {
  ActivityRegistration,
  type ActivityRegistrationProps,
} from '../../../shared/ActivityRegistration'

export function ButtonSemantics({
  unavailable = false,
  onRegister,
}: Pick<ActivityRegistrationProps, 'unavailable' | 'onRegister'>) {
  const id = useId()
  return (
    <div className="button-semantics">
      <section aria-labelledby={`${id}-native`}>
        <h2 id={`${id}-native`}>Solución: botón HTML</h2>
        <ActivityRegistration
          unavailable={unavailable}
          onRegister={onRegister}
        />
      </section>
      {!unavailable && (
        <section aria-labelledby={`${id}-generic`}>
          <h2 id={`${id}-generic`}>
            Contraejemplo deliberado: elemento genérico
          </h2>
          <ActivityRegistration barrier />
        </section>
      )}
    </div>
  )
}
