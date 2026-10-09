import { type ReactNode, useId } from 'react'
import { activity } from './activity'
import illustration from './activity.svg'
import { RegistrationAction } from './RegistrationAction'
import './activity-page.css'

export interface ActivityPageProps {
  stage: 'structure' | 'content'
  barrier?: boolean
  decorative?: boolean
  onRegister?: () => void
  notice?: ReactNode
  variantLabel?: string
  inspectionBarrier?: 'headings-and-alt' | 'label'
}

/** Página completa: montar una por documento, sin main contenedor de Storybook. */
export function ActivityPage({
  stage,
  barrier = false,
  decorative = false,
  onRegister,
  notice,
  variantLabel,
  inspectionBarrier,
}: ActivityPageProps) {
  const id = useId()
  const structureBarrier = stage === 'structure' && barrier
  const contentBarrier = stage === 'content' && barrier
  const headingsAndAltBarrier = inspectionBarrier === 'headings-and-alt'
  const labelBarrier = inspectionBarrier === 'label'
  const Main = structureBarrier ? 'div' : 'main'
  const Title = structureBarrier ? 'p' : 'h1'
  const Heading = structureBarrier ? 'p' : headingsAndAltBarrier ? 'h3' : 'h2'
  const Subheading = structureBarrier
    ? 'p'
    : headingsAndAltBarrier
      ? 'h2'
      : 'h3'
  const imageDescription =
    'Sendero entre parterres que conduce a un pabellón junto a un árbol.'
  const Steps = structureBarrier ? 'div' : 'ol'
  const Step = structureBarrier ? 'p' : 'li'
  const firstStep = (
    <Step key="register">
      {structureBarrier ? '1. ' : ''}Inscríbete antes del viernes.
    </Step>
  )
  const secondStep = (
    <Step key="attend">
      {structureBarrier ? '2. ' : ''}Acude al punto de encuentro el sábado.
    </Step>
  )

  return (
    <div className="activity-page">
      <header className="activity-page__header">
        <p>Actividades del jardín</p>
        <p className="activity-page__variant">
          {variantLabel ??
            (barrier
              ? `Contraejemplo deliberado: ${structureBarrier ? 'títulos visuales y orden alterado' : 'imagen, enlace y campo sin información suficiente'}`
              : `Solución: ${stage === 'structure' ? 'estructura y orden de lectura' : decorative ? 'imagen redundante con alt vacío' : 'información comprensible'}`)}
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
                  contentBarrier || headingsAndAltBarrier
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
        {notice}
        <section id={`${id}-registration`}>
          <Heading className="activity-page__heading">Inscripción</Heading>
          <Steps
            className={`activity-page__steps${structureBarrier ? ' activity-page__steps--reversed' : ''}`}
          >
            {structureBarrier
              ? [secondStep, firstStep]
              : [firstStep, secondStep]}
          </Steps>
          <p>Demostración: la inscripción es de prueba y no envía datos.</p>
          {stage === 'content' ? (
            <form onSubmit={(event) => event.preventDefault()}>
              <div className="activity-page__field">
                {!contentBarrier && !labelBarrier && (
                  <label htmlFor={`${id}-name`}>Nombre (opcional)</label>
                )}
                <input
                  id={`${id}-name`}
                  name="given-name"
                  type="text"
                  autoComplete="given-name"
                  placeholder={
                    labelBarrier
                      ? undefined
                      : contentBarrier
                        ? 'Nombre'
                        : 'Ej.: Ana'
                  }
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
