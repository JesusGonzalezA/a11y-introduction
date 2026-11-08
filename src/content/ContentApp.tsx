import { Marked } from 'marked'
import { useEffect, useMemo } from 'react'
import { course } from '../course'
import { exampleRegistry } from '../examples/exampleRegistry'
import { exampleUrl } from '../examples/exampleUrl'
import {
  contentBase,
  contentUrl,
  examplesBase,
  lessonAnchor,
  moduleAnchor,
  moduleContentPath,
  portalUrl,
  presenterContentPath,
  slidesUrl,
} from '../routes'
import {
  type ContentPage,
  findContentPage,
  repositoryUrl,
  resolveContentLink,
} from './contentPages'
import './content.css'

export function contentPathFromPathname(pathname: string) {
  return decodeURIComponent(pathname)
    .slice(contentBase.length - 1)
    .replace(/^\/+|\/+$/g, '')
}

function renderMarkdown(page: ContentPage) {
  const marked = new Marked({
    gfm: true,
    walkTokens(token) {
      if (token.type === 'link')
        token.href = resolveContentLink(page.file, token.href)
    },
  })
  // Tablas y bloques de código se desplazan en horizontal al ampliar: deben
  // poder recibir el foco para desplazarlos con el teclado.
  return marked
    .parse(page.markdown, { async: false })
    .replaceAll('<pre>', '<pre tabindex="0">')
    .replaceAll('<table>', '<table tabindex="0">')
}

function firstHeading(markdown: string) {
  return markdown.match(/^#\s+(.+)$/m)?.[1]?.trim()
}

/** Enlaces a las otras superficies de la misma lección o módulo. */
function RelatedLinks({ page }: { page: ContentPage }) {
  const links: { href: string; label: string; current?: boolean }[] = []
  if (page.lessonNumber) {
    const number = page.lessonNumber
    links.push(
      { href: slidesUrl(lessonAnchor(number)), label: 'Diapositivas' },
      ...exampleRegistry
        .filter((example) => example.lesson === number)
        .map((example) => ({
          href: exampleUrl(example.slug),
          label: `Ejemplo: ${example.name}`,
        })),
      {
        href: contentUrl(number),
        label: 'Contenido',
        current: page.kind === 'leccion',
      },
      {
        href: contentUrl(presenterContentPath(number)),
        label: 'Notas del presentador',
        current: page.kind === 'presentador',
      },
    )
  } else if (page.moduleNumber) {
    links.push(
      {
        href: slidesUrl(moduleAnchor(page.moduleNumber)),
        label: 'Diapositivas del módulo',
      },
      {
        href: `${examplesBase}#modulo-${page.moduleNumber}`,
        label: 'Ejemplos del módulo',
      },
    )
  }
  if (page.moduleNumber && page.kind !== 'modulo')
    links.push({
      href: contentUrl(moduleContentPath(page.moduleNumber)),
      label: `Módulo ${page.moduleNumber}`,
    })
  if (links.length === 0) return null
  return (
    <nav aria-label="Esta lección" className="content-page__related">
      <ul>
        {links.map(({ href, label, current }) => (
          <li key={href}>
            <a href={href} aria-current={current ? 'page' : undefined}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function ContentApp({ pathname }: { pathname: string }) {
  const path = contentPathFromPathname(pathname)
  const page = findContentPage(path)
  const html = useMemo(() => (page ? renderMarkdown(page) : ''), [page])
  const heading = page ? firstHeading(page.markdown) : undefined

  useEffect(() => {
    document.title = `${heading ?? 'Contenido no encontrado'} · ${course.title}`
  }, [heading])

  return (
    <div className="content-page">
      <header className="content-page__header">
        <a className="content-page__home" href={portalUrl}>
          {course.title}
        </a>
        {page && (
          <a
            className="content-page__source"
            href={`${repositoryUrl}/blob/develop/${page.file}`}
          >
            Ver en GitHub
          </a>
        )}
      </header>
      <main className="content-page__main">
        {page ? (
          <>
            <RelatedLinks page={page} />
            <article
              className="content-page__article"
              // El Markdown es contenido propio del repositorio.
              // biome-ignore lint/security/noDangerouslySetInnerHtml: contenido del curso
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </>
        ) : (
          <>
            <h1>Contenido no encontrado</h1>
            <p>
              No existe contenido en «{path}».{' '}
              <a href={portalUrl}>Vuelve al índice del curso</a>.
            </p>
          </>
        )}
      </main>
    </div>
  )
}
