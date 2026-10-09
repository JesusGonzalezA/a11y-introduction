import { useId } from 'react'
import { activity } from '../../shared/activity'
import { RegistrationAction } from '../../shared/RegistrationAction'
import illustration from './activity.svg'
import './activity-page.css'

export interface ActivityPageProps {
  stage: 'structure' | 'content'
  barrier?: boolean
  decorative?: boolean
  onRegister?: () => void
}

/** Página completa: montar una por documento, sin main contenedor de Storybook. */
export function ActivityPage({
  stage,
  barrier = false,
  decorative = false,
  onRegister,
}: ActivityPageProps) {
  const id = useId()
  const structureBarrier = stage === 'structure' && barrier
  const contentBarrier = stage === 'content' && barrier
  const Main = structureBarrier ? 'div' : 'main'
  const Title = structureBarrier ? 'p' : 'h1'
  const Heading = structureBarrier ? 'p' : 'h2'
  const Subheading = structureBarrier ? 'p' : 'h3'
  const imageDescription =
    'Sendero entre parterres que conduce a un pabellón junto a un árbol.'
  const firstStep = <p key="register">1. Inscríbete antes del viernes.</p>
  const secondStep = (
    <p key="attend">2. Acude al punto de encuentro el sábado.</p>
  )

  return (
    <div className="activity-page">
      <header className="activity-page__header">
        <p>Actividades del jardín</p>
        <p className="activity-page__variant">
          {barrier
            ? `Contraejemplo deliberado: ${structureBarrier ? 'títulos visuales y orden alterado' : 'imagen, enlace y campo sin información suficiente'}`
            : `Solución: ${stage === 'structure' ? 'estructura y orden de lectura' : decorative ? 'imagen redundante con alt vacío' : 'información comprensible'}`}
        </p>
      </header>
      <nav aria-label="Actividad" className="activity-page__navigation">
        <a href={`#${id}-about`}>Sobre la actividad</a>
        <a href={`#${id}-registration`}>Inscripción</a>
      </nav>
      <Main className="activity-page__main">
        <Title className="activity-page__title">{activity.title}</Title>
        <section id={`${id}-about`}>
          <Heading className="activity-page__heading">
            Sobre la actividad
          </Heading>
          <p>{activity.description}</p>
          {stage === 'content' && (
            <>
              {decorative && <p>{imageDescription}</p>}
              <img
                className="activity-page__image"
                src={illustration}
                width="640"
                height="220"
                alt={
                  contentBarrier
                    ? 'actividad.svg'
                    : decorative
                      ? ''
                      : imageDescription
                }
              />
            </>
          )}
          <a href={`#${id}-information`}>
            {contentBarrier ? 'Ver más' : 'Consultar información práctica'}
          </a>
        </section>
        <section id={`${id}-information`}>
          <Heading className="activity-page__heading">
            Información práctica
          </Heading>
          <p>{activity.details}</p>
          <Subheading className="activity-page__subheading">
            Punto de encuentro
          </Subheading>
          <p>Nos reunimos en el pabellón del jardín.</p>
        </section>
        <section id={`${id}-registration`}>
          <Heading className="activity-page__heading">Inscripción</Heading>
          <div
            className={`activity-page__steps${structureBarrier ? ' activity-page__steps--reversed' : ''}`}
          >
            {structureBarrier
              ? [secondStep, firstStep]
              : [firstStep, secondStep]}
          </div>
          <p>Demostración: la inscripción es de prueba y no envía datos.</p>
          {stage === 'content' ? (
            <form onSubmit={(event) => event.preventDefault()}>
              <div className="activity-page__field">
                {!contentBarrier && (
                  <label htmlFor={`${id}-name`}>Nombre (opcional)</label>
                )}
                <input
                  id={`${id}-name`}
                  name="given-name"
                  type="text"
                  autoComplete="given-name"
                  placeholder={contentBarrier ? 'Nombre' : 'Ej.: Ana'}
                />
              </div>
              <RegistrationAction
                type="submit"
                actionLabel={contentBarrier ? 'Aceptar' : 'Inscribirme'}
                onRegister={onRegister}
              />
            </form>
          ) : (
            <RegistrationAction onRegister={onRegister} />
          )}
        </section>
      </Main>
      <footer className="activity-page__footer">
        <p>Jardín botánico · Programa de visitas guiadas</p>
      </footer>
    </div>
  )
}
