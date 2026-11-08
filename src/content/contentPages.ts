import rootReadme from '../../README.md?raw'
import { courseLessons, courseModules } from '../lessons/lessonRegistry'
import { contentUrl, moduleContentPath, presenterContentPath } from '../routes'

export const repositoryUrl =
  'https://github.com/JesusGonzalezA/a11y-introduction'

const lessonFiles = import.meta.glob('../lessons/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const docFiles = import.meta.glob('../../docs/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

/** Contenido Markdown con su ruta en el repositorio y su ruta en el servidor. */
export interface ContentPage {
  /** Segmento tras `/contenido/`. */
  path: string
  /** Ruta del archivo desde la raíz del repositorio. */
  file: string
  markdown: string
  /** Lección o módulo al que pertenece, para la navegación. */
  lessonNumber?: string
  moduleNumber?: number
  kind: 'curso' | 'modulo' | 'leccion' | 'presentador' | 'documento'
}

const markdownByFile = new Map<string, string>([
  ['README.md', rootReadme],
  ...Object.entries(lessonFiles).map(
    ([key, markdown]) => [key.replace(/^\.\.\//, 'src/'), markdown] as const,
  ),
  ...Object.entries(docFiles).map(
    ([key, markdown]) => [key.replace(/^\.\.\/\.\.\//, ''), markdown] as const,
  ),
])

const aliases: Omit<ContentPage, 'markdown'>[] = [
  { path: '', file: 'README.md', kind: 'curso' },
  ...courseModules.map((module) => ({
    path: moduleContentPath(module.number),
    file: `src/lessons/${module.folder}/README.md`,
    moduleNumber: module.number,
    kind: 'modulo' as const,
  })),
  ...courseLessons.flatMap((lesson) => {
    const folder = `src/lessons/${lesson.module.folder}/${lesson.folder}`
    return [
      {
        path: lesson.number,
        file: `${folder}/README.md`,
        lessonNumber: lesson.number,
        moduleNumber: lesson.module.number,
        kind: 'leccion' as const,
      },
      {
        path: presenterContentPath(lesson.number),
        file: `${folder}/presenter.md`,
        lessonNumber: lesson.number,
        moduleNumber: lesson.module.number,
        kind: 'presentador' as const,
      },
    ]
  }),
]

const aliasedFiles = new Set(aliases.map(({ file }) => file))

export const contentPages: ContentPage[] = [
  ...aliases.flatMap((page) => {
    const markdown = markdownByFile.get(page.file)
    return markdown === undefined ? [] : [{ ...page, markdown }]
  }),
  ...[...markdownByFile]
    .filter(([file]) => !aliasedFiles.has(file))
    .map(([file, markdown]) => ({
      path: file,
      file,
      markdown,
      kind: 'documento' as const,
    })),
]

export function findContentPage(path: string) {
  return contentPages.find((page) => page.path === path)
}

/**
 * Convierte un enlace relativo de un Markdown en una ruta del servidor si el
 * destino es contenido publicado; si no, en su dirección en GitHub.
 */
export function resolveContentLink(fromFile: string, href: string) {
  if (/^[a-z][a-z\d+.-]*:/i.test(href) || href.startsWith('#')) return href
  if (href.startsWith('/')) return href
  const url = new URL(href, `https://repo.invalid/${fromFile}`)
  const file = decodeURIComponent(url.pathname.slice(1))
  const page = contentPages.find((item) => item.file === file)
  if (page) return `${contentUrl(page.path)}${url.hash}`
  return `${repositoryUrl}/blob/develop/${file}${url.hash}`
}
