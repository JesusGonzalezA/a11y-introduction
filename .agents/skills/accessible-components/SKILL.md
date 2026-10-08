---
name: accessible-components
description: Use when creating, implementing, documenting, or reviewing an accessible web component or interaction pattern, especially when the component needs ARIA roles, keyboard behavior, screen-reader semantics, or accessibility tests. Consult WAI-ARIA APG for the pattern and MagentaA11y for component criteria and Gherkin acceptance criteria. Require a working component plus Vitest, React Testing Library, user-event, and axe-core tests when the project uses React.
---

# Accessible Components

Construye componentes accesibles a partir de una especificación verificable. La salida no es solo código: debe incluir la explicación del patrón, el componente y pruebas que demuestren semántica, interacción y criterios de accesibilidad.

## Fuentes normativas

Usa siempre estas fuentes para el componente solicitado:

- WAI-ARIA APG: `https://www.w3.org/WAI/ARIA/apg/patterns/`
- MagentaA11y: `https://www.magentaa11y.com/`

Para cada componente, localiza la página concreta del patrón APG y la página concreta de criterios de MagentaA11y. No inventes roles, estados, propiedades ni teclas. Si una fuente no define una conducta, conserva la semántica nativa y sigue las convenciones del repositorio.

Cuando las fuentes parezcan discrepar:

1. Prioriza el elemento HTML nativo cuando proporciona la semántica y la interacción necesarias.
2. Usa APG para el patrón de interacción ARIA.
3. Usa MagentaA11y para criterios de aceptación y escenarios de prueba.
4. Documenta la decisión y la diferencia en la explicación del patrón.

## Modo revisión

Cuando la petición sea **revisar** o **auditar** un componente, su documentación o
sus tests, realiza una pasada independiente y entrega hallazgos; aplica correcciones
solo cuando también se soliciten.

1. Extrae de nuevo el contrato desde las páginas concretas de HTML, HTML-AAM, W3C,
   APG y MagentaA11y aplicables. La implementación, los tests y la documentación no
   son fuente para decidir qué exige el patrón.
2. Revisa por separado:
   - tests: rol, nombre, relaciones, atributos funcionales, estados, foco, teclado,
     transiciones y estados de axe;
   - documentación: afirmaciones normativas, alcance, criterios MagentaA11y,
     clasificación automatizada/manual/no aplicable y límites de cada evidencia.
3. Cruza ambas revisiones en una matriz con **criterio**, **fuente enlazada**,
   **clasificación**, **evidencia concreta** y **brecha**. Distingue lo que el DOM
   demuestra de lo que requiere navegador, dispositivo o tecnología de asistencia.
4. Contrasta las propiedades ARIA usadas con `aria-patterns`, incluida su realidad de
   soporte. Una propiedad presente en el DOM no demuestra por sí sola que el cambio
   de estado se anuncie en todas las combinaciones de navegador y lector de pantalla.
5. Presenta primero los hallazgos ordenados por severidad y con archivo y línea. Si
   no hay hallazgos, declara qué fuentes y criterios se comprobaron y qué validación
   manual sigue pendiente.

La revisión termina cuando cada criterio aplicable tiene una fuente y una evidencia,
cada criterio manual o no aplicable tiene una justificación, y ninguna afirmación de
la documentación atribuye a los tests más de lo que realmente prueban.

## Flujo obligatorio

Usa este flujo completo al construir o modificar el patrón. Para una revisión aislada,
usa el modo anterior y ejecuta solo las validaciones necesarias para comprobar los
hallazgos.

### 1. Inspeccionar el proyecto

Identifica antes de editar:

- framework y versión;
- comandos de test, lint y typecheck;
- ubicación y convención de componentes;
- configuración de Vitest, Testing Library y `jest-axe` o `axe-core`;
- estrategia existente para estilos, nombres accesibles y estados.

Reutiliza las dependencias y patrones locales. Instala una dependencia solo si el proyecto no ofrece una alternativa razonable y deja la configuración necesaria funcionando.

### 2. Extraer el contrato del patrón

Crea una matriz de cobertura para el componente concreto con:

