import { useEffect, useState } from 'react'
import { ExampleDevtools } from './ExampleDevtools'
import { readFixedParam, withFixedParam } from './exampleUrl'
import type { ExampleDefinition } from './types'

/** Monta una página de ejemplo y su herramienta; el estado vive en `?arreglo=1`. */
export function ExampleShell({ example }: { example: ExampleDefinition }) {
  const [fixed, setFixed] = useState(() =>
    readFixedParam(window.location.search),
  )
  const { Page } = example

  useEffect(() => {
    document.title = example.title
  }, [example.title])

  useEffect(() => {
    const next = withFixedParam(window.location.href, fixed)
    if (
      next !==
      `${window.location.pathname}${window.location.search}${window.location.hash}`
    )
      window.history.replaceState(window.history.state, '', next)
  }, [fixed])

  return (
    <>
      {/* La clave reinicia el estado interno de la página al alternar. */}
      <Page key={String(fixed)} fixed={fixed} />
      <ExampleDevtools
        example={example}
        fixed={fixed}
        onFixedChange={setFixed}
      />
    </>
  )
}
