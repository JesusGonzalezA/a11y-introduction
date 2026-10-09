# Auditoría del módulo 5

Pasada separada de autoría, **2026-10-09**. Delta propio sobre
`1d917718123296fe9726892e0938f63e7c08375a` (#10, hereda #9/#8/#7).
La investigación quedó en `5dcfb25` antes del commit de implementación; fuentes
consultadas antes de autoría y releídas para esta pasada. No se duplica el contrato
heredado de [módulo 3](../03-dar-significado-al-contenido/audit.md) y
[módulo 4](../04-interaccion-y-percepcion/audit.md).

Fuentes recontrastadas: [WAI headings](https://www.w3.org/WAI/tutorials/page-structure/headings/),
[WAI alt](https://www.w3.org/WAI/tutorials/images/decision-tree/),
[WAI labels](https://www.w3.org/WAI/tutorials/forms/labels/),
[HTML label](https://html.spec.whatwg.org/multipage/forms.html#the-label-element),
[HTML-AAM](https://www.w3.org/TR/html-aam/),
[WCAG 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html),
[WCAG 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html),
[APG Read Me First](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/).
Originales Magenta H (Heading), I (Informative image), T (Text input) fijados y
enlazados en la [investigación](../../../docs/research/05-comprobaciones-y-proximos-pasos.md#magentaa11y-y-clasificación-de-evidencia).
Se releyeron sus Gherkin y condicionales por separado de la implementación.
G1/G2/G3 = teclado, lector de escritorio y lector móvil; sus exigencias de oír o
ver no se declaran satisfechas mediante consultas de DOM.

## Auditoría de tests

C = ContentInspection.test.tsx; L = LabelInspection.test.tsx; S = slides.test.tsx.
No hay widget compuesto APG nuevo. Se preservan HTML nativo y la región status
heredada; `aria-patterns` no se usa como garantía de compatibilidad real.

| Criterio / fuente | Clase | Evidencia concreta | Brecha o justificación |
| --- | --- | --- | --- |
| H Name/Role/Group; HTML-AAM h1–h6 | Automatizado | C «identifica niveles…» compara H1/H3/H3/H2/H3 y consulta Punto de encuentro nivel 2; «recupera…» compara H1/H2/H2/H3/H2 | Nombres restantes y estructura base conservan tests de 3.1; comprensión/anuncios manuales |
| H G1/G2 Tab; HTML navegación | Automatizado parcial | L «mantiene etiqueta…» recorre tres enlaces, campo y botón, omitiendo headings; contrato heredado de 3.1/3.2 | No acredita navegación por flechas de AT ni headings en vista |
| H G1 entrada en vista; G2/G3 nombre/rol/nivel/grupo reales | Manual | Matriz NVDA/VoiceOver/TalkBack del módulo | No ejecutado; no confundir anotación con lector |
| I Name/Role; HTML-AAM img | Automatizado | C consulta img con alt de archivo en barrera y texto descriptivo en solución | Comprobar contenido exacto no acredita su utilidad para todas las personas |
| I G1 scroll; G2/G3 lectura, claridad, imagen/gráfico | Manual | Imagen/contexto revisados editorialmente; matriz AT preparada | Desplazamiento con lector y anuncios pendientes |
| T Name/Role; WAI label/HTML | Automatizado | L «aísla…» no tiene nombre/placeholder/label; «mantiene…» textbox con Nombre (opcional), for/id, type=text, autocomplete=given-name, no required | `name=given-name` no etiqueta el control; lectura real pendiente |
| T Name persistente; edición/foco DOM | Automatizado | L escribe/borra, conserva label visible y nombre; clic en label enfoca | No prueba teclado móvil ni percepción |
| T G1 Tab y foco | Automatizado parcial | L recorre, vuelve con Shift+Tab, activa con Espacio y sale a body | Foco visual humano y otros navegadores pendientes |
| Acción/status compartidos; contrato APG Button heredado | Automatizado | L confirma y conserva foco; suite 3.2/4.1 conserva Enter/Espacio/puntero, envío cancelado, IDs, status previo y relación | No se acredita anuncio por AT ni navegación por aria-controls |
| T G2/G3 propósito/rol/gestos y teclado virtual | Manual | Matriz de escritorio/móvil/voz | No ejecutado |
| T Group hints/errors/fieldset; State required/disabled/readonly | No aplicable | Un campo opcional, sin grupo, ayuda asociada, error ni validación | No extrapolar a formulario complejo ni campo obligatorio |
| H custom/complex headings; I inline SVG/animación/imagen de texto/funcional | No aplicable | Encabezados de texto nativos y archivo SVG estático en img | No se implementan ni enseñan esas variantes |
| I decorativa | No aplicable al ejemplo nuevo | Concepto recordado en slide; variante y tests de 3.2 conservados | Su omisión real con AT sigue pendiente heredada |
| Reglas axe | Automatizado | C solución limpia; L solución inicial/final limpia y barrera con regla label | No se impone detección automática de calidad del alt ni se simula FastPass |
| Slides y registro | Automatizado | S: 13 títulos/axe, 11 lecciones en orden, delta desde índice 47, guion 1:1, 240/240/120 s y cuatro destinos de stories | La suma de tiempos no demuestra ensayo ni navegabilidad del reproductor con AT |
| Enlaces HTML de slides | Automatizado parcial / manual | S consulta enlaces y destinos locales; investigación verifica fichas públicas | No garantiza uptime ni acceso al contenido de pago; teclado/AT real del deck pendiente |
| Bookmarklets/extension | Manual / asistido | Registro de herramientas abajo | DOM/axe de demos no acredita instalación ni ejecución externa |

No se detectan hallazgos nuevos bloqueantes en esta pasada; se conservan todas las
brechas manuales. Los cuatro tests de ejemplos se escribieron antes de los wrappers:
fallaron por importaciones inexistentes y pasaron al implementar. La prueba del
registro falló al faltar 5.1/5.2/5.3 y pasó al integrarlas. El primer intento de tests
requirió instalar dependencias con el lockfile, sin cambios de versiones del repo.

## Auditoría de documentación

| Afirmación / fuente | Contraste independiente | Resultado y límite |
| --- | --- | --- |
| Bookmarklet / Paul Adam fichas y código fijado | Diferencia URL de ficha y enlace javascript; guardar→abrir objetivo→ejecutar→recargar | Scripts externos y bloqueos explícitos; no afirma instalación real |
| Jerarquía / WAI-WCAG-HTML-Magenta H | Relación sección/subsección invertida frente a niveles nativos correctos | No convierte todo salto ni cantidad de h1 en requisito universal WCAG |
| Alternativa / WAI-Magenta I | Distingue presencia, vacío, ausencia y calidad contextual | Verde no significa aprobación; no copia apariencia exacta del borde |
| Label / WAI-HTML-HTML-AAM-Magenta T | Etiqueta visible persistente, for/id; barrera sin nombre de respaldo | No dice que placeholder implique siempre silencio o fallo automático |
| FastPass / guía oficial | Regla→instancia→resaltado→corrección→nueva página y análisis; Tab stops con recorrido y juicio | Extensión no ejecutada. Guion es procedimiento previsto, no informe de éxito |
| Automatizado vs manual / FastPass, APG | Needs review, AT y personas; cero fallos no garantiza accesibilidad | No equipara axe/JSDOM con extensión, AT o auditoría exhaustiva |
| Continuación / catálogo y fichas weAAAre | Conserva nombres de #6 y enlaza títulos reales; recursos WAI identificados como apoyo | Formularios curso y Data Display no verificados; taller pasado no sustituye curso |
| Narrativa / #6 | 5/5/3 slides y apartados, demo enlazada donde se abre, última slide recursos sin demo nueva | Ensayo y revisión visual humana pendientes |

## Validaciones ejecutadas

- `pnpm test`: **114 tests / 13 archivos**, 22 nuevos y 92 heredados.
- `pnpm lint`: pasa, sin advertencias propias.
- `pnpm build`: TypeScript + Vite pasan.
- `pnpm build-storybook`: pasa; índice con **17 stories**, cuatro nuevas.
- `git diff --check`: pasa.

Node local 25.2.1; pnpm 10.26.1; versiones resueltas por lockfile (React 19.3.0,
Vitest 3.2.7, Storybook 8.6.18). Avisos de dependencias: eval/tamaño de chunks y
Node DEP0190; servidor Storybook avisa desajuste addon-essentials 8.6.14/8.6.18.
No se han cambiado dependencias ni config para silenciar esos avisos.

## Revisión técnica de superficies

Navegador integrado de Codex, macOS, **1280 × 720**, sin capturas. Se renderizaron
las 13 slides nuevas en orden (posiciones 49–61) y se midieron bloques/enlaces/código
contra el lienzo Reveal: sin recortes ni solapamientos. Se construyeron ambos sitios.
Las 13 stories que usan ActivityPage (cinco de módulo 3, cuatro de módulo 4, cuatro
nuevas) se renderizaron: sin desbordamiento horizontal, imágenes cargadas y las
regiones/etapas conservadas. Las soluciones tienen un main; la barrera heredada de
estructura conserva su ausencia deliberada. Esto no constituye aprobación visual humana.

En la solución 5.2 se realizó con CUA el recorrido real de cinco paradas: enlaces
Sobre la actividad, Inscripción, Información práctica, campo y botón. Shift+Tab
regresó al campo; escribir Ana, Tab y Espacio mostró la confirmación de prueba,
conservando foco en el botón. Tab permitió salir (activeElement pasó a body).
Contorno computado en cada parada: azul rgb(0,79,196), 3 px, separación 4 px.
No acredita percepción humana, voz, lectura real ni Tab stops de la extensión.
Los colores/contrastes del shared son los ya registrados en módulos 3/4, sin CSS nuevo.
Versión exacta del navegador integrado no registrada; no se infiere de los tests.

Slides: `http://localhost:5180`; Storybook: `http://localhost:6010`. El 5177 estaba
ocupado y no se detuvo el servicio ajeno. Rutas y posiciones en el [mapa](README.md).
Todas las rutas locales enlazadas desde las slides apuntan a stories del índice.

## Ejecución real de herramientas

**Bookmarklets:** enlaces javascript oficiales ejecutados mediante clic en sus
fichas, 2026-10-09, navegador integrado. Headings añadió anotaciones h1–h6; Images
mostró alt vacío, valores y NO ALT en la página de pruebas del autor. El botón
Show Headings no produjo anotaciones y su script DOM apuntaba a HTTP; el enlace
instalable HTTPS sí funcionó. **Guardado en la barra y ejecución sobre nuestra
actividad local: pendientes**, no realizados mediante esa comprobación de la ficha.

**Accessibility Insights:** no ejecutado. CUA rechazó `chrome://extensions/` por
política de URL al intentar comprobar la extensión instalada, prohibiendo rodeos.
Se respetó el bloqueo. Instalación/versión y resultados reales FastPass/Tab stops
no acreditados. El README 5.2 conserva pasos y plantilla de registro para una sesión
humana; los tests axe son evidencia diferente.

**Pendientes:** revisión visual final del autor, ensayo 4/4/2 min y 60 min del curso,
AT escritorio/móvil, voz, zoom/reflujo y teclado humano entre navegadores. Ninguno
se marca completo por pasar los builds. El dictamen externo se registra por SHA en
la PR. No se fusiona ni se cierra la issue madre #1.
