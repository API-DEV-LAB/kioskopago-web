# Especificación de Feature: [FEATURE NAME]

**Rama del Feature**: `[###-feature-name]`
**Creada**: [DATE]
**Estado**: Borrador
**Entrada**: Descripción del usuario: "$ARGUMENTS"

## Escenarios de Usuario y Testing *(obligatorio)*

<!--
  IMPORTANTE: Las historias de usuario deben PRIORIZARSE como recorridos de usuario
  ordenados por importancia. Cada historia/recorrido debe ser INDEPENDIENTEMENTE TESTEABLE
  — si se implementa solo una de ellas, debe tenerse un MVP viable que entregue valor.

  Asignar prioridades (P1, P2, P3, etc.) a cada historia, donde P1 es la más crítica.
  Pensar en cada historia como un slice independiente de funcionalidad que puede:
  - Desarrollarse de forma independiente
  - Testearse de forma independiente
  - Desplegarse de forma independiente
  - Demostrarse a usuarios de forma independiente
-->

### Historia de Usuario 1 - [Título Breve] (Prioridad: P1)

[Describir este recorrido de usuario en lenguaje sencillo]

**Por qué esta prioridad**: [Explicar el valor y por qué tiene este nivel de prioridad]

**Test Independiente**: [Describir cómo puede testearse de forma independiente — ej. "Puede testearse
completamente mediante [acción específica] y entrega [valor específico]"]

**Escenarios de Aceptación**:

1. **Dado** [estado inicial], **Cuando** [acción], **Entonces** [resultado esperado]
2. **Dado** [estado inicial], **Cuando** [acción], **Entonces** [resultado esperado]

---

### Historia de Usuario 2 - [Título Breve] (Prioridad: P2)

[Describir este recorrido de usuario en lenguaje sencillo]

**Por qué esta prioridad**: [Explicar el valor y por qué tiene este nivel de prioridad]

**Test Independiente**: [Describir cómo puede testearse de forma independiente]

**Escenarios de Aceptación**:

1. **Dado** [estado inicial], **Cuando** [acción], **Entonces** [resultado esperado]

---

### Historia de Usuario 3 - [Título Breve] (Prioridad: P3)

[Describir este recorrido de usuario en lenguaje sencillo]

**Por qué esta prioridad**: [Explicar el valor y por qué tiene este nivel de prioridad]

**Test Independiente**: [Describir cómo puede testearse de forma independiente]

**Escenarios de Aceptación**:

1. **Dado** [estado inicial], **Cuando** [acción], **Entonces** [resultado esperado]

---

[Agregar más historias de usuario según sea necesario, cada una con prioridad asignada]

### Casos Borde

<!--
  ACCIÓN REQUERIDA: El contenido de esta sección representa marcadores de posición.
  Completar con los casos borde correctos.
-->

- ¿Qué ocurre cuando [condición de límite]?
- ¿Cómo maneja el sistema [escenario de error]?

## Requerimientos *(obligatorio)*

<!--
  ACCIÓN REQUERIDA: El contenido de esta sección representa marcadores de posición.
  Completar con los requerimientos funcionales correctos.
-->

### Requerimientos Funcionales

- **RF-001**: El sistema DEBE [capacidad específica, ej. "permitir a los usuarios crear cuentas"]
- **RF-002**: El sistema DEBE [capacidad específica, ej. "validar direcciones de correo"]
- **RF-003**: Los usuarios DEBEN poder [interacción clave, ej. "restablecer su contraseña"]
- **RF-004**: El sistema DEBE [requerimiento de datos, ej. "persistir preferencias de usuario"]
- **RF-005**: El sistema DEBE [comportamiento, ej. "registrar todos los eventos de seguridad"]

*Ejemplo de marcado de requerimientos poco claros:*

- **RF-006**: El sistema DEBE autenticar usuarios mediante [NECESITA CLARIFICACIÓN: método de auth no especificado]
- **RF-007**: El sistema DEBE retener datos de usuario durante [NECESITA CLARIFICACIÓN: período de retención no especificado]

*Restricciones constitucionales a verificar en todo feature:*

- **C-RBAC**: ¿Qué roles (ADMIN / GROCER) pueden acceder a este feature? Las nuevas rutas DEBEN añadirse a `middleware.ts`.
- **C-TIPOS**: Todos los tipos de respuesta de API DEBEN tener un esquema Zod en `features/<dominio>/types/`.
- **C-ESTADO**: Datos del servidor → TanStack Query. Estado exclusivo de UI → Zustand. Definir el límite explícitamente.

### Entidades Clave *(incluir si el feature involucra datos)*

- **[Entidad 1]**: [Qué representa, atributos clave sin implementación]
- **[Entidad 2]**: [Qué representa, relaciones con otras entidades]

## Criterios de Éxito *(obligatorio)*

<!--
  ACCIÓN REQUERIDA: Definir criterios de éxito medibles.
  Deben ser agnósticos a la tecnología y medibles.
-->

### Resultados Medibles

- **CE-001**: [Métrica medible, ej. "Los usuarios pueden completar la creación de cuenta en menos de 2 minutos"]
- **CE-002**: [Métrica medible, ej. "El sistema maneja 1000 usuarios concurrentes sin degradación"]
- **CE-003**: [Métrica de satisfacción, ej. "El 90% de los usuarios completa la tarea principal en el primer intento"]
- **CE-004**: [Métrica de negocio, ej. "Reducir tickets de soporte relacionados con [X] en un 50%"]

## Supuestos

<!--
  ACCIÓN REQUERIDA: El contenido de esta sección representa marcadores de posición.
  Completar con los supuestos correctos basados en los valores predeterminados razonables
  elegidos cuando la descripción del feature no especificó ciertos detalles.
-->

- [Supuesto sobre usuarios objetivo, ej. "Los usuarios tienen conectividad a internet estable"]
- [Supuesto sobre límites de alcance, ej. "El soporte móvil está fuera del alcance para v1"]
- [Supuesto sobre datos/entorno, ej. "Se reutilizará el sistema de autenticación existente"]
- [Dependencia de sistema/servicio existente, ej. "Requiere acceso a la API de perfil de usuario existente"]
