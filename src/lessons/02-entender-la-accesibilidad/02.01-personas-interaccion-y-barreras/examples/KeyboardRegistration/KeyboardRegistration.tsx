import {
  ActivityRegistration,
  type ActivityRegistrationProps,
} from '../../../shared/ActivityRegistration'

export function KeyboardRegistration(
  props: Pick<ActivityRegistrationProps, 'barrier' | 'onRegister'>,
) {
  return (
    <>
      <h2>Conocer una actividad e inscribirse</h2>
      <ActivityRegistration {...props} />
    </>
  )
}
