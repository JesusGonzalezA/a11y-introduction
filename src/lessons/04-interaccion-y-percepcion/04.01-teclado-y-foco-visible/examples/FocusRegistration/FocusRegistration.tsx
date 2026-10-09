import { ActivityPage } from '../../../../shared/ActivityPage'
import './focus-registration.css'

interface FocusRegistrationProps {
  hideFocus?: boolean
  onRegister?: () => void
}

export function FocusRegistration({
  hideFocus = false,
  onRegister,
}: FocusRegistrationProps) {
  return (
    <div
      className={`focus-registration${hideFocus ? ' focus-registration--hidden-focus' : ''}`}
    >
      <ActivityPage
        stage="content"
        onRegister={onRegister}
        variantLabel={
          hideFocus
            ? 'Contraejemplo deliberado: foco oculto'
            : 'Solución: recorrido con foco visible'
        }
      />
    </div>
  )
}
