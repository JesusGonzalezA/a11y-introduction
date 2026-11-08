import hljs from 'highlight.js/lib/core'
import css from 'highlight.js/lib/languages/css'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'

hljs.registerLanguage('xml', xml)
hljs.registerLanguage('css', css)
hljs.registerLanguage('javascript', javascript)

export type CodeLanguage = 'html' | 'css' | 'js'

const languages: Record<CodeLanguage, string> = {
  html: 'xml',
  css: 'css',
  js: 'javascript',
}

/** Detecta el lenguaje de un fragmento: CSS si tiene reglas, si no HTML o JS. */
export function guessLanguage(code: string): CodeLanguage {
  const trimmed = code.trim()
  if (trimmed.startsWith('<')) return 'html'
  if (/^[^<]*\{[^}]*:[^}]*\}/s.test(trimmed) || trimmed.startsWith('@'))
    return 'css'
  return 'js'
}

/**
 * Devuelve el HTML resaltado. highlight.js escapa el código de entrada, así que
 * el resultado es seguro para `dangerouslySetInnerHTML`.
 */
export function highlight(code: string, language: CodeLanguage): string {
  return hljs.highlight(code, { language: languages[language] }).value
}
