import { useEffect, useId, useRef, useState } from 'react'
import { examplesBase } from './exampleUrl'
import { FixHighlights } from './FixHighlights'
import type { ExampleDefinition } from './types'
import './example-devtools.css'

interface ExampleDevtoolsProps {
  example: ExampleDefinition
  fixed: boolean
  onFixedChange: (fixed: boolean) => void
}

const reducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

/**
 * Herramienta flotante del curso: alterna el arreglo y explica cada cambio.
 * Va después de la página para no alterar su orden de lectura ni de foco.
 */
export function ExampleDevtools({
  example,
  fixed,
  onFixedChange,
}: ExampleDevtoolsProps) {
  const id = useId()
  const [open, setOpen] = useState(false)
  const [highlight, setHighlight] = useState(true)
  const [located, setLocated] = useState<string>()
  const toggleRef = useRef<HTMLButtonElement>(null)

  const locate = (fixId: string) => {
    const target = document.querySelector(`[data-fix="${fixId}"]`)
    target?.scrollIntoView?.({
      block: 'center',
      behavior: reducedMotion() ? 'auto' : 'smooth',
    })
    setHighlight(true)
    setLocated(fixId)
  }

  // Escape cierra el panel y devuelve el foco al botón que lo abrió.
  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      toggleRef.current?.focus()
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [open])

  return (
    <div className="example-devtools" data-example-devtools="">
      {open && highlight && (
        <FixHighlights fixes={example.fixes} fixed={fixed} located={located} />
      )}
      <div
        id={`${id}-panel`}
        className="example-devtools__panel"
        hidden={!open}
      >
        <p className="example-devtools__eyebrow">
          Lección {example.lesson} · {example.lessonTitle}
        </p>
        <p className="example-devtools__state">
          {fixed
            ? 'Estás viendo la página con el arreglo aplicado.'
            : 'Estás viendo la página con la barrera.'}
        </p>
        <p>{example.tryIt}</p>
        <label className="example-devtools__option">
          <input
            type="checkbox"
            checked={highlight}
            onChange={(event) => setHighlight(event.target.checked)}
          />
          Resaltar los cambios en la página
        </label>
        <ol className="example-devtools__fixes">
          {example.fixes.map((fix, index) => (
            <li key={fix.id} className="example-devtools__fix">
              <p className="example-devtools__fix-title">
                <span className="example-devtools__badge" aria-hidden="true">
                  {index + 1}
                </span>
                {fix.title}
              </p>
              <dl className="example-devtools__details">
                <dt>Dónde</dt>
                <dd>{fix.where}</dd>
                <dt>Por qué</dt>
                <dd>{fix.why}</dd>
              </dl>
              <p
                className={`example-devtools__code-label${fixed ? '' : ' example-devtools__code-label--current'}`}
              >
                Sin arreglo{fixed ? '' : ' · en pantalla'}
              </p>
              <pre className="example-devtools__code">
                <code>{fix.before}</code>
              </pre>
              <p
                className={`example-devtools__code-label${fixed ? ' example-devtools__code-label--current' : ''}`}
              >
                Con arreglo{fixed ? ' · en pantalla' : ''}
              </p>
              <pre className="example-devtools__code">
                <code>{fix.after}</code>
              </pre>
              <button
                type="button"
                className="example-devtools__locate"
                onClick={() => locate(fix.id)}
              >
                Localizar «{fix.title}»
              </button>
            </li>
          ))}
        </ol>
        <a className="example-devtools__link" href={examplesBase}>
          Todos los ejemplos
        </a>
      </div>
      <div className="example-devtools__bar">
        <button
          type="button"
          className="example-devtools__switch"
          aria-pressed={fixed}
          onClick={() => onFixedChange(!fixed)}
        >
          <span className="example-devtools__track" aria-hidden="true">
            <span className="example-devtools__thumb" />
          </span>
          Aplicar arreglo
        </button>
        <span className="example-devtools__switch-state" aria-hidden="true">
          {fixed ? 'Activado' : 'Desactivado'}
        </span>
        <button
          ref={toggleRef}
          type="button"
          className="example-devtools__toggle"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={() => setOpen(!open)}
        >
          Ver cambios ({example.fixes.length})
        </button>
      </div>
    </div>
  )
}
