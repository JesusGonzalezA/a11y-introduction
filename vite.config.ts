import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

const lessonsDir = 'src/lessons'

/** Rutas del curso que deben abrirse directamente en un hosting estático. */
async function staticRoutes() {
  const routes = ['diapositivas', 'ejemplos', 'contenido']
  const files = await readdir(lessonsDir, { recursive: true })
  for (const file of files) {
    if (file.endsWith('.example.ts')) {
      const source = await readFile(join(lessonsDir, file), 'utf8')
      const slug = source.match(/slug: '([^']+)'/)?.[1]
      if (slug) routes.push(`ejemplos/${slug}`)
    }
    const lesson = file.match(/^(\d+)-[^/]+\/(\d+)\.(\d+)-[^/]+\/README\.md$/)
    if (lesson) {
      const number = `${Number(lesson[2])}.${Number(lesson[3])}`
      routes.push(`contenido/${number}`, `contenido/${number}/presentador`)
    }
    const module = file.match(/^(\d+)-[^/]+\/README\.md$/)
    if (module) routes.push(`contenido/modulo-${Number(module[1])}`)
  }
  return routes
}

/**
 * La aplicación elige la superficie por la ruta. Copia `index.html` en cada
 * ruta conocida y en `404.html` para que las recargas y los enlaces directos
 * funcionen en GitHub Pages.
 */
function staticRouteCopies(): Plugin {
  let outDir = 'dist'
  return {
    name: 'static-route-copies',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
    },
    async closeBundle() {
      const html = await readFile(join(outDir, 'index.html'), 'utf8')
      const targets = [
        '404.html',
        ...(await staticRoutes()).map((route) => join(route, 'index.html')),
      ]
      for (const target of targets) {
        const path = join(outDir, target)
        await mkdir(dirname(path), { recursive: true })
        await writeFile(path, html)
      }
    },
  }
}

export default defineConfig({
  // En GitHub Pages el sitio vive en /a11y-introduction/.
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), staticRouteCopies()],
})
