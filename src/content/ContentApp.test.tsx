import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { courseLessons, courseModules } from '../lessons/lessonRegistry'
import { ContentApp, contentPathFromPathname } from './ContentApp'
import {
  findContentPage,
  repositoryUrl,
  resolveContentLink,
} from './contentPages'

describe('Contenido del curso', () => {
  it('publica README y notas del presentador de cada lección y módulo', () => {
    expect(findContentPage('')?.file).toBe('README.md')
    for (const module of courseModules)
      expect(findContentPage(`modulo-${module.number}`)).toBeDefined()
    for (const lesson of courseLessons) {
      expect(findContentPage(lesson.number)?.markdown).toMatch(
        new RegExp(`^# ${lesson.number.replace('.', '\\.')} ${lesson.title}`),
      )
      expect(findContentPage(`${lesson.number}/presentador`)?.markdown).toMatch(
        new RegExp(`^# Notas · ${lesson.number.replace('.', '\\.')} `),
      )
    }
  })

  it('convierte enlaces relativos en rutas del servidor o de GitHub', () => {
    const from =
      'src/lessons/02-entender-la-accesibilidad/02.01-personas-interaccion-y-barreras/README.md'
    expect(resolveContentLink(from, '../README.md')).toBe('/contenido/modulo-2')
    expect(resolveContentLink(from, './presenter.md')).toBe(
      '/contenido/2.1/presentador',
    )
    expect(resolveContentLink(from, './slides.tsx')).toBe(
      `${repositoryUrl}/blob/develop/src/lessons/02-entender-la-accesibilidad/02.01-personas-interaccion-y-barreras/slides.tsx`,
    )
    expect(resolveContentLink(from, 'https://www.w3.org/')).toBe(
      'https://www.w3.org/',
    )
    expect(resolveContentLink(from, '#fuentes')).toBe('#fuentes')
  })

  it('muestra una lección con enlaces a sus otros materiales', async () => {
    expect(contentPathFromPathname('/contenido/2.1/')).toBe('2.1')
    const { container } = render(<ContentApp pathname="/contenido/2.1" />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: '2.1 Personas, formas de interacción y barreras',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Diapositivas' })).toHaveAttribute(
      'href',
      '/diapositivas/#/leccion-2-1',
    )
    expect(screen.getByRole('link', { name: 'Contenido' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(
      screen.getByRole('link', { name: /Ficha de producto/ }),
    ).toHaveAttribute('href', '/ejemplos/tienda-online')
    expect(await axe(container)).toHaveNoViolations()
  })

  it('avisa cuando el contenido no existe', () => {
    render(<ContentApp pathname="/contenido/no-existe" />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Contenido no encontrado',
      }),
    ).toBeInTheDocument()
  })
})