- elemento nativo recomendado;
- rol accesible esperado;
- nombre accesible y cómo se obtiene;
- estados y propiedades ARIA aplicables;
- relación con otros elementos, si existe;
- comportamiento de foco;
- teclas y resultado de cada interacción;
- comportamiento con lector de pantalla;
- casos disabled, expanded, pressed, selected, invalid u otros estados relevantes;
- criterios Gherkin exactos de MagentaA11y.

Clasifica cada criterio como **automatizado**, **manual** o **no aplicable**. Para los
automatizados, anota el test que aporta la evidencia; para los manuales, la combinación
de navegador, teclado o tecnología de asistencia necesaria; para los no aplicables,
la razón basada en la API y el alcance explícito del componente. Si el Gherkin exige
una capacidad que el componente no ofrece, amplía el contrato o declara el límite: no
presentes una cobertura parcial como conformidad con toda la página de MagentaA11y.

Conserva el texto de los criterios Gherkin en la documentación cercana, enlaza las dos
fuentes consultadas y usa la matriz como inventario exhaustivo antes de escribir tests.

### 3. Escribir primero las pruebas

Antes de implementar, escribe pruebas que fallen para el comportamiento esencial. En React usa:

- Vitest;
- `@testing-library/react`;
- `@testing-library/user-event` para interacciones reales;
- `jest-axe` con `axe-core` para el análisis automático, si el proyecto ya usa ese adaptador.

Si el repositorio usa otra integración de axe, respétala y no introduzcas una segunda API sin necesidad.

Cada componente debe tener, como mínimo, pruebas para:

1. **Semántica y nombre**
   - localizar el elemento con `getByRole` y el nombre accesible esperado;
   - verificar el rol nativo o ARIA expuesto;
   - comprobar que la etiqueta o texto que proporciona el nombre es visible y
     persistente cuando el patrón lo exige;
   - verificar relaciones nativas como `label[for]`/`id` y atributos funcionales
     como `type` o `autocomplete` cuando formen parte del contrato;
   - comprobar estados mediante opciones de Testing Library como `pressed`, `expanded`, `selected`, `checked` o `disabled` cuando correspondan;
   - comprobar relaciones relevantes con `aria-controls`, `aria-describedby`, `aria-labelledby` u otras propiedades.

2. **Teclado e interacción**
   - mover el foco con `userEvent.tab()` cuando el componente sea enfocable;
   - probar cada tecla exigida por APG o MagentaA11y;
   - probar activación con teclado y puntero cuando ambas correspondan;
   - comprobar que la acción observable ocurre una sola vez por interacción;
   - comprobar que el foco queda en el lugar definido por el patrón;
   - probar estados inicial, de transición y final.

3. **Gherkin de MagentaA11y**
   - convertir cada escenario o criterio aplicable en una expectativa ejecutable;
   - usar los roles y nombres accesibles reales, no selectores CSS frágiles;
   - escribir los nombres de test en español y describir el comportamiento, sin
     incluir el nombre de la fuente;
   - conservar el criterio original y su enlace en la documentación cercana;
   - cubrir explícitamente nombre, rol, grupo o popup y estado cuando MagentaA11y los exija.

4. **axe-core**
   - renderizar el estado representativo y ejecutar `axe`;
   - esperar `toHaveNoViolations()`;
   - añadir estados relevantes que puedan cambiar el árbol accesible si el estado inicial no los cubre;
   - tratar un fallo de axe como fallo del contrato, no como un snapshot que se actualiza sin investigar.

`axe-core` en JSDOM no demuestra contraste, aspecto del foco, anuncios reales ni
gestos móviles. Valida el contraste de límites e indicadores con colores calculados o
un navegador real, inspecciona visualmente el foco y reserva los anuncios y gestos para
la matriz manual. Un resultado limpio de axe es una evidencia más, no una declaración
de conformidad completa.

### 4. Implementar el componente

Implementa la solución mínima que satisface las pruebas y el patrón:

- empieza por HTML semántico nativo;
- añade ARIA solo cuando expresa una semántica o estado que el HTML no cubre;
- proporciona siempre un nombre accesible claro;
- mantiene el foco visible y el orden de foco lógico;
- no simula controles nativos con `div` o `span` si un elemento nativo sirve;
- sincroniza el estado visual, el estado DOM y el estado ARIA;
- soporta disabled, error, loading y otros estados solo cuando forman parte del contrato;
- no elimina el control del árbol accesible para resolver un problema visual;
- preserva la API pública y las convenciones del proyecto.
- nombra el componente por su propósito o patrón, sin prefijos de cualidad como
  `Accessible` o `A11y`.

