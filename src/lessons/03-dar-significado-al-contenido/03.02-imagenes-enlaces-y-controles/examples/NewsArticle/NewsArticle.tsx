import { type FormEvent, useId, useState } from 'react'
import type { ExamplePageProps } from '../../../../../examples/types'
import chart from './chart.svg'
import envelope from './envelope.svg'
import './news-article.css'

export const chartAlt =
  'Gráfico de barras: 1.200 viajes diarios en marzo de 2025 y 2.450 en marzo de 2026.'

/** Noticia local: imágenes, enlace, botón y campo con información comprensible. */
export function NewsArticle({ fixed }: ExamplePageProps) {
  const id = useId()
  const [subscribed, setSubscribed] = useState(false)
  const subscribe = (event: FormEvent) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <div className="news-article">
      <header className="news-article__header">
        <p className="news-article__brand">Diario de Barrio</p>
        <nav aria-label="Secciones" className="news-article__nav">
          <a href={`#${id}-article`}>Movilidad</a>
          <a href={`#${id}-article`}>Cultura</a>
          <a href={`#${id}-newsletter`}>Boletín</a>
        </nav>
      </header>
      <main className="news-article__main">
        <article id={`${id}-article`}>
          <p className="news-article__kicker">Movilidad</p>
          <h1>El carril bici del centro duplica sus viajes en un año</h1>
          <p className="news-article__byline">
            Redacción · 8 de noviembre de 2026
          </p>
          <p>
            El ayuntamiento ha publicado los primeros datos de uso del carril
            bici que conecta la estación con la plaza Mayor. Los contadores
            registran más del doble de viajes diarios que hace un año.
          </p>
          <figure className="news-article__figure">
            <img
              src={chart}
              width="640"
              height="320"
              alt={fixed ? chartAlt : 'grafico_final_v2.png'}
              data-fix="informative-alt"
            />
            <figcaption>
              Viajes diarios medidos en marzo. Fuente: ayuntamiento.
            </figcaption>
          </figure>
          <p>
            El aumento se concentra en las horas punta de la mañana. La
            concejalía estudia ampliar el aparcamiento de bicicletas junto a la
            estación.{' '}
            <a href={`#${id}-report`} data-fix="link">
              {fixed ? 'Consultar el informe de movilidad 2026' : 'Leer más'}
            </a>
          </p>
          <p id={`${id}-report`} className="news-article__note">
            El informe completo está disponible en la sede electrónica
            municipal.
          </p>
        </article>
        <aside
          id={`${id}-newsletter`}
          aria-labelledby={`${id}-newsletter-title`}
          className="news-article__newsletter"
        >
          <img
            className="news-article__icon"
            src={envelope}
            width="48"
            height="48"
            alt={fixed ? '' : 'icono-sobre.svg'}
            data-fix="decorative-alt"
          />
          <h2 id={`${id}-newsletter-title`}>Recibe las noticias del barrio</h2>
          <p>Un correo cada viernes con lo más leído de la semana.</p>
          <form className="news-article__form" onSubmit={subscribe}>
            <div className="news-article__field" data-fix="label">
              {fixed && (
                <label htmlFor={`${id}-email`}>Correo electrónico</label>
              )}
              <input
                id={`${id}-email`}
                type="email"
                name="email"
                autoComplete="email"
                placeholder={fixed ? 'nombre@ejemplo.com' : 'Tu correo'}
              />
            </div>
            <button
              type="submit"
              className="news-article__submit"
              data-fix="button"
            >
              {fixed ? 'Suscribirme' : 'Aceptar'}
            </button>
          </form>
          <p className="news-article__result" role="status">
            {subscribed
              ? 'Suscripción de prueba: no se ha enviado ningún dato.'
              : ''}
          </p>
        </aside>
      </main>
      <footer className="news-article__footer">
        <p>Diario de Barrio · Periódico de demostración</p>
      </footer>
    </div>
  )
}
