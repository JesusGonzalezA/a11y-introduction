/** Logotipo de weAAAre dibujado con texto: «we», «AAA», «re» en píldoras. */
export function BrandMark({
  inverse = false,
  className = '',
}: {
  inverse?: boolean
  className?: string
}) {
  return (
    <span
      role="img"
      aria-label="weAAAre"
      className={`brand-mark${inverse ? ' brand-mark--inverse' : ''} ${className}`.trim()}
    >
      <span aria-hidden="true">we</span>
      <span aria-hidden="true">AAA</span>
      <span aria-hidden="true">re</span>
    </span>
  )
}