Para componentes controlados y no controlados, prueba la variante que el proyecto soporte. Para callbacks, verifica tanto la llamada como el evento que la provoca. Para contenido dinámico, verifica la relación semántica y el anuncio esperado sin afirmar texto de lector de pantalla que axe no puede validar.

### 5. Documentar el patrón

Añade documentación junto al componente o en el formato del proyecto. Debe incluir:

- propósito y cuándo usar el patrón;
- cuándo usar un elemento nativo alternativo;
- anatomía y semántica accesible;
- nombre, rol, estados, propiedades y relaciones;
- tabla de teclado e interacción;
- comportamiento de foco;
- criterios Gherkin de MagentaA11y;
- límites de lo que los tests automáticos pueden comprobar;
- enlaces a APG y MagentaA11y.

### 6. Validar y revisar

Ejecuta primero el test focalizado del componente. Después ejecuta typecheck, lint y la suite que corresponda. Revisa el resultado con esta checklist:

- [ ] La fuente APG del patrón está identificada.
- [ ] La fuente MagentaA11y del componente está identificada.
- [ ] El elemento nativo y el rol expuesto son correctos.
- [ ] El nombre accesible está probado con `getByRole`.
- [ ] Los estados y propiedades ARIA están probados.
- [ ] Las teclas indicadas por APG/MagentaA11y están probadas.
- [ ] El foco y sus cambios están probados.
- [ ] Las interacciones de usuario están simuladas con `user-event`.
- [ ] Los criterios Gherkin aplicables tienen expectativas ejecutables.
- [ ] Cada criterio de MagentaA11y está clasificado como automatizado, manual o no
      aplicable, con evidencia o justificación.
- [ ] El estado representativo pasa `axe-core`.
- [ ] El contraste de controles y foco se ha comprobado fuera de JSDOM cuando forma
      parte del criterio.
- [ ] Las comprobaciones de lector de pantalla, navegador móvil y gestos pendientes
      están enumeradas con una matriz manual concreta.
- [ ] La documentación explica el patrón y sus límites.
- [ ] Los tests, typecheck y lint pasan.

No cierres la tarea si falta un punto. Si una comprobación requiere lector de pantalla, navegador móvil o tecnología de asistencia real, indícalo como validación manual pendiente y conserva una prueba automatizada para la parte que sí sea observable en el DOM.

## Plantilla de test React

Adapta nombres, estados y criterios al componente real:

```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it, vi } from 'vitest'
import { Component } from './Component'

describe('Component', () => {
  it('expone el rol y nombre accesibles definidos por el patrón', () => {
    render(<Component />)

    expect(screen.getByRole('button', { name: /acción/i })).toBeInTheDocument()
  })

  it('cumple la interacción de teclado del patrón', async () => {
    const user = userEvent.setup()
    const onAction = vi.fn()
    render(<Component onAction={onAction} />)

    await user.tab()
    await user.keyboard('[Space]')

    expect(onAction).toHaveBeenCalledOnce()
  })

  it('refleja el estado accesible', async () => {
    const user = userEvent.setup()
    render(<Component />)
    const control = screen.getByRole('button', { name: /acción/i })

    expect(control).toHaveAttribute('aria-pressed', 'false')
    await user.click(control)
    expect(control).toHaveAttribute('aria-pressed', 'true')
  })

  it('expone el nombre, el rol y el estado esperados', () => {
    render(<Component />)

    const control = screen.getByRole('button', { name: /acción/i })
    expect(control).toBeVisible()
    expect(control).toHaveAttribute('aria-pressed', 'false')
  })

  it('no tiene violaciones detectables por axe-core', async () => {
    const { container } = render(<Component />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
```

La plantilla es orientativa: no fuerces `aria-pressed` ni un botón si el patrón real no los requiere. El test debe reflejar el contrato extraído de las fuentes y la API que realmente ofrece el componente.
