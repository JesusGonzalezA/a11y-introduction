import {
  ActivityPage,
  type ActivityPageProps,
} from '../../../../shared/ActivityPage'

export function ActivityContent(
  props: Pick<ActivityPageProps, 'barrier' | 'onRegister' | 'decorative'>,
) {
  return <ActivityPage stage="content" {...props} />
}
