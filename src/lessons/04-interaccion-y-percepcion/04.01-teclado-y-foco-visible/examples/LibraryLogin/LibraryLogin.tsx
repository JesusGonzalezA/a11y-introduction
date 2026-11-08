import { type FormEvent, useEffect, useId, useState } from 'react'
import type { ExamplePageProps } from '../../../../../examples/types'
import './library-login.css'

const books = [
  'La biblioteca de los sueños',
  'Cocina de aprovechamiento',
  'Historia del barrio en 100 fotos',
  'Guía de rutas en bicicleta',
  'Poemas para leer en voz alta',
  'Iniciación a la cerámica',
]

/** Acceso a la cuenta de una biblioteca: recorrido con teclado y foco visible. */
export function LibraryLogin({ fixed }: ExamplePageProps) {
  const id = useId()
  const [sent, setSent] = useState(false)
  const submit = (event: FormEvent) => {
    event.preventDefault()
    setSent(true)
  }

  // El margen de desplazamiento evita que la cabecera fija tape el foco.
  useEffect(() => {
    if (!fixed) return
    const root = document.documentElement
    root.classList.add('library-login-scroll-padding')
    return () => root.classList.remove('library-login-scroll-padding')
  }, [fixed])

  return (
    <div className={`library-login${fixed ? '' : ' library-login--no-focus'}`}>
      <header className="library-login__header" data-fix="obscured">
        <p className="library-login__brand">Biblioteca Municipal</p>
        <nav aria-label="Principal" className="library-login__nav">
          <a href={`#${id}-news`}>Catálogo</a>
          <a href={`#${id}-login`}>Mi cuenta</a>
          <a href={`#${id}-hours`}>Horarios</a>
        </nav>
      </header>
      <main className="library-login__main" data-fix="focus">
        <section
          id={`${id}-login`}
          aria-labelledby={`${id}-login-title`}
          className="library-login__card"
        >
          <h1 id={`${id}-login-title`}>Accede a tu cuenta</h1>
          <p>Renueva préstamos y reserva libros con tu carné.</p>
          <form className="library-login__form" onSubmit={submit}>
            <div className="library-login__field">
              <label htmlFor={`${id}-card`}>Número de carné</label>
              <input
                id={`${id}-card`}
                name="card"
                inputMode="numeric"
                autoComplete="username"
              />
            </div>
            <div className="library-login__field">
              <label htmlFor={`${id}-pin`}>PIN</label>
              <input
                id={`${id}-pin`}
                name="pin"
                type="password"
                autoComplete="current-password"
              />
            </div>
            <label className="library-login__check">
              <input type="checkbox" name="remember" /> Mantener la sesión
              iniciada
            </label>
            <button type="submit" className="library-login__submit">
              Entrar
            </button>
          </form>
          <p className="library-login__result" role="status">
            {sent ? 'Acceso de prueba: no se ha enviado ningún dato.' : ''}
          </p>
          <p className="library-login__links">
            <a href={`#${id}-hours`}>¿Has olvidado tu PIN?</a>
            <a href={`#${id}-hours`}>Hazte socio o socia</a>
          </p>
        </section>
        <section id={`${id}-news`} aria-labelledby={`${id}-news-title`}>
          <h2 id={`${id}-news-title`}>Novedades del catálogo</h2>
          <ul className="library-login__books">
            {books.map((book) => (
              <li key={book}>
                <a href={`#${id}-news`}>{book}</a>
              </li>
            ))}
          </ul>
        </section>
        <section id={`${id}-hours`} aria-labelledby={`${id}-hours-title`}>
          <h2 id={`${id}-hours-title`}>Horarios</h2>
          <p>De lunes a viernes, de 9:00 a 20:30. Sábados, de 10:00 a 14:00.</p>
          <p>
            Para recuperar el PIN o hacerte el carné, acude al mostrador con tu
            documento de identidad.
          </p>
        </section>
      </main>
      <footer className="library-login__footer">
        <p>Biblioteca Municipal · Plaza del Reloj 3 · Sitio de demostración</p>
      </footer>
    </div>
  )
}
