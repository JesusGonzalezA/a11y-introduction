import { useId } from 'react'
import type { ExamplePageProps } from '../../../../../examples/types'
import './recipe-page.css'

const steps = [
  'Pica la cebolla, el pimiento y la zanahoria.',
  'Sofríe las verduras 10 minutos a fuego medio.',
  'Añade las lentejas, el pimentón y el agua.',
  'Cuece 35 minutos y deja reposar antes de servir.',
]

/** Receta de un blog: estructura, regiones y orden del documento. */
export function RecipePage({ fixed }: ExamplePageProps) {
  const id = useId()
  // Barrera deliberada: el aspecto se mantiene, pero el HTML pierde significado.
  const Header = fixed ? 'header' : 'div'
  const Nav = fixed ? 'nav' : 'div'
  const Main = fixed ? 'main' : 'div'
  const Footer = fixed ? 'footer' : 'div'
  const H1 = fixed ? 'h1' : 'div'
  const H2 = fixed ? 'h2' : 'div'
  const H3 = fixed ? 'h3' : 'div'

  return (
    <div className="recipe-page">
      <Header className="recipe-page__header" data-fix="landmarks">
        <p className="recipe-page__brand">La Cuchara Lenta</p>
        <Nav
          className="recipe-page__nav"
          {...(fixed ? { 'aria-label': 'Principal' } : {})}
        >
          <a href={`#${id}-recipe`}>Recetas</a>
          <a href={`#${id}-ingredients`}>Ingredientes</a>
          <a href={`#${id}-steps`}>Preparación</a>
        </Nav>
      </Header>
      <Main
        id={`${id}-recipe`}
        className="recipe-page__main"
        data-fix="landmarks"
      >
        <p className="recipe-page__meta">Cuchara · 4 raciones · 50 minutos</p>
        <H1 className="recipe-page__title" data-fix="headings">
          Lentejas estofadas con verduras
        </H1>
        <p>
          Un guiso de diario que mejora de un día para otro. Sin carne y con
          verduras de temporada.
        </p>
        <H2
          id={`${id}-ingredients`}
          className="recipe-page__heading"
          data-fix="headings"
        >
          Ingredientes
        </H2>
        <H3 className="recipe-page__subheading" data-fix="headings">
          Para el sofrito
        </H3>
        <ul>
          <li>1 cebolla</li>
          <li>1 pimiento verde</li>
          <li>1 zanahoria</li>
        </ul>
        <H3 className="recipe-page__subheading" data-fix="headings">
          Para el guiso
        </H3>
        <ul>
          <li>300 g de lentejas pardinas</li>
          <li>1 cucharadita de pimentón dulce</li>
          <li>1,2 litros de agua</li>
        </ul>
        <H2
          id={`${id}-steps`}
          className="recipe-page__heading"
          data-fix="headings"
        >
          Preparación
        </H2>
        {fixed ? (
          <ol className="recipe-page__steps" data-fix="order">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        ) : (
          // Barrera deliberada: el DOM está invertido y el CSS lo vuelve a ordenar.
          <div
            className="recipe-page__steps recipe-page__steps--reversed"
            data-fix="order"
          >
            {steps
              .map((step, index) => (
                <p key={step}>
                  {index + 1}. {step}
                </p>
              ))
              .reverse()}
          </div>
        )}
        <H2 className="recipe-page__heading" data-fix="headings">
          Consejo
        </H2>
        <p>Si quedan espesas, añade un poco de agua caliente al recalentar.</p>
      </Main>
      <Footer className="recipe-page__footer" data-fix="landmarks">
        <p>La Cuchara Lenta · Recetas de casa desde 2014</p>
      </Footer>
    </div>
  )
}
