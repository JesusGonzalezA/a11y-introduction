import { ActivityPage } from '../../../../shared/ActivityPage'

export function LabelInspection({ barrier = false }: { barrier?: boolean }) {
  return (
    <ActivityPage
      stage="content"
      inspectionBarrier={barrier ? 'label' : undefined}
      variantLabel={
        barrier
          ? 'Contraejemplo deliberado: campo sin etiqueta ni nombre alternativo'
          : 'Solución: etiqueta visible asociada al campo'
      }
    />
  )
}
