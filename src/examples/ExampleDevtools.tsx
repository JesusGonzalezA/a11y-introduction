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

const versions = [
  { fixed: false, label: 'Con barrera', mark: '✕' },
  { fixed: true, label: 'Con arreglo', mark: '✓' },
]

const reducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

/**
 * Herramienta flotante del curso: elige la versión de la página (con barrera o
 * con arreglo) y explica cada cambio. Va después de la página para no alterar
 * su orden de lectura ni de foco.
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

  const close = () => {
    setOpen(false)
    toggleRef.current?.focus()
  }

  // Escape cierra la explicación y devuelve el foco al botón que la abrió.
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

  const count = example.fixes.length

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
        <div className="example-devtools__panel-header">
          <p className="example-devtools__eyebrow">
            Lección {example.lesson} · {example.lessonTitle}
          </p>
          <button
            type="button"
            className="example-devtools__button"
            onClick={close}
          >
            Cerrar
          </button>
        </div>
        <p className="example-devtools__state">
          {fixed
            ? 'Estás viendo la página con el arreglo.'
            : 'Estás viendo la página con la barrera.'}
        </p>
        <p className="example-devtools__label">Pruébalo</p>
        <ol className="example-devtools__steps">
          {example.tryIt.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="example-devtools__label">
          {count === 1
            ? 'Qué cambia: 1 arreglo'
            : `Qué cambia: ${count} arreglos`}
        </p>
        <label className="example-devtools__option">
          <input
            type="checkbox"
            checked={highlight}
            onChange={(event) => setHighlight(event.target.checked)}
          />
          Marcar los cambios en la página
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
                <dt>Problema</dt>
                <dd>{fix.problem}</dd>
                <dt>Solución</dt>
                <dd>{fix.solution}</dd>
              </dl>
              {versions.map((version) => {
                const current = version.fixed === fixed
                return (
                  <div key={version.label}>
                    <p
                      className={`example-devtools__code-label${current ? ' example-devtools__code-label--current' : ''}`}
                    >
                      <span aria-hidden="true">{version.mark} </span>
                      {version.label}
                      {current ? ' · lo que ves ahora' : ''}
                    </p>
                    <pre className="example-devtools__code">
                      <code>{version.fixed ? fix.after : fix.before}</code>
                    </pre>
                  </div>
                )
              })}
              <button
                type="button"
                className="example-devtools__button"
                aria-label={`Mostrar en la página: ${fix.title}`}
                onClick={() => locate(fix.id)}
              >
                Mostrar en la página
              </button>
            </li>
          ))}
        </ol>
        <a className="example-devtools__link" href={examplesBase}>
          Todos los ejemplos
        </a>
      </div>
      <div className="example-devtools__bar">
        <div
          role="radiogroup"
          aria-labelledby={`${id}-version`}
          className="example-devtools__versions"
        >
          <span id={`${id}-version`} className="example-devtools__bar-label">
            Ver la página
          </span>
          <span className="example-devtools__segments">
            {versions.map((version) => (
              <label key={version.label} className="example-devtools__choice">
                <input
                  type="radio"
                  className="example-devtools__radio"
                  name={`${id}-version`}
                  checked={version.fixed === fixed}
                  onChange={() => onFixedChange(version.fixed)}
                />
                <span
                  className={`example-devtools__choice-text example-devtools__choice-text--${version.fixed ? 'fixed' : 'barrier'}`}
                >
                  <span aria-hidden="true">{version.mark}</span>
                  {version.label}
                </span>
              </label>
            ))}
          </span>
        </div>
        <button
          ref={toggleRef}
          type="button"
          className="example-devtools__toggle"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={() => setOpen(!open)}
        >
          Explicación
        </button>
      </div>
    </div>
  )
}
