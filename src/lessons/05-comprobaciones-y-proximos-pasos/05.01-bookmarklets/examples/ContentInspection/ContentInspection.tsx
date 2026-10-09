import { ActivityPage } from '../../../../shared/ActivityPage'

export function ContentInspection({ barrier = false }: { barrier?: boolean }) {
  return (
    <ActivityPage
      stage="content"
      inspectionBarrier={barrier ? 'headings-and-alt' : undefined}
      variantLabel={
        barrier
          ? 'Contraejemplo deliberado: niveles incoherentes y alt poco útil'
          : 'Solución: jerarquía y alternativa contextual'
      }
    />
  )
}
