# Interfaces compartidas de la actividad

`activity.ts` exporta `activity`: título, descripción e información práctica
estables del hilo conductor. Los escenarios de cada módulo deciden la estructura.

`RegistrationAction.tsx` conserva la acción simulada del módulo 2 y su confirmación.
Props: `barrier` (span deliberadamente sin teclado), `unavailable` (disabled nativo),
`onRegister` (callback sin datos), `type` (`button` por defecto, `submit` dentro del
formulario del módulo 3) y `actionLabel` (`Inscribirme` por defecto). No combinar
barrier con unavailable. Al usar submit, el formulario anfitrión debe interceptar
el envío de la demo; la acción no recibe ni guarda campos. `useId` mantiene únicas
la relación aria-controls y la descripción de indisponibilidad. La región status
existe antes de actualizarse, conserva el nodo y usa aria-atomic. No garantiza
anuncios ni navegación por aria-controls en todas las tecnologías de apoyo.

`activity-registration.css` mantiene los estilos originales del escenario y del
botón. La extracción no cambia las stories ni el contrato público de las lecciones
2.1/2.2. Sus tests co-localizados siguen verificando la acción original y el estado
cerrado; 3.2 verifica la integración submit, los nombres y el campo. Contrato de
botón/status en [investigación del módulo 2](../../../docs/research/02-entender-la-accesibilidad.md).

## Página completa compartida desde el módulo 4

`ActivityPage.tsx`, `activity-page.css` y `activity.svg` se trasladan aquí desde
el shared del módulo 3 para mantener una única implementación. La ilustración
original y las etapas anteriores conservan comportamiento y apariencia.

API: `stage: 'structure' | 'content'`, `barrier`, `decorative` y `onRegister`
conservan su contrato. `variantLabel?: string` sustituye el rótulo didáctico;
`notice?: ReactNode` inserta contenido después de Información práctica y antes
de Inscripción, dentro del main. El llamador aporta semántica y estilos propios
de ese aviso. Sin estas props las stories 3.1/3.2 siguen idénticas. Montar una
página por documento con `pageLayout: true` en Storybook para evitar main anidado.

4.1 compone la página con un contenedor que solo oculta el foco en el
contraejemplo. 4.2 añade una lista de dos turnos y un aviso adaptable o recortado.
El formulario compartido mantiene un único campo opcional, envío interceptado
y confirmación de prueba; el aviso no cambia la acción ni envía datos.
