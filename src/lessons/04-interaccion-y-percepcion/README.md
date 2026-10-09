# Módulo 4. Permitir la interacción y la percepción

**17 minutos**, incluidas demos. [Issue #5](https://github.com/JesusGonzalezA/a11y-introduction/issues/5),
[temario #1](https://github.com/JesusGonzalezA/a11y-introduction/issues/1).
La persona debe poder inscribirse sin ratón, localizar el foco, entender la
disponibilidad y conservar la información al ampliar.

| Lección | Objetivo | Duración | Slides (portada = 1) |
| --- | --- | --- | --- |
| [4.1 Navegación por teclado y foco visible](04.01-teclado-y-foco-visible/README.md) | Recorrer, activar, localizar foco y salir | 9 min | 35–41 (`/#/34` a `/#/40`) |
| [4.2 Contraste, color y ampliación del contenido](04.02-contraste-color-y-ampliacion/README.md) | Leer estados y conservar contenido/controles al ampliar | 8 min | 42–48 (`/#/41` a `/#/47`) |

Siete slides y siete apartados de guion por lección. Tiempos nominales: 540 y 480 s.
**Ensayo cronometrado pendiente**, incluidas las demos. Herramientas de auditoría
se desarrollan en el módulo 5; aquí basta inspeccionar una pareja de colores.
No se añaden widgets ARIA compuestos, validación, backend ni datos persistentes.

## Ejecutar y revisar

Desde la raíz: `pnpm install --frozen-lockfile`. Puertos propios de esta sesión:

```bash
VITE_STORYBOOK_URL=http://localhost:6009 pnpm dev --host 127.0.0.1 --port 5176 --strictPort
pnpm storybook --host 127.0.0.1 --port 6009 --ci
```

Slides en <http://localhost:5176/#/34>; Storybook en <http://localhost:6009>.
Los valores habituales sin opciones son 5173/6006. `VITE_STORYBOOK_URL` configura
los enlaces de las slides. Cada demo usa documento aislado y `pageLayout: true`.

| Superficie | Ruta desde Storybook |
| --- | --- |
| 4.1 Contraejemplo deliberado: foco oculto | `/iframe.html?id=m4-focus-registration--contraejemplo&viewMode=story` |
| 4.1 Solución: foco visible | `/iframe.html?id=m4-focus-registration--solucion&viewMode=story` |
| 4.2 Contraejemplo deliberado: color, contraste y recorte | `/iframe.html?id=m4-perception-registration--contraejemplo&viewMode=story` |
| 4.2 Solución: texto y reflujo | `/iframe.html?id=m4-perception-registration--solucion&viewMode=story` |

## Continuidad y límites

[Interfaces compartidas](../shared/README.md): ActivityPage, RegistrationAction y
activity. ActivityPage y sus assets se trasladan del módulo 3 al shared común;
las APIs originales conservan su resultado. Se añaden únicamente `notice` y
`variantLabel` opcionales para componer el módulo 4. Las nueve stories anteriores
permanecen recuperables. El formulario simula la inscripción al turno 10:00.
El aviso añade el turno 12:00 completo como comparación estática: no es selector.

Los contraejemplos están rotulados. Ocultar foco cambia solo CSS local; **no
intercepta Tab**. La trampa se explica con un fragmento no ejecutable, de modo que
el entorno sigue siendo navegable. El contraejemplo de percepción recorta solo
el aviso, mantiene el formulario fuera del recorte y omite deliberadamente las
palabras de los estados. Nunca se presenta como solución utilizable.

[Investigación previa](../../../docs/research/04-interaccion-y-percepcion.md),
[contrato y resultados auditados](audit.md). Las matrices enlazan originales
Magenta por commit y usan paráfrasis; no duplican la investigación heredada.
No se declara conformidad completa mediante axe ni mediante esta muestra.

## Matriz manual pendiente

Registrar fecha, SO, navegador/versión, configuración, recorrido y resultado.

| Entorno | Comprobación | Estado |
| --- | --- | --- |
| NVDA + Firefox/Chrome, Windows | Leer nombre/rol, editar campo, activar enlaces/botón, escuchar confirmación, salir | No ejecutado |
| VoiceOver + Safari, macOS | Igual; rotor y navegación de formulario según configuración | No ejecutado |
| VoiceOver iOS/Safari y TalkBack Android/Chrome | Gestos, teclado virtual, nombre/rol, estados y confirmación; ambas orientaciones | No ejecutado |
| Control por voz | Alcanzar y activar por nombre visible | No ejecutado |
| Chrome, Firefox y Safari con teclado humano | Tab/Shift+Tab, Enter/Espacio, foco perceptible/no tapado, salida al entorno; habilitar navegación por teclado cuando proceda | Pendiente |
| Zoom real de navegador, 100→200% y 1280 al 400% | Texto legible, aviso completo, formulario operable y sin pérdida; pasos intermedios | Pendiente; no sustituir con zoom CSS |
| Autor humano | Revisión visual final de 4 stories y 14 slides, colores/foco/legibilidad y ensayo 9 + 8 min | Pendiente |

La revisión técnica de navegador y reflujo a 320 CSS px se registra en audit.md;
no equivale a zoom real, percepción humana ni anuncios de AT.
