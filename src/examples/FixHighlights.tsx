import { useLayoutEffect, useRef, useState } from 'react'
import type { ExampleFix } from './types'

interface Box {
  key: string
  id: string
  number: number
  top: number
  left: number
  width: number
  height: number
}

interface FixHighlightsProps {
  fixes: ExampleFix[]
  fixed: boolean
  located?: string
}

/** Marcas visuales sobre los elementos con `data-fix`; ocultas a las tecnologías de apoyo. */
export function FixHighlights({ fixes, fixed, located }: FixHighlightsProps) {
  const overlay = useRef<HTMLDivElement>(null)
  const [boxes, setBoxes] = useState<Box[]>([])

  useLayoutEffect(() => {
    let frame = 0
    const read = () =>
      fixes.flatMap((fix, index) =>
        Array.from(
          document.querySelectorAll<HTMLElement>(`[data-fix="${fix.id}"]`),
        ).map((element, n) => {
          const rect = element.getBoundingClientRect()
          return {
            key: `${fix.id}-${n}`,
            id: fix.id,
            number: index + 1,
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
          }
        }),
      )
    const measure = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setBoxes(read()))
    }
    setBoxes(read())
    window.addEventListener('scroll', measure, { capture: true, passive: true })
    window.addEventListener('resize', measure)
    const resize =
      typeof ResizeObserver === 'undefined'
        ? undefined
        : new ResizeObserver(measure)
    resize?.observe(document.body)
    const mutation = new MutationObserver((records) => {
      if (records.some((record) => !overlay.current?.contains(record.target)))
        measure()
    })
    mutation.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ['class', 'data-fix', 'hidden'],
    })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', measure, { capture: true })
      window.removeEventListener('resize', measure)
      resize?.disconnect()
      mutation.disconnect()
    }
  }, [fixes])

  return (
    <div ref={overlay} className="fix-highlights" aria-hidden="true">
      {boxes.map((box) => (
        <div
          key={box.key}
          data-highlight={box.id}
          className={`fix-highlights__box fix-highlights__box--${fixed ? 'fixed' : 'barrier'}${located === box.id ? ' fix-highlights__box--located' : ''}`}
          hidden={box.width === 0 && box.height === 0}
          style={{
            transform: `translate(${box.left}px, ${box.top}px)`,
            width: box.width,
            height: box.height,
          }}
        >
          <span className="fix-highlights__badge">
            {box.number} · {fixed ? 'Arreglo' : 'Barrera'}
          </span>
        </div>
      ))}
    </div>
  )
}
