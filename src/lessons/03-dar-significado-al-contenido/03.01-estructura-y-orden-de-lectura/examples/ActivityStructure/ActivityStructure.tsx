import {
  ActivityPage,
  type ActivityPageProps,
} from '../../../shared/ActivityPage'

export function ActivityStructure(
  props: Pick<ActivityPageProps, 'barrier' | 'onRegister'>,
) {
  return <ActivityPage stage="structure" {...props} />
}
